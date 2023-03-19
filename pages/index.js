import styles from "@/styles/Home.module.css";
import { useState, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";
import Content from "@/components/Content";
import Spinner from "@/components/Spinner";
import ReactPagination from "@/components/ReactPagination";
import SearchBar from "@/components/SearchBar";

export default function Home({ articles, API_KEYS }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 3;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scroll(0, 0);
  };
  const offset = currentPage * articlesPerPage;
  const currentArticles = articles.slice(offset, offset + articlesPerPage);

  //debounce 
  const getData = async (value) => {
    if (value) {
      const url = "/api/handleRequest";
      const response = await axios.post(url, {
        headers: {
          "Content-Type": "application/json",
        },
        value: JSON.stringify({ value }),
      });

      const data = await response.data;
      const { articles } = data;
      setResult(articles);
      // console.log(articles);
    }
  };
  const deb = useCallback(
    debounce((value) => {
      getData(value);
    }, 700),
    []
  );
   
  const handleValue = (value) => {
    setSearch(value);
    deb(value);
  };

  //handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    const maxLen = 50;
    if (search.length > maxLen) {
      alert("Search term is too long");
      return;
    }
    if (search != "") {
      const option = {
        headers: {
          "Content-Type": "application/json",
        },
        value: JSON.stringify({ value: search }),
      };
      const url = "/api/handleRequest";
      const response = await axios.post(url, option);
      const data = await response.data;
      const { articles } = data;
      setResult(articles);
      console.log(articles);
    }
  };

  return (
    <>
      <div className="page-container mb-5" >
        {/* <div className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <span>News</span> API
          </h1>
        </div> */}

        
        <SearchBar styles={styles} handleSearch={handleSearch} handleValue={handleValue}/>

        {search.length !== 0 ? (
          <div className="d-flex flex-column">
            {result.length === 0 ? (
              <Spinner styles={styles} />
            ) : (
              <Content currentArticles={result} />
            )}
          </div>
        ) : (
          <>
            <Content currentArticles={currentArticles} />
            <ReactPagination
              articles={articles}
              articlesPerPage={articlesPerPage}
              handlePageClick={handlePageClick}
            />
          </>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const API_KEYS = process.env.API_KEYS;
  // console.log(API_KEYS);
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in`,
    {
      headers: {
        Authorization: `Bearer ${API_KEYS}`,
      },
    }
  );
  const data = await response.data;
  const { articles } = data;
  // console.log(articles);
  return {
    props: {
      articles,
      API_KEYS,
    },
  };
};
