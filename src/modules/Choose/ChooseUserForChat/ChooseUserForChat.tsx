import React from "react";
import { observer } from "mobx-react-lite";

import { UserInterface } from "types/users/user";
import { DialogInterfaceDTO } from "types/dialogs/dialog";
import authStore from "stores/AuthStore/AuthStore";
import dialogStore from "stores/DialogsStore/DialogStore";
import Avatar from "primitives/Avatar/Avatar";

import { ItemContainer } from "./styles";

interface ChooseUserItemPropsInterface {
  user: UserInterface;
  onClose: () => void;
}

const ChooseUserForChat = ({ user, onClose }: ChooseUserItemPropsInterface) => {
  const onClickHandler = async () => {
    const dialog: DialogInterfaceDTO = {
      authorId: authStore.currentUser.id,
      partners: [user.id],
    };

    await dialogStore.createDialog(dialog);
    authStore.removeChosenInterlocutor(user.id);
    onClose();
  };

  return (
    <ItemContainer onClick={onClickHandler}>
      <Avatar name={user.name} />
      <h3>{user.name}</h3>
    </ItemContainer>
  );
};

export default observer(ChooseUserForChat);
