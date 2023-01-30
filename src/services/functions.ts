import { Platform } from "react-native";
import { Dimensions } from "react-native";

export function calculate(
  type: "height" | "width",
  valueWeb: number,
  valueMobile: number
) {
  let currentValue =
    type === "height"
      ? Dimensions.get("screen").height
      : Dimensions.get("screen").width;
  let defaultValue =
    Platform.OS === "web"
      ? type === "width"
        ? 1920
        : 1080
      : type === "width"
      ? 392.72
      : 850.91;
  return (
    (currentValue / defaultValue) *
    (Platform.OS === "web" ? valueWeb : valueMobile)
  );
}
