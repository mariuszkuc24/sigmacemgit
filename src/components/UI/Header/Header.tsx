import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Header.scss";
import logo from '../../../assets/images/sigmacem-logo.png';
import reportIcon from '../../../assets/images/alert.svg'
const Header = (props: any) => {
  const urlReportAnError =
    "https://forms.clickup.com/2441912/f/2agnr-2588/AKR8LYVGRWAJMZPHUO";
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
          <li className="navbar__list-item">
            <a
              className="report-error"
              target="_blank"
              rel="noopener noreferrer"
              href={urlReportAnError}
            >
              <img src={reportIcon} alt="rep" />
              Zgłoś błąd Manago!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
