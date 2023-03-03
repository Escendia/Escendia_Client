import { uuidv4 } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { InteractionManager, NativeSyntheticEvent } from "react-native";
import { TextInput, Platform, View, Image } from "react-native";
import { TextInputSubmitEditingEventData } from "react-native";
import { TextInputKeyPressEventData } from "react-native";
import { GestureResponderEvent, TextStyle } from "react-native";
import { Button, TextInput as Input } from "react-native-paper";
import { colors } from "../../services/styling/styles";
import * as ImagePicker from "expo-image-picker";
import EscendiaIcon from "./EscendiaIcon";
import { useTranslation } from "react-i18next";
import { useToast } from "react-native-toast-notifications";
import { t } from "i18next";
import EscendiaText from "./EscendiaText";

interface EscendiaImagePickerProps {
  value?: string;
  style?: TextStyle;
  onChange?: ((e: ImagePicker.ImagePickerAsset[]) => void) | undefined;
}
/* UNDER DEVELOPMENT NICHT FERTIG!!! */

const EscendiaInput = ({
  value,
  onChange,
  style,
}: EscendiaImagePickerProps) => {
  const toast = useToast();
  const [key, setKey] = useState(uuidv4());

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          /* 'Sorry, we need camera roll permissions to make this work!' */
          toast.show(t("Toast_Warning_EscendiaImagePicker_Permission"));
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      onChange(result.assets);
    }
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View>
        {value ? (
          <Image
            source={{ uri: value }}
            style={{ width: 200, height: 100 }}
            resizeMode="contain"
          />
        ) : (
          <EscendiaText>{t("EscendiaImagePicker.Select")}</EscendiaText>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <EscendiaIcon
          type="MaterialCommunity"
          name="folder-outline"
          onPress={pickImage}
        />
        {value ? (
          <EscendiaIcon
            type="MaterialCommunity"
            name="close"
            onPress={() => onChange([])}
          />
        ) : undefined}
      </View>
    </View>
  );
};

export default EscendiaInput;
