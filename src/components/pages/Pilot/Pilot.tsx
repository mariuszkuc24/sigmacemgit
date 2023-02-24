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
const urlBathroomProjects =
  "https://intelevospzoo-my.sharepoint.com/:x:/g/personal/jaroslaw_mazurek_sigmacem_com/EfuGcpwrnIFLr76lRvT2-cMBtDxS76Mz-WkWBdYQbmn9rw?e=dUIAve";
const urlEmailListSmartsExpress =
  "https://intelevospzoo-my.sharepoint.com/:x:/g/personal/jaroslaw_mazurek_sigmacem_com/EV3sS3be9lRHreEyhVtKRHsBVJyo40YsAYvNyKt05uSqtQ?e=maElLH";
const urlToTemplateTask =
  "https://intelevospzoo-my.sharepoint.com/:w:/g/personal/jaroslaw_mazurek_sigmacem_com/EcUEpUBYLWVLlkyXbT-8iZIBlGBPuvAHSLArJeyOcNydGA?e=PlNSca";
const castoProKorzysci =
  "https://intelevospzoo-my.sharepoint.com/:x:/g/personal/jaroslaw_mazurek_sigmacem_com/EViot3WnZhdAhnAOkrzagFoBHhyJfbuxlKafUIYcZaXfUQ?e=oRAnJY";
const castoProPodstawoweInformacje =
  "https://intelevospzoo-my.sharepoint.com/:w:/g/personal/jaroslaw_mazurek_sigmacem_com/EZHwES40Gr1GlknILI8-XHQB31Y7mg9fX_uibWYk8ok3Yg?e=mQhFRl";
const castoProScenariusze =
  "https://intelevospzoo.sharepoint.com/:w:/r/sites/CastoramaCommunicationCenter/_layouts/15/Doc.aspx?sourcedoc=%7BBF3A255B-10C0-48AD-8040-E78C5344DD76%7D&file=Scenariusze%20rozm%C3%B3w%20PL-%20ca%C5%82o%C5%9B%C4%87-%20aktualne%2021.02.docx&action=default&mobileredirect=true";
const Pilot = () => {
  return (
    <div>
      <Container title="Przydatne Linki">
        <div className="columns_links_container">
          <ColumnLinksContainer title="CastoPro">
            <ExternalLinkButton
              namePage="Korzyści"
              urlToPage={castoProKorzysci}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Podstawowe Informacje"
              urlToPage={castoProPodstawoweInformacje}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Scenariusze"
              urlToPage={castoProScenariusze}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
          <ColumnLinksContainer title="Poradniki">
            <ExternalLinkButton
              namePage="Formatki Reklamacje"
              urlToPage={urlToTemplateTask}
            ></ExternalLinkButton>
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
              namePage="Usługi Cennik"
              urlToPage={urlServicesListSzczecin}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
          <ColumnLinksContainer title="Warszawa">
            <ExternalLinkButton
              namePage="Kontakt"
              urlToPage={urlContactListWarszawa}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Usługi Cennik"
              urlToPage={urlServicesListWarszawa}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
          <ColumnLinksContainer title="Wrocław">
            <ExternalLinkButton
              namePage="Kontakt"
              urlToPage={urlContactListWroclaw}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Usługi Cennik"
              urlToPage={urlServicesListWroclaw}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
          <ColumnLinksContainer title="Zestawienia">
            <ExternalLinkButton
              namePage="Logistyka maile"
              urlToPage={urlLogisticList}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Projektowanie łazienek maile"
              urlToPage={urlBathroomProjects}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Smarty/Express maile"
              urlToPage={urlEmailListSmartsExpress}
            ></ExternalLinkButton>
            <ExternalLinkButton
              namePage="Zestawienie"
              urlToPage={urlContactToAll}
            ></ExternalLinkButton>
          </ColumnLinksContainer>
        </div>
      </Container>
      <Container title="Sklepy w obsłudze Contact Center">
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
              <h3>Pozostałe</h3>
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
      <Container title="Zasady kontaktu ze sklepami w przypadku których dodajemy kategorie Hybryda">
        <ContentBlock title="Ogólne zasady kontaktu:">
          <p>
            W przypadku, w którym będziesz potrzebował/a konsultacji ze sklepem
            (czyli przydarzy Ci się kategoria zwana hybrydą) skontaktujesz się z
            jednym z wprowadzonych do Manago numerów.
          </p>
          <ol>
            <li>SOK (Sektor Obsługi Klienta)</li>
            <li>KD (kierownik Dyżurny)</li>
            <li>Logistyka</li>
          </ol>
          <p>
            W pliku, który znajduje się na teams (lub poniżej) znajdziesz
            kategorie, które przypisane są do poszczególnych numerów i zdarzeń.
            Bardzo ważne! Każdy ze sklepów może mieć przypisany inny proces do
            wskazanego numeru. Z tego powodu, proszę Was o szczególną uwagę.
            Jeśli nie znajdziecie jakiejś kategorii, możecie podejść do Pauliny
            lub do Magdy, kolejno do seniora, wskażemy pod jaki numer
            powinniście się kontaktować.
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
              Wrocław (kliknij!)
            </a>
          </span>
        </ContentBlock>
        <ContentBlock title="Co w przypadku gdy nie uda nam się połączyć?">
          <div className="task__description-more">
            <h4 style={{ color: "#9aa0a6" }}>SOK/LOGISTYKA</h4>
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
            <h4 style={{ color: "#9aa0a6" }}>KD (Kierownik Dyżurny)</h4>
            <ol>
              <li>KD - max. Trzy próby połączenia</li>
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
        </ContentBlock>
      </Container>
    </div>
  );
};

export default Pilot;
