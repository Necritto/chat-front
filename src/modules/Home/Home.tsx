import React from "react";
import { observer } from "mobx-react-lite";

import DropdownMenu from "modules/DropdownMenu/DropdownMenu";
import authStore from "stores/AuthStore/AuthStore";
import dialogStore from "stores/DialogsStore/DialogStore";

import { HomeContainer, MainContent, DialogsPart, MessagesPart, NoMessageTooltip } from "./styles";
import Messages from "./Messages/Messages";
import Dialogs from "./Dialogs/Dialogs";

const Home = () => {
  return (
    <HomeContainer>
      <header>
        <h1>Chat: user {authStore.currentUser.name}</h1>
        <DropdownMenu />
      </header>
      <MainContent>
        <DialogsPart>
          <Dialogs />
        </DialogsPart>
        <MessagesPart>
          {dialogStore.currentDialogId ? (
            <Messages />
          ) : (
            <NoMessageTooltip>Choose user and start chatting</NoMessageTooltip>
          )}
        </MessagesPart>
      </MainContent>
    </HomeContainer>
  );
};

export default observer(Home);
