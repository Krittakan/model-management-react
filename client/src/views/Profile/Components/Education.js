import React from 'react';
import { CardHeader, CardBody, FormGroup, Row, Col, Label, Card } from 'reactstrap';

// frontend/profile/0 => นิสิตปัจจุบัน (no need to KYC)
// frontend/profile/1 => นิสิตเก่า (need to KYC)
// frontend/profile/2 => waiting for approve
// frontend/profile/3 => approved
// frontend/profile/4 => invalid (need to KYC again)
// frontend/profile/5 => reject (need to KYC again)
class Education extends React.Component {
    render() {
        if (this.props.type === "0" || this.props.type === "3") {

            return (
                <div>
                    <CardHeader className="bg-ku-primary01 text-white">
                        <label>การศึกษา</label>
                    </CardHeader>
                    <CardBody>
                        <Card>
                            <CardBody>
                                <FormGroup>
                                    <Row>
                                        <Col md="4">
                                            <Label for="facalty" >รหัสประจำตัว</Label>
                                        </Col>
                                        <Col md="8">
                                            <Label id="facalty">5612345610</Label>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col md="4">
                                            <Label for="campus" >วิทยาเขต</Label>
                                        </Col>
                                        <Col md="8">
                                            <Label id="campus">บางเขน</Label>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col md="4">
                                            <Label for="facalty" >คณะ</Label>
                                        </Col>
                                        <Col md="8">
                                            <Label id="facalty">วิศวกรรมศาสตร์</Label>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col md="4">
                                            <Label for="degree" >ระดับการศึกษา</Label>
                                        </Col>
                                        <Col md="8">
                                            <Label id="degree">ปริญญาตรี</Label>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <FormGroup>
                                    <Row>
                                        <Col md="4">
                                            <Label for="facalty" >รหัสประจำตัวนิสิต</Label>
                                        </Col>
                                        <Col md="8">
                                            <Label id="facalty">6012345610</Label>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col md="4">
                                            <Label for="campus" >วิทยาเขต</Label>
                                        </Col>
                                        <Col md="8">
                                            <Label id="campus">บางเขน</Label>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col md="4">
                                            <Label for="facalty" >คณะ</Label>
                                        </Col>
                                        <Col md="8">
                                            <Label id="facalty">วิทยาศาตร์</Label>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col md="4">
                                            <Label for="degree" >ระดับการศึกษา</Label>
                                        </Col>
                                        <Col md="8">
                                            <Label id="degree">ปริญญาตรี</Label>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </CardBody>
                </div>
            );
        }
        return null;
    }
}

export default Education;