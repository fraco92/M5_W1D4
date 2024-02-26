import { create } from "zustand";

export const useSelectedStore = create((set) => ({
  asin: undefined,
  setAsin: (newAsin) => set({ asin: newAsin }),
}));
