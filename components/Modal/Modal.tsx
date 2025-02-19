"use client";

import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root") || document.body;
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
