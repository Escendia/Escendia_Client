import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@services/styling/styles";
import React from "react";
import { Linking, TouchableOpacity, View } from "react-native";

interface EscendiaSocialMediaProps {
  size: number;
  color: string;
  type?: "row" | "column" | undefined;
}

const EscendiaSocialMedia = ({
  size,
  color,
  type,
  ...rest
}: EscendiaSocialMediaProps) =>
  type === "row" ? (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity style={{ paddingRight: 10 }}>
        <FontAwesome name="facebook-f" size={size} color={color} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 1,
          borderRightWidth: 1,
          borderLeftWidth: 1,
          borderStyle: "dashed",
          borderColor: color,
          paddingLeft: 8,
          paddingRight: 11,
        }}
      >
        <FontAwesome name="twitter" size={size} color={color} />
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingLeft: 10 }}>
        <FontAwesome name="instagram" size={size} color={color} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <TouchableOpacity
        style={{ paddingBottom: 5 }}
        onPress={() => {
          Linking.openURL("http://www.facebook.de");
        }}
      >
        <FontAwesome name="facebook-f" size={size} color={color} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("http://www.twitter.de");
        }}
        style={{
          flex: 1,
          borderRadius: 1,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderStyle: "dashed",
          borderColor: colors.escendia_dark,
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <FontAwesome name="twitter" size={size} color={color} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, paddingTop: 5 }}
        onPress={() => {
          Linking.openURL("http://www.instagram.de");
        }}
      >
        <FontAwesome name="instagram" size={size} color={color} />
      </TouchableOpacity>
    </View>
  );

export default EscendiaSocialMedia;
