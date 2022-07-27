const axios = require('axios');

const getProducts = async (indexName, params) => {
    let data = [];

    let apiLink = "https://snkrhunt-db.herokuapp.com/products"

    try {
        const response = await axios({
            url: apiLink,
            method: "post",
            data : {
                indexName: indexName,
                params: params,
            }
        })

        data = response.data.results[0]

        return data;

    } catch (error) {
        console.log(error);
    }
}

const getShoeData = async (id) => {

    let apiLink = `https://snkrhunt-db.herokuapp.com/item/${id}`;

    try {
        const response = await axios.get(apiLink)
        return response
    } catch (error) {
        console.log(error.message);
    }



}

export { getProducts, getShoeData };