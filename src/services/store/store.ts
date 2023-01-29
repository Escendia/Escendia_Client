import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type User = {
  _id: string;
};

interface UserState {
  user: User | undefined;
  setUser: (user: User) => void;
}

interface CookieState {
  token: string | undefined;
}

export const useCookieStore = create<CookieState>()(
  devtools(
    persist(
      (set) => ({
        token: undefined,
      }),
      { name: "user_cookies" }
    )
  )
);

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: undefined,
    setUser(user) {
      set((state) => ({ user: user }));
    },
  }))
);

