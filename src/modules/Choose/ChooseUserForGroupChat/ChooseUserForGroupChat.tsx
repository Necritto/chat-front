import React from "react";
import { observer } from "mobx-react-lite";

import Avatar from "primitives/Avatar/Avatar";
import { UserInterface } from "types/users/user";
import dialogStore from "stores/DialogsStore/DialogStore";

import { ItemContainer } from "./styles";

interface ChooseUserForGroupChatPropsInterface {
  user: UserInterface;
  isPrivate: boolean;
}

const ChooseUserForGroupChat = ({ user, isPrivate }: ChooseUserForGroupChatPropsInterface) => {
  const choosePartnersForDialog = (e: React.MouseEvent<HTMLLabelElement> | any) => {
    if (e.target.nodeName === "INPUT") {
      return e.target.checked ? dialogStore.addPartnersIdInGroupChat(user.id) : dialogStore.removePartnerId(user.id);
    }
  };

  return (
    <ItemContainer>
      <label htmlFor={user.id} onClick={choosePartnersForDialog}>
        <Avatar name={user.name} />
        {isPrivate && <span>&#128274;</span>}
        <h3>{user.name}</h3>
        <input type="checkbox" id={user.id} />
      </label>
    </ItemContainer>
  );
};

export default observer(ChooseUserForGroupChat);
