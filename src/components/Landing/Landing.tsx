import React from "react";
import { useState } from "react";
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

  return (
    <div>
      <section className="section-container casto-color">
        <div className="section-container__header section-container__header--casto">
          <h2 className="text--gold">Castorama - Systemy</h2>
        </div>
        <section className="section-links__container">
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlManago360}
          >
            Manago 360
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlMagento}
          >
            Magento
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlDTS}
          >
            DTS
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href={urlOrderPanel}
          >
            Order Panel
          </a>
          <a
            className="btn-link btn--red"
            rel="noopener noreferrer"
            target="_blank"
            href={urlProductComments}
          >
            Produktowe
          </a>
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
            href="https://castopro.castorama.pl/pl/home"
          >
            CastoPro
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.castorama.pl/lp/strefa-marek"
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
            href="https://outlook.office365.com/"
          >
            Outlook
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.office.com/"
          >
            Office
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://admin.moniti.app/#/login?r=%2Fpersonal"
          >
            Moniti
          </a>
          <a
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://intelevospzoo-my.sharepoint.com/:x:/g/personal/krzysztof_romanowski_sigmacem_com/EfDWMDQx_6BJu5RahIuOyzUBS3xzI9UPVe5nI4RsiQTqAw?e=4%3AOaquSM&at=9&CID=E4C11732-21FA-4974-9FEB-59AEBD0EF62E&wdLOR=c72776B2B-0819-430F-AAD9-EF743C86678A"
          >
            Grafik
          </a>
        </section>
      </section>
    </div>
  );
};

export default Landing;
