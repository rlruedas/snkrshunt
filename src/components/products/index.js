
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../database/fetch'

import NavBar from './navbar'
import Footer from '../homepage/footer'
import { colors, listOfSizes } from './utils/filters'

function Products() {

    const [data, setData] = useState([]);
    const [numOfPages, setNumOfPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [shoeData, setShoeData] = useState([])
    const urlParams = useParams();
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    const [releaseYear, setReleaseYear] = useState();

    let facetFilters = `&facetFilters=%5B${urlParams.category ? `%5B%22single_gender%3A` + urlParams.category + `%22%5D%2C` : ""}%5B%22brand_name%3A${urlParams.id}%22%5D%2C%5B%22product_type%3Asneakers%22%5D%5D`
    let numericFilters = releaseYear ? `&numericFilters=%5B%22release_year%3E%3D${releaseYear}%22%5D` : "";

    let indexName = "product_variants_v2";
    let params = `distinct=true&hitsPerPage=40&maxValuesPerFacet=40&page=${pageNumber}&query=&filters=${facetFilters}${numericFilters}`;
    let count = 0;

    // const getShoeData = (params) => {

    //     params.forEach(element => {

    //         (async () => {
    //             await axios.get(`http://localhost:5000/api/get-shoe-data/${element}`)
    //                 .then(response => {
    //                     sendDataToDB(response.data)
    //                 }).catch(error => {
    //                     console.warn(error.message);
    //                 })

    //         })();
    //     })

    // }

    // const sendDataToDB = async (params) => {
        
    //     const res = await axios({
    //         method: 'POST',
    //         url: "http://localhost:8000/create",
    //         data: { params }
    //     })

    //     console.log(res.data);
    //     console.log(count++);
    // }

    useEffect(() => {

        getProducts(indexName, params).then(data => {
            setData(data.hits)

            console.log(data);
            setNumOfPages(Number(data.nbPages))

            console.log(numOfPages);

            const itemSlug = data.map(item => {
                return item.slug
            })

            // getShoeData(itemSlug) // AutoScrape Item Data
        });

    }, [])



    return (
        <>
            <div>
                <NavBar />
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