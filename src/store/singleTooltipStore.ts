import { create } from "zustand";

type Store = {
  index: number | null;
  setTooltip: (id: number | null) => void;
};

const useTooltipStore = create<Store>()((set) => ({
  index: null,
  setTooltip: (id: number | null) => set(() => ({ index: id })),
}));

export default useTooltipStore;
