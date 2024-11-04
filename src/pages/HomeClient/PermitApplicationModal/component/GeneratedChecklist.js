import React from "react";
import { Card, CardBody, CardText, Col, Row } from "reactstrap";
import GeneratedChecklistCard from "./GeneratedChecklistCard";
import { generatedChecklistFD } from "pages/HomeClient/FakeValues/generatedChecklist";

export default function GeneratedChecklist() {
  return (
    <>
      <div className="GeneratedChecklist">
        <div className=" Printable-container">
          {generatedChecklistFD.map((list) => (
            <div className="" key={list.id}>
              <GeneratedChecklistCard title={list.title} data={list.data} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
