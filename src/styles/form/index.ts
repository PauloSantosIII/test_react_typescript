import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: 40vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10vw;
  padding-right: 10vw;

  h1 {
    font-size: 3em;
    text-align: left;
    color: var(--font-color);
    font-weight: 100;
  }

  p {
    font-size: 1.2em;
    color: var(--color);
    font-weight: 700;
    margin: 30px 0;
  }

  h6 {
    font-size: 1em;
    text-decoration: none;
    color: var(--color);
    text-align: center;
    font-weight: 300;
    margin-top: 20px;

    a {
      color: var(--secondary);
    }
  }

  @media (max-width: 1024px) {
    width: 60vw;
    right: 0;
    padding-left: 13vw;
    padding-right: 13vw;

    h1 {
      margin-right: 6vw;
    }

    p {
      margin-right: 9vw;
    }
  }
`;

export const ButtonForm = styled.button`
  width: 100%;
  height: 40px;
  font-weight: 700;
  margin-top: 20px;
  color: var(--bgcolor);
  background-image: linear-gradient(to right, var(--primary), var(--secondary));
  border: none;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 5px #9d4fae88;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Error = styled.span`
  color: #f40909;
`;

export const LabelForm = styled.label`
  width: 100%;
  font-size: 0.7em;
  font-weight: 400;
  margin: 5px;
  text-transform: uppercase;
`;

export const InputForm = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid var(--color);
  border-radius: 5px;
`;
