import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/realestate.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img src={logo} style={{ height: "50px", width: "50px" }} />
          <Navbar.Brand href="#home">KINGS COURT HOUSINGS </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Homes</Nav.Link>
            <Nav.Link href="#features">Office Spaces</Nav.Link>
            <Nav.Link href="#pricing">Events Arenas</Nav.Link>
          </Nav>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search within your preferred location"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;

// const Navbar = () => {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Container>
//         <div>Navbar</div>
//       </Container>
//     </>
//   );
// };

// export default Navbar;
