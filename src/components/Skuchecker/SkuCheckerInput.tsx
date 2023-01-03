import React, { useState } from "react";
import "./SkuCheckerInput.scss";
const SkuCheckerInput = (props: any)=> {
    
  const [enteredSku, setEnteredSku] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredSku(event.target.value.trim());
  };
  const saveNumberSku = ()=>{
    props.onSubmitSkuNumber(enteredSku);
  }
  return (
    <div className="sku-checker-input-panel">
     <p>Podaj numer SKU produktu:</p>
      <label htmlFor="inp" className="inp">
        <input
          type="text"
          id="inp"
          placeholder="&nbsp;"
          value={enteredSku}
          onChange={handleChange}
        />
        <span className="label">Numer SKU</span>
        <span className="focus-bg">{enteredSku}</span>
      </label>
      <button className="btn-submit" onClick={saveNumberSku}>Wyświetl informację</button>
    </div>
  );
};

export default SkuCheckerInput;
