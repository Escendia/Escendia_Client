import EscendiaButton from "@components/default/EscendiaButton";
import EscendiaModal from "@components/default/EscendiaModal";
import EscendiaText from "@components/default/EscendiaText";
import { colors } from "@services/styling/styles";
import { t } from "i18next";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { uuidv4 } from "@firebase/util";
import EscendiaIcon from "@components/default/EscendiaIcon";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  useRowSelect,
  useColumnOrder,
} from "react-table";
import EscendiaCheckBox from "@components/default/EscendiaCheckBox";
import { useTranslation } from "react-i18next";
import EscendiaInput from "@components/default/EscendiaInput";
import { calculate } from "@services/functions";
import { min } from "react-native-reanimated";
import DefaulFilter from "./filter/DefaultFilter";

interface EscendiaTableProps {
  data?: Array<any>;
  columns: Array<any>;
  showFilter?: boolean;
  showSettings?: boolean;
}

interface EscendiaTableBodyProps {
  data?: Array<any>;
  columns?: Array<any>;
  selectionWidth: number;
}

const EscendiaTableFilterModal = ({
  rows,
  headerGroups,
  showFilter,
  setShowFilter,
  setAllFilters,
}) => {
  return (
    <EscendiaModal
      title={t("EscendiaTable_Filter_Title")}
      modalState={showFilter}
      onClose={() => setShowFilter(false)}
    >
      <View
        key={"Escendia.Filter.Screen.HeaderView"}
        style={{
          width: "100%",
        }}
      >
        <View
          key={"Escendia.Filter.Screen.Header"}
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.escendia_dark,
          }}
        >
          <View
            key={"Escendia.Filter.Screen.Header.Row"}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable
              style={{ paddingRight: 10 }}
              onPress={() => setAllFilters([])}
            >
              <EscendiaIcon
                type="MaterialCommunity"
                //
                name={"filter-remove"}
              />
            </Pressable>
            <EscendiaText
              key={"Escendia.Filter.Screen.Header.Amount"}
              style={{ color: "white", fontWeight: "bold" }}
            >
              {t("EscendiaTable_Filter_Amount", { amount: rows.length })}
            </EscendiaText>
          </View>
        </View>
        {headerGroups.map((headerGroup) => {
          return headerGroup.headers.map((column, index) => {
            let headerProps = column.getHeaderProps(
              column.getSortByToggleProps()
            );
            if (!column.canFilter || !column.isVisible) return undefined;
            return (
              <View
                key={headerProps.key + "Escendia.Filter.Element.View"}
                style={{
                  flexDirection: "row",
                  width: "100%",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                }}
              >
                <View
                  style={{ width: "100%" }}
                  key={headerProps.key + "Escendia.Filter.Element.Row"}
                >
                  <EscendiaText
                    key={headerProps.key + "Escendia.Filter.Element.Row.Text"}
                    style={{
                      paddingLeft: 5,
                      paddingTop: 5,
                      fontWeight: "bold",
                      fontSize: 20,
                      textDecorationLine: "underline",
                    }}
                  >
                    {t("EscendiaTable_Filter_Header", {
                      name: t(column.id),
                    })}
                  </EscendiaText>
                  {column.render("Filter")}
                </View>
              </View>
            );
          });
        })}
      </View>
    </EscendiaModal>
  );
};

