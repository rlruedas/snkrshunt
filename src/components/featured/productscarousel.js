
import React, { useEffect, useState } from 'react'


function ProductCarousel() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(json => setData(json));
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getData();
  }, [])

  let dataSliced = data.slice(0, 10);

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
      <section onClick={handleMouse} className='flex flex-row overflow-x-scroll scroll-item no-scrollbar h-full w-screen gap-6 before:shrink-0  after:shrink-0  '>{
        dataSliced.length > 0 ? dataSliced.map((item, index) => (
          <div key={index} className=" w-[200px] h-[250px] md:w-[300px] md:h-[350px] flex flex-col items-center pt-[1rem] shrink-0 rounded-[10px] gap-2 bg-[#DCBA62]">
            <img src={item.url} alt="shoeImage" className='w-[90%] h-[80%] rounded-[10px]' />
            <span className='text-[10px] w-[80%] ' >{item.title}</span>
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