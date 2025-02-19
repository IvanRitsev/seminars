"use client";

import SeminarsList from "@/components/SeminarsList/SeminarsList";
import React from "react";
import styles from "./styles/HomePage.module.scss";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className="content-container">
        <h1 className={styles.title}>Список семинаров</h1>
        <SeminarsList />
      </div>
    </main>
  );
}
