import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

import { getShoeData } from "../../database/api";

import Loader from "../../components/loader";
import ImageCarousel from "./imagecarousel";
import Footer from "../../components/footer";
import _ from "lodash"

function Item() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      getShoeData(params.id).then((data) => {
        setData(data.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [params]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : data ? (
        <>
          <section className="flex flex-col w-full min-h-screen bg-black font-Poppins justify-center items-center !overflow-x-clip ">
            <section className="w-[80vw] h-[5em] flex text-white justify-start items-center">
              <a
                href={`javascript:history.go(-1)`}
                className="w-fit flex flex-row justify-start items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#DCBA62"
                  className="bi bi-arrow-bar-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
                <h1>Return</h1>
              </a>
            </section>
            <section className="w-screen h-fit items-center flex flex-col gap-8 pb-[5em] ">
              <section className="w-[80vw]">
                <h1 className="w-[90%] text-[#DCBA62] font-extrabold text-[30px] ">
                  {data?.name ?? ""}
                </h1>
                <h3 className="text-white w-[90%] opacity-70">{`Style Code: ${data?.sku}`}</h3>
                <h3 className="text-white w-[90%] opacity-70">{`Color: ${data?.color}`}</h3>
              </section>
              <section>
                {data ? <ImageCarousel shoeData={data} /> : <Loader />}
                <h6 className="text-white text-[8px] font-extralight block lg:hidden ">
                  *Slide image*
                </h6>
              </section>
              <section className="flex flex-col lg:flex-row w-[70vw]  justify-between items-start lg:items-center relative gap-5">
                <section className="flex flex-col w-full lg:w-[50%] justify-center items-center relative ">
                  <h1 className="text-[#DCBA62] text-[28px] font-black w-full tracking-widest">
                    DETAILS
                  </h1>
                  <section className="w-full h-fit text-white opacity-70 tracking-wide">
                    <h3>{`Brand: ${_.startCase(_.camelCase(data?.sizeBrand))  ?? ""}`}</h3>
                    <h3>{`Nickname: ${data?.nickname ?? ""}`}</h3>
                    <h3>{`Colors: ${data?.details ?? ""}`}</h3>
                    <h3>{`Designer: ${data?.designer ?? ""}`}</h3>
                    <h3>{`Type: ${_.startCase(_.camelCase(data?.productType)) ?? ""}`}</h3>
                    <h3>{`Gender/s: ${_.startCase(_.camelCase(data?.gender[0])) ?? ""}`}</h3>
                  </section>
                </section>
                <section className="flex flex-col w-full lg:w-[50%] text-white text-center gap-5">
                  <h1 className="text-[12px] text-[#DCBA62]">
                    Size Range/Price
                  </h1>
                  <div className="grid grid-cols-4">
                    {data?.sizeRange.length > 0 ? (
                      data?.sizeRange.map((size, index) => (
                        <div
                          key={index}
                          className="text-[10px] opacity-40 hover:text-[#DCBA62]"
                        >
                          {size}
                        </div>
                      ))
                    ) : (
                      <></>
                    )}{" "}
                  </div>
                </section>
                <button
                  className="text-white text-end w-full lg:w-[30%] flex flex-row justify-center lg:justify-end items-center gap-2 "
                  onClick={() => alert("Shopping Feature is not yet available")}
                >
                  <h1 className="hover:text-[#DCBA62] hover:scale-105 transform duration-200 relative">{`OPEN STORE 🛒`}</h1>
                </button>
              </section>
              <h3 className="text-white text-justify w-[70vw] ">
                <span className="text-[#DCBA62] ">{"Story"}</span>
                <br />{" "}
                <span className="opacity-50">{`${data?.story ?? ""} `}</span>
              </h3>
            </section>
          </section>
          <Footer />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center w-screen h-screen overflow-hidden font-Poppins gap-5">
          <h1>Sorry, this Sneaker's Data is not yet on the Database. </h1>
          <h1>
            Sorry for the Inconvenience! <span>😭</span>{" "}
          </h1>
          <h1>
            Click return to go back! <span>👋</span>{" "}
          </h1>
          <a
            href={`javascript:history.go(-1)`}
            className="w-fit flex flex-row justify-start items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="black"
              className="bi bi-arrow-bar-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
            <h1>Return</h1>
          </a>
        </div>
      )}
    </>
  );
}

export default Item;
