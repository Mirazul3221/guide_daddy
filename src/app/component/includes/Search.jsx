import React from 'react';

const Search = () => {
  return (
    <div>
      <div class="search-field searchBer flex items-center border-[1px] px-2 py-[2px] rounded-full justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#a39e9e"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          class="outline-0"
          placeholder="Search for something"
          type="text"
        />
      </div>
    </div>
  );
};

export default Search;
