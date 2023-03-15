import { makeAutoObservable } from "mobx";

import VKBridge from "../service/bridge";

class Store {
  spinner = false;
  user = null;
  friends = [];

  constructor() {
    makeAutoObservable(this);
  }

  async setUser() {
    this.setPreloader(true);
    this.user = await VKBridge.getUser();
    this.setPreloader(false);
  }

  async setFriends() {
    this.setPreloader(true);
    const token = await VKBridge.getToken();
    const friends = await VKBridge.getFriends(token);
    this.setPreloader(false);
    this.friends = [...friends];
  }

  setPreloader(state) {
    this.spinner = state;
  }
}

export default new Store();