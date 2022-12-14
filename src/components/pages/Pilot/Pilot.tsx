import Container from "../../UI/Containers/Container";
import ExternalLinkButton from "../../UI/ExternatLinkButton/ExternatLinkButton";
import ColumnLinksContainer from "../../UI/Containers/ColumnLinksContainer/ColumnLinksContainer";
import ShopListItem from "../../ShopListItem/ShopListItem";
import ContentBlock from "../../UI/Containers/ContentBlock/ContentBlock";
import { shopWithHibrid, shopWithnoutHibrid } from "../../Mock/mockLinks";
import "./Pilot.scss";
const urlProcedures =
  "https://intelevospzoo.sharepoint.com/:w:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/Pilot_Wroc%C5%82aw_Warszawa_scenariusze_post%C4%99powania.docx?d=w654a3254fd804b0d830335e4733b5026&csf=1&web=1&e=s1p7vk";
const urlContactListSzczecin =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Kontakt_Szczecin_Stargard_fin.xlsx?d=w05a6c94df30549129cec74f144430942&csf=1&web=1&e=sNSptb";
const urlContactListWarszawa =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/Kontakt_Warszawa_Pilot_aktualizacja24.10.xlsx?d=wec54f71b218949e3977b82e03fbe1048&csf=1&web=1&e=1auWyg";
const urlContactListWroclaw =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/Kontakt%20ze%20sklepem-%20z%20kim%20si%C4%99%20kontaktowa%C4%87-%20Wroc%C5%82aw..xlsx?d=w08dc2cfa5241425a891ce2423b4f881b&csf=1&web=1&e=gCYptJ";
const urlContactToAll =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Aktualne_Zestawienie_Kontaktowe_Castorama%2027.06.2022.xlsx?d=w7daa371e51894b58aa0922af97f47971&csf=1&web=1&e=cKs0O8";
const urlServicesListSzczecin =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Szczecin_Stargard_us%C5%82ugi_fin2.xlsx?d=wfa892ccfca0e457d9d7c73c028464b07&csf=1&web=1&e=PsVUEc";
const urlServicesListWarszawa =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa_Szczecin_Stargard/Kopia%20pliku%20Pilot%20Warszawa%20-%20Us%C5%82ugi_finalna_wersja.xlsx?d=wdcf17179ff394eecae44a1be24ab226f&csf=1&web=1&e=GAowoW";
const urlServicesListWroclaw =
  "https://intelevospzoo.sharepoint.com/:x:/r/sites/CastoramaCommunicationCenter/Shared%20Documents/General/Piloty_Wroc%C5%82aw_Warszawa/zestawienia_do%20uzupe%C5%82nienia%20sklepy_ca%C5%82o%C5%9B%C4%87%201.xlsx?d=w717b6aa3d15b4377a2dbff687b3063de&csf=1&web=1&e=hzYYLu";
const urlLogisticList =
  "https://media.castorama.pl/media/pdf/Castorama_Polska_emails.pdf";

