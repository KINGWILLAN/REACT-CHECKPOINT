import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { sitepics } from "../../data";

function BasicExample() {
  return (
    <section className="row mt-5 gap-3">
      {sitepics.map((item) => (
        <Card key={item.id} style={{ width: "18rem", height: "22rem" }}>
          {
            // comment key+id always with the topmost parent.
          }
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.Title}</Card.Title>
            <Card.Text>{item.Subtitle}</Card.Text>
            <Button variant="primary">Grab keys</Button>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}

export default BasicExample;
