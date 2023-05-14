import { Link } from "react-router-dom";
import { ReactComponent as User } from "./img/user.svg";
import { ReactComponent as Date } from "./img/date.svg";
import "./Card.scss";

export const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project?.id}`} className="card">
      <h2 className="card__title">{project?.title}</h2>
      <div className="card__info_wrapper">
        <div className="card__info">
          <User className="card__icon card__icon_user" />
          <span>{project?.supervisor}</span>
        </div>
        <div className="card__info">
          <Date className="card__icon" />
          <span>
            {project?.submission_deadline} / {project?.application_deadline}
          </span>
        </div>
      </div>
      <button className="card__button" type="button">
        Подробнее
      </button>
    </Link>
  );
};
