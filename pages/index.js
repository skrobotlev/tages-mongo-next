import * as React from "react";
import CreditCardForm from "../components/credit-card/CreditCardForm";

const CardPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "25%",
      }}
    >
      <CreditCardForm />
    </div>
  );
};

export default CardPage;