const EscendiaTableSettingsModal = ({
  columnOrder,
  setColumnOrder,
  allColumns,
  showSettings,
  setShowSettings,
  getToggleHideAllColumnsProps,
}) => {
  /**
   * Functio to swtich the elements
   * @param {*} id
   * @param {*} index
   * @param {*} type
   */
  function onColumnChange(id, type) {
    let tmpColumns =
      columnOrder[0] === undefined
        ? allColumns
            .filter((column) => column.canFilter && column.id !== "selection")
            .map((column) => column.id)
        : [...columnOrder];

    let index = tmpColumns.indexOf(id);
    let oldIndex = index;

    switch (type) {
      case "up": {
        oldIndex--;
        break;
      }
      case "down": {
        oldIndex++;
        break;
      }
      default: {
      }
    }
    let indexValue = tmpColumns[index];
    let oldIndexValue = tmpColumns[oldIndex];
    tmpColumns[index] = oldIndexValue;
    tmpColumns[oldIndex] = indexValue;
    setColumnOrder(tmpColumns);
  }

  return (
    <EscendiaModal
      title={t("EscendiaTable_Settings_Title")}
      modalState={showSettings}
      onClose={() => setShowSettings(false)}
    >
      {allColumns
        .filter((column) => column.canFilter && column.id !== "selection")
        .map((column, index, array) => {
          return (
            <View
              key={column.id + "_" + "Settings.View"}
              style={{
                flexDirection: "row",
                //width: "100%",
                borderBottomColor: "black",
                borderBottomWidth: 1,
                //paddingTop: 10,
                //paddingBottom: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={column.id + "_" + "Settings.Header"}
              >
                <EscendiaCheckBox
                  value={column.getToggleHiddenProps().checked}
                  onPress={(value) =>
                    column.getToggleHiddenProps().onChange({
                      target: {
                        checked: value,
                      },
                    })
                  }
                />
                <Pressable
                  disabled={index === 0 ? true : false}
                  onPress={() => onColumnChange(column.id, "up")}
                >
                  <EscendiaIcon
                    color={index === 0 ? "grey" : colors.escendia_dark}
                    size={30}
                    type={"MaterialCommunity"}
                    name={"arrow-up"}
                  />
                </Pressable>
                <Pressable
                  disabled={array.length === index + 1 ? true : false}
                  onPress={() => onColumnChange(column.id, "down")}
                >
                  <EscendiaIcon
                    color={
                      array.length === index + 1 ? "grey" : colors.escendia_dark
                    }
                    size={30}
                    type={"MaterialCommunity"}
                    name={"arrow-down"}
                  />
                </Pressable>
                <EscendiaText
                  key={column.id + "_" + "Settings.Header.Text"}
                  style={{
                    //paddingLeft: 10,
                    fontWeight: "bold",
                    fontSize: 30,
                  }}
                >
                  {t("EscendiaTable_Filter_Header", {
                    name: t(column.id),
                  })}
                </EscendiaText>
              </View>
            </View>
          );
        })}
    </EscendiaModal>
  );
};

const EscendiaTableHeader = ({
  columnOrder,
  setColumnOrder,
  allColumns,
  page,
  globalFilter,
  setGlobalFilter,
  getToggleHideAllColumnsProps,
  headerGroups,
  rows,
  setAllFilters,
}) => {
  const [key, setKey] = useState(uuidv4());

  const [showFilter, setShowFilter] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <View
      key={"EscendiaTableHeader"}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "black",
        borderTopWidth: 1,
        backgroundColor: colors.escendia_text_background,
      }}
    >
      <EscendiaTableSettingsModal
        getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
        columnOrder={columnOrder}
        setColumnOrder={setColumnOrder}
        allColumns={allColumns}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
      <EscendiaTableFilterModal
        setAllFilters={setAllFilters}
        headerGroups={headerGroups}
        rows={rows}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
      />
      <View
        key={"EscendiaTableHeader_Left"}
        style={{ alignItems: "flex-start", paddingLeft: 10 }}
      >
        <Pressable
          disabled={showSettings || page.length === 0 ? true : false}
          onPress={() => setShowFilter(!showFilter)}
        >
          <EscendiaIcon
            color={colors.escendia_dark}
            type="MaterialCommunity"
            size={30}
            name={!showFilter ? "playlist-edit" : "content-save"}
            //
          />
        </Pressable>
      </View>
      <View
        key={"EscendiaTableHeader_Middle"}
        style={{ flex: 1, alignItems: "center" }}
      >
        <EscendiaInput
          contentStyle={{ padding: 0 }}
          outlineStyle={{ borderWidth: 0 }}
          textColor={colors.escendia_dark}
          disabled={false}
          value={globalFilter || ""}
          onChangeText={(text) => {
            setGlobalFilter(text);
          }}
          placeholder={t("EscendiaTable_Placeholder_Search")}
        />
      </View>
      <View
        key={"EscendiaTableHeader_Right"}
        style={{ alignItems: "flex-end", paddingRight: 10 }}
      >
        <Pressable
          disabled={showFilter || page.length === 0 ? true : false}
          onPress={() => setShowSettings(!showSettings)}
        >
          <EscendiaIcon
            size={30}
            color={colors.escendia_dark}
            //
            type="MaterialCommunity"
            name={!showSettings ? "settings-helper" : "content-save"}
            //
          />
        </Pressable>
      </View>
    </View>
  );
};

