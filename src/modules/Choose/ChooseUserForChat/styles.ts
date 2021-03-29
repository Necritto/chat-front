import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin: 5px 0;
  padding: 5px 0 5px 30px;

  h3 {
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: #f2f6fa;
  }
`;
