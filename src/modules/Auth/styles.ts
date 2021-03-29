import styled from "styled-components";

export const AuthContainer = styled.section`
  position: relative;
`;

export const HeaderBlock = styled.div`
  width: 100%;
  height: 220px;
  background-color: #5682a3;
`;

export const AuthHeader = styled.div`
  width: 600px;
  height: 50px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  color: #ffffff;
  text-align: center;

  h1 {
    color: inherit;
    background: inherit;
  }

  h1 a {
    color: #c8c5be;
    text-decoration: underline;
    text-decoration-color: #c8c5be;
  }

  button {
    font-size: 13px;
    line-height: 20px;
    color: inherit;
    background: inherit;
    border: 2px solid #ffffff;
    border-radius: 5px;
    height: 30px;
    padding: 0 5px;
  }
`;

export const AuthContent = styled.div`
  margin: 0 auto;
  padding: 45px 65px;
  width: 400px;
  transform: translateY(-20%);
  box-shadow: 0 1px 1px rgba(97, 127, 152, 0.2), 1px 0 0 rgba(97, 127, 152, 0.1),
    -1px 0 0 rgba(97, 127, 152, 0.1);
  border-radius: 2px;
  background-color: #ffffff;
`;

export const AuthContentContainer = styled.section`
  display: flex;
  flex-direction: column;

  header {
    background: inherit;
  }

  h2 {
    color: #222;
    margin: 0 0 20px;
    font-size: 15px;
    font-weight: 700;
    background: inherit;
  }

  p {
    color: #999;
    margin: 15px 0 30px;
    font-size: 13px;
    line-height: 160%;
    background: inherit;
  }
`;

export const AuthContentFormik = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  span {
    color: red;
    font-size: 13px;
  }

  label {
    font-weight: 400;
    color: #999;
    display: block;
    font-size: 13px;
  }

  label:first-letter {
    text-transform: uppercase;
  }

  input {
    color: #000;
    display: inline-block;
    border: 0;
    border-bottom: 1px solid #999;
    outline: 0;
    font-size: 13px;
    padding: 5px 0;
    margin: 10px 0;
    width: 100%;
    resize: none;
    box-shadow: none;
  }

  button {
    cursor: pointer;
    border: none;
    color: #fff;
    background-color: #5682a3;
    margin-top: 20px;
    padding: 5px 0;
    transform: translateX(50%);
    width: 50%;
  }
`;
