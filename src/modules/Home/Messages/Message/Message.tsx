import React from "react";
import { observer } from "mobx-react-lite";
import { formatDistanceToNow } from "date-fns";

import { MessagesInterface } from "types/messages/messages";
import Avatar from "primitives/Avatar/Avatar";

import { MessageContainer, MessageContent, MessageTime, MessageText } from "./styles";

interface MessagePropsInterface {
  message: MessagesInterface;
}

const Message = ({ message }: MessagePropsInterface) => {
  return (
    <MessageContainer>
      <Avatar name={message.authorName} />
      <MessageContent>
        <span>{message.authorName}</span>
        <MessageText>
          <p>{message.text}</p>
        </MessageText>
      </MessageContent>
      <MessageTime>
        <span>{formatDistanceToNow(new Date(message.messageDate))}</span>
      </MessageTime>
    </MessageContainer>
  );
};

export default observer(Message);
