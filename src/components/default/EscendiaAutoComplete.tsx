import { uuidv4 } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { InteractionManager, NativeSyntheticEvent } from "react-native";
import { TextInput } from "react-native";
import { TextInputSubmitEditingEventData } from "react-native";
import { TextInputKeyPressEventData } from "react-native";
import { SafeAreaView, Text, Dimensions } from "react-native";
import { Button, TextInput as Input } from "react-native-paper";
import { colors } from "../../services/styling/styles";
import SelectBox from "react-native-multi-selectbox";
import { t } from "i18next";
import { find, xorBy } from "lodash";

interface EscendiaAutoCompleteProps {
  values?: any[];
  disabled?: boolean | undefined;
  editable?: boolean | undefined;
  placeholder?: string | undefined;
  options: any[];
  onSelect?: ((e: any[]) => void) | undefined;
  isMulti?: boolean | undefined;
  optionNameValue: string;
  optionNameId: string;
  noOptionsText?: boolean | undefined;
  hideFilter?: boolean | undefined;
  listOptionProps?: Object | undefined;
}

const EscendiaAutoComplete = ({
  values,
  disabled,
  editable,
  placeholder,
  options,
  onSelect,
  isMulti,
  optionNameValue,
  optionNameId,
  noOptionsText,
  hideFilter,
  listOptionProps,
}: EscendiaAutoCompleteProps) => {
  const [selectedComponentItems, setSelectedComponentItems] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [componentOptions, setComponentOptions] = useState([]);

  const [isDisabled, setIsDisabled] = useState(disabled);
  const [isEditable, setIsEditable] = useState(true);

  const [valuesForEdit, setValuesForEdit] = useState(values);
  const [key, setKey] = useState(uuidv4());
  const [ref, setRef] = useState(React.createRef<TextInput>());

  useEffect(() => {
    if (disabled === undefined && editable === undefined) {
      setIsDisabled(false);
    }

    if (disabled === undefined && editable !== undefined) {
      setIsDisabled(true);
    }

    if (disabled === false && editable === true) {
      setIsEditable(false);
    }
  }, []);

  useEffect(() => {
    setValuesForEdit(values);
  }, [values]);

  useEffect(() => {
    if (options && options.length > 0) {
      if (options.length !== componentOptions.length) {
        //Generate Options
        let tmpArray = options.map((obj) => {
          let rObj = { id: null, item: null };
          let id = obj[optionNameId];
          let value: any = obj[optionNameValue];

          if (
            id === undefined ||
            id === null ||
            value === null ||
            value === undefined
          )
            return;

          rObj.id = id;
          rObj.item = value.toString();

          return rObj;
        });

        if (tmpArray === undefined) tmpArray = [];
        //Generate Selected Options from values
        let tmpSelectedArray = [];

        if (values) {
          if (selectedOptions.length !== values.length) {
            if (isMulti) {
              tmpSelectedArray = values.map((obj) => {
                let rObj = { id: null, item: null };
                let id = obj[optionNameId];
                let value = obj[optionNameValue];

                if (
                  id === undefined ||
                  id === null ||
                  value === null ||
                  value === undefined
                )
                  return;

                rObj.id = id;
                rObj.item = value.toString();

                return rObj;
              });
            } else {
              let rObj = { id: null, item: null };
              let id = values[optionNameId];
              let value = values[optionNameValue];
              rObj.id = id;
              rObj.item = value.toString();
              tmpSelectedArray.push(rObj);
            }
            if (tmpSelectedArray === undefined) tmpSelectedArray = [];
          } else {
            tmpSelectedArray = [];
          }
        }

        setComponentOptions(tmpArray);
        setSelectedComponentItems(tmpSelectedArray);
      } else {
        if (!values) {
          if (selectedComponentItems.length > 0) setSelectedComponentItems([]);
        }
      }
    }
  }, [
    options,
    values,
    selectedOptions,
    selectedComponentItems,
    componentOptions,
  ]);

  function onMultiChange(item) {
    let singleValue = [];
    singleValue = find(options, { [optionNameId]: item.id });
    let arrayRealValue = [];
    arrayRealValue = xorBy(selectedOptions, [singleValue], optionNameId);

    //Array
    if (isMulti) {
      let arrayValue = xorBy(selectedComponentItems, [item], "id");

      setSelectedComponentItems(arrayValue);
      setSelectedOptions(arrayRealValue);
    } else {
      //Single
      setSelectedComponentItems([item]);
      setSelectedOptions([singleValue]);
    }

    if (onSelect) {
      if (isMulti) {
        onSelect(arrayRealValue);
      } else {
        onSelect(singleValue);
      }
    }
  }
  /*    Zwischenstand erstmal... */
  return (
    <SafeAreaView>
      {options ? (
        <SelectBox
          searchInputProps={{
            placeholderTextColor: colors.escendia_dark,
            outlineColor: "transparent",
            selectionColor: "transparent",
            disabled: false,
            style: {
              paddingVertical: 14,
              paddingRight: 8,
              color: colors.escendia_dark,
              fontSize: 12,
              flexGrow: 1,
            },
          }}
          arrowIconColor={colors.escendia_light}
          searchIconColor={colors.escendia_dark}
          toggleIconColor={colors.escendia_dark}
          inputPlaceholder={
            placeholder || t("EscendiaAutoComplete.Placeholder")
          }
          listEmptyText={t("EscendiaAutoComplete.EmptyList")}
          hideInputFilter={
            componentOptions.length === 0 || hideFilter ? true : false
          }
          label=""
          labelStyle={{ height: 0 }}
          containerStyle={{
            backgroundColor: colors.escendia_dark,
          }}
          inputFilterContainerStyle={{
            backgroundColor: colors.escendia_light,
            paddingLeft: 10,
            paddingTop: 5,
          }}
          inputFilterStyle={{
            backgroundColor: colors.escendia_light,
            borderWith: 0,
          }}
          optionsLabelStyle={{ backgroundColor: colors.escendia_light }}
          optionContainerStyle={{
            backgroundColor: colors.escendia_light,
            padding: 10,
          }}
          multiOptionContainerStyle={{
            backgroundColor: colors.escendia_light,
          }}
          multiOptionsLabelStyle={{
            color: colors.escendia_dark,
          }}
          multiListEmptyLabelStyle={{ color: colors.escendia_light }}
          listEmptyLabelStyle={{
            color: colors.escendia_light,
          }}
          listOptionProps={listOptionProps}
          selectedItemStyle={{}}
          options={componentOptions || []}
          selectedValues={selectedComponentItems}
          onChange={(item) => onMultiChange(item)}
          onMultiSelect={(item) => onMultiChange(item)}
          onTapClose={(item) => onMultiChange(item)}
          value={
            selectedComponentItems.length === 0 ? {} : selectedComponentItems[0]
          }
          isMulti={isMulti || false}
        />
      ) : (
        <Text>{noOptionsText || t("EscendiaAutoComplete.NoOptions")}</Text>
      )}
    </SafeAreaView>
  );
};

export default EscendiaAutoComplete;
