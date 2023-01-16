import axios from "axios";

export const offerstData = () => {
    var user = window.location.pathname.split("/")[1];
    let username = {username: user};
    return axios
      .post("/fetch_offers", username)
      .then((response) => {
        // console.log(response.data);
        return response;
      });
  };