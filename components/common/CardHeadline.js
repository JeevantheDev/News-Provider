import React from "react";
import moment from "moment";
import Link from "next/link";

const CardHeadline = ({ topHeadLines }) => {
  return (
    <div className="articles-container">
      <article className="custom-card">
        <img
          src={
            topHeadLines[0].urlToImage
              ? topHeadLines[0].urlToImage
              : "/images/nan.jpg"
          }
          alt="News-Image"
        />
        <div className="card-body">
          <Link href={topHeadLines[0].url}>
            <a>
              <h5 className="card-title">{topHeadLines[0].title}</h5>
            </a>
          </Link>
          {topHeadLines[0].source.name && (
            <span className="badge badge-secondary">
              {topHeadLines[0].source.name}
            </span>
          )}
          {topHeadLines[0].publishedAt && (
            <span className="badge badge-info mx-3">
              {moment(topHeadLines[0].publishedAt).format("LLLL")}
            </span>
          )}
          <p>{topHeadLines[0].description}</p>
        </div>
      </article>
      <article className="custom-card">
        <div className="card-body">
          <Link href={topHeadLines[1].url}>
            <a>
              <h5 className="card-title">{topHeadLines[1].title}</h5>
            </a>
          </Link>
          {topHeadLines[1].source.name && (
            <span className="badge badge-secondary">
              {topHeadLines[1].source.name}
            </span>
          )}
          {topHeadLines[1].publishedAt && (
            <span className="badge badge-info mx-3">
              {moment(topHeadLines[1].publishedAt).format("LLLL")}
            </span>
          )}
          <p>{topHeadLines[1].description}</p>
        </div>
      </article>
      <article className="custom-card">
        <img
          src={
            topHeadLines[2].urlToImage
              ? topHeadLines[2].urlToImage
              : "/images/nan.jpg"
          }
          alt="News-Image   "
        />
        <div className="card-body">
          <Link href={topHeadLines[2].url}>
            <a>
              <h5 className="card-title">{topHeadLines[2].title}</h5>
            </a>
          </Link>
          {topHeadLines[2].source.name && (
            <span className="badge badge-secondary">
              {topHeadLines[2].source.name}
            </span>
          )}
          {topHeadLines[2].publishedAt && (
            <span className="badge badge-info mx-3">
              {moment(topHeadLines[2].publishedAt).format("LLLL")}
            </span>
          )}
          <p>{topHeadLines[2].description}</p>
        </div>
      </article>
      <article className="custom-card">
        <div className="card-body">
          <Link href={topHeadLines[3].url}>
            <a>
              <h5 className="card-title">{topHeadLines[3].title}</h5>
            </a>
          </Link>
          {topHeadLines[3].source.name && (
            <span className="badge badge-secondary">
              {topHeadLines[3].source.name}
            </span>
          )}
          {topHeadLines[3].publishedAt && (
            <span className="badge badge-info mx-3">
              {moment(topHeadLines[3].publishedAt).format("LLLL")}
            </span>
          )}
          <p>{topHeadLines[3].description}</p>
        </div>
        <img
          src={
            topHeadLines[3].urlToImage
              ? topHeadLines[3].urlToImage
              : "/images/nan.jpg"
          }
          alt="News-Image   "
        />
      </article>
      <article className="custom-card">
        <img
          src={
            topHeadLines[4].urlToImage
              ? topHeadLines[4].urlToImage
              : "/images/nan.jpg"
          }
          alt="News-Image   "
        />
        <div className="card-body">
          <Link href={topHeadLines[4].url}>
            <a>
              <h5 className="card-title">{topHeadLines[4].title}</h5>
            </a>
          </Link>
          {topHeadLines[4].source.name && (
            <span className="badge badge-secondary">
              {topHeadLines[4].source.name}
            </span>
          )}
          {topHeadLines[4].publishedAt && (
            <span className="badge badge-info mx-3">
              {moment(topHeadLines[4].publishedAt).format("LLLL")}
            </span>
          )}
          <p>{topHeadLines[4].description}</p>
        </div>
      </article>
      <article className="custom-card">
        <div className="card-body">
          <Link href={topHeadLines[5].url}>
            <a>
              <h5 className="card-title">{topHeadLines[5].title}</h5>
            </a>
          </Link>
          {topHeadLines[5].source.name && (
            <span className="badge badge-secondary">
              {topHeadLines[5].source.name}
            </span>
          )}
          {topHeadLines[5].publishedAt && (
            <span className="badge badge-info mx-3">
              {moment(topHeadLines[5].publishedAt).format("LLLL")}
            </span>
          )}
          <p>{topHeadLines[5].description}</p>
        </div>
      </article>
      <article className="custom-card">
        <div className="card-body">
          <Link href={topHeadLines[6].url}>
            <a>
              <h5 className="card-title">{topHeadLines[6].title}</h5>
            </a>
          </Link>
          {topHeadLines[6].source.name && (
            <span className="badge badge-secondary">
              {topHeadLines[6].source.name}
            </span>
          )}
          {topHeadLines[6].publishedAt && (
            <span className="badge badge-info mx-3">
              {moment(topHeadLines[6].publishedAt).format("LLLL")}
            </span>
          )}
          <p>{topHeadLines[6].description}</p>
        </div>
        <img
          src={
            topHeadLines[6].urlToImage
              ? topHeadLines[6].urlToImage
              : "/images/nan.jpg"
          }
          alt="News-Image"
        />
      </article>
    </div>
  );
};

export default CardHeadline;
