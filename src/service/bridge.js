import bridge from "@vkontakte/vk-bridge";

class VKBridge {
  constructor() {
    this.bridge = bridge;
  }

  getUser() {
    return this.bridge
      .send("VKWebAppGetUserInfo")
      .then((data) => data && data)
      .catch((error) => console.log(error));
  }

  getToken() {
    return this.bridge
      .send("VKWebAppGetAuthToken", {
        app_id: Number(process.env.REACT_APP_VK_KEY),
        scope: "friends",
      })
      .then((data) => data.access_token && data.access_token)
      .catch((error) => console.log(error));
  }

  getFriends(token) {
    return this.bridge
      .send("VKWebAppCallAPIMethod", {
        method: "friends.get",
        params: {
          v: "5.131",
          access_token: token,
          fields: "photo_100,first_name,last_name,city",
        },
      })
      .then((data) => data.response && data.response.items)
      .catch((error) => console.log(error));
  }
}

export default new VKBridge();
