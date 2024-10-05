import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

type ModalProps = {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
  outsideClick?: boolean;
};

const Modal = ({ open, close, children, outsideClick }: ModalProps) => {
  return (
    open &&
    createPortal(
      <div
        className={styles.modalOverlay}
        onClick={outsideClick ? close : () => {}}
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.querySelector("#modalRoot")!
    )
  );
};

type ModalHeaderProps = {
  title: string;
  close: () => void;
  children?: React.ReactNode;
};

const ModalHeader = ({ title, close, children }: ModalHeaderProps) => {
  return (
    <div className={styles.modalHeader}>
      <div className={styles.title}>{title}</div>
      {children}
      <div className={styles.close} onClick={close}>
        X
      </div>
    </div>
  );
};

type ModalContentProps = {
  children: React.ReactNode;
};

const ModalContent = ({ children }: ModalContentProps) => {
  return <div className={styles.modalContent}>{children}</div>;
};

type ModalFooterProps = {
  children: React.ReactNode;
};

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className={styles.modalFooter}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
