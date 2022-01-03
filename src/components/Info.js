import React from "react";
import styled from "styled-components";

const Info = ({ title, images, content }) => {
  return (
    <main>
      <Wrapper>
        <h1>{title}</h1>
        <p>{content}</p>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  h1 {
    text-transform: capitalize;
    color: var(--clr-primary-1);
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
  p {
    color: var(--clr-par-5);
    text-align: start;
  }
`;

export default Info;