import React from "react";
import styles from "../styles/Content.module.css";
import { useRouter } from "next/router";

const Content = ({ currentArticles }) => {
  const router = useRouter();
  return (
    
      <div className={styles.main}>
        {currentArticles.map((article, index) => (
          <div className="card mb-3" style={{maxWidth: "25rem",height:"34rem",margin: "0rem 1rem 0 1rem",padding: "2px",backgroundColor:"black",color:"#eee"}} key={index}>
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
                    style={{ cursor: "pointer", fontSize: "20px" }}
                  >
                    {article.title}
                  </h1>
                  <p className="card-text" style={{ color: "#c6c6c6" }}>
                    {article.description}
                  </p>
                  <p className="card-text">
                    <small style={{ color: "#a9a9a9" }}>
                      Published At : {article.publishedAt.slice(0, 10)}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default Content;
