import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Button, CardFooter, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../Frontend.css';
import PersonalDetail from '../Profile/Components/PersonalDetail';
import Education from '../Profile/Components/Education';
import RequestDetail from './Components/RequestDetailForAdd';
import Modal from './Components/Modal';

class RequestAdd extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <Row className="mb-3 ku-border">
                        <Col lg={12}>
                            <h3>ข้อมูลคำร้อง</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={10} className="mr-auto ml-auto">
                            <Card style={{ minHeight: "440px" }}>
                                <PersonalDetail type="0" />

                                <Education type="0" />

                                <RequestDetail />

                                <CardFooter className="bg-white">
                                    <Row className="align-items-center">
                                        <Col md="3" xl className="mb-1 mb-xl-0">
                                        </Col>
                                        <Col md="3" xl className="mb-1 mb-xl-0">
                                        </Col>
                                        <Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
                                            <Modal
                                                text="ยืนยัน"
                                                color="primary"
                                                header="ยืนยันการยื่นคำร้อง"
                                                body={() => {
                                                    return (
                                                        <ModalBody>
                                                            ยืนยันการยื่นคำร้อง
                                                        </ModalBody>
                                                    );
                                                }}
                                                link="/frontend/requests/1" />
                                        </Col>
                                        <Col md="3">
                                            <Link to="/frontend/request" className="text-decoration-none">
                                                <Button block color="danger" className="font-weight-bold">ย้อนกลับ</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>

                </CardBody>
            </Card >
        )
    }
}

export default RequestAdd;