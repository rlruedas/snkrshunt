import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getProducts } from "../../database/api";

import { ProductsNavBar } from "../../components/navbars";

import Footer from "../../components/footer";
import Filters from "../../components/filters";
import MoonLoader from "react-spinners/MoonLoader";

function Products() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [urlFilters] = useSearchParams(); //get the url query filter
  const urlParams = useParams(); //get url category
  const indexPages = useMemo(() => {
    return Array.from({ length: numOfPages }, (v, i) => i + 1);
  }, [numOfPages]);

  //This Filters need some refactoring.
  // The body request goes like this "requests": [{ "indexName": `${indexName}`, "params": `${params}` }] base on GOATs API
  let shoeSizeFilter = urlFilters.get(`size_us_${urlParams.category}`)
    ? `,["size_us_${urlParams.category}:${urlFilters.get(
        `size_us_${urlParams.category}`
      )}"]`
    : "";
  let colorFilter = urlFilters.get(`color`)
    ? `,["color:${urlFilters.get(`color`)}"]`
    : "";
  let numericFilters = urlFilters.get(`release_year`)
    ? `,["release_year:${urlFilters.get(`release_year`)}"]`
    : "";
  let query = urlFilters.get("query") ?? "";

  let facetFilters = `&facetFilters=[${
    urlParams.category ? `["single_gender:` + urlParams.category + `"],` : ""
  }["brand_name:${
    urlParams.id
  }"],["product_type:sneakers"]${colorFilter}${shoeSizeFilter}${numericFilters}]`;

  let indexName = "product_variants_v2";
  let params = useMemo(() => {
    /* I limited the pages to 5 only, when you clicked on the fifth page it shows.
     but when go to another brand that has only 1 
     state of page stay on the fifth page so it shows blank. */
    if (numOfPages === 1) setPageNumber(0);

    return `query=${query}&distinct=true&hitsPerPage=40&maxValuesPerFacet=40&page=${pageNumber}&filters=${facetFilters}`;
  }, [facetFilters, pageNumber, numOfPages, query]);

  const onNextPage = () => {
    pageNumber < indexPages.slice(0, 5).length - 1
      ? setPageNumber(pageNumber + 1)
      : setPageNumber(pageNumber);
    window.scrollTo(0, 0);
  };

  const onPrevPage = () => {
    pageNumber > 0 ? setPageNumber(pageNumber - 1) : setPageNumber(pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLoading(true);

    getProducts(indexName, params).then((data) => {
      setData(data?.hits);
      setNumOfPages(Number(data?.nbPages));
      setLoading(false);
    });
  }, [indexName, params]);

  return (
    <>
      <span className="flex flex-col relative overflow-x-clip ">
        <ProductsNavBar category={urlParams.category} />
        <section className="flex flex-row relative w-screen justify-center items-start ">
          <Filters category={urlParams.category} />
          <section className="brand-title flex flex-col w-[90vw] justify-center items-center font-Poppins pt-[5em] md:pt-0 z-0">
            <section className="w-[90%] pt-[.5em] my-5">
              <a
                href={`/products/${urlParams.id}`}
                className="font-extrabold text-[20px] sm:text-[50px] lg:text-[50px] tracking-[.5em] text-[#373838]"
              >
                {`${urlParams?.id?.toUpperCase()}`}
              </a>
              <span className="font-extrabold text-[20px] sm:text-[50px] tracking-[.5em]">
                {"//"}
                {urlParams?.category?.toUpperCase()}
              </span>
            </section>
            <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 relative  w-[90%] h-full gap-[2em] justify-center items-center pb-10 z-0">
              {data.length > 0 ? (
                data.map((item, index) => (
                  <a
                    href={`/products/item/${item.slug}`}
                    key={index}
                    className="w-full h-full white transform transition-all duration-75 hover:scale-105 hover:border hover:border-black rounded-md drop-shadow-2xl z-10"
                  >
                    <img
                      src={
                        item.main_picture_url.match("missing")
                          ? require("../../assets/png/no-image.png")
                          : item.main_picture_url
                      }
                      alt="productImage"
                      className="w-fit h-fit rounded-t-md bg-white z-0"
                    />
                    <div className="flex flex-col justify-center items-start text-white w-full min-h-[100px] p-[1em] bg-black rounded-b-md z-0 ">
                      <p className="text-[12px] 2xl:text-[14px] ">{`${item.brand_name}`}</p>
                      <p className="text-[10px]  2xl:text-[12px] truncate w-[90%] ">{`${item.name}`}</p>
                      <p className="text-[10px]  2xl:text-[12px] ">
                        {"$ "}
                        {(item.lowest_price_cents_usd / 100).toFixed(2)}
                      </p>
                    </div>
                  </a>
                ))
              ) : (
                <section className="col-span-full flex justify-center items-center h-screen">
                  <MoonLoader color="#000000" loading={loading} />
                </section>
              )}
            </section>
          </section>
        </section>
        <section className="flex flex-row justify-center items-center gap-5 h-[5em] font-Poppins">
          <button onClick={onPrevPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-arrow-left fill-black w-[25px] h-[25px] hover:opacity-50"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
          <section className="flex flex-row ">
            {indexPages.length > 0 ? (
              indexPages.slice(0, 5).map((number, index) => {
                if (pageNumber + 1 === number) {
                  return (
                    <button
                      key={index}
                      className="w-[2em] text-center  bg-black text-[#DCBA62] "
                    >
                      {number}
                    </button>
                  );
                }
                return (
                  <button
                    onClick={() => {
                      setPageNumber(index);
                      window.scrollTo(0, 0);
                    }}
                    key={index}
                    className="w-[2em] text-center text-black hover:border hover:border-black"
                  >
                    {number}
                  </button>
                );
              })
            ) : (
              <></>
            )}
          </section>
          <button onClick={onNextPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-arrow-right fill-black w-[25px] h-[25px] hover:opacity-50"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </section>
        <Footer />
      </span>
    </>
  );
}

export default Products;
