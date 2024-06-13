import { create } from "zustand";

export const useZustandStore = create((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
  linkData: [],
  setLinkData: (linkData) => set({linkData}),
}));
