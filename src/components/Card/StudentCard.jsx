import { ReactComponent as Group } from "./img/group.svg";
import { ReactComponent as Phone } from "./img/phone.svg";
import { Link } from "react-router-dom";

export const StudentCard = ({ student }) => {
  return (
    <Link className="card" to={`/student/${student?.student_id}`}>
      <h2 className="card__title">{student?.name}</h2>
      <div className="card__info_wrapper">
        <div className="card__info">
          <Phone className="card__icon card__icon_user" />
          <span>{student?.phone_number}</span>
        </div>
        <div className="card__info">
          <Group className="card__icon" />
          <span>{student?.faculty}</span>
        </div>
      </div>
      <button className="card__button" type="button">
        Подробнее
      </button>
    </Link>
  );
};
