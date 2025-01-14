import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useLanguageContext } from "../../../contexts/language_context";

const HomeBottom = () => {
  const { translation } = useLanguageContext();

  const [email, setEmail] = useState("");

  const submitEmail = () => {
    let isEmail = email.includes("@") && email.includes(".");
    if (isEmail === true) {
      axios
        .post("api/system/newsletter", { email: email })
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => {
          const err = `api: /api/system/newsletter [itms_ctxt[POST]], error: ${error}`;
          axios.post("/api/system/error", { err });
        });
    } else {
      alert("Invalid email");
    }
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <Link to="/authors" className="bottom-btn">
          {translation.authors}
        </Link>
        <Link to="/reviews" className="bottom-btn">
          {translation.reviews}
        </Link>
      </div>
      <div>
        <form className="newsletter">
          <label htmlFor="email">
            <h2> {translation.subscribeTo} </h2>
          </label>
          <div className="container-column">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={translation.enterEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" onClick={submitEmail}>
              {translation.subscribe}
            </button>
          </div>
        </form>
      </div>
      <div className="btn-container home-bottom-order bottom-order">
        <div className="bottom-btn">
          <p>{translation.genInfo}</p>
        </div>
        <div className="btn-stack btn-container">
          <Link to="/order" className="bottom-btn">
            {translation.orderHowTo}
          </Link>
          <Link to="/payment" className="bottom-btn">
            {translation.paymentAndShipping}
          </Link>
          <Link to="/disclaimer" className="bottom-btn">
            {translation.disclaimer}
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .newsletter {
    display: flex;
    flex-direction: column;
    background: var(--clr-button-6);
    padding-bottom: 1rem;
    h2 {
      margin: 1rem;
    }
    div {
      display: flex;
      flex-direction: row;
      height: 5vh;
      input {
        width: 80%;
        font-size: 1.5rem;
        border: none;
        margin: 0rem 1rem;
        padding: 0.7rem 0.7rem;
        border-radius: 5%;
        background: var(--clr-primary-8);
        color: var(--clr-par-6);
      }
      input:focus {
        outline: none;
      }
      .btn {
        width: 20%;
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }
  .bottom-order {
    flex-direction: column;
  }
  .btn-container {
    display: flex;
    height: 10vh;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    p {
      letter-spacing: 1rem;
    }
    div:hover {
      background: var(--clr-button-3);
      color: var(--clr-primary-1);
    }
  }
  .bottom-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    background: var(--clr-button-3);
    color: var(--clr-primary-1);
    padding: auto;
    letter-spacing: var(--spacing);
    font-weight: bold;
    transition: var(--transition);
    font-size: 1rem;
    cursor: pointer;
    border-color: transparent;
    border-radius: none;
    width: 100%;
    height: 100%;
    overflow: none;
  }
  .bottom-btn:hover {
    color: var(--clr-primary-2);
    background: var(--clr-button-4);
  }
  .btn-stack {
    width: 100%;
    height: 100%;
    .bottom-btn {
      height: 100%;
    }
  }
  @media (max-width: 900px) {
    .home-bottom-order,
    .btn-stack {
      display: flex;
      flex-direction: column !important;
      height: auto;
      margin-bottom: 2rem;
    }
    .home-bottom-order a {
      padding: 1rem 0;
    }
    .btn-container {
      p {
        letter-spacing: 0.5rem;
      }
      .bottom-btn {
        padding: auto;
      }
    }
    .newsletter {
      input {
        width: 90% !important;
        margin: auto !important;
      }
      .btn {
        width: 90% !important;
        margin: 1rem auto !important;
      }
      div {
        flex-direction: column;
        height: auto;
      }
    }
  }
`;

export default HomeBottom;
