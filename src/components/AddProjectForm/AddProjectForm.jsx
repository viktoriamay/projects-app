import { useForm } from "react-hook-form";
import "./AddProjectForm.scss";
import { useContext } from "react";
import { AppContext } from "../../utils/context/AppContext";
import ReactInputMask from "react-input-mask";

export const AddProjectForm = () => {
  const { createProjectRequest } = useContext(AppContext);

  const VALIDATE_CONFIG = {
    requiredMessage: "Обязательное поле",
  };

  const required = {
    value: true,
    message: VALIDATE_CONFIG.requiredMessage,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return (
    <div id="myElement" className="form">
      <h2 className="form__title">Добавить проект</h2>
      <form
        className="form__inputs"
        onSubmit={handleSubmit(createProjectRequest)}
      >
        <textarea
          {...register("title", {
            required,
          })}
          className={
            !errors.title
              ? "form__input form__textarea"
              : "form__input form__textarea form__errors"
          }
          type="text"
          name="title"
          placeholder="Название"
          defaultValue={""}
        />
        <textarea
          {...register("description", {
            required,
          })}
          className={
            !errors.description
              ? "form__input form__textarea"
              : "form__input form__textarea form__errors"
          }
          type="text"
          name="description"
          placeholder="Описание"
          defaultValue={""}
        />
        <input
          {...register("project_type", {
            required,
          })}
          className={
            !errors.project_type ? "form__input" : "form__input form__errors"
          }
          type="text"
          name="project_type"
          placeholder="Тип работы"
          defaultValue={""}
        />
        <input
          {...register("supervisor", {
            required,
          })}
          className={
            !errors.supervisor ? "form__input" : "form__input form__errors"
          }
          type="text"
          name="supervisor"
          placeholder="Заказчик"
          defaultValue={""}
        />
        <input
          {...register("number_of_students", {
            required,
          })}
          className={
            !errors.number_of_students
              ? "form__input"
              : "form__input form__errors"
          }
          type="number"
          name="number_of_students"
          placeholder="Количество студентов"
          defaultValue={""}
        />
        <ReactInputMask
          mask="9999-99-99"
          {...register("submission_deadline", {
            required,
          })}
          className={
            !errors.submission_deadline
              ? "form__input"
              : "form__input form__errors"
          }
          type="text"
          name="submission_deadline"
          placeholder="Дедлайн подачи заявки"
          defaultValue={""}
        />
        <ReactInputMask
          mask="9999-99-99"
          {...register("application_deadline", {
            required,
          })}
          className={
            !errors.application_deadline
              ? "form__input"
              : "form__input form__errors"
          }
          type="text"
          name="application_deadline"
          placeholder="Дедлайн работы"
          defaultValue={""}
        />
        <input
          {...register("application_form", {
            required,
          })}
          className={
            !errors.application_form
              ? "form__input"
              : "form__input form__errors"
          }
          type="text"
          name="application_form"
          placeholder="Форма для записи"
          defaultValue={""}
        />
        <input
          {...register("status", {
            required,
          })}
          className={
            !errors.status ? "form__input" : "form__input form__errors"
          }
          type="text"
          name="status"
          placeholder="Статус работы"
        />
        <button className="form__input form__button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
