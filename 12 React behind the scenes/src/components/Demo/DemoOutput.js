import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("Demo showing");
  return <MyParagraph>{props.show ? `A new paragraph` : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
