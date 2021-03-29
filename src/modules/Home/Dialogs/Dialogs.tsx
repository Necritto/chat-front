import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import dialogStore from "stores/DialogsStore/DialogStore";
import socketManager from "services/SocketManager";

import { DialogsContainer } from "./styles";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
  useEffect(() => {
    socketManager.socketDialogCreated();
  }, []);

  useEffect(() => {
    socketManager.socketDialogUpdated();
  }, []);

  return (
    <>
      <DialogsContainer>
        {dialogStore.dialogs.map((dialog) => {
          return <Dialog key={dialog.id} dialog={dialog} isActive={dialogStore.currentDialogId === dialog.id} />;
        })}
      </DialogsContainer>
    </>
  );
};

export default observer(Dialogs);
