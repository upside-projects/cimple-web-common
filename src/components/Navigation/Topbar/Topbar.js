import React from "react";

import TopbarSimple from "./Simple/Simple";
import TopbarMarket from "./Market/Market";
import TopbarSign from "./Sign/Sign";

const renderTopbar = type => {
  switch (type) {
    case "simple":
      return <TopbarSimple />;
    case "market":
      return <TopbarMarket />;
    case "sign":
      return <TopbarSign />;
    default:
      return <TopbarSimple />;
  }
};

const Topbar = ({ type }) => {
  return renderTopbar(type);
};

export default Topbar;
