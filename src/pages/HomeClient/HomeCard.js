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
import { Link } from "react-router-dom";
import { application, checklist } from "./assets";
import PAModal from "./PermitApplicationModal/PAModal";

export default function HomeCard({ type, title, buttons }) {
  // console.log(buttons);
  return (
    <Card className="mb-4" style={{ minHeight: "20rem" }}>
      <CardImg
        top
        className="img-fluid"
        src={type == "checklist" ? checklist : application}
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
            {type === "checklist" ? (
              <>
                <Col md="12" style={{ display: "flex", gap: "5px" }}>
                  {/* <Link
                    to="#"
                    className="btn btn-primary"
                    style={{ width: "50%" }}
                  >
                    Building Permit
                  </Link> */}
                  <PAModal title="Building Permit" />
                  <PAModal title="Occupancy Permit" />
                  {/* <Link
                    to="#"
                    className="btn btn-primary"
                    style={{ width: "50%" }}
                  >
                    Occupancy Permit
                  </Link> */}
                </Col>
              </>
            ) : (
              <Col md="12">
                <PAModal title="Application Permit" />
                {/* <Link
                  to="#"
                  className="btn btn-primary"
                  style={{ width: "100%", margin: "5px 0px" }}
                >
                  Permit Application
                </Link> */}
              </Col>
            )}
          </Row>
        </CardText>
      </CardBody>
    </Card>
  );
}
