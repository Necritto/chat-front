import authStore from "stores/AuthStore/AuthStore";

import requestManager from "./RequestManager";

class AuthManager {
  async register(email: string, password: string, name: string) {
    await requestManager.fetchPostData({
      url: "/auth/register",
      body: {
        email,
        password,
        name,
      },
    });
  }

  async login(email: string, password: string) {
    const response = await requestManager.fetchPostData({
      url: "/auth/login",
      body: { email, password },
    });

    if (response.data) {
      sessionStorage.setItem("token", `${response.data.token}`);
      await authStore.getCurrentUser(response.data.token);
      await authStore.getDataForCurrentUser();
      return;
    }

    alert(response.message);
  }

  async changePassword(oldPassword: string, newPassword: string) {
    const response = await requestManager.fetchPostData({
      url: `/auth/changePassword?token=${authStore.token}`,
      body: {
        email: authStore.currentUser.email,
        oldPassword: oldPassword,
        newPassword: newPassword,
      },
    });

    if (response.message) {
      alert(response.message);
      return;
    }
  }

  getToken() {
    return sessionStorage.getItem("token");
  }
}

export default new AuthManager();
