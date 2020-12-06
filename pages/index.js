import Head from "next/head";
import Layout from "../components/common/Layout";
import ListGroups from "../components/shared/ListGroups";
import { Button } from "reactstrap";
import TopCarousel from "../components/shared/TopCarousel";
import { useState } from "react";
import {
  getTopHeadlines,
  updateTopHeadlines,
  getNewsSources,
} from "../actions";
import DropdownBtn from "../components/common/DropdownBtn";
import CardHeadline from "../components/common/CardHeadline";
import Link from "next/link";
import TopTitle from "../components/shared/TopTitle";
import { useRouter } from "next/router";

export default function Home({ news }) {
  const router = useRouter();

  const [countryCode, setCountryCode] = useState("in");
  const [category, setCategory] = useState("All");
  const [pageCount, setPageCount] = useState(1);
  const [topNews, setTopNews] = useState(news.articles.slice(0, 4));
  const [topHeadLines, setTopHeadlines] = useState(news.articles.slice(3, 10));

  let filterState = {};

  filterState.title = countryCode;
  filterState.category = category;
  filterState.page = pageCount;

  const handleGetCountry = async (e) => {
    filterState.title = e.target.value;
    setCountryCode(filterState.title);
    const { articles } = await updateTopHeadlines(filterState);
    setTopNews(articles.slice(0, 4));
    setTopHeadlines(articles.slice(3, 10));
  };

  const handleGetCategory = async (e) => {
    filterState.category = e.target.innerText;
    setCategory(filterState.category);
    const { articles } = await updateTopHeadlines(filterState);
    setTopNews(articles.slice(0, 4));
    setTopHeadlines(articles.slice(3, 10));
  };

  const handleClickViewMore = (e) => {
    router.push(`/topHeadlines/${countryCode}/${category}/${pageCount}`);
  };

  return (
    <Layout>
      <Head>
        <title>News-Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-5">
        <TopCarousel topNews={topNews} />
        <ListGroups
          activeCategory={category}
          handleGetCategory={handleGetCategory}
        />
      </div>
      <div className="row">
        <div className="col-lg-12">
          <TopTitle title="Top Headlines">
            <DropdownBtn
              handleGetCountry={handleGetCountry}
              defaultCountry="in"
            />
          </TopTitle>
          <CardHeadline topHeadLines={topHeadLines} />
          <Button
            onClick={handleClickViewMore}
            className="btn btn-light btn-lg btn-block my-3"
          >
            View More
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const jsonNews = await getTopHeadlines("in");
  const jsonSources = await getNewsSources("en");
  const news = jsonNews;
  const sources = jsonSources;
  return {
    props: {
      news,
      sources,
    },
  };
};
