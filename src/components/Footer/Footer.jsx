import { LinkLogo } from "../LinkLogo/LinkLogo";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__copyright">
            ©{new Date().getFullYear()} Projects App
          </div>
          <LinkLogo />
        </div>
      </div>
    </footer>
  );
};
