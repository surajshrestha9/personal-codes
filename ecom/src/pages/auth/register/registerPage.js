import { Container, Row, Col, Form } from "react-bootstrap";
import {
  EmailInputComponent,
  PasswordInputComponent,
} from "../../../components/common/InputComponent";
import ButtonComponent from "../../../components/common/ButtonComponent";
const RegisterPage = () => {
  return (
    <>
      <Container>
        <Col>
          <h1 className="text-center">Register</h1>
          <hr />
        </Col>

        <Row>
          <Col>
            <Form>
              <EmailInputComponent
                label={"Email Address"}
                name="email"
                required="true"
              />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <PasswordInputComponent
              label={"Password"}
              name="password"
              required={true}
              
            />
          </Col>
        </Row>
        <Form.Group className="row mb-3">
          <Col sm={{ offset: 3, spam: 9 }}>
            <ButtonComponent showCancel={true} text="Reset" />
            <ButtonComponent showSubmit={true} text="Login" />
          </Col>
        </Form.Group>
      </Container>
    </>
  );
};
export default RegisterPage;
