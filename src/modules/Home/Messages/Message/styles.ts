import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  max-width: 70%;
  margin: 10px auto;
`;

export const MessageContent = styled.div`
  max-width: 80%;
  span {
    color: #3a6d99;
    font-weight: 700;
  }
`;

export const MessageText = styled.div`
  width: 380px;
  p {
    word-wrap: break-word;
    line-height: 150%;
    white-space: pre-wrap;
    font-size: 14px;
  }
`;

export const MessageTime = styled.div`
  span {
    color: #adadad;
    font-size: 13px;
    padding: 0 0 20px 10px;
    text-align: right;
    transform: translateX(45px);
  }
`;
