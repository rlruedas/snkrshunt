const axios = require("axios");

const apiBaseURL = "https://snkrhunt-db.herokuapp.com";
const indexName = "product_variants_v2";

const getProducts = async (query) => {
  let data = [];
  let apiLink = `${apiBaseURL}/products`;

  try {
    const response = await axios({
      url: apiLink,
      method: "post",
      data: {
        indexName,
        params: query,
      },
    });

    data = response.data.results[0];

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getShoeData = async (id) => {
  let apiLink = `${apiBaseURL}/item/${id}`;

  try {
    const response = await axios.get(apiLink);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export { getProducts, getShoeData };
