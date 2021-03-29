import styled from "styled-components";

type isActive = {
  isActive?: boolean;
};

export const DialogContainer = styled.li<isActive>`
  display: flex;
  position: relative;
  cursor: pointer;
  padding: 10px;
  background-color: ${(props) => (props.isActive ? "#6496bb" : "transparent")};

  > span {
    position: absolute;
    left: 50px;
    top: 40px;
  }

  &:hover {
    background-color: ${(props) => (props.isActive ? "#6496bb" : "#f2f6fa")};
  }
`;

export const DialogContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  position: relative;
`;

export const DialogMain = styled.div<isActive>`
  span {
    color: ${(props) => (props.isActive ? "#fff" : "#222")};
    font-weight: 700;
  }

  p {
    width: 200px;
    color: ${(props) => (props.isActive ? "#fff" : "gray")};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    span {
      margin: 5px;
      font-size: 14px;
    }
  }
`;

export const DialogInfo = styled.div`
  position: absolute;
  top: 0;
  right: -10px;

  span {
    color: #cccccc;
    font-size: 13px;
  }

  div {
    width: max-content;
    height: 20px;
    border-radius: 10px;
    padding: 5px;
    background-color: #58b158;
    color: #ffffff;
    transform: translate(10px, 5px);
    font-size: 11px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
