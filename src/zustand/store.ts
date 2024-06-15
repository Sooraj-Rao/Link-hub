import { create } from "zustand";

export const useZustandStore = create((set) => ({
  userData: null,
  setUserData: (userData: object) => set({ userData }),
  linkData: [],
  setLinkData: (linkData: object) => set({ linkData }),
}));
