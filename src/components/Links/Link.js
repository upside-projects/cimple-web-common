import React from "react";

const Link = ({ to, children }) => {
  const internal = /^\/(?!\/)/.test(to);
  const external = /^http/.test(to);

  if (internal) {
    return 0; //REPLACE WITH ROUTER;
  }

  if (external) {
    return <a href={to}>{children}</a>;
  }
};

export default Link;
