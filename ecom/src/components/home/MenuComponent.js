import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MenuComponent = () => {
  // data store
  // change listen =>data
  // call api caller
  // event handle
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">logo here</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className={"nav-link"} to="/">
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
          <Nav className="right">
            <NavLink to="/admin">Admin</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default MenuComponent;
