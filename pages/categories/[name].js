import axios from "axios";
import styles from "../../styles/Content.module.css";

const categorySubPage = ({ data }) => {
  return (
    <div className={styles.subCategory}>
      {data.map((article, index) => (
        <div
          className={`${styles.subInner} card mb-2`}
          style={{
            width: "430px",
            margin: "1rem 1rem 0 1rem",
            padding: "2px",
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
                  style={{ cursor: "pointer", fontSize: "20px",color:"black" }}
                >
                  {article.name}
                </h1>
                <p className="card-text" style={{ color: "gray" }}>
                  {article.description}
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
