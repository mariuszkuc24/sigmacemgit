import LinksContainer from "../UI/Containers/LinksContainer";
import ExternalLinkButton from "../UI/ExternatLinkButton/ExternatLinkButton";
import {
  systemsAndProductComments,
  usefullLinks,
  otherLinks,
} from "../Mock/mockLinks";
const Landing = () => {
  return (
    <div>
      <LinksContainer title="Castorama - Systemy & Produktowe">
        {systemsAndProductComments.map((d, idx) => {
          return (
            <ExternalLinkButton
              key={idx}
              urlToPage={d.urlToPage}
              namePage={d.pageName}
            ></ExternalLinkButton>
          );
        })}
      </LinksContainer>
      <LinksContainer title="Castorama - Przydatne Strony">
        {usefullLinks.map((d, idx) => {
          return (
            <ExternalLinkButton
              key={idx}
              urlToPage={d.urlToPage}
              namePage={d.pageName}
            ></ExternalLinkButton>
          );
        })}
      </LinksContainer>
      <LinksContainer title="SigmaCem">
        {  otherLinks.map((d, idx) => {
          return (
            <ExternalLinkButton
              key={idx}
              urlToPage={d.urlToPage}
              namePage={d.pageName}
            ></ExternalLinkButton>
          );
        })}
      </LinksContainer>
    </div>
  );
};

export default Landing;
