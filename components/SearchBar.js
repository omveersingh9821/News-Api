import React from "react";

const SearchBar = ({ styles, handleSearch, handleValue }) => {
  return (
    <div className={styles.search}>
      <form onSubmit={handleSearch}>
        <div className="d-flex justify-content-center mx-5">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            onChange={(e) => handleValue(e.target.value)}
          />
          <button type="submit" className="btn btn-success mx-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
