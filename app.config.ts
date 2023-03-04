import { ConfigContext, ExpoConfig } from "@expo/config";
import { Extra } from "src/config/types";

const {
  ENVIRONMENT,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = process.env;

export default (context: ConfigContext): ExpoConfig => {
  const config: ExpoConfig = {
    name: name(),
    slug: slug(),
    extra: extra(),
  };
  // console.log(config);
  return config;
};

const extra = (): Extra => ({
  firebase: {
    apiKey: "AIzaSyDBK5uZCVMoMBlchiyri9NO4bYM9jsNCLg",
    authDomain: "escendia-374212.firebaseapp.com",
    projectId: "escendia-374212",
    storageBucket: "escendia-374212.appspot.com",
    messagingSenderId: "943523318087",
    appId: "1:943523318087:web:479105c34ecb0588016462",
    measurementId: "G-YC52M51XS5 ",
  },
});

const slug = () => {
  const slug = `escendia-live`;
  if (ENVIRONMENT !== "live") return `escendia-development`;
  return slug;
};

const name = () => {
  return ENVIRONMENT !== "live" ? "Escendia-Development" : "Escendia-Live";
};
