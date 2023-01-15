import axios from "axios";

export const productDetailsData = () => {
    var id = window.location.pathname.split("/")[3];
    let product_id = {product_id: id};
    // console.log(id)
    return axios
      .post("/product_details", product_id)
      .then((response) => {
        // console.log(response.data);
        return response;
      });
  };