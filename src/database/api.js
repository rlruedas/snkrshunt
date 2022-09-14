const axios = require("axios");

// I made an API that fetches data from another API coming from the goats API because I'm experiencing CORS policy issue

const apiBaseURL = "https://snkrhunt-db.herokuapp.com";

const getProducts = async (indexName, params) => {
  let data = [];

  let apiLink = `${apiBaseURL}/products`; //

  try {
    const response = await axios({
      url: apiLink,
      method: "post",
      data: {
        indexName: indexName,
        params: params,
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
