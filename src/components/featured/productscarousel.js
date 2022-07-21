
import { fromJSON } from 'postcss';
import React, { useEffect, useState } from 'react'
const axios = require('axios');


function ProductCarousel() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.post(`https://2fwotdvm2o-1.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)%3B%20react%20(16.14.0)%3B%20react-instantsearch%20(5.7.0)%3B%20JS%20Helper%20(2.28.1)&x-algolia-application-id=2FWOTDVM2O&x-algolia-api-key=ac96de6fef0e02bb95d433d8d5c7038a`,
      {"requests":[{"indexName":"product_variants_v2_trending_purchase_flight_club","params":"query=&hitsPerPage=30&maxValuesPerFacet=40&page=0&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&distinct=true&filters=collection_slugs%3Anew-releases&facets=%5B%22brand_name%22%2C%22silhouette%22%2C%22presentation_size%22%2C%22size_us_men%22%2C%22size_us_women%22%2C%22size_us_youth%22%2C%22shoe_condition%22%2C%22color%22%2C%22single_gender%22%2C%22category%22%2C%22product_category%22%2C%22designer%22%2C%22collection_slugs%22%2C%22is_under_retail%22%2C%22lowest_price_cents_usd%22%2C%22release_year%22%5D&tagFilters="}]}, {
        headers: {
          "accept": "application/json",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded",
        }
      })

      setData(response.data.results[0].hits)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getData();

  }, [])


  //Drag mouse scroll
  const handleMouse = () => {
    const slider = document.querySelector('.scroll-item')

    let isPressed = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
      isPressed = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    })

    slider.addEventListener('mouseleave', () => {
      isPressed = false;
    })

    slider.addEventListener('mouseup', () => {
      isPressed = false;
    })

    slider.addEventListener('mousemove', e => {
      if (!isPressed) return;
      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;
      const move = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - move;
    })
  }

  return (
    <div className='relative flex flex-row w-screen h-full justify-center items-center '>
      <span className='absolute left-0 ml-[.5em] md:ml-[2em]' >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bi bi-arrow-left" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
      </span>
      <section onClick={handleMouse} className='flex flex-row overflow-x-scroll scroll-item no-scrollbar h-full w-screen gap-6 before:shrink-0 before:w-[5vw] after:shrink-0 after:w-[5vw]'>{
        data.length > 0 ? data.slice(0, 15).map((item, index) => (
          <div key={index} className=" w-[200px] h-[250px] md:w-[300px] md:h-[350px] flex flex-col items-center pt-[1rem] shrink-0 rounded-[10px] gap-2 bg-[#DCBA62] transform transition-all duration-200 hover:bg-[#000] group">
            <div className='w-[90%] h-[60%] md:h-[80%] bg-white rounded-[10px] flex justify-center items-center'>
              <img src={item.main_picture_url} alt="shoeImage" className='rounded-[10px] ' />
            </div>
            <span className='text-[10px] w-[80%] font-extrabold transform transition-all duration-200 group-hover:text-[#DCBA62] ' >{item.name}</span>
            <span className='text-[10px] w-[80%] font-extrabold transform transition-all duration-200 group-hover:text-[#DCBA62]' >{item.gender}</span>
          </div>

        )) : <></>}
      </section>
      <span className='absolute right-0 mr-[.5em] md:mr-[2em]' >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bi bi-arrow-right" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </span>

    </div>
  )
}




export default ProductCarousel