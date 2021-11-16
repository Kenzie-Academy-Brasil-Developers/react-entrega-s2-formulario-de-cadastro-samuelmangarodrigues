import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    font-size: 20px;
    margin: 10px;
    border: 1px solid lightblue;
    border-radius: 6px;
    font-family: "Source Sans Pro", sans-serif;
    width: 230px;
    height: 28px;
  }
  span {
    color: red;
    font-size: 13px;
    margin: 0 10px 0 10px;
    width: 236px;
  }
  input:hover {
    background-color: lightcyan;
    border-color: cyan;
    transition: 0.3s;
  }
  button {
    margin: 10px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    font-weight: 200;
    background-color: darkgreen;
    color: lightgray;
    border-color: 1px solid gray;
    border-radius: 6px;
    width: 140px;
    height: 29px;
  }
  button:hover {
    background-color: green;
    color: white;
    border-color: white;
    transition: 0.3s;
  }
`;
export const Container = styled.div`
  background-color: white;
  border-color: white;
  border-radius: 6px;
  h1 {
    margin: 10px;
    color: black;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 300;
  }
`;
