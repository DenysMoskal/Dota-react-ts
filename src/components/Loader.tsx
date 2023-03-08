import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <Audio height="80" width="80" color="gray" ariaLabel="three-dots-loading" />
  );
};

export default Loader;
