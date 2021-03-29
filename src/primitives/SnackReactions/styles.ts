import styled from "styled-components";

type StyledProps = {
  isError?: boolean;
};

export const SnackReactionsWrapper = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: ${(props) => (props.isError ? "#f44336" : "#4caf50")};
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;

  span {
    font-size: 24px;
    transform: translateY(-1px);
  }

  p {
    flex: 1 0;
    margin: 0 20px;
    max-width: 90vw;
    overflow: hidden;
  }

  button {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;
