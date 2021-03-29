import styled from "styled-components";

export const HomeContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    background-color: #5682a3;
    padding: 5px 20px;
    position: relative;

    h1 {
      color: #ffffff;
      background-color: transparent;
    }
  }
`;

export const MainContent = styled.section`
  width: 100%;
  height: 93vh;
  background-color: #ffffff;
  display: flex;
  box-shadow: 0 1px 0 #dfe5ec;
`;

export const DialogsPart = styled.section`
  width: 30%;
  height: 93vh;
  border-right: 1px solid #e9ebed;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const MessagesPart = styled.section`
  width: 70%;
  height: 93vh;
`;

export const NoMessageTooltip = styled.div`
  font-size: 18px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
`;
