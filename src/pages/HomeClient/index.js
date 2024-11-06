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

//Import Breadcrumb
import HomeCard from "./PermitApplicationModal/component/HomeCard";
import { homeCardObj } from "../../utils/objectForComponents";

//my imports

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
              <h2 className="my-3" style={{ textAlign: "center" }}>
                Available Services
              </h2>
              {/* <Breadcrumbs title="test" breadcrumbItem="test2" /> */}
              <CardDeck className="card-deck-wrapper">
                <div className="card-group" style={{ gap: "10px" }}>
                  {homeCardObj.map((item) => (
                    <HomeCard
                      key={item.id}
                      title={item.title}
                      imageUrl={item.imageUrl}
                      buttons={item.buttons}
                    />
                  ))}
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
