import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../InfoPage.scss";
import api from "../../../utils/api/api";
import { BackButton } from "../../../components/BackButton/BackButton";

export const ProjectInfoPage = () => {
  const params = useParams();

  const [projectInfo, setProjectInfo] = useState({});

  useEffect(() => {
    api
      .getProjectByID(params.projectID)
      .then((data) => setProjectInfo(data))
      .catch((error) => console.log(error));
  }, [params.projectID]);

  // const projectInfo = {
  //   id: 4,
  //   title:
  //     "Приложение для интраоперационного мультилингвального картирования речи",
  //   description:
  //     "Приложение для автоматизации процесса проведения теста на называние - процедуры, проводимой во время операций на мозге с целью предотвращения потери речи. Требуется разработать кроссплатформенное мобильное приложение (в первой версии для платформы Android), которое бы позволяло добавлять пациентов для тестирования, проводить тестирование (с показом изображений, записью ответов тестируемого), проверять ответы.",
  //   project_type: "Проектный",
  //   supervisor: "Зонтов Юрий Владимирович",
  //   number_of_students: 1,
  //   submission_deadline: "2023-08-01",
  //   application_deadline: "2022-10-01",
  //   application_form: "https://www.hse.ru/neuroling/",
  //   status: "набор завершен",
  // };

  return (
    <div className="info_page">
      <BackButton />
      <h1 className="info_page__title info_page__title_project">
        {projectInfo?.title}
      </h1>
      <div className="info_page__item">
        <span className="info_page__subtitle">Тип работы</span>
        <p className="info_page__info"> {projectInfo?.project_type}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Описание</span>
        <p className="info_page__info"> {projectInfo?.description}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Заказчик</span>
        <p className="info_page__info"> {projectInfo?.supervisor}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Дедлайн подачи заявки</span>
        <p className="info_page__info"> {projectInfo?.submission_deadline}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Дедлайн работы</span>
        <p className="info_page__info"> {projectInfo?.application_deadline}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">ID</span>
        <p className="info_page__info"> {projectInfo?.id}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Количество студентов</span>
        <p className="info_page__info"> {projectInfo?.number_of_students}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Форма для записи</span>
        <Link
          to={projectInfo?.application_form}
          target="_blank"
          className="info_page__info"
        >
          {projectInfo?.application_form}
        </Link>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Статус работы</span>
        <p className="info_page__info"> {projectInfo?.status}</p>
      </div>
    </div>
  );
};
