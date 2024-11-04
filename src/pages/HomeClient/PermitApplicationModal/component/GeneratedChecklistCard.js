import { Card, CardBody, CardText, Col, Row } from "reactstrap";
import React from "react";
export default function GeneratedChecklistCard({ title, data }) {
  // console.log(data);
  return (
    <div className="GeneratedChecklistCard">
      <p>{title}</p>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            {index + 1}.{item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
