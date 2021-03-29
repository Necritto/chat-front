import React, { useState, useMemo, useCallback, useEffect } from "react";
import { observer } from "mobx-react-lite";

import messageStore from "stores/MessageStore/MessageStore";
import authStore from "stores/AuthStore/AuthStore";
import dialogStore from "stores/DialogsStore/DialogStore";
import { eventValue } from "utils/decorators/eventValue";
import { onKeyPressed } from "utils/decorators/onKeyPressed";
import socketManager from "services/SocketManager";

import { MessageInput } from "./styles";

const MessageSender = () => {
  const [value, setValue] = useState("");
  const text = value.trim();

  const messageData = useMemo(
    () => ({
      text,
      dialogId: dialogStore.currentDialogId,
      authorId: authStore.currentUser.id,
    }),
    [text],
  );

  const addMessage = useCallback(async () => {
    if (!text) {
      return;
    }

    setValue("");
    await messageStore.sendMessage(messageData);
  }, [messageData, text]);

  useEffect(() => {
    socketManager.socketMessageCreated();
  }, []);

  return (
    <MessageInput>
      <textarea
        name="messages_input"
        placeholder="Write a message..."
        onKeyUp={onKeyPressed("Enter", addMessage, { ctrl: true })}
        onChange={eventValue(setValue)}
        value={value}
        autoFocus
      />
      <button onClick={addMessage}>Send</button>
    </MessageInput>
  );
};

export default observer(MessageSender);
