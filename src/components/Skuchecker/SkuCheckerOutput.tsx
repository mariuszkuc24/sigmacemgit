import "./SkuCheckerOutput.scss";

const SkuCheckerOutput = (props: any) => {
  let shopSection: any = "";
  let shopSectors: any = [];
  const firstNumAtEnteredSku = parseInt(props.inputed.charAt(0));

  const containsOnlyNumbers = (str: any) => {
    return /^\d+$/.test(str);
  };
  console.log("inputed", props.inputed.length);
  if (
    containsOnlyNumbers(props.inputed) &&
    (props.inputed.length === 5 || props.inputed.length === 6)
  ) {
    switch (firstNumAtEnteredSku) {
      case 1:
        shopSection = "Metalowy";
        shopSectors = ["Techniczny", "Remontujesz"];
        break;
      case 2:
        shopSection = "Narzędzia";
        shopSectors = ["Techniczny", "Remontujesz"];
        break;
      case 3:
        shopSection = "Drewno";
        shopSectors = ["Budujesz"];
        break;
      case 4:
        shopSection = "Pokrycia podłogowe";
        shopSectors = ["Urządzasz"];
        break;
      case 5:
        shopSection = "Sanitarny";
        shopSectors = ["Techniczny", "Remontujesz", "Urządzasz"];
        break;
      case 6:
        shopSection = "Ogród";
        shopSectors = ["Ogród"];
        break;
      case 7:
        shopSection = "Dekorujesz";
        shopSectors = ["Dekoracje"];
        break;
      case 8:
        shopSection = "Elektryczny";
        shopSectors = ["Metalowy", "Remontujesz"];
        break;
      case 9:
        shopSection = "Budowlany";
        shopSectors = ["Budujesz"];
        break;
      default:
        shopSection = "Nie ta takiego działu, spróbuj ponownie!";
        shopSectors = ["Nie ta takiego sektoru, spróbuj ponownie!"];
        break;
    }
  } else if (props.inputed.length > 6) {
    shopSection = "Podano za długi numer SKU, spróbuj ponownie!";
    shopSectors = ["Podano za długi numer SKU, spróbuj ponownie!"];
  } else if (!containsOnlyNumbers(props.inputed)) {
    shopSection = "Podano błędne dane!";
    shopSectors = ["Podano błędne dane!"];
  }

  return (
    <div className="sku-checker-output-panel">
      <div className="title">
        <h3>Wynik</h3>
      </div>
      <div className="sku-checker-output-panel-content">
        <h4>Podany numer SKU:</h4>
        <ul>
          <li>{props.inputed}</li>
        </ul>
        <h4>Dział na którym go znajdziesz:</h4>
        <ul>
          <li>{shopSection}</li>
        </ul>
        <h4>Sektor/y na którym go znajdziesz:</h4>
        <ul>
            {shopSectors.map((shopSector: any) => (
              <li key={shopSector}>{shopSector}</li>
            ))}{" "}
        </ul>
      </div>
    </div>
  );
};

export default SkuCheckerOutput;
