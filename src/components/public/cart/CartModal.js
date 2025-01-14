import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import { useCartContext } from "../../../contexts/cart_context";
import { useLanguageContext } from "../../../contexts/language_context";

const CartModal = () => {
  const {
    closeModal,
    updateClient,
    cartOrder,
    cartError,
    cartFinalError,
    submitCart
  } = useCartContext();
  const { translation } = useLanguageContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    submitCart();
    return navigate("/", { replace: true });
  };

  return (
    <Wrapper>
      <div className="content glass">
        <div className="header">
          <h2>{translation.purchaseAdress}</h2>
        </div>
        <div className="body">
          <div className="distancer">
            <label htmlFor="clientName">{translation.clientName}:</label>
            <TextField
              value={cartOrder.clientName}
              error={cartError.clientNameError}
              variant="standard"
              helperText={
                cartError.clientNameError && translation.clientNameMsg
              }
              type="text"
              name="clientName"
              id="clientLastName"
              className="glass"
              onChange={updateClient}
            />
          </div>
          <div className="distancer">
            <label htmlFor="clientLastName">
              {translation.clientLastName}:
            </label>
            <TextField
              value={cartOrder.clientLastName}
              error={cartError.clientLastNameError}
              variant="standard"
              helperText={
                cartError.clientLastNameError && translation.clientLastNameMsg
              }
              type="text"
              name="clientLastName"
              id="clientLastName"
              className="glass"
              onChange={updateClient}
            />
          </div>
          <div className="distancer">
            <label htmlFor="clientEmail">{translation.clientEmail}:</label>
            <TextField
              value={cartOrder.clientEmail}
              error={cartError.clientEmailError}
              variant="standard"
              helperText={
                cartError.clientEmailError && translation.clientEmailMsg
              }
              type="email"
              name="clientEmail"
              id="clientEmail"
              className="glass"
              onChange={updateClient}
            />
          </div>
          <div className="distancer">
            <label htmlFor="city">{translation.clientCity}:</label>
            <TextField
              value={cartOrder.city}
              error={cartError.cityError}
              variant="standard"
              helperText={cartError.cityError && translation.clientCityMsg}
              type="text"
              name="city"
              id="city"
              className="glass"
              onChange={updateClient}
            />
          </div>
          <div className="distancer">
            <label htmlFor="postalCode">{translation.clientPostalCode}:</label>
            <TextField
              value={cartOrder.postalCode}
              error={cartError.postalCodeError}
              variant="standard"
              helperText={
                cartError.postalCodeError && translation.clientPostalCodeMsg
              }
              type="number"
              name="postalCode"
              id="postalCode"
              className="glass"
              onChange={updateClient}
            />
          </div>
          <div className="distancer">
            <label htmlFor="streetName">{translation.clientStreetName}:</label>
            <TextField
              value={cartOrder.streetName}
              error={cartError.streetNameError}
              variant="standard"
              helperText={
                cartError.streetNameError && translation.clientStreetNameMsg
              }
              type="text"
              name="streetName"
              id="streetName"
              className="glass"
              onChange={updateClient}
            />
          </div>
          <div className="distancer">
            <label htmlFor="streetNumber">
              {translation.clientStreetNumber}:
            </label>
            <TextField
              value={cartOrder.streetNumber}
              error={cartError.streetNumberError}
              variant="standard"
              helperText={
                cartError.streetNumberError && translation.clientStreetNumberMsg
              }
              type="text"
              name="streetNumber"
              id="streetNumber"
              className="glass"
              onChange={updateClient}
            />
          </div>
        </div>
        <div className="footer">
          <button className="btn" onClick={closeModal}>
            {translation.back}
          </button>
          <button
            className="btn"
            disabled={cartFinalError}
            onClick={handleSubmit}
          >
            {translation.send}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--clr-par-9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  .content {
    width: 600px;
    border-radius: 0.3rem;
  }
  .body {
    padding: 15px;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    position: relative;

    .distancer {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-top: 0.5rem;
      height: 5rem;

      label {
        margin-bottom: 0.5rem;
        text-align: start;
        color: var(--clr-par-5);
        text-transform: capitalize;
      }
      input {
        border: none;
        border-radius: var(--radius);
        font-size: 1.2rem;
        color: var(--clr-par-5);
        background: var(--clr-button-1-tp) !important;
      }

      input:focus {
        outline: none;
        background: var(--clr-button-4-tp);
        color: var(--clr-par-5) !important;
      }

      input:hover {
        background: var(--clr-button-4-tp);
        color: var(--clr-par-5) !important;
      }

      input:-webkit-autofill,
      input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
      }
      input[data-autocompleted] {
        background-color: transparent !important;
      }
    }
  }
  .glass {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(2px);
    margin-bottom: 1rem;
  }
  .header,
  .footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .footer {
    button: disabled, button[disabled] {
      background-color: var(--clr-button-3-tp);
      color: var(--clr-button-1-tp);
    }
    margin-bottom: 1rem;
  }

  @media (max-width: 900px) {
    .content {
      width: 70%;
    }
  }

  @media (max-width: 600px) {
    .content {
      width: 100%;
    }
  }

  @media (max-height: 950px) {
    font-size: 0.8rem;
    .body {
      padding: 5px;
      font-size: 0.8rem;
      .distancer {
        margin-top: 0.4rem;
        height: 4.2rem;
        label {
          margin-bottom: 0.2rem;
        }
        input {
          font-size: 0.8rem;
        }
      }
    }
    .header,
    .footer {
      padding: 0.2rem;
      h2 {
        margin: 0.1rem;
      }
    }

    .footer {
      margin-bottom: 0.8rem;
    }
  }

  @media (max-height: 630px) {
    .header {
      display: none;
    }

    .body {
      padding: 2px;
      .distancer {
        margin: 0.2rem;
      }
    }
  }
`;

export default CartModal;
