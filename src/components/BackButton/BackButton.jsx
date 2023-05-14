import { useNavigate } from "react-router-dom";
import "./BackButton.scss";

export const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <div className="back_button" onClick={() => navigate(-1)}>
      Назад
    </div>
  );
};
