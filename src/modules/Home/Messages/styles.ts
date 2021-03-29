import styled from "styled-components";

export const MessagesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  padding-top: 20px;
`;

export const MessageInput = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  textarea {
    font-size: 12px;
    padding: 6px;
    overflow: auto;
    line-height: 17px;
    border: 1px solid #d2dbe3;
    border-radius: 2px;
    word-wrap: break-word;
    user-select: text;
    min-height: 50px;
    height: 50px;
    resize: none;
    width: 50%;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  button {
    color: #499dd9;
    font-size: 13px;
    line-height: 18px;
    height: 50px;
    width: 50px;
    font-weight: bold;
    border: none;
    background-color: transparent;

    &:hover {
      background-color: #b5d1ec;
      border-radius: 50%;
    }
  }
`;

export const MessagesContent = styled.div`
  overflow-y: auto;
  height: 90%;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
