import { Attribute } from "./../../config/Attribute";
import { FirebaseApp } from "firebase/app";
import {
  getAnalytics,
  Analytics,
  initializeAnalytics,
} from "firebase/analytics";
import {
  getFirestore,
  Firestore,
  initializeFirestore,
} from "firebase/firestore/lite";
import {
  getAuth,
  Auth,
  User,
  initializeAuth,
  browserPopupRedirectResolver,
} from "firebase/auth";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { EscendiaUser } from "@config/EscendiaUser";
import { ToastType } from "react-native-toast-notifications";

interface UserState {
  user: EscendiaUser | undefined;
  setUser: (user: EscendiaUser) => void;
  fireBaseUser: User | undefined;
  setFireBaseUser: (user: User) => void;
}

interface AppState {
  ready: boolean | undefined;
  setReady: (ready: boolean) => void;
}
interface ToastState {
  toast: ToastType | undefined;
  setToast: (toast: ToastType) => void;
}

interface DBState {
  app: FirebaseApp;
  analytics: Analytics;
  db: Firestore;
  auth: Auth;
  setApp: (app: FirebaseApp) => void;
  attribute: Array<Attribute>;
}

export const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      user: undefined,
      setUser(user) {
        set((state) => ({
          user: user,
        }));
      },
      fireBaseUser: undefined,
      setFireBaseUser(fireBaseUser) {
        set((state) => ({
          fireBaseUser: fireBaseUser,
        }));
      },
    }),
    {
      name: "user_cookies",
    }
  )
);

/* export const useAppStore = create<AppState>()(
  devtools((set) => ({
    setReady(ready) {
      set((state) => ({
        ready: ready,
      }));
    },
    ready: false,
  }))
); */

export const useToastStore = create<ToastState>()(
  devtools((set) => ({
    setToast(toast) {
      set((state) => ({
        toast: toast,
      }));
    },
    toast: undefined,
  }))
);

export const useDBStore = create<DBState>()(
  devtools((set) => ({
    app: undefined,
    analytics: undefined,
    db: undefined,
    auth: undefined,
    setApp(app) {
      set((state) => ({
        app: app,
        auth: initializeAuth(app, {
          persistence: getReactNativePersistence(AsyncStorage),
          popupRedirectResolver: browserPopupRedirectResolver,
        }),
        //analytics: initializeAnalytics(app),
        db: getFirestore(app),
      }));
    },
    attribute: [],
  }))
);
