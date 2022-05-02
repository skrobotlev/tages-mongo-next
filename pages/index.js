import * as React from "react";
import CreditCardForm from "../components/credit-card/CreditCardForm";
// import RequestPage from "../components/request-page";

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
      {/* <input type="file" id="image" name="image" value="" /> */}
      <CreditCardForm />
      {/* <RequestPage /> */}
    </div>
  );
};

export default CardPage;
