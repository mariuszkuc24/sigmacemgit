import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Pilot from './components/Pilot/Pilot';
import Skuchecker from './components/Skuchecker/skuchecker';
import logo from './assets/logo-light-2021.png';
import reportIcon from './assets/images/alert.svg';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className='main__header '>
          <nav className="navbar">
            <div className="navbar__brand">
            <Link to="/"><img src={logo} alt="SigmaCem" /></Link>
              
            </div>
            <ul className='navbar__list'>
              <li className='navbar__list-item'>
                <Link to="/">Strona</Link>
              </li>
              <li className='navbar__list-item'>
                <Link to="/pilot">Program pilotażowy</Link>
              </li>
              <li className='navbar__list-item'>
                <Link to="/skuchecker">Sprawdź dział produktu</Link>
              </li>
              <li className='navbar__list-item'>
                <a className="report-error" target="_blank" rel="noopener noreferrer"
                  href="https://forms.clickup.com/2441912/f/2agnr-2588/AKR8LYVGRWAJMZPHUO"><img src={reportIcon} alt="rep" />Zgłoś błąd Manago!</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className='main-container'>
          <Routes>
            <Route path='/' element={< Landing />}></Route>
            <Route path='/pilot' element={< Pilot />}></Route>
            <Route path='/skuchecker' element={< Skuchecker />}></Route>
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;