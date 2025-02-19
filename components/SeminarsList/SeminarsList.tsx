"use client";

import React, { useEffect } from "react";
import styles from "./SeminarsList.module.scss";
import seminarsStore from "@/store/store";
import SeminarCard from "../SeminarCard/SeminarCard";
import { observer } from "mobx-react-lite";
import Loader from "../Loader/Loader";

const SeminarsList = observer(() => {
  useEffect(() => {
    seminarsStore.fetchSeminars();
  }, []);

  if (seminarsStore.isLoading) return <Loader />;
  if (seminarsStore.error)
    return <h2 className={styles.errorText}>{seminarsStore.error}</h2>;

  return (
    <div>
      <ul className={styles.listWrapper}>
        {seminarsStore.seminars.map((seminar) => (
          <li className={styles.cardWrapper} key={seminar.id}>
            <SeminarCard seminarValues={seminar} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SeminarsList;
