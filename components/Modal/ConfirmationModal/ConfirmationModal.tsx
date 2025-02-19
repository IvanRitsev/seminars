import React from "react";
import Modal from "../Modal";
import styles from "./ConfirmationModal.module.scss";
import seminarsStore from "@/store/store";

interface ConfirmationModalProps {
  onClose: () => void;
  isOpen: boolean;
  id: string;
}

const ConfirmationModal = ({ isOpen, onClose, id }: ConfirmationModalProps) => {
  const deleteButtonHandler = () => {
    seminarsStore.deleteSeminar(id);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalWrapper}>
        <p className={styles.modaltitle}>
          Вы уверены, что хотите удалить семинар?
        </p>
        <div className={styles.buttonBox}>
          <button className={styles.disagreeButton} onClick={onClose}>
            Нет
          </button>
          <button className={styles.agreeButton} onClick={deleteButtonHandler}>
            Да
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
