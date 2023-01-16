import { Col, Container, Row } from "react-bootstrap";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
const AuthPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={6}>
            <RegisterPage />
          </Col>
          <Col sm={12} md={6}>
            <LoginPage />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AuthPage;
