import React from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import PAModal from "../PAModal";

export default function HomeCard({ title, buttons, imageUrl }) {
  // console.log(buttons);
  return (
    <Card className="mb-4 HomeCardStyle" style={{ minHeight: "20rem" }}>
      <CardImg
        top
        className="img-fluid"
        src={imageUrl}
        alt="Skote"
        style={{ width: "100%", objectFit: "contain" }}
      />
      <CardBody style={{ flex: "1" }}>
        <CardTitle className="mt-0">{title}</CardTitle>
        <CardText>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardText>
        <CardText>
          <Row>
            {buttons?.map((item) => (
              <NavLink
                className="btn btn-success waves-effect waves-light"
                key={item.id}
                to={item.url}
              >
                {item.title}
              </NavLink>
            ))}
          </Row>
        </CardText>
      </CardBody>
    </Card>
  );
}
