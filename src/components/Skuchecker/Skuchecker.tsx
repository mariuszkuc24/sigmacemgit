import React, { useState } from "react";
import Panel from "../UI/Panel/Panel";
import SkuCheckerInput from "../Skuchecker/SkuCheckerInput";
import SkuCheckerOutput from "../Skuchecker/SkuCheckerOutput";
const SkuChecker = (props: any) => {
  const [enteredSku, setEnteredSku] = useState("");
  const showEnteredSku = (enteredSku: any) => {
    setEnteredSku(enteredSku);
  };
  return (
    <Panel title="SKU Checker">
      <SkuCheckerInput onSubmitSkuNumber={showEnteredSku} />
      <SkuCheckerOutput inputed={enteredSku} />
    </Panel>
  );
};

export default SkuChecker;
