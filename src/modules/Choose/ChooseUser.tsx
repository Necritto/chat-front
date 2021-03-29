import React from "react";
import { observer } from "mobx-react-lite";

import authStore from "stores/AuthStore/AuthStore";
import dialogStore from "stores/DialogsStore/DialogStore";
import { UserInterface } from "types/users/user";

import { ChooseContainer, ChooseWrapper, ItemWrapper } from "./styles";
import ChooseUserForChat from "./ChooseUserForChat/ChooseUserForChat";
import ChooseUserForGroupChat from "./ChooseUserForGroupChat/ChooseUserForGroupChat";
import ChooseAvailableDialog from "./ChooseAvailableDialog/ChooseAvailableDialog";

interface ChooseUserPropsInterface {
  isGroup?: boolean;
  isPrivate?: boolean;
  isChooseDialog?: boolean;
  onClose: () => void;
}

const ChooseUser = ({ isGroup, isPrivate, isChooseDialog, onClose }: ChooseUserPropsInterface) => {
  const startGroupDialog = async () => {
    const partners: string[] = [];
    dialogStore.partnersIdInGroupChat.forEach((id) => partners.push(id as string));

    if (partners.length > 0) {
      const dialogTitle = prompt("Name your group dialogue");

      if (dialogTitle) {
        const dialog = {
          dialogTitle,
          authorId: authStore.currentUser.id,
          partners,
          isPrivate: !!isPrivate,
        };

        await dialogStore.createGroupDialog(dialog);
        dialogStore.resetPartnersId();
        onClose();
      }
    }
  };

  return (
    <ChooseContainer>
      <ChooseWrapper>
        <button onClick={onClose}>&times;</button>
        {isChooseDialog ? (
          <>
            <p>Choose available dialog</p>
            <ItemWrapper>
              {dialogStore.publicGroupDialogs.map((dialog) => (
                <ChooseAvailableDialog key={dialog.id} dialog={dialog} onClose={onClose} />
              ))}
            </ItemWrapper>
          </>
        ) : (
          <>
            <p>{isPrivate ? "Private group chat" : isGroup ? "Group chat" : "Common chat"}</p>
            <ItemWrapper>
              {authStore.interlocutors.map((user: UserInterface) =>
                isGroup ? (
                  <ChooseUserForGroupChat key={user.id} user={user} isPrivate={!!isPrivate} />
                ) : (
                  <ChooseUserForChat key={user.id} user={user} onClose={onClose} />
                ),
              )}
            </ItemWrapper>
          </>
        )}

        {isGroup && <button onClick={startGroupDialog}>Start</button>}
      </ChooseWrapper>
    </ChooseContainer>
  );
};

export default observer(ChooseUser);
