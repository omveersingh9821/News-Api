import styles from "@/styles/Home.module.css";
import { useState, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";
import ReactPaginate from "react-paginate";


export default function Home({ articles }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 4;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scroll(0, 0);
  };

  const offset = currentPage * articlesPerPage;
  const currentArticles = articles.slice(offset, offset + articlesPerPage);

  const getData = (search) => {
    if (search) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${search}&pageSize=10&apiKey=d552d7bfdae7414aad21980a9838ca49`
        )
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          const { articles } = data;
          setResult(articles);
        })
        .catch((error) => console.log(error));
    }
  };
  const deb = useCallback(
    debounce((search) => {
      getData(search);
    }, 700),
    []
  );
  const handleValue = (value) => {
    setSearch(value);
    deb(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const MAX_SEARCH_TERM_LENGTH = 50;
    if (search.length > MAX_SEARCH_TERM_LENGTH) {
      alert("Search term is too long");
      return;
    }
    if (search != "") {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=d552d7bfdae7414aad21980a9838ca49`
      );
      const data = await response.data;
      const { articles } = data;
      // console.log(articles[0].title);
      setResult(articles);
    }
  };

  return (
    <>
      <div className="page-container">
        <div className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <span>News</span> API
          </h1>
        </div>

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

        {search.length !== 0 ? (
          <div className="d-flex flex-column">
            {result.length === 0 ? (
              <div className={styles.spinner}>
                <div className="spinner-border m-5" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <div
                className="d-flex flex-column justify-content-center align-items-sm-center"
                style={{ marginTop: "1rem" }}
              >
                {result.map((article, index) => (
                  <div
                    className="card mb-3"
                    style={{
                      maxWidth: "440px",
                      margin: "0rem 1rem 0 1rem",
                      padding: "6px",
                    }}
                    key={index}
                  >
                    <div className="row no-gutters">
                      {article.urlToImage && (
                        <div className="col-md-4" style={{ width: "540px" }}>
                          <img
                            src={article.urlToImage}
                            className="card-img"
                            alt=""
                          />
                        </div>
                      )}

                      <div className="col-md-12">
                        <div className="card-body">
                          <h1
                            className="card-title"
                            onClick={() => (window.location.href = article.url)}
                            style={{ cursor: "pointer",fontSize:"20px"}}
                          >
                            {article.title}
                          </h1>
                          <p className="card-text text-secondary">
                            {article.description}
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Published At : {article.publishedAt.slice(0, 10)}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <div
              className="d-flex flex-column justify-content-center align-items-sm-center"
              style={{ marginTop: "1rem" }}
            >
              {currentArticles.map((article, index) => (
                <div
                  className="card mb-3"
                  style={{
                    maxWidth: "440px",
                    margin: "0rem 1rem 0 1rem",
                    padding: "6px",
                  }}
                  key={index}
                >
                  <div className="row no-gutters">
                    {article.urlToImage && (
                      <div className="col-md-4" style={{ width: "540px" }}>
                  
                        <img
                          src={article.urlToImage}
                          className="card-img"
                          alt={article.title}
                        />
                      </div>
                    )}

                    <div className="col-md-12">
                      <div className="card-body">
                        <h1
                          className="card-title"
                          onClick={() => (window.location.href = article.url)}
                          style={{ cursor: "pointer",fontSize:"20px"}}
                        >
                          {article.title}
                        </h1>
                        <p className="card-text text-secondary">
                          {article.description}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Published At : {article.publishedAt.slice(0, 10)}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={Math.ceil(articles.length / articlesPerPage)}
                onPageChange={handlePageClick}
                containerClassName={"pagination-list"}
                pageClassName={"pagination-item"}
                previousClassName={"pagination-item"}
                nextClassName={"pagination-item"}
                activeClassName={"active"}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEYS}`
  );
  const data = await response.data;
  const { articles } = data;
  // console.log(articles);
  return {
    props: {
      articles,
    },
  };
};
