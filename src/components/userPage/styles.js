import styled from "styled-components";

export const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Bebas Neue", cursive;
  button {
    margin: 10px;
    background-color: darkred;
    border: 1px solid darkred;
    border-radius: 6px;
    width: 200px;
    height: 40px;
    color: gray;
    font-size: 17px;
  }
  button:hover {
    background-color: red;
    border-color: red;
    color: white;
    transition: 0.5s;
  }
`;
