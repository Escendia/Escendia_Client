import { ToastType, useToast } from "react-native-toast-notifications";
import Constants from "expo-constants";
import {
  Platform,
  useWindowDimensions,
  Dimensions,
  NativeModules,
} from "react-native";
import axios from "axios";
import { User } from "firebase/auth";
import DataBaseObject from "@config/DataBaseObject";
import { Attribute } from "@config/Attribute";
import { ToastOptions } from "react-native-toast-notifications/lib/typescript/toast";
import { EscendiaUser } from "@config/EscendiaUser";

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

export const getDatabaseValues = async (
  databaseName: string,
  filter: Object,
  user: EscendiaUser,
  toast: ToastType
) => {
  try {
    var filterObject;

    if (filter !== undefined && filter !== null) {
      filterObject = filter;
    } else {
      if (user) {
        filterObject = { createdBy: user._id };
      }
    }

    if (databaseName) {
      filterObject.database = databaseName;
    }
    const data = await axios.get(
      Constants.expoConfig.extra.axios.AXION_ROUTE_DATA,
      {
        params: { filter: filterObject },
        headers: Constants.expoConfig.extra.axios.AXION_HEADER,
      }
    );

    return DataBaseObject.getFromJSON(
      getDatabaseObject(databaseName),
      data.data
    );
  } catch (error) {
    toast.show("Toast_Danger_" + error.response.data.error);
    return [];
  }
};

export const updateDatabaseValue = async (
  dataObject: Array<any>,
  databaseName: string,
  user: EscendiaUser,
  toast: ToastType
) => {
  try {
    let isArray = Array.isArray(dataObject);

    //Generate delete and update values...newProps

    let updateDatabaseArray = [];
    let deleteDatabaseArray = [];

    if (isArray) {
      for (let i = 0; i < dataObject.length; i++) {
        let object = dataObject[i];
        object = createDefaultValues(databaseName, object, user);

        if (object.deleted && object.deleted === true) {
          deleteDatabaseArray.push(object);
        } else {
          updateDatabaseArray.push(object);
        }
      }
    } else {
      dataObject = createDefaultValues(databaseName, dataObject, user);

      if (dataObject?.deleted && dataObject?.deleted === true) {
        deleteDatabaseArray.push(dataObject);
      } else {
        updateDatabaseArray.push(dataObject);
      }
    }

    if (deleteDatabaseArray.length > 0) {
      let dataArray = await axios.delete(
        Constants.expoConfig.extra.axios.AXION_ROUTE_DATA,
        {
          data: deleteDatabaseArray,
          headers: Constants.expoConfig.extra.axios.AXION_HEADER,
        }
      );

      /*       if (dataArray.data) {
        return dataArray.data;
      } */
    }

    if (updateDatabaseArray.length > 0) {
      const data = await axios.put(
        Constants.expoConfig.extra.axios.AXION_ROUTE_DATA,
        updateDatabaseArray,
        Constants.expoConfig.extra.axios.AXION_HEADER
      );

      let dataArray = DataBaseObject.getFromJSON(
        getDatabaseObject(databaseName),
        data.data
      );

      if (dataArray.length > 0) {
        toast.show("Toast_Success_Save");

        return dataArray;
      }
    }
  } catch (error) {
    console.log("error", error);
    toast.show("Toast_Danger_" + error.response.data.error);
    return [];
  }

  return [];
};

const createDefaultValues = (database, dataObject, user) => {
  dataObject.setDatabases(database);

  if (user) {
    if (dataObject.getCreatedBy() == null) {
      dataObject.setCreatedBy(user);
    }
  }

  dataObject.setLastUpdated(new Date());
  return dataObject;
};

const getDatabaseObject = (database) => {
  switch (database.toLocaleLowerCase()) {
    case "user":
      return new EscendiaUser();
    case "attribute":
      return new Attribute();
    default:
      return new DataBaseObject();
  }
};
