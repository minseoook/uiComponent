import { ReactNode } from "react";
import { create } from "zustand";

export type Toast = {
  id: string;
  children: ReactNode;
  isOpen: boolean;
  timeoutId: number | null;
};

type ToastStore = {
  toasts: Toast[];
  upsertToast: (newToast: Toast) => void;
  removeToast: (id: string) => void;
};

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  upsertToast: (newToast) =>
    set((state) => {
      const targetIndex = state.toasts.findIndex(
        (item) => item.id === newToast.id
      );
      if (targetIndex > -1) {
        const updatedToasts = state.toasts.map((item, index) =>
          index === targetIndex ? { ...item, ...newToast } : item
        );
        return { toasts: updatedToasts };
      }
      return { toasts: [...state.toasts, newToast] };
    }),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((item) => item.id !== id),
    })),
}));

export const useToast = () => {
  const { toasts, upsertToast, removeToast } = useToastStore();

  const createToast = (id: string, children: ReactNode) => {
    const newItem: Toast = {
      id,
      children,
      isOpen: true,
      timeoutId: window.setTimeout(() => {
        upsertToast({ id, isOpen: false, timeoutId: null, children });
      }, 3000),
    };
    upsertToast(newItem);
  };

  return {
    toasts,
    createToast,
    removeToast,
  };
};
