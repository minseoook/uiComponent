import { createPortal } from "react-dom";
import { useToast } from "../store/snackbarStore";
import styled from "./toast.module.css";
import { useEffect, useRef } from "react";
import useToast2 from "../components/Toast/useToast";

const ToastPage = () => {
  const { toasts, createToast } = useToast();
  const { toasts: t2, createToast: ct2, removeToast: rt2 } = useToast2();

  const handleClick = () => {
    createToast("1", <div>토스트 입니다</div>);
  };
  const handleClick2 = () => {
    createToast("2", <div>토스트2 입니다</div>);
  };
  const handleClick3 = () => {
    ct2(<div>토스트3 입니다</div>);
  };

  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 토스트를 구현하는데 필요한 상태, 함수를 주스탄드에서 구현후
          전역상태로써 관리
        </h3>
        <button onClick={handleClick}>토스트 오픈</button>
        <button onClick={handleClick2}>토스트2 오픈</button>
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 토스트를 구현하는데 필요한 상태, 함수를 커스텀훅으로 구현후
          지역상태로써 관리
        </h3>
        <button onClick={handleClick3}>토스트3 오픈</button>
      </div>
      {toasts.map((snackbar, index) => (
        <ToastItem key={snackbar.id} {...snackbar} index={index} />
      ))}
      {t2.map((snackbar, index) => (
        <ToastItem
          key={snackbar.id}
          {...snackbar}
          index={index}
          another
          r2={rt2}
        />
      ))}
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
  const toastRef = useRef<HTMLDivElement>(null);
  const { removeToast } = useToast();

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (!isOpen) {
        removeToast(id);
        if (r2) {
          r2(id);
        }
      }
    };

    toastRef.current?.addEventListener("transitionend", handleAnimationEnd);

    return () => {
      toastRef.current?.removeEventListener(
        "transitionend",
        handleAnimationEnd
      );
    };
  }, [isOpen, id, removeToast, r2]);

  return createPortal(
    <div
      ref={toastRef}
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
