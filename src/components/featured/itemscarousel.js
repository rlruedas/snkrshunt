import React, { useEffect, useState } from "react";
import { getProducts } from "../../database/api";

function ProductCarousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let indexName = "product_variants_v2_trending_purchase";
    let params = `query=&hitsPerPage=30&maxValuesPerFacet=40&page=0&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&distinct=true&filters=collection_slugs%3Ajust-dropped`;

    getProducts(indexName, params).then((data) => {
      setData(data.hits);
    });
  }, []);

  const handleButtonPressed = (orientation) => {
    const slider = document.querySelector(".scroll-item");

    if (orientation === "right") slider.scrollLeft += 250;
    if (orientation === "left") slider.scrollLeft -= 250;
  };

  return (
    <div className="relative flex flex-row w-screen h-full justify-center items-center ">
      <button
        onClick={() => handleButtonPressed("left")}
        className="absolute left-0 ml-[.5em] md:ml-[2em] z-10 backdrop-blur-md rounded-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bi bi-arrow-left"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </button>
      <section
        data-id="B13gDe"
        className="flex flex-row overflow-x-scroll snap-x snap-mandatory scroll-smooth scroll-item no-scrollbar h-full w-screen gap-6 before:shrink-0 before:w-[5vw] after:shrink-0 after:w-[5vw]"
      >
        {data.length > 0 ? (
          data.slice(0, 15).map((item, index) => (
            <a
              href={`/products/item/${item.slug}`}
              key={index}
              className=" w-[200px] h-[250px] md:w-[300px] md:h-[350px] flex flex-col snap-center items-center pt-[1rem] shrink-0 rounded-[10px] gap-2 bg-[#DCBA62] transform transition-all duration-200 hover:bg-[#000] group "
            >
              <div className="w-[90%] h-[60%] md:h-[80%] bg-white rounded-[10px] flex justify-center items-center">
                <img
                  src={item.main_picture_url}
                  alt="shoeImage"
                  className="rounded-[10px] "
                />
              </div>
              <span className="font-Montserrat font-normal text-[10px] w-[90%]  transform transition-all duration-200  group-hover:text-[#DCBA62] ">
                {item.name}
              </span>
              <span className="font-Montserrat font-normal text-[10px] w-[90%]  transform transition-all duration-200  group-hover:text-[#DCBA62]">
                {item.gender}
              </span>
            </a>
          ))
        ) : (
          <></>
        )}
      </section>
      <button
        onClick={() => handleButtonPressed("right")}
        className="absolute right-0 mr-[1.5em] z-10 backdrop-blur-md rounded-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bi bi-arrow-right"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductCarousel;

//Drag mouse scroll
// const handleMouse = () => {
//   const slider = document.querySelector('[data-id="B13gDe"')

//   let isPressed = false;
//   let startX;
//   let scrollLeft;

//   slider.addEventListener('mousedown', e => {
//     slider.classList.remove(['scroll-smooth', 'snap-x', 'snap-mandatory']);
//     isPressed = true;
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;

//   })

//   slider.addEventListener('mouseleave', () => {
//     isPressed = false;
//     slider.classList.add('scroll-smooth', 'snap-x', 'snap-mandatory');
//   })

//   slider.addEventListener('mouseup', () => {
//     isPressed = false;
//     slider.classList.add('scroll-smooth', 'snap-x', 'snap-mandatory');
//   })

//   slider.addEventListener('mousemove', e => {
//     slider.classList.remove('scroll-smooth', 'snap-x', 'snap-mandatory');
//     if (!isPressed) return;
//     e.preventDefault();

//     const x = e.pageX - slider.offsetLeft;
//     const move = (x - startX);
//     slider.scrollLeft = scrollLeft - move;

//   })
// }
