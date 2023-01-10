import { Navbar, Container, Nav,Row,Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HomePage = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="bg-dark">
        <Container>
          <Navbar.Brand href="#home">logo here</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <NavLink className={"nav-link"} target={"_blank"} to="/"> */}
              {/* <NavLink className={"nav-link"} target={"_parent"} to="/"> */}
              {/* <NavLink className={"nav-link"} target={"_self"} to="/"> */}
              <NavLink className={"nav-link"} target={"top"} to="/">
                Home
              </NavLink>
              <NavLink className={"nav-link"} to="/register">
                Register
              </NavLink>
              <NavLink className={"nav-link"} to="/login">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
