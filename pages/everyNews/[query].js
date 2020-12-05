import React, { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import MainImage from "../../components/shared/MainImage";
import { Row, Col } from "reactstrap";
import ListGroups from "../../components/shared/ListGroups";
import { getEveryNews, updateEveryNews } from "../../actions";
import DropdownBtn from "../../components/common/DropdownBtn";
import TopTitle from "../../components/shared/TopTitle";
import BasicPagination from "../../components/shared/BasicPagination";
const TopHeadlines = ({ allNews, totalNews, state }) => {
  const [query, setQuery] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [news, setAllNews] = useState([]);
  const [newsLength, setNewsLength] = useState(0);

  useEffect(() => {
    setQuery(state.queryText);
    setPageCount(state.page);
    setAllNews(allNews);
    setNewsLength(totalNews);
  }, [state.queryText, state.page, allNews]);

  //   const handleGetCountry = async (e) => {
  //     state.title = e.target.value;
  //     setCountryCode(state.title);
  //     const { articles, totalResults } = await updateEveryNews(state);
  //     state.page = totalResults;
  //     setNewsLength(totalNews);
  //     setAllNews(articles);
  //   };

  //   const handleGetCategory = async (e) => {
  //     state.category = e.target.innerText;
  //     setCategory(state.category);
  //     const { articles, totalResults } = await updateEveryNews(state);
  //     state.page = totalResults;
  //     setNewsLength(totalNews);
  //     setAllNews(articles);
  //   };

  const handleNextPage = async (e) => {
    state.page = parseInt(e.target.innerText);
    setPageCount(state.page);
    const { articles, totalResults } = await updateEveryNews(state);
    setNewsLength(totalResults);
    setAllNews(articles);
  };

  return (
    <Layout>
      <div className="mt-5">
        <Row>
          {/* <Col className="col-lg-2">
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
          </Col> */}
          <Col className="col-lg-10">
            <TopTitle
              description={`Search results: ${query}`}
              title="All News"
            />
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
    query: { query },
  } = context;
  const state = {};
  state.queryText = query;
  state.page = 1;
  console.log(state);
  const allNews = await getEveryNews(state);
  const totalNews = allNews.totalResults;
  return {
    props: { allNews: allNews.articles, totalNews, state },
  };
};

export default TopHeadlines;
