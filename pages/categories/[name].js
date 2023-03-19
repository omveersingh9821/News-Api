import axios from "axios";

const categorySubPage = ({ data }) => {
  return (
    <div className="page-container">
      <div
        className="d-flex flex-column justify-content-center align-items-sm-center"
        style={{ marginTop: "5rem" }}
      >
        {data.map((data, index) => (
          <div
            className="card mb-4"
            style={{
              maxWidth: "440px",
              margin: "0 1rem 0 1rem",
              padding: "6px",
            }}
            key={index}
          >
            <div className="row no-gutters">
              <div className="col-md-12">
                <div className="card-body">
                  <h1
                    className="card-title"
                    onClick={() => (window.location.href = data.url)}
                    style={{cursor:"pointer"}}
                  >
                    {data.name}
                  </h1>
                  <p className="card-text text-secondary">{data.description}</p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
  // console.log(sources);
  return {
    props: {
      data: sources,
    },
  };
};

export default categorySubPage;
