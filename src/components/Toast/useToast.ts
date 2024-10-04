// useSnackbar.ts
import { useState } from "react";
import { ReactNode } from "react";

export type Snackbar = {
  id: string;
  children: ReactNode;
  isOpen: boolean;
  timeoutId: number | null;
};

const useToast = () => {
  const [snackbars, setSnackbars] = useState<Snackbar[]>([]);

  const upsertSnackbar = (newSnackbar: Snackbar) => {
    setSnackbars((prev) => {
      const targetIndex = prev.findIndex((item) => item.id === newSnackbar.id);
      if (targetIndex > -1) {
        // 기존의 스낵바를 업데이트
        return prev.map((item, index) =>
          index === targetIndex ? { ...item, ...newSnackbar } : item
        );
      }
      // 새로운 스낵바 추가
      return [...prev, newSnackbar];
    });
  };

  const removeSnackbar = (id: string) => {
    console.log(`r2 snackbar with id: ${id}`);
    setSnackbars((prev) => prev.filter((item) => item.id !== id));
  };

  const createSnackbar = (children: ReactNode) => {
    const id = Date.now().toString();
    const timeoutId = window.setTimeout(() => {
      upsertSnackbar({ id, isOpen: false, timeoutId: null, children });
    }, 3000);

    const newItem: Snackbar = {
      id,
      children,
      isOpen: true,
      timeoutId,
    };

    upsertSnackbar(newItem);
  };

  return {
    snackbars,
    createSnackbar,
    removeSnackbar,
  };
};

export default useToast;
