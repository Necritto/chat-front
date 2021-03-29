import { makeAutoObservable } from "mobx";

import { DialogInterfaceDTO, DialogInterface } from "types/dialogs/dialog";
import requestManager from "services/RequestManager";
import authStore from "stores/AuthStore/AuthStore";

class DialogStore {
  constructor() {
    makeAutoObservable(this);
  }

  dialogs: DialogInterface[] = [];
  publicGroupDialogs: DialogInterface[] = [];
  foundPrivateDialog!: DialogInterface;
  currentDialogId!: string;
  partnersIdInGroupChat: Set<string> = new Set();

  setCurrentDialogId(dialogId: string) {
    this.currentDialogId = dialogId;
  }

  addPartnersIdInGroupChat(partnerId: string) {
    this.partnersIdInGroupChat.add(partnerId);
  }

  addDialog(dialog: DialogInterface) {
    this.dialogs.push(dialog);
  }

  setFoundPrivateDialog(dialog: DialogInterface) {
    this.foundPrivateDialog = dialog;
  }

  async createDialog(dialog: DialogInterfaceDTO) {
    await requestManager.fetchPostData({
      url: `/dialogs/create?token=${authStore.token}`,
      body: {
        authorId: dialog.authorId,
        partners: dialog.partners,
      },
    });
  }

  async createGroupDialog(dialog: DialogInterfaceDTO) {
    await requestManager.fetchPostData({
      url: `/dialogs/group?token=${authStore.token}`,
      body: {
        dialogTitle: dialog.dialogTitle,
        authorId: dialog.authorId,
        partners: dialog.partners,
        isPrivate: dialog.isPrivate,
      },
    });
  }

  async fetchUpdateDialogPartners(partners: string[], dialogId: string) {
    await requestManager.fetchPostData({
      url: `/dialogs/update?token=${authStore.token}`,
      body: {
        id: dialogId,
        partners,
      },
    });
  }

  async checkPrivateDialogLink(inputLink: string) {
    const foundDialog = await requestManager.fetchPostData({
      url: `/dialogs/checkPrivateDialogLink?token=${authStore.token}`,
      body: {
        link: inputLink,
      },
    });

    foundDialog && this.setFoundPrivateDialog(foundDialog.data);

    return !!foundDialog;
  }

  updateDialog(dialog: DialogInterface) {
    this.dialogs = this.dialogs.filter((item) => item.id !== dialog.id);
    this.addDialog(dialog);
  }

  private async fetchCurrentUserDialogs() {
    const dialogs = await requestManager.fetchGetData({
      url: `/dialogs/currentDialogs?token=${authStore.token}`,
    });
    return dialogs.data;
  }

  async getCurrentUserDialogs() {
    try {
      const response = await this.fetchCurrentUserDialogs();
      this.dialogs.push(...response);
    } catch (e) {
      console.log(e.message);
    }
  }

  async getAllPublicGroupDialogs() {
    try {
      const response = await requestManager.fetchGetData({
        url: `/dialogs/groupDialogs?token=${authStore.token}`,
      });

      this.publicGroupDialogs.push(...response.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  removePartnerId(partnerId: string) {
    this.partnersIdInGroupChat.delete(partnerId);
  }

  resetPartnersId() {
    this.partnersIdInGroupChat.clear();
  }

  resetDialogs() {
    this.dialogs = [];
    this.publicGroupDialogs = [];
  }
}

export default new DialogStore();
