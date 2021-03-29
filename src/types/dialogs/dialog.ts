import { MessagesInterface } from "../messages/messages";

export interface DialogInterface extends DialogInterfaceDTO {
  id: string;
  partnerName: string;
  authorName: string;
  messages: string[];
  lastMessage: MessagesInterface;
  link?: string;
}

export interface DialogInterfaceDTO {
  authorId: string;
  partners: string[];
  isPrivate?: boolean;
  dialogTitle?: string;
}
