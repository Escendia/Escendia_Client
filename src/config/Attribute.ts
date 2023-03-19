import DataBaseObject from "./DataBaseObject";

export class Attribute extends DataBaseObject {
  names: Object;

  constructor(options?: Attribute) {
    super(options);
    this.names = options?.names || new Map();
  }

  /**
   * Get names
   * @returns Map name
   */
  getNames() {
    return this.names;
  }

  /**
   * Add langauge with name
   * @param language
   * @param name
   */
  addName(language, name) {
    this.names[language] = name;
  }

  /**
   * Get value by language
   * @param language Value
   */
  getName(language) {
    if (!this.names[language]) return "";
    return this.names[language];
  }
}
