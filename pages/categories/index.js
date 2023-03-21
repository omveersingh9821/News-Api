import Card from "react-bootstrap/Card";
import { useRouter } from 'next/router';
import styles from '../../styles/Content.module.css';
import Head from 'next/head';

const Categories = () => {
  const router = useRouter();
  return (
    <div className="container">
       <Head>
        <title> Categories </title>
      </Head>
      <div className={`${styles.scale} container d-flex justify-content-center flex-wrap`} style={{marginTop:"6rem"}}>
        <div className="card mx-3 mb-3 scale" style={{ width: "18rem"}}>
          <Card.Title className="text-center">Sports</Card.Title>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xG68cFTHGDPZ5_jRvMoB1e0fa3ybLw2QcAPvf_THuKbMmoEyx1rkZivJk-CaZIPtydc&usqp=CAU"
            className="card-img-top"
            alt="sports"
            style={{ height: "100%",cursor:'pointer'}}
            onClick={() =>router.push('/categories/sports')}
          />
        </div>
        <div className="card  mb-3 mx-3 image" style={{ width: "18rem" }}>
          <Card.Title className="text-center">Science</Card.Title>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWkZaCWg6Qkqy9gHcUvbxZM-sRwvmuWXG_g&usqp=CAU"
            className="card-img-top"
            alt="science"
            style={{ height: "100%",cursor:'pointer'}}
            onClick={() =>router.push('/categories/science')}
          />
        </div>
        <div className="card mb-3 mx-3" style={{ width: "18rem" }}>
          <Card.Title className="text-center">Technology</Card.Title>
          <img
            src="https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg"
            className="card-img-top"
            alt="technology"
            style={{ height: "100%",cursor:'pointer'}}
            onClick={() =>router.push('/categories/technology')}
          />
        </div>
        <div className="card mb-3 mx-3" style={{ width: "18rem" }}>
          <Card.Title className="text-center" >Entertainment</Card.Title>
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="Entertainment"
            style={{ height: "100%",cursor:'pointer'}}
            onClick={() =>router.push('/categories/entertainment')}
          />
        </div>
        <div className="card mb-3 mx-3" style={{ width: "18rem" }}>
          <Card.Title className="text-center">Business</Card.Title>
          <img
            src="https://thumbs.dreamstime.com/b/businessman-using-tablet-laptop-analyzing-sales-data-economic-growth-graph-chart-business-strategy-digital-marketing-154742021.jpg"
            className="card-img-top"
            alt="business"
            style={{ height: "100%",cursor:'pointer'}}
            onClick={() =>router.push('/categories/business')}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
