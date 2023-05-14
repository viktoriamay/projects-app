import { MenuOutlined } from "@ant-design/icons";
import "./BurgerMenu.scss";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../utils/context/AppContext";

export const BurgerMenu = () => {
  const [activeNav, setActiveNav] = useState(false);

  const { setActiveModal } = useContext(AppContext);

  const onToggleNav = () => {
    setActiveNav((activeNav) => !activeNav);
  };

  const onCloseNav = () => {
    setActiveNav(false);
  };

  document.addEventListener("click", () => {
    setActiveNav(false);
  });

  return (
    <div className="burger_menu" onClick={(e) => e.stopPropagation()}>
      <MenuOutlined className="burger_menu_icon__svg" onClick={onToggleNav} />
      <div
        className={
          activeNav
            ? "burger_menu__navigation active"
            : "burger_menu__navigation"
        }
      >
        <Link
          to={"/projects-app"}
          onClick={onCloseNav}
          className="burger_menu__navigation_item"
        >
          Проекты
        </Link>
        <Link
          to={"/students-info"}
          onClick={onCloseNav}
          className="burger_menu__navigation_item"
        >
          Инфо
        </Link>
        <div
          onClick={() => {
            setActiveModal(true);
            onCloseNav();
          }}
          className="burger_menu__navigation_item"
        >
          Добавить проект
        </div>
      </div>
    </div>
  );
};
