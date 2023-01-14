import axios from "axios";

export const productData = () => {
    var user = window.location.pathname.split("/")[1];
    let username = {username: user};
    return axios
      .post("/category_products", username)
      .then((response) => {
        // console.log(response.data);
        return response;
      });
  };