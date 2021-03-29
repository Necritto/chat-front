import React, { useEffect, useRef, useCallback } from "react";
import { observer } from "mobx-react-lite";

import MessageSender from "components/MessageSender/MessageSender";
import messageStore from "stores/MessageStore/MessageStore";

import { MessagesContainer, MessagesContent } from "./styles";
import Message from "./Message/Message";

const Messages = () => {
  const messageBottomDivRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messageBottomDivRef.current!.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(scrollToBottom, [scrollToBottom, messageStore.messages.length]);

  return (
    <MessagesContainer>
      <MessagesContent>
        {messageStore.messages.map((message) => (
          <Message key={message.id + message.messageDate} message={message} />
        ))}
        <div ref={messageBottomDivRef} />
      </MessagesContent>
      <MessageSender />
    </MessagesContainer>
  );
};

export default observer(Messages);