const EscendiaTablePagination = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  pageIndex,
  pageOptions,
  canNextPage,
  nextPage,
  pageCount,
}) => {
  const [key, setKey] = useState(uuidv4());

  return (
    <View
      key={"EscendiaTablePagination"}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        borderTopColor: "black",
        borderTopWidth: 1,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        backgroundColor: colors.escendia_text_background,
      }}
    >
      <Pressable
        style={{ paddingRight: 10 }}
        onPress={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        <EscendiaIcon
          color={canPreviousPage ? colors.escendia_dark : "grey"}
          type={"MaterialCommunity"}
          name="arrow-collapse-left"
          size={20}
        />
      </Pressable>
      <Pressable
        style={{ paddingRight: 10 }}
        onPress={() => previousPage()}
        disabled={!canPreviousPage}
      >
        <EscendiaIcon
          color={canPreviousPage ? colors.escendia_dark : "grey"}
          type={"MaterialCommunity"}
          name="arrow-left"
          size={20}
        />
      </Pressable>
      <EscendiaText color={colors.escendia_dark}>
        {t("Table_Pagination_Title", {
          from: pageIndex + 1,
          to: pageOptions.length,
        })}
      </EscendiaText>
      <Pressable
        style={{ paddingLeft: 10 }}
        onPress={() => nextPage()}
        disabled={!canNextPage}
      >
        <EscendiaIcon
          color={canNextPage ? colors.escendia_dark : "grey"}
          type={"MaterialCommunity"}
          name="arrow-right"
          size={20}
        />
      </Pressable>
      <Pressable
        style={{ paddingLeft: 10 }}
        onPress={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        <EscendiaIcon
          color={canNextPage ? colors.escendia_dark : "grey"}
          type={"MaterialCommunity"}
          name="arrow-collapse-right"
          size={20}
        />
      </Pressable>
    </View>
  );
};

