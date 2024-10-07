import { useState } from "react";
import { ReactNode } from "react";

export type Toast = {
  id: string;
  children: ReactNode;
  isOpen: boolean;
  timeoutId: number | null;
};

const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const upsertToast = (newToast: Toast) => {
    setToasts((prev) => {
      const targetIndex = prev.findIndex((item) => item.id === newToast.id);
      if (targetIndex > -1) {
        return prev.map((item, index) =>
          index === targetIndex ? { ...item, ...newToast } : item
        );
      }
      return [...prev, newToast];
    });
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  const createToast = (children: ReactNode) => {
    const id = Date.now().toString();
    const timeoutId = window.setTimeout(() => {
      upsertToast({ id, isOpen: false, timeoutId: null, children });
    }, 3000);

    const newItem: Toast = {
      id,
      children,
      isOpen: true,
      timeoutId,
    };

    upsertToast(newItem);
  };

  return {
    toasts,
    createToast,
    removeToast,
  };
};

export default useToast;
