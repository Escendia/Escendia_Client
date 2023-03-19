import { EscendiaUser } from "./EscendiaUser";
export default class DataBaseObject {
  id: string;
  createdDate: Date;
  status: string;
  database: string;
  statusChangedBy: EscendiaUser;
  statusChangedAt: string;
  lastUpdate: Date;
  createdBy: EscendiaUser;

  constructor(options?: DataBaseObject) {
    this.id = options?.id || null;
    this.createdDate = options?.createdDate || new Date();
    this.createdBy = options?.createdBy || null;
    this.status = options?.status || "created";
    this.database = options?.database || null;
    this.statusChangedBy = options?.statusChangedBy || null;
    this.statusChangedAt = options?.statusChangedAt || null;
    this.lastUpdate = options?.lastUpdate || new Date();
  }

  /**
   * Return id
   * @returns String
   */
  getId() {
    return this.id;
  }

  /**
   * Return the user which created the Dataset
   * @returns User
   */
  getCreatedBy() {
    return this.createdBy;
  }

  /**
   * Set the date from the last update.
   * @param {Date} lastUpdate
   */
  setLastUpdated(lastUpdate) {
    this.lastUpdate = lastUpdate;
  }

  /**
   * Set the database.
   * @param {String} databases
   */
  setDatabases(database) {
    this.database = database;
  }

  /**
   * Set the user which created the db object.
   * @param {EscendiaUser} createdBy
   */
  setCreatedBy(createdBy) {
    this.createdBy = createdBy;
  }

  /**
   * Method to change a value
   * @param {String} methodName
   * @param {Object|String|Array} value
   * @returns this cloned
   */
  change(methodName, ...value) {
    if (typeof this[methodName] === "function") {
      this[methodName](...value);
    }
    return this.clone();
  }

  /**
   * Clone of the current object
   * @returns Object
   */
  clone() {
    if (null == this || "object" != typeof this) return this;
    var copy = this.constructor();
    for (var attr in this) {
      if (this.hasOwnProperty(attr)) copy[attr] = this[attr];
    }
    return copy;
  }

  static getFromJSON(objectTarget, jsonString) {
    //Falls der übergebene Wert null ist

    if (
      objectTarget === null ||
      jsonString === null ||
      jsonString === undefined
    )
      return null;

    try {
      let parsedObject = jsonString.id
        ? jsonString
        : JSON.parse(JSON.stringify(jsonString));

      if (Array.isArray(parsedObject)) {
        //Wir haben hier ein Array zum umwandeln
        if (Array.isArray(parsedObject)) {
          let array = [];

          parsedObject.forEach((value, index) => {
            let parsedSingleObject = objectTarget.clone
              ? Object.assign(objectTarget.clone(), value)
              : Object.assign(objectTarget, value);

            array.push(parsedSingleObject);
          });
          return array;
        } else {
          //Wir haben hier eine Map und kein Array
          let map = new Map();

          for (const [key, value] of Object.entries(parsedObject)) {
            let newKey = key;
            let newValue = value;

            if (key.id !== undefined) {
              //Key ist ein DB-Objekt
              newKey = objectTarget.clone
                ? Object.assign(objectTarget.clone(), key)
                : Object.assign(objectTarget, key);
            }
            if (value.id !== undefined) {
              //Value ist ein DB-Objekt
              newValue = objectTarget.clone
                ? Object.assign(objectTarget.clone(), value)
                : Object.assign(objectTarget, value);
            }

            map.set(key, value);
          }

          return map;
        }
      } else {
        //Einzel Wert

        let assignedObject = objectTarget.clone
          ? Object.assign(objectTarget.clone(), parsedObject)
          : Object.assign(objectTarget, parsedObject);
        return assignedObject;
      }
    } catch (error) {
      //"Escendia.DataBaseObject.ParseJSON",
      throw new Error(error);
    }
  }

  clearValues() {
    //Delete null values
    Object.keys(this).forEach((key) => {
      if (this[key] === undefined || this[key] === null) {
        delete this[key];
      } else {
        if (Array.isArray(this[key])) {
          this[key].forEach((value) => {
            if (value.id !== undefined && value.clearValues) {
              value.clearValues();
            }
          });
        } else {
          //TODO Map
          if (this[key].id !== undefined && this[key].clearValues) {
            this[key].clearValues();
          }
        }
      }
    });
  }

  static delete = async (
    deleteDatabaseValue,
    formValues,
    database,
    user,
    dispatch,
    toggleSnackBar,
    t
  ) => {
    /*     let boolean = await deleteDatabaseValue(
      formValues,
      database,
      user,
      dispatch,
      toggleSnackBar,
      t
    ); */
    let boolean = true;
    if (boolean) return true;
    return false;
  };

  static save = async (
    formValues,
    database,
    user,
    dispatch,
    toggleSnackBar,
    t,
    updateDatabaseValues
  ) => {
    formValues.clearValues();
    let amount = null;

    if (formValues.getAmount && formValues.getAmount() > 0) {
      amount = formValues.getAmount();
    }

    /*     let data = await updateDatabaseValues(
      formValues,
      amount,
      database,
      user,
      dispatch,
      toggleSnackBar,
      t
    )
      .then(function (objectValue) {
        if (objectValue !== null) {
          return objectValue;
        } else {
          toggleSnackBar(t("Escendia.DataBaseObject.Unknown"), "error");
        }
      })
      .catch(function (error) {
        console.log("error", error);

        toggleSnackBar(
          t("EscendiaSnackbar.Error." + error?.response?.status, {
            errorMessage: t(error?.response?.data?.error),
          }),
          "error"
        );
      }); */
    let data = this;
    return data;
  };

  /**
   * Convert the object to a string
   * @returns String
   */
  toString() {
    return JSON.stringify(this);
  }
}
