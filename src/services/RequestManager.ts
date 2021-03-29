import { FetchGetDataInterface, FetchPostDataInterface } from "types/services/fetch";

class RequestManager {
  private getFetchUrl(url: string) {
    return `http://localhost:4242/api${url}`;
  }

  async fetchPostData(options: FetchPostDataInterface) {
    try {
      const response = await fetch(this.getFetchUrl(options.url), {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(options.body),
      });

      return response.json();
    } catch (error) {
      ///middleware
      console.log(error.message);
    }
  }

  async fetchGetData(options: FetchGetDataInterface) {
    try {
      const response = await fetch(this.getFetchUrl(options.url));
      return response.json();
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new RequestManager();
