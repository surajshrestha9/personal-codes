// function handle submission event
// if login->true
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ButtonComponent from "../../../components/common/ButtonComponent";
import {
  EmailInputComponent,
  PasswordInputComponent,
} from "../../../components/common/InputComponent";
// profile
const LoginPage = () => {
  // let [email, setEmail] = useState();
  // let [password, setPassword] = useState();

  let [data, setData] = useState({
    email: null,
    password: null,
  });
  let [err, setErr] = useState();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation here or separate function
    // validateData();
    Object.keys(data).map((key) => {
      validateField(key, data[key]);
    });
  };

  const validateField = (field, value) => {
    let msg = null;
    switch (field) {
      case "email":
        msg = !value ? "Email addr is required" : null;
        break;
      case "password":
        msg = !value ? "Password is required" : null;
        break;
      default:
    }
    setErr({ ...err, [field]: msg });
  };

  const validateData = () => {
    if (!data.email) {
      // email null
      setErr({
        ...err,
        email: "Email address is required",
      });
    } else {
      setErr({
        ...err,
        email: null,
      });
    }
    if (!data.password) {
      // password null
      setErr({
        ...err,
        password: "password field is required",
      });
    } else {
      setErr({
        ...err,
        password: null,
      });
    }
  };
  return (
    <>
      <Container>
        <Col>
          <h1 className="text-center">login page</h1>
          <hr />
        </Col>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              {/* <Form.Group className="row-mb-3">
                <Form.Label className="col-sm-3">Username:</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    size="sm"
                    type="email"
                    name="email"
                  ></Form.Control>
                </Col>
              </Form.Group> */}
              <EmailInputComponent
                label={"Username"}
                name={"email"}
                required={true}
                setChange={handleChange}
                errmsg={err?.email}
              />
              {/* <Form.Group className="row-mb-3">
                <Form.Label className="col-sm-3">password:</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    size="sm"
                    type="password"
                    name="password"
                  ></Form.Control>
                </Col>
              </Form.Group> */}
              <PasswordInputComponent
                label={"Password"}
                name="password"
                required={true}
                setChange={handleChange}
                errmsg={err?.password}
              />

              <Form.Group className="row mb-3">
                <Col sm={{ offset: 3, spam: 9 }}>
                  <ButtonComponent showCancel={true} text="Reset" />
                  <ButtonComponent showSubmit={true} text="Login" />
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
