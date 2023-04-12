import { User } from "firebase/auth";
import DataBaseObject from "./DataBaseObject";

export class EscendiaUser extends DataBaseObject {
  fireBaseID: string;

  constructor(options?: EscendiaUser) {
    super(options);
    this.fireBaseID = options?.fireBaseID || "";
  }

  /**
   * Get names
   * @returns Array name
   */
  getFireBaseID() {
    return this.fireBaseID;
  }
}
