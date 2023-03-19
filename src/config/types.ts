import { FirebaseOptions } from "firebase/app";

export interface Extra {
  firebase: FirebaseOptions;
  axios: AxiosOptions;
}

export interface AxiosOptions {
  AXION_ROUTE_DATA: string;
  AXION_HEADER: Object;
}
export interface Type {
  id: string;
  name: string;
}

export interface Test {}
