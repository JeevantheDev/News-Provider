import React from "react";
import Link from "next/link";

const Example = ({ topNews }) => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {topNews.map((n, index) => {
            return (
              <li
                key={index}
                data-target="#carouselExampleIndicators"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            );
          })}
        </ol>
        <div className="carousel-inner" role="listbox">
          {topNews.map((n, index) => {
            return (
              <div
                key={n.url}
                className={
                  index === 0 ? "carousel-item  active" : "carousel-item"
                }
                data-interval="2000"
              >
                <img
                  src={n.urlToImage}
                  className="d-block w-100"
                  alt={n.title}
                />
                <div className="black-overlay"></div>
                <div className="carousel-caption d-none d-md-block card-img-overlay">
                  <Link href={n.url}>
                    <a>
                      <h5>{n.title}</h5>
                    </a>
                  </Link>
                  <p>{n.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Example;
