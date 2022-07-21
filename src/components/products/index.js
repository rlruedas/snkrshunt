
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../scraper/productscraper'
import { useParams } from 'react-router-dom'

import NavBar from './navbar'
import Footer from '../homepage/footer'

function Products() {

    const [data, setData] = useState([]);
    const urlParams = useParams()

    let indexName = "product_variants_v2_trending_purchase_flight_club";
    let params = `query=&hitsPerPage=40&maxValuesPerFacet=40&page=0&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&distinct=true&filters=brand_name%3A%22${urlParams.id}%22&facets=%5B%22brand_name%22%2C%22silhouette%22%2C%22presentation_size%22%2C%22size_us_men%22%2C%22size_us_women%22%2C%22size_us_youth%22%2C%22shoe_condition%22%2C%22color%22%2C%22single_gender%22%2C%22category%22%2C%22product_category%22%2C%22designer%22%2C%22collection_slugs%22%2C%22is_under_retail%22%2C%22lowest_price_cents_usd%22%2C%22release_year%22%5D&tagFilters=`;


    useEffect(() => {
        
        getProducts(indexName, params).then(data => {
            setData(data);
        });

    }, [])

    

    return (
        <>
            <NavBar />
            <section className='flex flex-col min-h-fit w-screen justify-center items-center font-Montserrat'>
                <span className='font-extrabold text-[18px] sm:text-[50px] tracking-[.5em] w-[80%] lg:w-[70%] py-[.5em]'>{urlParams.id.toUpperCase()} // {urlParams.category?.toUpperCase()}</span>
                <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-[80%] md:w-[70%] gap-[3em] place-items-center pb-10' >{
                    data.length > 0 ? data.map((item, index) => (
                        <div key={index} className='w-[150px] h-[200px] lg:w-[250px] lg:h-[300px] bg-black rounded-md transorm transition-all duration-75 hover:scale-105' >
                            <img src={item.main_picture_url } alt="productImage" className='w-[100%] h-[70%] rounded-md' />
                           
                        </div>
                    )) : <></>
                }
                </section>
            </section>
            <Footer />
        </>
    )
}

export default Products