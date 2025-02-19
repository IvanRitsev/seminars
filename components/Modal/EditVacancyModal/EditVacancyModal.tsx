"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import { SeminarsInterface } from "@/store/types";
import styles from "./EditVacancyModal.module.scss";
import { observer } from "mobx-react-lite";
import seminarsStore from "@/store/store";

interface EditVacancyModalProps {
  seminar: SeminarsInterface;
  onClose: () => void;
  isOpen: boolean;
}

const EditVacancyModal = observer(
  ({ seminar, onClose, isOpen }: EditVacancyModalProps) => {
    const { date, id, description, title, time, photo } = seminar;

    //Измененные поля
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedDate, setEditedDate] = useState(date);
    const [editedTime, setEditedTime] = useState(time);

    //Обработчик кнопки сохранения
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const changedValues = {
        id,
        title: editedTitle,
        description: editedDescription,
        date: editedDate,
        time: editedTime,
        photo,
      };

      seminarsStore.updateSeminar(changedValues);
      onClose();
    };

    //Обработчик ввода в инпут с датой
    const changeDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const inputValue = e.target.value.replace(/\D/g, "");

      const formattedValue =
        inputValue.slice(0, 2) +
        (inputValue.length > 2 ? "." : "") +
        inputValue.slice(2, 4) +
        (inputValue.length > 4 ? "." : "") +
        inputValue.slice(4, 8);

      setEditedDate(formattedValue);
    };

    //Обработчик ввода в инпут с временем
    const changeTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const inputValue = e.target.value.replace(/\D/g, "");
      const formattedValue =
        inputValue.slice(0, 2) +
        (inputValue.length > 2 ? ":" : "") +
        inputValue.slice(2, 4);

      setEditedTime(formattedValue);
    };

    return (
      <Modal onClose={onClose} isOpen={isOpen}>
        <div className={styles.modalWrapper}>
          <p className={styles.modaltitle}>Редактирование семинара</p>
          <form className={styles.editForm}>
            <div className={styles.inputRow}>
              <div className={styles.inputBox}>
                <h4>Название семинара</h4>
                <textarea
                  required
                  className={styles.textarea}
                  placeholder="Введите"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </div>
              <div className={styles.inputBox}>
                <h4>Описание</h4>
                <textarea
                  required
                  className={styles.textarea}
                  placeholder="Введите"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputBox}>
                <h4>Дата</h4>
                <input
                  required
                  maxLength={10}
                  minLength={10}
                  className={styles.input}
                  type="text"
                  placeholder="дд.мм.гггг"
                  value={editedDate}
                  onChange={changeDateInput}
                />
              </div>
              <div className={styles.inputBox}>
                <h4>Время</h4>
                <input
                  required
                  className={styles.input}
                  maxLength={5}
                  minLength={5}
                  type="text"
                  value={editedTime}
                  onChange={changeTimeInput}
                />
              </div>
            </div>
            <div className={styles.buttonBox}>
              <button className={styles.disagreeButton} onClick={() => {}}>
                Отменить
              </button>
              <button
                type="submit"
                className={styles.agreeButton}
                onClick={onSubmit}
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
);

export default EditVacancyModal;
