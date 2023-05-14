import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../utils/api/api";
import { BackButton } from "../../../components/BackButton/BackButton";

export const StudentInfoPage = () => {
  const params = useParams();

  const [studentInfo, setStudentInfo] = useState({});

  useEffect(() => {
    api.getStudentByID(params.studentID).then((data) => setStudentInfo(data)).catch((error) => console.log(error))
  }, [params.studentID]);

  // const studentInfo = {
  //   id: 107,
  //   student_id: 19,
  //   name: "Поволоцкий Виктор",
  //   group: "ФКН",
  //   faculty: "БПИ196",
  //   year: 4,
  //   phone_number: "+79283390387",
  // };

  return (
    <div className="info_page info_page__student">
      <BackButton />
      <h1 className="info_page__title">{studentInfo?.name}</h1>
      <div className="info_page__item">
        <span className="info_page__subtitle">Номер телефона</span>
        <p className="info_page__info">{studentInfo?.phone_number}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Факультет</span>
        <p className="info_page__info"> {studentInfo?.faculty}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Группа</span>
        <p className="info_page__info"> {studentInfo?.group}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">Курс</span>
        <p className="info_page__info"> {studentInfo?.year}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">ID</span>
        <p className="info_page__info"> {studentInfo?.id}</p>
      </div>
      <div className="info_page__item">
        <span className="info_page__subtitle">ID студента </span>
        <p className="info_page__info">{studentInfo?.student_id}</p>
      </div>
    </div>
  );
};
