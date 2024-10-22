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

// import images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import Background from "./assets/images/cityhall.jpg";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import HomeCard from "./HomeCard";
import PAModal from "./PermitApplicationModal/PAModal";

const HomeClient = () => {
  //meta title
  document.title = "Home";

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: "url(cityhallBG.jpg)",
          height: "30rem",
          backgroundPositionY: "30%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          marginTop: "120px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            textShadow:
              "-1px -1px 0 #000,  1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
            fontSize: "450%",
          }}
        >
          Welcome to CBMD Butuan City
        </h1>
      </div>
      <div className="page-content" style={{ paddingTop: "0px" }}>
        <Container fluid={true}>
          <Row>
            <Col className="col-12 mb-4">
              <p className="my-3" style={{ textAlign: "center" }}>
                Available Services
              </p>
              {/* <Breadcrumbs title="test" breadcrumbItem="test2" /> */}
              <CardDeck className="card-deck-wrapper">
                <div className="card-group" style={{ gap: "10px" }}>
                  <HomeCard type="application" title="Permit Application" />
                  <HomeCard type="checklist" title="Checklist Generator" />
                </div>
              </CardDeck>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 mb-4">
              <p className="my-3" style={{ textAlign: "center" }}>
                Available Services
              </p>
              {/* <Breadcrumbs title="test" breadcrumbItem="test2" /> */}
              <CardDeck className="card-deck-wrapper">
                <div className="card-group" style={{ gap: "10px" }}>
                  <HomeCard type="application" title="Permit Application" />

                  <HomeCard type="checklist" title="Checklist Generator" />
                </div>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default HomeClient;
