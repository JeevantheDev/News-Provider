import axios from "axios";

export const getTopHeadlines = async (code) => {
  const res = await axios.get(`${process.env.BASE_URL}/api/v1/topNews`);
  return res.data;
};
export const updateTopHeadlines = async (data) => {
  const res = await axios.post(`/api/v1/topNews`, data);
  return res.data;
};
export const getAllNews = async (data) => {
  const res = await axios.post(`${process.env.BASE_URL}/api/v1/topNews`, data);
  return res.data;
};
export const getEveryNews = async (data) => {
  const res = await axios.post(
    `${process.env.BASE_URL}/api/v1/everyNews`,
    data
  );
  return res.data;
};
export const updateEveryNews = async (data) => {
  const res = await axios.post(`/api/v1/everyNews`, data);
  return res.data;
};

export const getNewsSources = async (language) => {
  const res = await axios.get(
    `${process.env.SOURCES_URL}/?language=${language}&apiKey=${process.env.API_KEY}`
  );
  return res.data;
};
