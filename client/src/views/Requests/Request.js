import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Label, Button, CardHeader, FormGroup, CardFooter, Badge } from 'reactstrap';
import PersonalDetail from '../Profile/Components/PersonalDetail';
import Education from '../Profile/Components/Education';
import RequestDetail from '../RequestsFrontend/Components/RequestDetailForDetail';
import Payment from './Components/Payment';
import Message from '../RequestsFrontend/Components/Message';
import { Link } from 'react-router-dom';

class Request extends Component {
  statusBox = () => {
    if (this.props.match.params.id === "1" || this.props.match.params.id === "2") {
      return (
        <CardBody>
          <FormGroup>
            <Row>
              <Col md="4">
                <Label for="phone" >สถานะคำร้อง</Label>
              </Col>
              <Col md="2">
                <Badge color="primary" className="ku-mw100px">อยู่ระหว่างดำเนินการ</Badge>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="4">
                <Label for="phone" >ปรับสถานะคำร้อง</Label>
              </Col>
              <Col md="2">
                <Button block color="danger">สิ้นสุดคำร้อง</Button>
              </Col>
            </Row>
          </FormGroup>
        </CardBody>
      );
    }
    return (
      <CardBody>
        <FormGroup>
          <Row>
            <Col md="4">
              <Label for="phone" >สถานะคำร้อง</Label>
            </Col>
            <Col md="2">
              <Badge color="success" className="ku-mw100px">สำเร็จ</Badge>
            </Col>
          </Row>
        </FormGroup>
      </CardBody>
    );
  }

  messageBox = () => {
    if (this.props.match.params.id === "1") {
      return <div>
        <Row className="mt-3 mb-3 mr-auto ml-auto ku-border">
          <Col lg={12}>
            <h3>ข้อความ</h3>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={10} className="mr-auto ml-auto">
            <Message />
          </Col>
        </Row>
      </div>;
    }
    return null;
  }

  render() {
    return (
      <Card>
        <CardBody>
          <Row className="mt-3 mb-3 mr-auto ml-auto ku-border">
            <Col lg={12}>
              <h3>ข้อมูลคำร้อง</h3>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={10} className="mr-auto ml-auto">
              <Card style={{ minHeight: "440px" }}>
                <CardHeader className="bg-ku-primary01 text-white">
                  <label>สถานะคำร้อง</label>
                </CardHeader>

                {this.statusBox()}


                <PersonalDetail type="0" />

                <Education type="0" />

                <RequestDetail id={this.props.match.params.id} />
              </Card>
            </Col>
          </Row>

          <Row className="mt-3 mb-3 mr-auto ml-auto ku-border">
            <Col lg={12}>
              <h3>ค่าธรรมเนียม</h3>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={10} className="mr-auto ml-auto">
              <Payment id={this.props.match.params.id} />
            </Col>
          </Row>
          {this.messageBox()}
        </CardBody>

        <CardFooter className="bg-white">
          <Row className="align-items-center">
            <Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
              <Link to="/backend/requests">
                <Button block color="danger">ยกเลิก</Button>
              </Link>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    )
  }
}

export default Request;