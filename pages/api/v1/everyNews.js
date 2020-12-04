import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    const response = await axios.get(
      `${process.env.EVERYTHING_URL}/?q=${req.body.queryText}&page=${parseInt(
        req.body.page
      )}&apiKey=${process.env.API_KEY}`
    );
    return res.json(response.data);
  }
};
