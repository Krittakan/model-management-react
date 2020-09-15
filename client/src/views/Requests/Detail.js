import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Button, CardHeader, CardFooter } from 'reactstrap';
import StatusSection from './Components/StatusSection';
import PersonalDetail from '../Profile/Components/PersonalDetail';
import Education from '../Profile/Components/Education';
import RequestDetail from '../RequestsFrontend/Components/RequestDetailForDetail';
import Payment from './Components/Payment';
import Message from '../RequestsFrontend/Components/Message';
import { Link } from 'react-router-dom';

class Detail extends Component {

  messageBox = () => {
    if (this.props.match.params.id === "1" ||
      this.props.match.params.id === "6" ||
      this.props.match.params.id === "7" ||
      this.props.match.params.id === "8" ||
      this.props.match.params.id === "9") {
      return <div>
        <Row className="mt-3 mb-3 mr-auto ml-auto ku-border">
          <Col lg={12}>
            <h3>ข้อความ</h3>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={10} className="mr-auto ml-auto">
            <Message id={this.props.match.params.id} />
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
                  <label>สถานะ</label>
                </CardHeader>

                <StatusSection id={this.props.match.params.id} />

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
              <Link to="/backend/requests" className="text-decoration-none">
                <Button block color="danger" className="font-weight-bold">ย้อนกลับ</Button>
              </Link>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    )
  }
}

export default Detail;