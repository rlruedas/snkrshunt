export const setProductQueryString = ({
  urlFilters,
  urlParams,
  pageNumber,
}) => {

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

  let queryString = `query=${query}&distinct=true&hitsPerPage=40&maxValuesPerFacet=40&page=${pageNumber}&filters=${facetFilters}`;

  return queryString;
};

export const setJustDroppedQueryString = () => {
  const queryString = `query=&distinct=true&hitsPerPage=15&maxValuesPerFacet=40&page=0&filters=collection_slugs%3Ajust-dropped`;
  return queryString;
};
