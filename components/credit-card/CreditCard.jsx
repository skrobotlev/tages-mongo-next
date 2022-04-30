import React from "react";

const CreditCard = (values) => {
  const { cardNumber, expirationDate, cvv, onFocus } = values;
  return (
    <div className="credit-card">
      <div className={`credit-card__inner ${onFocus ? "active" : ""}`}>
        <div className="credit-card__front">
          <div className="credit-card__card">
            <div className="credit-card__number">
              {cardNumber ? cardNumber : "#### #### #### ####"}
            </div>
            <div className="credit-card__group">
              <div className="credit-card__expire">
                {expirationDate ? expirationDate : "00/00"}
              </div>
            </div>
          </div>
        </div>
        <div className="credit-card__back">
          <div className="credit-card__card">
            <div className="credit-card__stripe"></div>
            <div className="credit-card__group">
              <div className="credit-card__empty">
                <span className="credit-card__cvc">{cvv ? cvv : "000"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
