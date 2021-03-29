import styled from "styled-components";

type StyledProps = {
  isOpen?: boolean;
};

export const SnackBarWrapper = styled.div<StyledProps>`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  div {
    transition: all 0.2s ease-in-out;
    transform: ${(props) =>
      props.isOpen ? "translateY(-100vh)" : "translateY(0)"};
  }
`;
