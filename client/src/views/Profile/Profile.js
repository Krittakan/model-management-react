import React, { Component } from 'react';
import { Card, CardBody, Col, Row, CardFooter, Form, ModalBody } from 'reactstrap';
import PersonalDetail from './Components/PersonalDetail';
import Education from './Components/Education';
import KnowYourCustomer from './Components/KnowYourCustomer';
import Modal from './Components/Modal';

class Profile extends Component {
    KYC = () => {
        if (this.props.match.params.type === "0") {
            return null;
        }
        return <KnowYourCustomer type={this.props.match.params.type} />
    }

    footer = () => {
        if (this.props.match.params.type === "0" || this.props.match.params.type === "2" || this.props.match.params.type === "3") {
            return null;
        }
        return (
            <CardFooter className="bg-white">
                <Row className="align-items-center">
                    <Col md="9" className="mr-auto ml-auto mb-1 mb-xl-0">
                    </Col>
                    <Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
                        <Modal
                            text="ยืนยัน"
                            color="primary"
                            header="ยืนยันการส่งคำขออนุมัติ"
                            body={() => {
                                return (
                                    <ModalBody>
                                        ยืนยันการส่งคำขออนุมัติ
                                    </ModalBody>
                                );
                            }}
                            link="/frontend/profile/2" />
                    </Col>
                </Row>
            </CardFooter>
        );
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <Row className="mb-3 ku-border">
                        <Col lg={12}>
                            <h3>ข้อมูลส่วนตัว</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={10} className="mr-auto ml-auto">
                            <Card style={{ minHeight: "440px" }}>
                                <Form>
                                    <PersonalDetail type={this.props.match.params.type} />

                                    <Education type={this.props.match.params.type} />

                                    {this.KYC()}

                                    {this.footer()}
                                </Form>
                            </Card>
                        </Col>
                    </Row >
                </CardBody >
            </Card >
        );
    }
}

export default Profile;