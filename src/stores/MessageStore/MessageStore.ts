import { makeAutoObservable } from "mobx";

import { MessagesInterface, MessagesInterfaceDTO } from "types/messages/messages";
import fetchDataFromDb from "services/RequestManager";

import dialogStore from "../DialogsStore/DialogStore";
import authStore from "../AuthStore/AuthStore";

class MessageStore {
  constructor() {
    makeAutoObservable(this);
  }

  messages: MessagesInterface[] = [];

  async sendMessage(message: MessagesInterfaceDTO) {
    await fetchDataFromDb.fetchPostData({
      url: `/messages/create?token=${authStore.token}`,
      body: {
        text: message.text,
        dialogId: message.dialogId,
        authorId: message.authorId,
      },
    });
  }

  addMessage(message: MessagesInterface) {
    this.messages.push(message);
  }

  async getAllDialogMessages() {
    try {
      const response = await fetchDataFromDb.fetchPostData({
        url: `/messages/currentMessages?token=${authStore.token}`,
        body: { dialogId: dialogStore.currentDialogId },
      });

      this.messages = response.data;
    } catch (e) {
      console.log(e.message);
    }
  }

  resetMessages() {
    this.messages = [];
  }
}

export default new MessageStore();
