import { createPortal } from "react-dom";
import { useSnackbar } from "../store/snackbarStore";
import styled from "./toast.module.css";
import { useEffect } from "react";
import useToast from "../components/Toast/useToast";

const ToastPage = () => {
  const { snackbars, createSnackbar } = useSnackbar();
  const { snackbars: s2, createSnackbar: c2, removeSnackbar: r2 } = useToast();

  const handleClick = () => {
    createSnackbar("1", <div>토스트 입니다</div>);
  };
  const handleClick2 = () => {
    createSnackbar("2", <div>토스트2 입니다</div>);
  };
  const handleClick3 = () => {
    c2(<div>토스트3 입니다</div>);
  };

  console.log(s2);
  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 탭의 id를 상태로 관리하여 상태마다 아래 폼을 달리 렌더링함
        </h3>
        <button onClick={handleClick}>토스트 오픈</button>
        <button onClick={handleClick2}>토스트2 오픈</button>
        <button onClick={handleClick3}>토스트3 오픈</button>
        {snackbars.map((snackbar, index) => (
          <ToastItem key={snackbar.id} {...snackbar} index={index} />
        ))}
        {s2.map((snackbar, index) => (
          <ToastItem
            key={snackbar.id}
            {...snackbar}
            index={index}
            another
            r2={r2}
          />
        ))}
      </div>
    </div>
  );
};

export const ToastItem = ({
  id,
  children,
  isOpen,
  index,
  another,
  r2,
}: {
  id: string;
  children: React.ReactNode;
  isOpen: boolean;
  index: number;
  another?: boolean;
  r2?: (id: string) => void;
}) => {
  const { removeSnackbar } = useSnackbar();

  useEffect(() => {
    const element = document.getElementById(`snackbar-${id}`);

    const handleAnimationEnd = () => {
      if (!isOpen) {
        removeSnackbar(id);
        if (r2) {
          r2(id);
        }
      }
    };

    element?.addEventListener("transitionend", handleAnimationEnd);

    return () => {
      element?.removeEventListener("transitionend", handleAnimationEnd);
    };
  }, [isOpen, id, removeSnackbar, r2]);

  return createPortal(
    <div
      id={`snackbar-${id}`}
      className={`${styled.snackbar} ${isOpen ? styled.open : styled.close}`}
      style={{
        bottom: `${index * 90 + 20}px`,
        width: "300px",
        left: another ? "20px" : undefined,
      }}
    >
      {children}
    </div>,
    document.querySelector("#snackbarRoot")!
  );
};

export default ToastPage;
