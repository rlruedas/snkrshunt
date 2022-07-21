const axios = require('axios');

const getProducts = async (indexName, params) => {
    let data = [];

    try {
        const response = await axios.post(`https://2fwotdvm2o-1.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)%3B%20react%20(16.14.0)%3B%20react-instantsearch%20(5.7.0)%3B%20JS%20Helper%20(2.28.1)&x-algolia-application-id=2FWOTDVM2O&x-algolia-api-key=ac96de6fef0e02bb95d433d8d5c7038a`,
            { "requests": [{ "indexName": `${indexName}`, "params": `${params}`}] }, {
            headers: {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded",
            }
        })

        data = response.data.results[0].hits
        
        return data;

    } catch (error) {
        console.log(error);
    }
}

export { getProducts };