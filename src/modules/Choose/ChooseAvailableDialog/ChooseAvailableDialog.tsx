import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";

import Avatar from "primitives/Avatar/Avatar";
import { DialogInterface } from "types/dialogs/dialog";
import authStore from "stores/AuthStore/AuthStore";
import dialogStore from "stores/DialogsStore/DialogStore";
import socketManager from "services/SocketManager";

import { ItemContainer } from "./styles";

interface ChooseAvailableDialogPropsInterface {
  dialog: DialogInterface;
  onClose: () => void;
}

const ChooseAvailableDialog = ({ dialog, onClose }: ChooseAvailableDialogPropsInterface) => {
  const onClickHandler = useCallback(async () => {
    const updatedDialogPartners = dialog.partners.slice(0);
    updatedDialogPartners.push(authStore.currentUser.id);
    await dialogStore.fetchUpdateDialogPartners(updatedDialogPartners, dialog.id);
    socketManager.socketDialogUpdated();
    onClose();
  }, [dialog.id, dialog.partners, onClose]);

  return (
    <ItemContainer onClick={onClickHandler}>
      <Avatar isGroup={!!dialog.dialogTitle} name={dialog.dialogTitle!} />
      <h3>{dialog.dialogTitle}</h3>
    </ItemContainer>
  );
};

export default observer(ChooseAvailableDialog);
