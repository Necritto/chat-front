export interface MessagesInterface extends MessagesInterfaceDTO {
  id: string;
  messageDate: string;
  authorName: string;
}

export interface MessagesInterfaceDTO {
  text: string;
  dialogId: string;
  authorId: string;
}
