import axios from "axios";
import styles from "../../styles/Content.module.css";

const categorySubPage = ({ data }) => {
  return (
    <div className={styles.main1}>
      {data.map((article, index) => (
        <div
          className="card mb-2"
          style={{
            maxWidth: "440px",
            margin: "0rem 1rem 0 1rem",
            padding: "2px",
            backgroundColor: "black",
            color: "#eee",
            border:"1px solid gray"
          }}
          key={index}
        >
          <div className="row no-gutters">
          
            <div className="col-md-12">
              <div className="card-body">
                <h1
                  className="card-title"
                  onClick={() => (window.location.href = article.url)}
                  style={{ cursor: "pointer", fontSize: "20px" }}
                >
                  {article.name}
                </h1>
                <p className="card-text" style={{ color: "#c6c6c6" }}>
                  {article.description}
                </p>
                <p className="card-text">
                  <small style={{ color: "#a9a9a9" }}>
                    Published At : {article.publishedAt}
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

export const getServerSideProps = async (pageContext) => {
  const query = pageContext.query.name;
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines/sources?category=${query}&apiKey=${process.env.API_KEYS}`
  );
  const jsonData = await response.data;
  const { sources } = jsonData;
  console.log(sources);
  return {
    props: {
      data: sources,
    },
  };
};

export default categorySubPage;
