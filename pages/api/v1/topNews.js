import axios from "axios";

export default async (req, res) => {
  // console.log(req.body);
  if (req.method === "GET") {
    const response = await axios.get(
      `${process.env.TOP_HEADLINES_URL}/?country=in&page=${parseInt(
        1
      )}&apiKey=${process.env.API_KEY}`
    );
    return res.json(response.data);
  } else if (req.method === "POST") {
    let response;
    console.log(req.body);
    if (
      (req.body.category && req.body.category !== "All") ||
      (req.body.page !== 1 && req.body.category !== "All")
    ) {
      response = await axios.get(
        `${process.env.TOP_HEADLINES_URL}/?country=${req.body.title}&category=${
          req.body.category
        }&page=${parseInt(req.body.page)}&apiKey=${process.env.API_KEY}`
      );
    } else {
      response = await axios.get(
        `${process.env.TOP_HEADLINES_URL}/?country=${
          req.body.title
        }&page=${parseInt(req.body.page)}&apiKey=${process.env.API_KEY}`
      );
    }
    return res.json(response.data);
  }
};
