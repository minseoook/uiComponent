import { ReactNode } from "react";
import { create } from "zustand";

export type Snackbar = {
  id: string;
  children: ReactNode;
  isOpen: boolean;
  timeoutId: number | null;
};

type SnackbarStore = {
  snackbars: Snackbar[];
  upsertSnackbar: (newSnackbar: Snackbar) => void;
  removeSnackbar: (id: string) => void;
};

const useSnackbarStore = create<SnackbarStore>((set) => ({
  snackbars: [],
  upsertSnackbar: (newSnackbar) =>
    set((state) => {
      const targetIndex = state.snackbars.findIndex(
        (item) => item.id === newSnackbar.id
      );
      if (targetIndex > -1) {
        const updatedSnackbars = state.snackbars.map((item, index) =>
          index === targetIndex ? { ...item, ...newSnackbar } : item
        );
        return { snackbars: updatedSnackbars };
      }
      return { snackbars: [...state.snackbars, newSnackbar] };
    }),
  removeSnackbar: (id) =>
    set((state) => ({
      snackbars: state.snackbars.filter((item) => item.id !== id),
    })),
}));

export const useSnackbar = () => {
  const { snackbars, upsertSnackbar, removeSnackbar } = useSnackbarStore();

  const createSnackbar = (id: string, children: ReactNode) => {
    const newItem: Snackbar = {
      id,
      children,
      isOpen: true,
      timeoutId: window.setTimeout(() => {
        upsertSnackbar({ id, isOpen: false, timeoutId: null, children });
      }, 3000),
    };
    upsertSnackbar(newItem);
  };

  return {
    snackbars,
    createSnackbar,
    removeSnackbar,
  };
};
