import io from "socket.io-client";

import messageStore from "stores/MessageStore/MessageStore";
import dialogStore from "stores/DialogsStore/DialogStore";
import { MessagesInterface } from "types/messages/messages";
import { DialogInterface } from "types/dialogs/dialog";

class SocketManager {
  private socket = io("http://localhost:4242");

  getSocketId() {
    return this.socket.id;
  }

  onSocketConnectionAvailable(cb: () => void) {
    if (this.socket.connected) {
      cb();
      return;
    }

    this.socket.on("connect", () => {
      cb();
    });
  }

  socketDialogUpdated() {
    this.socket.on("updateDialog", (dialog: DialogInterface) => {
      dialogStore.updateDialog(dialog);
    });
  }

  socketMessageCreated() {
    this.socket.on("message", (message: MessagesInterface) => {
      dialogStore.dialogs.find((dialog) => dialog.id === message.dialogId)!.lastMessage = message;
      messageStore.addMessage(message);
    });
  }

  socketDialogCreated() {
    this.socket.on("dialog", (dialog: DialogInterface) => {
      dialogStore.addDialog(dialog);
    });
  }
}

export default new SocketManager();