const EscendiaTableBody = ({
  selectionWidth,
  data,
  columns,
}: EscendiaTableBodyProps) => {
  useEffect(() => {
    /*     console.log("==================EscendiaTableBody==================");
    console.log(data, columns);
    console.log("===================================="); */
  }, []);

  const [usedTable, setUsedTable] = useState(null);

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaulFilter,
    }),
    []
  );

  const filterTypes = React.useMemo(
    () => ({
      dropDown: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          //console.log("rowValue", rowValue);
          if (rowValue === null && filterValue !== undefined) return false;
          return rowValue !== null &&
            rowValue !== undefined &&
            rowValue._id !== undefined &&
            rowValue._id !== null
            ? filterValue._id === rowValue._id
            : true;
        });
      },
      autoComplete: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined && Array.isArray(rowValue)
            ? rowValue.includes(filterValue)
            : true;
        });
      },
      drinkYear: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined && Array.isArray(rowValue)
            ? rowValue.filter((drinkYear) =>
                new Date(drinkYear.year).getFullYear()
              ).length > 0
            : true;
        });
      },
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    setGlobalFilter,
    setFilter,
    setAllFilters,
    preFilteredRows,
    rows,
    selectedFlatRows,
    allColumns,
    setColumnOrder,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useColumnOrder,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          disableFilters: true,
          width: selectionWidth,
          Header: ({ getToggleAllPageRowsSelectedProps }) => {
            return (
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            );
          },
          Cell: ({ row }) => {
            return (
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            );
          },
        },
        ...columns,
      ]);
    }
  );

  const IndeterminateCheckbox = React.forwardRef(
    ({ row, indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        if (resolvedRef?.current?.indeterminate !== undefined) {
          resolvedRef.current.indeterminate = indeterminate;
        }
      }, [resolvedRef, indeterminate]);

      return (
        <View
          key={"EscendiaTable.Checkbox" + row?.id}
          style={{
            justifyContent: "center",
          }}
        >
          <EscendiaCheckBox
            value={rest.checked}
            onPress={(value) =>
              rest.onChange({
                target: {
                  checked: value,
                },
              })
            }
          />
        </View>
      );
    }
  );

  const { pageIndex, pageSize, globalFilter, filters, columnOrder } = state;
  /* <EscendiaTablePagination /> */
  const [key, setKey] = useState(uuidv4());
  if (data && data.length > 0) {
    return (
      //style={{ flex: 1 }}
      <View>
        <EscendiaTableHeader
          setAllFilters={setAllFilters}
          rows={rows}
          headerGroups={headerGroups}
          getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          page={page}
          allColumns={allColumns}
          columnOrder={columnOrder}
          setColumnOrder={setColumnOrder}
        />
        <ScrollView key={"EscendiaTable_Container_" + key} horizontal>
          <View
            key={"EscendiaTable_Container_Body_" + key}
            style={{
              flex: 1,
              flexDirection: "column",
              //backgroundColor: "green",
              minWidth: Dimensions.get("window").width - 17,
            }}
          >
            <EscendiaTableBodyHeader
              selectionWidth={selectionWidth}
              headerGroups={headerGroups}
            />
            <EscendiaTableBodyContainer
              headerGroups={headerGroups}
              prepareRow={prepareRow}
              page={page}
              selectionWidth={selectionWidth}
              allColumns={allColumns}
            />
          </View>
        </ScrollView>
        <EscendiaTablePagination
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
        />
      </View>
    );
  } else {
    return <EscendiaEmptyBody />;
  }
};

const EscendiaTableBodyHeader = ({ selectionWidth, headerGroups }) => {
  const [key, setKey] = useState(uuidv4());

  return (
    <View
      key={key}
      style={{
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        backgroundColor: colors.escendia_img_background_light,
      }}
    >
      {headerGroups.map((headerGroup) => {
        return headerGroup.headers.map((column, index) => {
          let headerProps = column.getHeaderProps(
            column.getSortByToggleProps()
          );
          let mindWidth =
            column.id === "selection"
              ? selectionWidth
              : (Dimensions.get("window").width - selectionWidth - 17) /
                (headerGroup.headers.length - 1);

          let width = column.width < mindWidth ? mindWidth : column.width;

          /*           console.log(
            "HEADER",
            column.id,
            "width",
            width,
            "mindwidth",
            mindWidth,
            "cell.column.width",
            column.width,
            "headerGroup.headers.length",
            headerGroup.headers.length
          ); */

          return column.id !== "selection" ? (
            <TouchableOpacity
              style={{
                //flex: 1,
                flexDirection: "row",
                //backgroundColor: "gray",
                alignItems: "center",
                minWidth: mindWidth,
                width: width,
                //minHeight: 50,
                justifyContent: "center",
              }}
              key={"EscendiaTableBodyHeader_" + key + index}
              onPress={headerProps.onClick}
            >
              <EscendiaText key={"EscendiaTableBodyHeader_Text_" + key + index}>
                {column.render("Header")}
              </EscendiaText>
              <View
                key={"EscendiaTableBodyHeader_Sorting_" + key + index}
                //style={{ paddingLeft: 3 }}
              >
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <EscendiaIcon
                      type={"MaterialCommunity"}
                      size={20}
                      name="arrow-down"
                      color={colors.escendia_dark}
                    />
                  ) : (
                    <EscendiaIcon
                      type={"MaterialCommunity"}
                      size={20}
                      name="arrow-up"
                      color={colors.escendia_dark}
                    />
                  )
                ) : (
                  <View>
                    <EscendiaText>{""}</EscendiaText>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ) : (
            <View
              key={"EscendiaTableBodyHeader_" + key + index}
              style={{
                //flex: 1,
                //flexDirection: "row",
                alignItems: "center",
                //minWidth: mindWidth,
                //width: width,
                //minHeight: 50,
                justifyContent: "center",
              }}
            >
              <EscendiaText key={"EscendiaTableBodyHeader_Text_" + key + index}>
                {column.render("Header")}
              </EscendiaText>
            </View>
          );
        });
      })}
    </View>
  );
};

