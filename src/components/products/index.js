
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../scraper/productscraper'

import NavBar from './navbar'
import Footer from '../homepage/footer'

function Products() {

    const [data, setData] = useState([]);
    const urlParams = useParams();

    useEffect(() => {
        let indexName = "product_variants_v2";
        let params = `distinct=true&hitsPerPage=40&maxValuesPerFacet=40&page=0&query=${urlParams.id}%${urlParams.category ? urlParams.category : ""}%sneakers&facets=%5B%22instant_ship_lowest_price_cents`;

        getProducts(indexName, params).then(data => {
            setData(data);
        });

    }, [])



    return (
        <>
            <div>
                <NavBar/>
                <section className='flex flex-col min-h-fit w-screen justify-center items-center font-Montserrat'>
                    <section className='w-[70%] py-[.5em]'>
                        <a href={`/products/${urlParams.id}`} className='font-extrabold text-[18px] sm:text-[50px] tracking-[.5em]'>{`${urlParams.id.toUpperCase()} //`}  </a>
                        <span className='font-extrabold text-[18px] sm:text-[50px] tracking-[.5em]'>{urlParams.category?.toUpperCase()}</span>
                    </section>
                    <section className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 w-[80%] md:w-[70%] gap-[4em] place-items-center pb-10 z-0' >{
                        data.length > 0 ? data.map((item, index) => (
                            <a href={`/products/item/${item.slug}`} key={index} className='w-[160px] h-fit lg:w-[250px]  white transorm transition-all duration-75 hover:scale-105 drop-shadow-2xl' >
                                <img src={item.main_picture_url} alt="productImage" className='w-full h-full rounded-t-md bg-white' />
                                <div className='flex flex-col justify-center items-center text-white h-[5em] bg-black rounded-b-md ' >
                                    <p className='text-[10px] w-[80%]'>{`${item.brand_name}`}</p>
                                    <p className='text-[12px] w-[80%]'>{`${item.name}`}</p>
                                </div>
                            </a>
                        )) : <></>
                    }
                    </section>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Products