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
import { getAuth, Auth, User, initializeAuth } from "firebase/auth";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";


interface UserState {
  user: User | undefined;
  setUser: (user: User) => void;
}



interface DBState {
  app: FirebaseApp;
  analytics: Analytics;
  db: Firestore;
  auth: Auth;
  setApp: (app: FirebaseApp) => void;
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
    }),
    {
      name: "user_cookies",
    }
  )
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
        }),
        //analytics: initializeAnalytics(app),
        db: getFirestore(app),
      }));
    },
  }))
);