const EscendiaTableBodyContainer = ({
  headerGroups,
  prepareRow,
  page,
  selectionWidth,
  allColumns,
}) => {
  const [key, setKey] = useState(uuidv4());

  return (
    <ScrollView key={"EscendiaTableBodyContainer"}>
      {page.map((row, rowIndex) => {
        prepareRow(row);
        return (
          <TouchableOpacity
            key={"EscendiaTableBodyContainer_Row" + rowIndex}
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor:
                rowIndex % 2 === 0
                  ? colors.escendia_text_faded
                  : colors.escendia_img_background_light,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            {row.cells.map((cell, cellIndex) => {
              let cellProps = cell.getCellProps();

              let mindWidth =
                cell.column.id === "selection"
                  ? selectionWidth
                  : (Dimensions.get("window").width - selectionWidth - 17) /
                    (headerGroups[0].headers.length - 1);

              let width =
                cell.column.width < mindWidth ? mindWidth : cell.column.width;

              /*               console.log(
                "ROW",
                cell.column.id,
                "width",
                width,
                "mindwidth",
                mindWidth,
                "cell.column.width",
                cell.column.width,
                "headerGroups[0].headers.length",
                headerGroups[0].headers.length
              ); */
              return cell.column.id !== "selection" ? (
                <View
                  key={"EscendiaTableBodyContainer_Cell_" + key + cellIndex}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: mindWidth,
                    width: width,
                  }}
                >
                  <EscendiaText
                    key={
                      "EscendiaTableBodyContainer_Cell_Text" + key + cellIndex
                    }
                  >
                    {cell.render("Cell")}
                  </EscendiaText>
                </View>
              ) : (
                <View
                  key={"EscendiaTableBodyContainer_Cell_" + key + cellIndex}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    //flex: cell.column.id === "selection" ? 0 : 1,
                    //minWidth: mindWidth,
                    //width: width,
                  }}
                >
                  <EscendiaText
                    key={
                      "EscendiaTableBodyContainer_Cell_Text" + key + cellIndex
                    }
                  >
                    {cell.render("Cell")}
                  </EscendiaText>
                </View>
              );
            })}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const EscendiaEmptyBody = () => {
  const [key, setKey] = useState(uuidv4());

  return (
    <View
      key={"EscendiaTable_Body_Empty_" + key}
      style={{
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        size="large"
        animating={true}
        color={colors.escendia_light}
      />
      <EscendiaText color={colors.escendia_light} style={{ paddingTop: 20 }}>
        {t("EscendiaTable_NoValue")}
      </EscendiaText>
    </View>
  );
};

const EscendiaTable = ({
  columns,
  data,
  showFilter,
  showSettings,
  ...rest
}: EscendiaTableProps) => {
  const [key, setKey] = useState(uuidv4());

  /* Wir müssen hier erst das MEMO machen, da MEMO & Table in der gleich Ebene zu Fehler führt */
  const toData = useMemo(() => data, [data]);
  const toColumns = useMemo(() => columns, [columns]);
  const selectionWidth = calculate("none", 60, 60);

  return (
    <View key={"EscendiaTable_" + key} style={{ flex: 1 }}>
      {toColumns ? (
        <EscendiaTableBody
          selectionWidth={selectionWidth}
          data={toData}
          columns={toColumns}
        />
      ) : undefined}
    </View>
  );
};

export default EscendiaTable;
