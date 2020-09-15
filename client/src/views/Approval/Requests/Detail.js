import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Button, CardHeader, CardFooter, ModalBody, Input } from 'reactstrap';
import StatusSection from './Components/StatusSection';
import Modal from './Components/Modal';

import PersonalDetail from '../../Profile/Components/PersonalDetail';
import Education from '../../Profile/Components/Education';
import RequestDetail from '../../RequestsFrontend/Components/RequestDetailForDetail';
import Payment from '../../Requests/Components/Payment';
import Message from '../../RequestsFrontend/Components/Message';
import { Link } from 'react-router-dom';

class Detail extends Component {
  messageBox = () => {
    if (this.props.match.params.id === "6" ||
      this.props.match.params.id === "7" ||
      this.props.match.params.id === "9") {
      return <div>
        <Row className="mt-3 mb-3 mr-auto ml-auto ku-border">
          <Col lg={12}>
            <h3>ข้อความ</h3>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={10} className="mr-auto ml-auto">
            <Message id="9" />
          </Col>
        </Row>
      </div>;
    }
    return null;
  }

  footer = () => {
    if (this.props.match.params.id === "6") {
      return (
        <Row className="align-items-center">
          <Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
            <Link to="/backend/approvals/requests" className="text-decoration-none">
              <Button block color="danger" className="font-weight-bold">ย้อนกลับ</Button>
            </Link>
          </Col>
          <Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-2">
            <Modal
              text="ปฏิเสธ"
              color="danger"
              header="ยืนยันการปฏิเสธ"
              body={() => {
                return (
                  <div>
                    <Col>
                      กรุณากรอกเหตุผล
										</Col>
                    <ModalBody>
                      <Input type="textarea"></Input>
                    </ModalBody>
                  </div>
                );
              }}
              link="/backend/approvals/requests/8" />
          </Col>
          <Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-3">
            <Modal
              text="อนุมัติ"
              color="primary"
              header="ยืนยันการอนุมัติ"
              body={() => {
                return (
                  <ModalBody>
                    ยืนยันการอนุมัติ
                  </ModalBody>
                );
              }}
              link="/backend/approvals/requests/7" />
          </Col>
        </Row>
      );
    }
    return (
      <Row className="align-items-center">
        <Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
          <Link to="/backend/approvals/requests" className="text-decoration-none">
            <Button block color="danger" className="font-weight-bold">ย้อนกลับ</Button>
          </Link>
        </Col>
      </Row>);
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
          {this.footer()}
        </CardFooter>
      </Card>
    )
  }
}

export default Detail;