import axios from "axios";

export const settingData = () => {
  var user = window.location.pathname.split("/")[1];
  let username = {username: user};
  return axios
    .post("/fetch_seller_setting", username)
    .then((response) => {
      // console.log(response.data);
      return response;
    });
};