import { makeAutoObservable, runInAction } from "mobx";
import { SeminarsInterface } from "./types";

class SeminarsStore {
  // Поля  store
  seminars: SeminarsInterface[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  //Загрузка семинаров с сервера
  fetchSeminars = async () => {
    this.isLoading = true;
    this.error = null;

    try {
      const response = await fetch("http://localhost:3001/seminars");
      const data = await response.json();

      this.seminars = data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
      this.error = "Ошибка загрузки вакансий";
    } finally {
      this.isLoading = false;
    }
  };

  //Удаление семинара
  deleteSeminar = async (seminarId: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/seminars/${seminarId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Ошибка при удалении");

      this.seminars = this.seminars.filter((s) => s.id !== seminarId);
    } catch (error) {
      console.error(error);
    }
  };

  //Изменнеие семинара
  updateSeminar = async (updatedSeminar: SeminarsInterface) => {
    try {
      const response = await fetch(
        `http://localhost:3001/seminars/${updatedSeminar.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedSeminar),
        }
      );
      if (!response.ok) throw new Error("Ошибка обновления");

      runInAction(() => {
        this.seminars = this.seminars.map((v) =>
          v.id === updatedSeminar.id ? updatedSeminar : v
        );
      });
    } catch (error) {
      console.error("Ошибка обновления вакансии:", error);
    }
  };
}

// Создаем экземпляр Store
const seminarsStore = new SeminarsStore();

export default seminarsStore;
