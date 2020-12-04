import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const CATEGORY = [
  "All",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const ListGroups = ({
  handleGetCategory,
  activeCategory,
  horizontal = true,
}) => {
  return (
    <div className="my-2">
      <ListGroup
        className="justify-content-center"
        horizontal={horizontal ? "lg" : ""}
      >
        {CATEGORY.map((c) => {
          return (
            <ListGroupItem
              key={c}
              className={`${activeCategory === c ? "active" : ""}`}
              onClick={handleGetCategory}
              tag="a"
            >
              {c}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default ListGroups;
