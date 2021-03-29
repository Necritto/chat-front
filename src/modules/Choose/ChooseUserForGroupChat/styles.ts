import styled from "styled-components";

export const ItemContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f2f6fa;
  }

  label {
    cursor: pointer;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  label > span {
    position: absolute;
    left: 45px;
    transform: translateY(30px);
  }
`;
