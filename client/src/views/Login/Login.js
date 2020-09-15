import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardBody, Col, Container, Form, Row, CardHeader, Card, FormGroup } from 'reactstrap';
import './Login.css';
import logo from '../../assets/img/brand/kuwhite.svg'

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="6">
              <Card className="login-card">
                <CardHeader className="text-center ku-tb-head border-0 login-card-header">
                  <h1 className="m-0">เข้าสู่ระบบเอกสารทางการศึกษาออนไลน์</h1>
                </CardHeader>
                <CardBody className="ku-tb-head login-card-body pt-xl-0">
                  <Row>
                    <Col md="6" className="text-center pr-md-0">
                      <img src={logo} width="133" height="180" alt="KU Logo" className="navbar-brand-full" />
                    </Col>
                    <Col md="6" style={{ paddingBottom: 30 }} className="pl-md-0">
                      <Form>
                        <FormGroup>
                          <Row>
                            <Col xs="10" className="ml-auto mr-auto text-center">
                              เข้าสู่ระบบด้วย KU Google
                          </Col>
                            <Col xs="10" className="ml-auto mr-auto text-center">
                              <Link to="/backend/requests">
                                <div id="customBtn" className="customGPlusSignIn">
                                  <span className="icon"></span>
                                  <span className="buttonText">KU Google</span>
                                </div>
                              </Link>
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup>
                          <Row>
                            <Col xs="10" className="ml-auto mr-auto text-center">
                              เข้าสู่ระบบด้วย Google
                          </Col>
                            <Col xs="10" className="ml-auto mr-auto text-center">
                              <Link to="/frontend/requests">
                                <div id="customBtn" className="customGPlusSignIn">
                                  <span className="icon"></span>
                                  <span className="buttonText">Google</span>
                                </div>
                              </Link>
                            </Col>
                          </Row>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
