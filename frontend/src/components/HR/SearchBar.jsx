import React, { useState } from "react";
import close from "../../assets/close_icon.png";

const SearchBar = ({ handleSearch, clearSearchData }) => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearchClick = async () => {
    setLoading(true);
    try {
      await handleSearch(keyword);
    } catch (error) {
      console.error("Error searching:", error);
    }
    setLoading(false);
  };

  const handleClearClick = () => {
    setKeyword("");
    if (typeof clearSearchData === "function") {
      clearSearchData();
    } else {
      console.warn("clearSearchData is not a function");
    }
  };

  return (
    <div className="relative">
      <label
        className="flex flex-col items-center justify-center max-w-2xl gap-2 px-2 py-2 mx-auto mt-40 bg-white border shadow-2xl min-w-sm md:flex-row rounded-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder="Search by Skills , Year , College ...."
          className="flex-1 w-full px-6 py-2 bg-white rounded-md outline-none"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="px-4 py-2 text-white rounded-md"
          onClick={handleClearClick}
        >
          <img src={close} alt="Clear Icon" className="w-10 h-10" />
        </button>

        <button
          className={`relative w-full px-6 py-3 overflow-hidden text-white transition-all duration-100 bg-[#f68523] border-[#f68523] md:w-auto fill-white active:scale-95 will-change-transform rounded-xl ${
            loading ? "disabled:opacity-70" : ""
          }`}
          onClick={handleSearchClick}
          disabled={loading}
        >
          <div className="relative">
            {loading && (
              <div className="absolute flex items-center justify-center w-3 h-3 transition-all -translate-x-1/2 -translate-y-1/2 inset-1/2">
                <svg
                  className="w-full h-full opacity-0 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}
            <div className="flex items-center transition-all opacity-1 valid:">
              <span className="mx-auto text-sm font-semibold truncate whitespace-nowrap">
                {loading ? "Searching..." : "Search"}
              </span>
            </div>
          </div>
        </button>
      </label>
    </div>
  );
};

export default SearchBar;
