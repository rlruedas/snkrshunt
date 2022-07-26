const axios = require('axios');

const getProducts = async (indexName, params) => {
    let data = [];

    try {
        const response = await axios.post(`https://2fwotdvm2o-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.25.1%3Breact%20(16.9.0)%3Breact-instantsearch%20(6.2.0)%3BJS%20Helper%20(3.1.0)&x-algolia-application-id=2FWOTDVM2O&x-algolia-api-key=ac96de6fef0e02bb95d433d8d5c7038a`,
            { "requests": [{ "indexName": `${indexName}`, "params": `${params}` }] }, {
            headers: {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded",
            }
        })

        data = response.data.results[0]

        return data;

    } catch (error) {
        console.log(error);
    }
}

const getShoeData = async (id) => {

    let apiLink = `http://localhost:8000/item/${id}`;

    try {
        const response = await axios.get(apiLink)
        return response
    } catch (error) {
        console.log(error.message);
    }



}

export { getProducts, getShoeData };