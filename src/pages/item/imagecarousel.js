import React from "react";

import Slider from "react-slick";

const PrevArrow = (props) => {
  const { className, onClick } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`bi bi-arrow-left ${className}`}
      viewBox="0 0 16 16"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
      />
    </svg>
  );
};
const NextArrow = (props) => {
  const { className, onClick } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`bi bi-arrow-right ${className}`}
      viewBox="0 0 16 16"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </svg>
  );
};

function ImageCarousel(props) {
  const { shoeData } = props;

  const sliderSettings = {
    centerMode: true,
    centerPadding: 0,
    infinite: true,
    slidesToShow: 3,
    speed: 600,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      {shoeData.productTemplateExternalPictures.length > 0 ? (
        <section className="w-[80vw] h-fit  ">
          <Slider {...sliderSettings}>
            {shoeData.productTemplateExternalPictures.map((item, index) => (
              <section
                key={index}
                className=" h-[40%] lg:h-[60vh] bg-white shadow-2xl outline-none "
              >
                <img
                  src={item}
                  alt="shoeImage"
                  className="h-[40%] lg:h-[100%] object-fit lg:object-contain "
                />
              </section>
            ))}
          </Slider>
        </section>
      ) : (
        <>
          <img
            src={shoeData.mainPictureUrl}
            alt="no-image"
            className="bg-white rounded-sm w-[60vw] h-[60vh] object-contain"
          />
        </>
      )}
    </>
  );
}

export default ImageCarousel;
