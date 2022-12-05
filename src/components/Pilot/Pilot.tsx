import React from "react";
import { useState } from "react";
import "./pilot.scss";
const Pilot = () => {
  return (
    <div>
      <section className="section-container casto-color">
        <div className="section-container__header section-container__header--casto">
          <h2>Przydatne pliki</h2>
        </div>
        <section className="section-links__container">
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://intelevospzoo.sharepoint.com/:w:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/Pilot_Wroc%C5%82aw_Warszawa_scenariusze_post%C4%99powania.docx?d=w654a3254fd804b0d830335e4733b5026&csf=1&web=1&e=s1p7vk"
          >
            Procedury
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Kontakt_Szczecin_Stargard_fin.xlsx?d=w05a6c94df30549129cec74f144430942&csf=1&web=1&e=sNSptb"
          >
            Kontakt Szczecin
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/Kontakt_Warszawa_Pilot_aktualizacja24.10.xlsx?d=wec54f71b218949e3977b82e03fbe1048&csf=1&web=1&e=1auWyg"
          >
            Kontakt Warszawa
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/Kontakt%20ze%20sklepem-%20z%20kim%20si%C4%99%20kontaktowa%C4%87-%20Wroc%C5%82aw..xlsx?d=w08dc2cfa5241425a891ce2423b4f881b&csf=1&web=1&e=gCYptJ"
          >
            Kontakt Wrocław
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://intelevospzoo-my.sharepoint.com/:x:/r/personal/jaroslaw_mazurek_sigmacem_com/_layouts/15/doc2.aspx?sourcedoc=%7B3ED3B6F1-E6AD-47C3-9BBA-12B296E0CF42%7D&file=Aktualne_Zestawienie_Kontaktowe_Castorama%2027.06.2022.xlsx&wdOrigin=OFFICECOM-WEB.MAIN.SEARCH&ct=1665745087391&action=default&mobileredirect=true&cid=42235211-6328-4f57-88c5-7120167f1e75"
          >
            Kontakt Zestawienie
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Szczecin_Stargard_us%C5%82ugi_fin2.xlsx?d=wfa892ccfca0e457d9d7c73c028464b07&csf=1&web=1&e=PsVUEc"
          >
            Usługi Szczecin
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Kopia%20pliku%20Pilot%20Warszawa%20-%20Us%C5%82ugi_finalna_wersja.xlsx?d=wdcf17179ff394eecae44a1be24ab226f&csf=1&web=1&e=GAowoW"
          >
            Usługi Warszawa
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/zestawienia_do%20uzupe%C5%82nienia%20sklepy_ca%C5%82o%C5%9B%C4%87%201.xlsx?d=w717b6aa3d15b4377a2dbff687b3063de&csf=1&web=1&e=hzYYLu"
          >
            Usługi Wrocław
          </a>
        </section>
      </section>
      <section className="task" id="sklepy_lista-obslugiwanych-sklepow">
        <div className="task__header">
          <h2>Lista obłsugiwanych sklepów</h2>
        </div>
        <section className="task__description">
          <div className="task__description-header">
            <h3>
              Hybrydy ( w ich przypadku dodajemy kategorie główną "Hybryda" jeśli do
              nich dzwonimy piszemy )
            </h3>
          </div>
          <div className="task__description-more">
            <ul>
              <li>Stargard ul. Tadeusza Kościuszki 73a</li>
              <li>Świnoujście - Castorama Smart ul. Wojska Polskiego 96</li>
              <li>Szczecin Ku Słońcu ul. Ku Słońcu 67b </li>
              <li>Szczecin Południowa ul. Południowa 21</li>
              <li>Szczecin Struga ul. Wiosenna 80</li>
              <li>Warszawa Grochowska ul. Grochowska 21</li>
              <li>Warszawa Okęcie Al. Krakowska 75</li>
              <li>Warszawa Targówek ul. Głębocka 15a</li>
              <li>Warszawa Wola Park ul. Górczewska 124</li>
              <li>Warszawa Włochy ul. Popularna 71</li>
              <li>Wrocław Bielany Wrocławskie ul. Czekoladowa 3</li>
              <li>Wrocław Graniczna ul. Graniczna 2a</li>
              <li>Wrocław Korona ul. B. Krzywoustego 126a</li>
              <li>Wrocław Magnolia ul. Legnicka 58</li>
            </ul>
          </div>
          <div className="task__description-header">
            <h3>Pozostałe</h3>
          </div>
          <div className="task__description-more">
            <ul>
              <li>Augustów Castorama Smart ul. Mazurska 10</li>
              <li>Mława Castorama Smart Al. Świętego Wojciecha 17</li>
              <li>
                Ostrów Wielkopolski Castorama Smart ul. Ks. Prałata Czesława
                Majorka 2
              </li>
              <li>Warszawa Ursus Express ul. Herbu Oksza 24</li>
            </ul>
          </div>
        </section>
      </section>
      <section className="task" id="sklepy_kontakt-do-sklepu">
        <div className="task__header">
          <h2>Zasady kontaktu z Hybrydami</h2>
        </div>
        <section className="task__description">
          <div className="task__description-header">
            <h3>Ogólne zasady kontaktu:</h3>
          </div>
          <div className="task__description-more">
            <p>
              W przypadku, w którym będziesz potrzebował/a konsultacji ze
              sklepem (czyli przydarzy Ci się kategoria zwana hybrydą)
              skontaktujesz się z jednym z wprowadzonych do Manago numerów.
            </p>
            <ol>
              <li>SOK (Sektor Obsługi Klienta)</li>
              <li>KD (kierownik Dyżurny)</li>
              <li>Logistyka</li>
            </ol>
            <p>
              W pliku, który znajduje się na teams (lub poniżej) znajdziesz
              kategorie, które przypisane są do poszczególnych numerów i
              zdarzeń. Bardzo ważne! Każdy ze sklepów może mieć przypisany inny
              proces do wskazanego numeru. Z tego powodu, proszę Was o
              szczególną uwagę. Jeśli nie znajdziecie jakiejś kategorii, możecie
              podejść do Pauliny lub do Magdy, kolejno do seniora, wskażemy pod
              jaki numer powinniście się kontaktować.
            </p>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Kontakt_Szczecin_Stargard_fin.xlsx?d=w05a6c94df30549129cec74f144430942&csf=1&web=1&e=sNSptb"
                style={{ color: "red" }}
              >
                Szczecin (kliknij!)
              </a>{" "}
              /
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/_layouts/15/Doc.aspx?sourcedoc=%7BEC54F71B-2189-49E3-977B-82E03FBE1048%7D&file=Kontakt_Warszawa_Pilot_aktualizacja24.10.xlsx&action=default&mobileredirect=true"
                style={{ color: "red" }}
              >
                Warszawa (kliknij!)
              </a>{" "}
              /
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/_layouts/15/Doc.aspx?sourcedoc=%7B08DC2CFA-5241-425A-891C-E2423B4F881B%7D&file=Kontakt%20ze%20sklepem-%20z%20kim%20si%C4%99%20kontaktowa%C4%87-%20Wroc%C5%82aw..xlsx&action=default&mobileredirect=true"
                style={{ color: "red" }}
              >
                Wrocław (kliknij!)
              </a>
            </span>
          </div>
          <div className="task__description-header">
            <h3>Co w przypadku gdy nie uda nam się połączyć?</h3>
          </div>
          <div className="task__description-more">
            <ol>
              <li>SOK/Logistyka - max. Dwie próby połączenia</li>
              <li>
                KD - Gdy nie uda nam się połączyć pod SOK/Logistyka kierujemy
                zapytanie do KD. Jedna próba max.
              </li>
              <li>
                Wiadomość mailowa - Gdy nie uda nam się połączyć do KD, piszemy
                maila do sklepu
              </li>
            </ol>
            <h4 style={{ color: "red" }}>
              Za każdym razem zapisuj w tasku liczbę prób, oraz informacje
              Udana/Nieudana
            </h4>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Pilot;
