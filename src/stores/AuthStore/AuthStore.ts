import { makeAutoObservable } from "mobx";

import { UserInterface } from "types/users/user";
import requestManager from "services/RequestManager";
import socketManager from "services/SocketManager";

import dialogStore from "../DialogsStore/DialogStore";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentUser!: UserInterface;
  token!: string;
  interlocutors: UserInterface[] = [];

  get isAuth() {
    return !!this.currentUser;
  }

  async getCurrentUser(token: string) {
    if (!token) {
      alert("Token not found!");
    }

    this.setToken(token);

    const response = await requestManager.fetchPostData({
      url: "/auth/getUser",
      body: {
        token,
        socketId: socketManager.getSocketId(),
      },
    });

    if (response.data) {
      this.setCurrentUser(response.data.user);
      return;
    }

    alert("Cannot set current user!");
  }

  async getDataForCurrentUser() {
    await Promise.all([
      dialogStore.getCurrentUserDialogs(),
      dialogStore.getAllPublicGroupDialogs(),
      this.getAllInterlocutors(),
    ]);
  }

  async getAllInterlocutors() {
    const response = await requestManager.fetchGetData({ url: `/auth/interlocutors?token=${this.token}` });
    this.setInterlocutors(response.data);
  }

  setInterlocutors(payload: UserInterface[]) {
    this.interlocutors = payload;
  }

  removeCurrentUser() {
    this.currentUser = null!;
  }

  removeToken() {
    this.token = "";
  }

  removeChosenInterlocutor(authorId: string) {
    this.interlocutors = this.interlocutors.filter((interlocutor) => interlocutor.id !== authorId);
  }

  private setCurrentUser({ id, email, name }: UserInterface) {
    this.currentUser = {
      id,
      email,
      name,
    };
  }

  private setToken(payload: string) {
    this.token = payload;
  }
}

export default new AuthStore();
