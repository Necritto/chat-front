import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import ChooseUser from "modules/Choose/ChooseUser";
import authStore from "stores/AuthStore/AuthStore";
import dialogStore from "stores/DialogsStore/DialogStore";
import socketManager from "services/SocketManager";

import { BurgerMenuContainer, BurgerMenuContent } from "./styles";

const DropdownMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCommonChat, setOpenCommonChat] = useState(false);
  const [openPrivateChat, setOpenPrivateChat] = useState(false);
  const [openGroupChat, setOpenGroutChat] = useState(false);
  const [openAvailableDialog, setOpenAvailableDialog] = useState(false);

  const isUserIsNotAlone = !!authStore.interlocutors.length;
  const isGroupDialogsExists = !!dialogStore.publicGroupDialogs.length;

  const chooseUserToCommonChat = useCallback(() => {
    if (isUserIsNotAlone) {
      setOpenCommonChat(!openCommonChat);
      setOpenMenu(false);
      return;
    }

    alert("No one to start a dialogue with");
  }, [isUserIsNotAlone, openCommonChat]);

  const chooseUserToPrivateChat = useCallback(() => {
    if (isUserIsNotAlone) {
      setOpenPrivateChat(!openPrivateChat);
      setOpenMenu(false);
      return;
    }

    alert("No one to start a private group dialogue with");
  }, [isUserIsNotAlone, openPrivateChat]);

  const chooseUserToGroupChat = useCallback(() => {
    if (isUserIsNotAlone) {
      setOpenGroutChat(!openGroupChat);
      setOpenMenu(false);
      return;
    }
    alert("No one to start a group dialogue with");
  }, [isUserIsNotAlone, openGroupChat]);

  const chooseAvailableDialog = () => {
    if (isGroupDialogsExists) {
      setOpenAvailableDialog(!openAvailableDialog);
      setOpenMenu(false);
      return;
    }

    alert("Group dialogs not found!");
  };

  const connectToPrivateDialog = async () => {
    const inputLink = prompt("Input private dialog link");
    const isThisLinkExists = inputLink && (await dialogStore.checkPrivateDialogLink(inputLink));

    if (isThisLinkExists) {
      const dialog = dialogStore.foundPrivateDialog;

      if (dialog.authorId === authStore.currentUser.id) {
        alert("You are owner of this dialog!");
        return;
      }

      if (dialog.partners.includes(authStore.currentUser.id)) {
        alert("You are already in this dialog!!");
        return;
      }

      const updatedDialogPartners = dialog.partners.slice(0);
      updatedDialogPartners.push(authStore.currentUser.id);
      await dialogStore.fetchUpdateDialogPartners(updatedDialogPartners, dialog.id);
      socketManager.socketDialogUpdated();
      setOpenMenu(false);
      return;
    }

    alert("Private dialog with this link not found!");
  };

  return (
    <>
      <BurgerMenuContainer isOpen={openMenu}>
        <button onClick={() => setOpenMenu(!openMenu)}>
          <span />
        </button>
      </BurgerMenuContainer>
      {openMenu && (
        <BurgerMenuContent>
          <button onClick={chooseUserToCommonChat}>Common chat</button>
          <button onClick={chooseUserToGroupChat}>Group chat</button>
          <button onClick={chooseUserToPrivateChat}>Private group chat</button>
          <button onClick={chooseAvailableDialog}>List of available dialogs</button>
          <button onClick={connectToPrivateDialog}>Connect to private dialog</button>
          <Link to="/changePassword">Change password</Link>
          <button
            onClick={async () => {
              authStore.removeCurrentUser();
              authStore.removeToken();
              dialogStore.resetDialogs();
              dialogStore.currentDialogId = "";
              sessionStorage.clear();
            }}
          >
            Log out
          </button>
        </BurgerMenuContent>
      )}
      {openCommonChat && <ChooseUser onClose={chooseUserToCommonChat} />}
      {openGroupChat && <ChooseUser isGroup onClose={chooseUserToGroupChat} />}
      {openPrivateChat && <ChooseUser isGroup isPrivate onClose={chooseUserToPrivateChat} />}
      {openAvailableDialog && <ChooseUser isChooseDialog isPrivate onClose={chooseAvailableDialog} />}
    </>
  );
};

export default observer(DropdownMenu);
