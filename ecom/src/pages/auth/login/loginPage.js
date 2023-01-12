// function handle submission event
// if login->true

import { Container, Row, Col, Form } from "react-bootstrap";
import ButtonComponent from "../../../components/common/ButtonComponent";
// profile
const LoginPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">login page</h1>
            <hr />
          </Col>
          <Row>
            <Col>
              <Form>
                <Form.Group className="row-mb-3">
                  <Form.Label className="col-sm-3">Username:</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      size="sm"
                      type="email"
                      name="email"
                    ></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="row-mb-3">
                  <Form.Label className="col-sm-3">password:</Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      size="sm"
                      type="password"
                      name="password"
                    ></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="row-mb-3">
                  <Col sm={{ offset: 3, spam: 9 }}>
                    <ButtonComponent showCancel={true} text="Reset" />
                    <ButtonComponent showSubmit={true} text="Login"/>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
