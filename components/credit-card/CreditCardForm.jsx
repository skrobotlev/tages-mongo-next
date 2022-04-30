import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CreditCard from "./CreditCard";
import * as Yup from "yup";
import valid from "card-validator";
import Store from "../../store/store";
const initialValues = {
  cardNumber: "",
  expirationDate: "",
  cvv: "",
  amount: "",
};

const CreditCardForm = () => {
  const [onFocus, setOnFocus] = useState(false);
  const handleFocus = () => {
    setOnFocus(true);
  };
  const store = new Store();

  const handleOnBlur = () => {
    setOnFocus(false);
  };

  const handleOnSubmit = (values) => {
    store.addCard(values);
  };

  return (
    <div>
      <div className="credit-card-form">
        <Formik
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
          onBlur={handleOnBlur}
          validationSchema={Yup.object().shape({
            cardNumber: Yup.string()
              .test(
                "test-number",
                "Invalid number",
                (value) => valid.number(value).isValid
              )
              .min(16)
              .required(),

            expirationDate: Yup.string()
              .test(
                "test-number",
                "Invalid number",
                (value) => valid.expirationDate(value).isValid
              )
              .required(),
            cvv: Yup.string()
              .test(
                "test-number",
                "Invalid number",
                (value) => valid.cvv(value).isValid
              )
              .required(),
          })}
        >
          {({ values, handleSubmit, handleBlur }) => {
            return (
              <Form
                id="grad"
                className="credit-card-form__form"
                onSubmit={handleSubmit}
              >
                <CreditCard {...values} onFocus={onFocus} />
                <div className="credit-card-form__title">
                  <label
                    htmlFor="cardNumber"
                    className="credit-card-form__label"
                  >
                    Card Number
                  </label>
                  <ErrorMessage
                    name="cardNumber"
                    render={(msg) => (
                      <div className="credit-card-form__warning">{msg}</div>
                    )}
                  />
                </div>
                <Field
                  id="cardNumber"
                  name="cardNumber"
                  className="credit-card-form__input"
                  type="string"
                  value={values.cardNumber
                    .replace(/[^\dA-Z]/g, "")
                    .replace(/(.{4})/g, "$1 ")
                    .trim()}
                />
                <div className="credit-card-form__group">
                  <div className="credit-card-form__child">
                    <div className="credit-card-form__title">
                      <label
                        htmlFor="expirationDate"
                        className="credit-card-form__label"
                      >
                        Expiration Date
                      </label>
                      <ErrorMessage
                        name="expirationDate"
                        render={(msg) => (
                          <div className="credit-card-form__warning">{msg}</div>
                        )}
                      />
                    </div>
                    <Field
                      id="expirationDate"
                      name="expirationDate"
                      className="credit-card-form__input"
                      type="text"
                      value={values.expirationDate
                        .replace(/^(\d\d)(\d)$/g, "$1/$2")
                        .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
                        .replace(/[^\d\/]/g, "")}
                    />
                  </div>
                  <div className="credit-card-form__child">
                    <div className="credit-card-form__title">
                      <label htmlFor="cvv" className="credit-card-form__label">
                        CVC
                      </label>
                      <ErrorMessage
                        name="cvv"
                        render={(msg) => (
                          <div className="credit-card-form__warning">{msg}</div>
                        )}
                      />
                    </div>
                    <Field
                      id="cvv"
                      name="cvv"
                      className="credit-card-form__input"
                      type="text"
                      value={values.cvv}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="credit-card-form__childAmount">
                  <label htmlFor="amount">Amount</label>

                  <Field
                    id="amount"
                    placeholder="Amount"
                    name="amount"
                    className="credit-card-form__input"
                    type="text"
                    value={values.amount}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <button className="btn-grad" type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CreditCardForm;
