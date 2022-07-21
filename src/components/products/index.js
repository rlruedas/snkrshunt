
import React, { useEffect, useState } from 'react'
import { getProducts } from '../scraper/productscraper'

import NavBar from './navbar'

function Products(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        let indexName = "product_variants_v2_trending_purchase_flight_club";
        let params = "query=&hitsPerPage=40&maxValuesPerFacet=40&page=0&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&distinct=true&filters=brand_name%3A%22adidas%22&facets=%5B%22brand_name%22%2C%22silhouette%22%2C%22presentation_size%22%2C%22size_us_men%22%2C%22size_us_women%22%2C%22size_us_youth%22%2C%22shoe_condition%22%2C%22color%22%2C%22single_gender%22%2C%22category%22%2C%22product_category%22%2C%22designer%22%2C%22collection_slugs%22%2C%22is_under_retail%22%2C%22lowest_price_cents_usd%22%2C%22release_year%22%5D&tagFilters=";

        getProducts(indexName, params).then(data => {
            setData(data);
        });


    }, [])


    return (
        <>
            <NavBar />
        </>
    )
}

export default Products