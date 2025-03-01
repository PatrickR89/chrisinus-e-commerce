import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useLanguageContext } from "../../../contexts/language_context";

const NavCart = () => {
  const { current_language, languages, switchLang } = useLanguageContext();
  return (
    <Wrapper>
      <div className="nav-container">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <form onSubmit={(e) => e.preventDefault()}>
          <select
            name="language"
            id="language"
            value={current_language}
            onChange={switchLang}
          >
            {languages.map((l, index) => {
              return (
                <option key={index} value={l}>
                  {l}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 15em;
    a {
      font-size: 2rem;
      margin: 2rem;
      color: var(--clr-button-2);
      transition: 0.3s ease-out;
    }
    a:hover {
      cursor: ponter;
      color: var(--clr-button-4);
    }
    form {
      display: flex;
      flex-direction: column;
    }
    select {
      background: transparent;
      border: none;
      color: var(--clr-button-3);
      font-size: 1.2rem;
      margin: 0.75rem 0;
    }
    select:focus {
      outline: none;
      background: none;
    }
  }
`;

export default NavCart;
