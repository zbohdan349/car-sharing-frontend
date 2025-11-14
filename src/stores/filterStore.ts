import { create } from "zustand";

interface FilterStore {
  isFilterOpen: boolean;
  openFilter: () => void;
  closeFilter: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  isFilterOpen: false,
  openFilter: () => set({ isFilterOpen: true }),
  closeFilter: () => set({ isFilterOpen: false }),
}));
