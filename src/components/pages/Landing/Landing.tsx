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
      <ContentCard header="SigmaCem">
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
