import axios from "axios";
import bodyParser from "body-parser";

const handler = async (req, res) => {  
    const { value } = req.body;
    // console.log(req.body);

  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${value}&pageSize=12`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEYS}`,
      },
    }
  );
    const data = await response.data;
    res.status(200).json(data);
};


  export default handler;
