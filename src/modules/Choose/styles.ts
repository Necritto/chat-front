import styled from "styled-components";

export const ChooseContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ChooseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-height: 450px;
  background-color: #ffffff;
  position: relative;

  button:first-child {
    order: 1;
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
    font-size: 3rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -40px;
    right: -40px;
  }

  button:last-child {
    height: 40px;
    font-weight: 500;
    font-size: 16px;
  }

  > p {
    position: absolute;
    top: -40px;
    text-align: center;
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
  }
`;

export const ItemWrapper = styled.div`
  overflow-y: auto;
  max-height: 400px;
`;
