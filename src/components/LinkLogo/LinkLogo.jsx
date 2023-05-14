import { Link } from "react-router-dom";
import "./LinkLogo.scss";

export const LinkLogo = () => {
  return (
    <Link to="/projects-app">
      <img
        className="link_logo"
        src="https://upload.wikimedia.org/wikipedia/ru/thumb/8/81/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9D%D0%98%D0%A3_%D0%92%D0%A8%D0%AD.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9D%D0%98%D0%A3_%D0%92%D0%A8%D0%AD.svg.png"
        alt="logo"
      />
    </Link>
  );
};
