import {
  Platform,
  useWindowDimensions,
  Dimensions,
  NativeModules,
} from "react-native";

/**
 * Method to calculate dynamic width or height - Recalculate by dynamisch change
 * @param type
 * @param valueWeb
 * @param valueMobile
 * @returns
 */
export function calculate(
  type: "height" | "width" | "none",
  valueWeb: number,
  valueMobile: number
) {
  const { height, width } = useWindowDimensions();

  const isWeb = checkWeb(width, height);

  let currentValue = type === "height" ? height : width;
  let defaultValue = isWeb
    ? type === "width"
      ? 1920
      : 1080
    : type === "width"
    ? 392.72
    : 850.91;
  if (type === "none") {
    return isWeb ? valueWeb : valueMobile;
  } else {
    return (currentValue / defaultValue) * (isWeb ? valueWeb : valueMobile);
  }
}

/**
 * Method to calculate if its web or mobile
 * @param width
 * @param height
 * @returns
 */
function checkWeb(width: number, height: number) {
  return Platform.OS === "web" && height < width;
}

/**
 * Check if app is web - Recalculate by dimensions change
 * @returns isWeb
 */
export function isWeb() {
  const { height, width } = useWindowDimensions();
  return Platform.OS === "web" && height < width;
}