const Pilot = () => {
  return (
    <div>
      <Container title="Przydatne Linki">
        <div className="columns_links_container">
          <ColumnLinksContainer title="Poradniki">
            <ExternalLinkButton
              namePage="Procedury"
              urlToPage={urlProcedures}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
          <ColumnLinksContainer title="Szczecin">
            <ExternalLinkButton
              namePage="Kontakt"
              urlToPage={urlContactListSzczecin}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Us??ugi Cennik"
              urlToPage={urlServicesListSzczecin}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
          <ColumnLinksContainer title="Warszawa">
            <ExternalLinkButton
              namePage="Kontakt"
              urlToPage={urlContactListWarszawa}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Us??ugi Cennik"
              urlToPage={urlServicesListWarszawa}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
          <ColumnLinksContainer title="Wroc??aw">
            <ExternalLinkButton
              namePage="Kontakt"
              urlToPage={urlContactListWroclaw}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Us??ugi Cennik"
              urlToPage={urlServicesListWroclaw}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
          <ColumnLinksContainer title="Zestawienia">
            <ExternalLinkButton
              namePage="Logistyka maile"
              urlToPage={urlLogisticList}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Zestawienie"
              urlToPage={urlContactToAll}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
        </div>
      </Container>
      <Container title="Sklepy w obs??udze Contact Center">
        <div className="task-content-divide-half">
          <div className="half">
            <div className="task__description-header">
              <h3>
                W przypadku kontaktu z tym sklepem dodajemy kategorie "Hybryda"
              </h3>
            </div>
            <div className="task__description-more">
              <ul>
                {shopWithHibrid.map((d, idx) => {
                  return (
                    <ShopListItem
                      key={idx}
                      urlToShop={d.urlToShop}
                      shopName={d.shopName}
                    ></ShopListItem>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="half">
            <div className="task__description-header">
              <h3>Pozosta??e</h3>
            </div>
            <div className="task__description-more">
              <ul>
                {shopWithnoutHibrid.map((d, idx) => {
                  return (
                    <ShopListItem
                      key={idx}
                      urlToShop={d.urlToShop}
                      shopName={d.shopName}
                    ></ShopListItem>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container title="Zasady kontaktu ze sklepami w przypadku kt??rych dodajemy kategorie Hybryda">
        <ContentBlock title="Og??lne zasady kontaktu:">
          <p>
            W przypadku, w kt??rym b??dziesz potrzebowa??/a konsultacji ze sklepem
            (czyli przydarzy Ci si?? kategoria zwana hybryd??) skontaktujesz si?? z
            jednym z wprowadzonych do Manago numer??w.
          </p>
          <ol>
            <li>SOK (Sektor Obs??ugi Klienta)</li>
            <li>KD (kierownik Dy??urny)</li>
            <li>Logistyka</li>
          </ol>
          <p>
            W pliku, kt??ry znajduje si?? na teams (lub poni??ej) znajdziesz
            kategorie, kt??re przypisane s?? do poszczeg??lnych numer??w i zdarze??.
            Bardzo wa??ne! Ka??dy ze sklep??w mo??e mie?? przypisany inny proces do
            wskazanego numeru. Z tego powodu, prosz?? Was o szczeg??ln?? uwag??.
            Je??li nie znajdziecie jakiej?? kategorii, mo??ecie podej???? do Pauliny
            lub do Magdy, kolejno do seniora, wska??emy pod jaki numer
            powinni??cie si?? kontaktowa??.
          </p>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={urlContactListSzczecin}
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
              href={urlContactListWarszawa}
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
              href={urlContactListWroclaw}
              style={{ color: "red" }}
            >
              Wroc??aw (kliknij!)
            </a>
          </span>
        </ContentBlock>
        <ContentBlock title="Co w przypadku gdy nie uda nam si?? po????czy???">
          <div className="task__description-more">
            <h4 style={{ color: "#9aa0a6" }}>SOK/LOGISTYKA</h4>
            <ol>
              <li>SOK/Logistyka - max. Dwie pr??by po????czenia</li>
              <li>
                KD - Gdy nie uda nam si?? po????czy?? pod SOK/Logistyka kierujemy
                zapytanie do KD. Jedna pr??ba max.
              </li>
              <li>
                Wiadomo???? mailowa - Gdy nie uda nam si?? po????czy?? do KD, piszemy
                maila do sklepu
              </li>
            </ol>
            <h4 style={{ color: "#9aa0a6" }}>KD (Kierownik Dy??urny)</h4>
            <ol>
              <li>KD - max. Trzy pr??by po????czenia</li>
              <li>
                Wiadomo???? mailowa - Gdy nie uda nam si?? po????czy?? do KD, piszemy
                maila do sklepu
              </li>
            </ol>
            <h4 style={{ color: "red" }}>
              Za ka??dym razem zapisuj w tasku liczb?? pr??b, oraz informacje
              Udana/Nieudana
            </h4>
          </div>
        </ContentBlock>
      </Container>
    </div>
  );
};

export default Pilot;
