/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { SeminarsInterface } from "@/store/types";
import editIcon from "@/public/assets/icons/editIcon.svg";
import styles from "./SeminarCard.module.scss";
import Image from "next/image";
import EditVacancyModal from "../Modal/EditVacancyModal/EditVacancyModal";
import ConfirmationModal from "../Modal/ConfirmationModal/ConfirmationModal";

const SeminarCard = ({
  seminarValues,
}: {
  seminarValues: SeminarsInterface;
}) => {
  //Поля обьекта семинар
  const { date, description, photo, id, title, time } = seminarValues;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeminar, setSelectedSeminar] = useState<string | null>(null);

  return (
    <>
      <img className={styles.image} src={photo} alt="seminar_photo" />
      <div className={styles.infoBlock}>
        <div>
          <div className={styles.row}>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.timeBlock}>
          Дата проведения: <span>{date}</span> в <span>{time}</span> по МСК
        </div>
      </div>
      <div className={styles.cardButtonsBox}>
        <button
          type="button"
          className={styles.removeButton}
          onClick={() => setIsModalOpen(true)}
        >
          X
        </button>
        <button
          type="button"
          className={styles.editButton}
          onClick={() => setSelectedSeminar(id)}
        >
          <Image width={30} height={30} src={editIcon} alt="editIcon" />
        </button>
      </div>
      {!!selectedSeminar && (
        <EditVacancyModal
          seminar={seminarValues}
          isOpen={!!selectedSeminar}
          onClose={() => setSelectedSeminar(null)}
        />
      )}

      {isModalOpen && (
        <ConfirmationModal
          id={id}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default SeminarCard;
