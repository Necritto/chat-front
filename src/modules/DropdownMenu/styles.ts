import styled from "styled-components";

type isOpen = {
  isOpen?: boolean;
};

export const BurgerMenuContainer = styled.section<isOpen>`
  section {
    height: 100vh;
    background-color: #5682a3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    display: block;
    width: 48px;
    height: 48px;
    background-color: #5682a3;
    position: relative;
    border: none;
  }

  button span,
  button span::before,
  button span::after {
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 50%;
    margin-left: -10px;
    width: 20px;
    height: 2px;
    background-color: #ffffff;
  }

  button span::before,
  button span::after {
    content: "";
    display: block;
    transition: 0.2s;
  }

  button span {
    transform: ${(props) => (props.isOpen ? "rotate(-90deg)" : "")};
  }

  button span::before {
    transform: ${(props) =>
      props.isOpen ? "rotate(-35deg)" : "translateY(-5px)"};
    width: ${(props) => (props.isOpen ? "10px" : "")};
    transform-origin: ${(props) => (props.isOpen ? "left bottom" : "")};
  }

  button span::after {
    transform: ${(props) =>
      props.isOpen ? "rotate(35deg)" : "translateY(5px)"};
    width: ${(props) => (props.isOpen ? "10px" : "")};
    transform-origin: ${(props) => (props.isOpen ? "left top" : "")};
  }
`;

export const BurgerMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  top: 48px;
  right: 0;
  background-color: #ffffff;
  width: 200px;
  box-shadow: 0 1px 3px 0 rgba(60, 75, 87, 0.27);
  border: 1px solid rgba(15, 60, 96, 0.2);
  border-left-color: #b5c3d0;
  border-right-color: #b5c3d0;

  button,
  a {
    width: 100%;
    border: none;
    background-color: inherit;
    font-size: 12px;
    line-height: 21px;
    padding: 11px 19px 10px 21px;
    color: #42749b;
    text-align: center;
  }

  button:hover,
  a:hover {
    background-color: #f2f6fa;
  }
`;
