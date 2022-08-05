import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [search, setSearch] = useSearchParams();
  const [focus, setFocus] = useState();

  const onChangeSearch = (e) => {
    const text = e.target.value;

    if (text.length === 0) {
      search.delete("query");
      setSearch(search, {
        replace: true,
      });
    } else {
      search.set("query", text);
      setSearch(search, {
        replace: true,
      });
    }
  };

  return (
    <div className="flex justify-end items-center ">
      <section className="flex flex-row justify-start items-center shadow-xl border border-black rounded-full p-2 min-w-[50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={"bi bi-search" + (focus ? " animate-bounce": "") }
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent placeholder-black w-[8em] text-black indent-4 focus:outline-none"
          onChange={onChangeSearch}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(false)}
        />
      </section>
    </div>
  );
}

export default Search;
