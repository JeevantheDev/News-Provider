import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
const TopTitle = ({ title, children, description }) => {
  return (
    <>
      <Card className="mb-3 bg-light text-dark border-bottom">
        <div className="d-flex card-body align-items-center">
          <CardText tag="h1">{title}</CardText>
          {children}
        </div>
      </Card>
      {description && <p className="lead">{description}</p>}
    </>
  );
};

export default TopTitle;
