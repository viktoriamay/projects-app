import { Link } from "react-router-dom";
import "./LinkLogo.scss";
import mainLogo from './img/logo_projects.png'

export const LinkLogo = () => {
  return (
    <Link to="/projects-app">
      <img
        className="link_logo"
        src={mainLogo}
        alt="logo"
      />
    </Link>
  );
};
