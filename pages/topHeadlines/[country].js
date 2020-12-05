import React, { useState } from "react";
import Layout from "../../components/common/Layout";
import MainImage from "../../components/shared/MainImage";
import { Row, Col } from "reactstrap";
import ListGroups from "../../components/shared/ListGroups";
import { getAllNews, updateTopHeadlines } from "../../actions";
import DropdownBtn from "../../components/common/DropdownBtn";
import TopTitle from "../../components/shared/TopTitle";
import BasicPagination from "../../components/shared/BasicPagination";
const TopHeadlines = ({ allNews, totalNews, state }) => {
  const [countryCode, setCountryCode] = useState(state.title);
  const [category, setCategory] = useState(state.category);
  const [pageCount, setPageCount] = useState(state.page);
  const [news, setTopNews] = useState(allNews);
  const [newsLength, setNewsLength] = useState(totalNews);

  const handleGetCountry = async (e) => {
    state.title = e.target.value;
    setCountryCode(state.title);
    const { articles, totalResults } = await updateTopHeadlines(state);
    state.page = totalResults;
    setNewsLength(totalNews);
    setTopNews(articles);
  };

  const handleGetCategory = async (e) => {
    state.category = e.target.innerText;
    setCategory(state.category);
    const { articles, totalResults } = await updateTopHeadlines(state);
    state.page = totalResults;
    setNewsLength(totalNews);
    setTopNews(articles);
  };

  const handleNextPage = async (e) => {
    state.page = parseInt(e.target.innerText);
    setPageCount(state.page);
    const { articles, totalResults } = await updateTopHeadlines(state);
    state.page = totalResults;
    setNewsLength(totalNews);
    setTopNews(articles);
  };

  return (
    <Layout>
      <div className="mt-5">
        <Row>
          <Col className="col-lg-2">
            <TopTitle title="Filter" />
            <DropdownBtn
              handleGetCountry={handleGetCountry}
              defaultCountry={countryCode}
            />
            <ListGroups
              activeCategory={category}
              handleGetCategory={handleGetCategory}
              horizontal={false}
            />
          </Col>
          <Col className="col-lg-10">
            <TopTitle title="Top Headlines" />
            <MainImage allNews={news} />
            <BasicPagination
              handleNextPage={handleNextPage}
              page={Math.ceil(newsLength / 20)}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const {
    query: { country },
  } = context;
  const state = {};
  state.title = country.split("+")[0];
  state.category = country.split("+")[1];
  state.page = parseInt(country.split("+")[2]);
  console.log(state);
  const allNews = await getAllNews(state);
  const totalNews = allNews.totalResults;

  return {
    props: { allNews: allNews.articles, totalNews, state },
  };
};

export default TopHeadlines;
