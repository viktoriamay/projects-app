import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import "./Header.scss";
import { LinkLogo } from "../LinkLogo/LinkLogo";
import { ReactComponent as AddLogo } from "./img/plus.svg";
import { AppContext } from "../../utils/context/AppContext";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const { setActiveModal } = useContext(AppContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <LinkLogo />
          <nav>
            <ul className="header__links">
              <li>
                <NavLink className="header__link" to={"/projects-app"}>
                  Проекты
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to={"/students-info"}>
                  Инфо
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__add">
            <AddLogo
              className="header__add_icon"
              onClick={() => setActiveModal(true)}
            />
          </div>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
