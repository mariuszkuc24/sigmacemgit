import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/sigmacem-logo.png";
import reportIcon from "../../../assets/images/alert.svg";
import "./Header.scss";

const Header = (props: any) => {
  const urlReportAnError = "https://vyu.pl/zgloszenie-cc";

  return (
    <header className="main__header ">
      <nav className="navbar">
        <div className="navbar__brand">
          <Link to="/">
            <img src={logo} alt="SigmaCem" />
          </Link>
        </div>
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <Link to="/">Strona Główna</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/guides">Przewodnik</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/pilot">Program pilotażowy</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/skuchecker">Sprawdź dział produktu</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/login">Zaloguj</Link>
          </li>
          <li>
            <a
              className="report-error"
              target="_blank"
              rel="noopener noreferrer"
              href={urlReportAnError}
            >
              <img src={reportIcon} alt="rep" />
              Zgłoszenie Techniczne
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
