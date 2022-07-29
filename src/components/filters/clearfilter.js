import React from "react";

import { useSearchParams } from "react-router-dom";

function ClearFilter() {
  const [filter, setFilter] = useSearchParams();
  const [urlFilter] = useSearchParams();

  const handleClearFilter = () => {
    if ([...urlFilter].length != 0) {
      for (const [param, value] of urlFilter.entries()) {
        filter.delete(param);
        setFilter(filter, {
          replace: true,
        });
      }
    }
  };
  return (
    <button className="btn-clearfilter mt-[4em]" onClick={handleClearFilter}>
      Clear Filters
    </button>
  );
}

export default ClearFilter;
