import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../database/api";

import { ProductsNavBar } from "../../components/navbars";
// import { colors, listOfSizes } from "./utils/filters";

import Footer from "../../components/footer";
import Loader from "../../components/loader";
import Filters from "../../components/filters";

function Products() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const urlParams = useParams();
  // const [size, setSize] = useState();
  // const [colorType, setColorType] = useState();
  const [releaseYear, setReleaseYear] = useState();

  let facetFilters = `&facetFilters=%5B${
    urlParams.category
      ? `%5B%22single_gender%3A` + urlParams.category + `%22%5D%2C`
      : ""
  }%5B%22brand_name%3A${
    urlParams.id
  }%22%5D%2C%5B%22product_type%3Asneakers%22%5D%5D`;
  let numericFilters = releaseYear
    ? `&numericFilters=%5B%22release_year%3E%3D${releaseYear}%22%5D`
    : "";

  let indexName = "product_variants_v2";
  let params = `distinct=true&hitsPerPage=40&maxValuesPerFacet=40&page=${pageNumber}&query=&filters=${facetFilters}${numericFilters}`;
  let count = 0;

  useEffect(() => {
    getProducts(indexName, params).then((data) => {
      setData(data.hits);
      setNumOfPages(Number(data.nbPages));
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ProductsNavBar category={urlParams.category} />
          <section className="flex flex-row relative w-screen h-fit">
            <Filters category={urlParams.category} />
            <section className="flex flex-col min-h-fit flex-1 justify-center items-center font-Montserrat pt-[5em] md:pt-0 ">
              <section className="w-[90%] pt-[.5em]">
                <a
                  href={`/products/${urlParams.id}`}
                  className="font-extrabold text-[30px] sm:text-[40px] lg:text-[50px] tracking-[.5em]"
                >
                  {`${urlParams?.id?.toUpperCase()} //`}{" "}
                </a>
                <span className="font-extrabold text-[30px] sm:text-[50px] tracking-[.5em]">
                  {urlParams?.category?.toUpperCase()}
                </span>
              </section>
              <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4  w-[90%] gap-[2em] place-items-center pb-10 z-0">
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <a
                      href={`/products/item/${item.slug}`}
                      key={index}
                      className="h-fit white transform transition-all duration-75 hover:scale-105 hover:border hover:border-black rounded-md drop-shadow-2xl"
                    >
                      <img
                        src={item.main_picture_url}
                        alt="productImage"
                        className="w-fit h-fit rounded-t-md bg-white"
                      />
                      <div className="flex flex-col justify-center items-center text-white w-full h-fit py-[1em] bg-black rounded-b-md ">
                        <p className="text-[7px] md:text-[12px] 2xl:text-[14px] w-[80%] ">{`${item.brand_name}`}</p>
                        <p className="text-[7px] md:text-[9px]  2xl:text-[12px] w-[80%] ">{`${item.name}`}</p>
                      </div>
                    </a>
                  ))
                ) : (
                  <></>
                )}
              </section>
              <span className="text-black font-extralight text-[10px]">{`${pageNumber}   . . .   ${numOfPages}`}</span>
            </section>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Products;
