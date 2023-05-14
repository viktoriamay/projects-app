import { AppContext } from "../../utils/context/AppContext";
import "./Modal.scss";
import { useContext, useEffect } from "react";

export const Modal = ({ children }) => {
  const { activeModal, setActiveModal } = useContext(AppContext);
  
  const onKeydown = (e) => {
    switch (e.key) {
      case "Escape":
        setActiveModal(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  return (
    <div
      className={activeModal ? "modal active" : "modal"}
      onClick={() => setActiveModal(false)}
    >
      <div
        className={activeModal ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div
          onClick={() => setActiveModal(false)}
          className="modal__close"
        ></div>
      </div>
    </div>
  );
};
