import { url } from "inspector";
import React from "react";
import { useState } from "react";
import ExternalLinkButton from "../ExternatLinkButton/ExternatLinkButton";
import "./landing.scss";
const Landing = () => {
  const urlManago360 = "https://manago360.com/pl/azure/sigmacem/login";
  const urlMagento ="https://admin.castorama.pl/index.php/magento/sales_order/index/key/b1e59173d955e2db295e60fb01126ca5b763d6c45c093482c28d4cb277a39a43/";
  const urlDTS = "http://platform.dts.pl/login";
  const urlOrderPanel = "https://admin.castorama.pl/phone-order-panel//";
  const urlProductComments="https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Kopia%20pliku%20Produktowe3.xlsx?d=w432c89357ac243b1b6181b051a0f6019&csf=1&web=1&e=ncfmv7";
  const urlCastoramaMainPage = "https://www.castorama.pl/";
  const urlCastoramaFindShop ="https://www.castorama.pl/informacje/sklepy";
  const urlCastoramaRegulations="https://www.castorama.pl/inne-regulaminy";
  const urlCastoramaAtomia="https://mebleatomia.castorama.pl/";
  const urlCastoramaKitchen="https://kuchnie.castorama.pl/";
  const urlCastoramaFurnitureAssembly = "https://kuchnie.castorama.pl/pl/zakup-i-montaz/usluga-montazu/";
  const urlCastoramaCastoPro ="https://castopro.castorama.pl/pl/home";
  const urlCastoramaBrandList = "https://www.castorama.pl/lp/strefa-marek";
  const urlMicrosoftOutlook = "https://outlook.office365.com/";
  const urlMicrosoftOffice="https://www.office.com/";
  const urlMoniti = "https://admin.moniti.app/#/login?r=%2Fpersonal";
  const urlWorkSchedule = "https://intelevospzoo-my.sharepoint.com/:x:/g/personal/krzysztof_romanowski_sigmacem_com/EfDWMDQx_6BJu5RahIuOyzUBS3xzI9UPVe5nI4RsiQTqAw?e=4%3AOaquSM&at=9&CID=E4C11732-21FA-4974-9FEB-59AEBD0EF62E&wdLOR=c72776B2B-0819-430F-AAD9-EF743C86678A";

  return (
    <div>
      <section className="section-container casto-color">
        <div className="section-container__header section-container__header--casto">
          <h2 className="text--gold">Castorama - Systemy</h2>
        </div>
        <section className="section-links__container">
          <ExternalLinkButton namePage="Manago 360" urlToPage={urlManago360}></ExternalLinkButton>
          <ExternalLinkButton namePage="Magento" urlToPage={urlMagento}></ExternalLinkButton>
          <ExternalLinkButton namePage="DTS" urlToPage={urlDTS}></ExternalLinkButton>
          <ExternalLinkButton namePage="Order Panel" urlToPage={urlOrderPanel}></ExternalLinkButton>
          <ExternalLinkButton namePage="Produktowe" urlToPage={urlProductComments}></ExternalLinkButton>
        </section>
        <div className="section-container__header section-container__header--casto">
          <h2>Castorama - Poradniki do systemów</h2>
        </div>
        <section className="section-links__container">
          <a className="btn-link" rel="noopener noreferrer" href="#">
            Manago 360
          </a>
        </section>
      </section>
      <section className="section-container casto-color">
        <div className="section-container__header section-container__header--casto">
          <h2>Castorama - Przydatne Strony</h2>
        </div>
        <section className="section-links__container">
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlCastoramaMainPage}
          >
            Castorama
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlCastoramaFindShop}
          >
            Znajdź Sklep
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlCastoramaRegulations}
          >
            Regulaminy
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlCastoramaAtomia}
          >
            Meble Atomia
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlCastoramaKitchen}
          >
            Kuchnie
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlCastoramaFurnitureAssembly}
          >
            Montaż jaka firma
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlCastoramaCastoPro}
          >
            CastoPro
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlCastoramaBrandList}
          >
            Strefa Marek
          </a>
        </section>
      </section>
      <section className="section-container sigma-color">
        <div className="section-container__header">
          <h2>SigmaCem</h2>
        </div>
        <section className="section-links__container">
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlMicrosoftOutlook}
          >
            Outlook
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlMicrosoftOffice}
          >
            Office
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlMoniti}
          >
            Moniti
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlWorkSchedule}
          >
            Grafik
          </a>
        </section>
      </section>
    </div>
  );
};

export default Landing;
