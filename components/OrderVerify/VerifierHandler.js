import React from "react";
import Success from "./status/Success";
import Error from "./status/Error";

const VerifierHandler = ({status, order}) => {
  switch (status) {
    case 1:
      return <Success order={order}/>;
    default:
      return <Error />;
  }
};

export default VerifierHandler;
