export const companies = [
  {
    id: "wroclawBielany",
    name: "Wrocław Bielany",
    availableServices: [
      {
        id: "service1",
        name: "service 1",
      },
      {
        id: "service4",
        name: "service 4",
      },
    ],
  },
  {
    id: "wroclawKorona",
    name: "company 2",
    availableServices: [
      {
        id: "service3",
        name: "service 3",
      },
      {
        id: "service2",
        name: "service 2",
      },
    ],
  },
  {
    id: "company3",
    name: "company 3",
    availableServices: [
      {
        id: "service1",
        name: "service 1",
      },
      {
        id: "service3",
        name: "service 3",
      },
    ],
  },
  {
    id: "company4",
    name: "company 4",
    availableServices: [
      {
        id: "service3",
        name: "service 3",
      },
      {
        id: "service4",
        name: "service 4",
      },
    ],
  },
];

export const services = [
  {
    id: "service1",
    name: "service 1",
  },
  {
    id: "service2",
    name: "service 2",
  },
  {
    id: "service3",
    name: "service 3",
  },
  {
    id: "service4",
    name: "service 4",
  },
];

export const tasksLists = [
  {
    id: "category01",
    name: "Asortyment",
    subCategories: [
      {
        taskId: "asortyment01",
        taskTitle: "Cesja",
        taskCategory: "Asortyment",
        taskSubcategory: "Cesja",
        taskPriority: "",
        taskSkuCode: "Wpisujemy",
        taskContent: [
          {
            taskContentHeader: "Czym jest cesja?",
            taskContentMore:
              "Polega on na tym że przy niedostępności produktu, w sklepie, w którym Klient chcę zrealizować zakupy na jego specjalne życzenie sprowadzany jest ze sklepu, w którym jest dostępny.",
            taskContentLink: "",
          },
          {
            taskContentHeader: "Jak wygląda proces?",
            taskContentMore:
              "Decyzję w temacie cesji pomiędzy sklepami podejmuje Kierownik działu, na którym znajduje się produkt. W tym celu należy skontaktować się ze sklepem, do którego chciałby/chciałaby Pan/Pani sprowadzić produkt oraz w przypadku pozytywnej odpowiedzi sklep może poprosić o wpłacenie zaliczki. ",
            taskContentLink: "",
          },
          {
            taskContentHeader: "Obsługa na infolinii",
            taskContentMore:
              "Klient jest zainteresowany cesją, CC w pierwszej kolejności powinno zaproponować złożenie zamówienia online a następnie zakup telefoniczny. Jeśli Klient jest zainteresowany złożeniem zamówienie online, CC powinno, jeżeli to konieczne przejść z nim w miarę możliwości proces zakupu. Jeśli Klient zainteresowany złożeniem zamówienia telefonicznego, CC składa takie zamówienie dla Klienta. Jeśli Klient nie jest zainteresowany propozycjami: CC powinno przekazać Klientowi, że w takim razie powinien udać się do sklepu, w celu złożenia zapotrzebowania na cesję. CC przekazuje również taką informację do sklepu bardzo Ważne: tylko na dział (lub pod adres, który wskazany jest przez sklep), z którego Klient był zainteresowany cesją.",
            taskContentLink: "",
          },
        ],
      },
      {
        taskId: "asortyment002",
        taskTitle: "Dostępność",
        taskCategory: "Asortyment",
        taskSubcategory: "Dostępność",
        taskPriority: "",
        taskSkuCode: "Wpisujemy",
        taskContent: [
          {
            taskContentHeader: "Proces:",
            taskContentMore:
              "Pobieramy Kod Produktu, lub jego nazwę, prosimy o podanie sklepu z którego Klient chcę dokonać zakupu. sprawdzamy stan na stronie oraz podajemy Klientowi. W przypadku, w którym potrzebny Klientowi towar jest na stanie sklepu w małej ilości, należy poprosić Klienta, aby udał się bezpośrednio do sklepu.. Jeśli jest brak, możemy sprawdzić dostępność w inny sklepach w tym samym panelu. Nie dzwonimy do sklepu z zapytaniem o dostępność!",
            taskContentLink: "",
          },
        ],
      },
      {
        taskId: "asortyment003",
        taskTitle: "Dodatkowe informacje o produktach",
        taskCategory: "Asortyment",
        taskSubcategory: "Dodatkowe informacje o produktach",
        taskPriority: "",
        taskSkuCode: "Wpisujemy",
        taskContent: [
          {
            taskContentHeader: "Proces:",
            taskContentMore:
              "Asortyment dodatkowe informacje o produktach - w przypadku, w którym Klient zaintersowany jest dodatkowymi informacjami związanymi z produktem. Konsultant w pierwszej kolejności weryfikuje infromacje w specyfikacji na stronie www, kolejno weryfikuje dostępne materiały i specyfikacje pod linkiem dostępnym poniżej. Jeśli po weryfikacji wszytkich dostępnych materiałów konsultant nie ma możliwości udzielnia odpowiedzi Klientowi należy go zaprosić do bezpośredniej wizyty w sklepie lub w łatwiejszych przypadkach zadzwonić do sklepu w imieniu Klienta. UWAGA: nie odsyłamy Klientów do innych sklepów podając do nich numer telefonu.",
            taskContentLink:
              "https://kfplc.sharepoint.com/sites/PLCAJakosc/SitePages/Dokumentacja-jako%C5%9Bciowa.aspx",
          },
          {
            taskContentHeader: "Drzwi prawe czy lewe - jakie to ma znaczenie?",
            taskContentMore: "",
            taskContentLink:
              "https://www.castorama.pl/drzwi-prawe-czy-lewe-jakie-to-ma-znaczenie-ins-88240.html",
          },
        ],
      },
    ],
  },
  {
    id: "category02",
    name: "Brak Kontaktu (CHAT)",
    subCategories: [
      {
        taskId: "brakkontaktu01",
        taskTitle: "Brak kontaktu",
        taskCategory: "Brak kontaktu",
        taskSubcategory: "Brak kontaktu",
        taskPriority: "",
        taskSkuCode: "Wpisujemy",
        taskContent: [
          {
            taskContentHeader: "Opis:",
            taskContentMore: "Kodujemy w ten sposób CHATY w których Klient nie zadał pytania w ciągu 3minut.",
            taskContentLink: "",
          },
        ],
      },
    ],
  },
  {
    id: "category04",
    name: "Głuchy Telefon",
    subCategories: [
      {
        taskId: "gluchytelefon001",
        taskTitle: "Głuchy Telefon",
        taskCategory: "Głuchy Telefon",
        taskSubcategory: "Głuchy Telefon",
        taskPriority: "",
        taskSkuCode: "",
        taskContent: [
          {
            taskContentHeader: "Opis:",
            taskContentMore: "Kodujemy w ten sposób połączenia w których nikogo nie było słychać, i od razu zakończyło się połączneie.",
            taskContentLink: "",
          },
        ],
      },
    ],
  },
  {
    id: "category05",
    name: "Zobowiazania",
    subCategories: [
      {
        taskId: "zobowiazania001",
        taskTitle: "Faktura Proforma",
        taskCategory: "Zobowiazania",
        taskSubcategory: "Faktura Proforma",
        taskPriority: "",
        taskSkuCode: "",
        taskContent: [
          {
            taskContentHeader: "Opis:",
            taskContentMore: "Faktura proforma stosowana jest w obrocie gospodarczym jako oferta handlowa lub dokument określający kwotę do zapłaty za przyszłą usługę, lub dostawę towaru. Może także stanowić formę wezwania do zapłaty lub dokument informujący o kwocie wymaganej od kontrahenta zaliczki od przyszłej dostawy towaru. Możliwość uzyskania jest tylko i wyłącznie w sklepie stacjonarnym.",
            taskContentLink: "",
          },
        ],
      },
    ],
  },
];
