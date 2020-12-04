import React from "react";
import { Media, Button } from "reactstrap";
import moment from "moment";
import Link from "next/link";

const MainImage = ({ allNews }) => {
  return (
    <div>
      {allNews.map((news) => {
        return (
          <>
            <Media className="my-3" key={news.title}>
              <Media left top>
                <Media
                  height="64"
                  width="100"
                  className="mr-3"
                  object
                  src={news.urlToImage ? news.urlToImage : "/images/nan.jpg"}
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>{news.title}</Media>

                <Media description>{news.description}</Media>
                <div className="my-3">
                  {news.source.name && (
                    <span className="badge badge-warning">
                      {news.source.name}
                    </span>
                  )}
                  {news.publishedAt && (
                    <span className="badge badge-info mx-3">
                      {moment(news.publishedAt).format("LLLL")}
                    </span>
                  )}
                </div>
                <Link href={`${news.url}`}>
                  <a target="_">
                    <Button color="secondary">Read</Button>
                  </a>
                </Link>
              </Media>
            </Media>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default MainImage;
