import { url } from "inspector";
import React from "react";
import { useState } from "react";
import ContentCard from "../../UI/ContentCard/ContentCard";
import ExternalLinkButton from "../../UI/ExternatLinkButton/ExternatLinkButton";
import { systemsAndProductComments, usefullLinks, otherLinks } from "../../Mock/mockLinks";
import "./landing.scss";
const Landing = () => {
  return (
    <div>
      <ContentCard
        header="Castorama - Systemy & Produktowe"
<<<<<<< HEAD
=======
        headerStyling="gold-header"
        className=""
>>>>>>> a3a0a0df8be14f8caeecc021b8bf18d84f266da9
      >
        <section className="section-links__container">
          {systemsAndProductComments.map((d, idx) => {
            return (
              <ExternalLinkButton
                key={idx}
                urlToPage={d.urlToPage}
                namePage={d.pageName}
              ></ExternalLinkButton>
            );
          })}
        </section>
      </ContentCard>
<<<<<<< HEAD
      <ContentCard header="SigmaCem">
=======
      <ContentCard header="SigmaCem" headerStyling="" className="">
>>>>>>> a3a0a0df8be14f8caeecc021b8bf18d84f266da9
        <section className="section-links__container">
          {usefullLinks.map((d, idx) => {
            return (
              <ExternalLinkButton
                key={idx}
                urlToPage={d.urlToPage}
                namePage={d.pageName}
              ></ExternalLinkButton>
            );
          })}
        </section>
      </ContentCard>
      <ContentCard
        header="SigmaCem"
<<<<<<< HEAD
=======
        headerStyling="sigma-heading"
        className="sigma-color"
>>>>>>> a3a0a0df8be14f8caeecc021b8bf18d84f266da9
      >
        <section className="section-links__container">
          {otherLinks.map((d, idx) => {
            return (
              <ExternalLinkButton
                key={idx}
                urlToPage={d.urlToPage}
                namePage={d.pageName}
              ></ExternalLinkButton>
            );
          })}
        </section>
      </ContentCard>
    </div>
  );
};

export default Landing;
