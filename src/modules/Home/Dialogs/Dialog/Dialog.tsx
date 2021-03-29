import React, { useMemo, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { formatDistanceToNow } from "date-fns";

import { DialogContainer, DialogContent, DialogMain, DialogInfo } from "./styles";
import { DialogInterface } from "types/dialogs/dialog";
import authStore from "stores/AuthStore/AuthStore";
import dialogStore from "stores/DialogsStore/DialogStore";
import messageStore from "stores/MessageStore/MessageStore";
import Avatar from "primitives/Avatar/Avatar";

interface DialogPropsInterface {
  dialog: DialogInterface;
  isActive: boolean;
}

const Dialog = ({ dialog, isActive }: DialogPropsInterface) => {
  const displayName = useMemo(() => {
    return dialog.authorId === authStore.currentUser.id ? dialog.partnerName : dialog.authorName;
  }, [dialog.authorId, dialog.authorName, dialog.partnerName]);

  const onClickHandler = useCallback(async () => {
    dialogStore.setCurrentDialogId(dialog.id);
    await messageStore.getAllDialogMessages();
  }, [dialog.id]);

  return (
    <DialogContainer isActive={isActive} onClick={onClickHandler}>
      <Avatar isGroup={!!dialog.dialogTitle} name={displayName ?? dialog.dialogTitle} />
      {dialog.isPrivate && <span>&#128274;</span>}
      <DialogContent>
        <DialogMain isActive={isActive}>
          <span>{displayName ?? dialog.dialogTitle}</span>
          <p>
            {dialog.dialogTitle && dialog.lastMessage ? <span>{dialog.lastMessage.authorName}: </span> : ""}
            {dialog.lastMessage && dialog.lastMessage.authorId === authStore.currentUser.id && !dialog.dialogTitle ? (
              <span>Me: </span>
            ) : (
              ""
            )}
            {dialog.lastMessage ? dialog.lastMessage.text : "No messages yet!"}
          </p>
        </DialogMain>
        <DialogInfo>
          <span>{dialog.lastMessage ? formatDistanceToNow(new Date(dialog.lastMessage.messageDate)) : ""}</span>
          {/*{unread && <div>{unread}</div>}*/}
        </DialogInfo>
      </DialogContent>
    </DialogContainer>
  );
};

export default observer(Dialog);
