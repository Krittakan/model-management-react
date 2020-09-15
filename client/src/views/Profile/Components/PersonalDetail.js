import React from 'react';
import { CardHeader, CardBody, FormGroup, Row, Col, Label, Input } from 'reactstrap';

// frontend/profile/0 => นิสิตปัจจุบัน (no need to KYC)
// frontend/profile/1 => นิสิตเก่า (need to KYC)
// frontend/profile/2 => waiting for approve
// frontend/profile/3 => approved
// frontend/profile/4 => invalid (need to KYC again)
// frontend/profile/5 => reject (need to KYC again)
class PersonalDetail extends React.Component {
    nameAndLastname = () => {
        if (this.props.type === "0" || this.props.type === "2" || this.props.type === "3") {
            return (
                <FormGroup>
                    <Row>
                        <Col md="4">
                            <Label for="name-lastname" >ชื่อ-นามสกุล</Label>
                        </Col>
                        <Col md="8">
                            <Label id="name-lastname">จอน วิศวกรรมศาสตร์</Label>
                        </Col>
                    </Row>
                </FormGroup>
            );
        }
        return (
            <div>
                <FormGroup>
                    <Row>
                        <Col md="4">
                            <Label for="name" >ชื่อ</Label>
                        </Col>
                        <Col md="8">
                            <Input id="name" defaultValue="จอน" />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row>
                        <Col md="4">
                            <Label for="lastname" >นามสกุล</Label>
                        </Col>
                        <Col md="8">
                            <Input id="lastname" defaultValue="วิศวกรรมศาสตร์" />
                        </Col>
                    </Row>
                </FormGroup>
            </div>
        );
    }

    lastname = () => {
        if (this.props.type === "0" || this.props.type === "2" || this.props.type === "3") {
            return null
        }
        return <Input id="lastname" defaultValue="วิศวกรรมศาสตร์" />;
    }

    personalId = () => {
        if (this.props.type === "0" || this.props.type === "2" || this.props.type === "3") {
            return <Label id="personalId">1234567890123</Label>
        }
        return <Input id="personalId" defaultValue="1234567890123" />;
    }

    phone = () => {
        if (this.props.type === "0" || this.props.type === "2" || this.props.type === "3") {
            return <Label id="phone">0999999999</Label>
        }
        return <Input id="phone" defaultValue="0999999999" />;
    }

    addressField = () => {
        if (this.props.type === "0") {
            return null;
        }
        else if (this.props.type === "3" || this.props.type === "2") {
            return (
                <FormGroup>
                    <Row>
                        <Col md="4">
                            <Label for="address" >ที่อยู่</Label>
                        </Col>
                        <Col md="8">
                            <Label id="addreess">เลขที่ 50 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900</Label>
                        </Col>
                    </Row>
                </FormGroup>
            );
        }
        return (
            <FormGroup>
                <Row>
                    <Col md="4">
                        <Label for="address" >ที่อยู่</Label>
                    </Col>
                    <Col md="8">
                        <Input type="textarea" defaultValue="เลขที่ 50 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900" />
                    </Col>
                </Row>
            </FormGroup>
        );
    }

    render() {
        return (
            <div>
                <CardHeader className="bg-ku-primary01 text-white">
                    <label>ข้อมูลส่วนตัว</label>
                </CardHeader>
                <CardBody>
                    {this.nameAndLastname()}

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="personalId" >เลขบัตรประชาชน / หนังสือเดินทาง</Label>
                            </Col>
                            <Col md="8">
                                {this.personalId()}
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="phone" >หมายเลขโทรศัพท์ที่ติดต่อได้</Label>
                            </Col>
                            <Col md="8">
                                {this.phone()}
                            </Col>
                        </Row>
                    </FormGroup>

                    {this.addressField()}
                </CardBody>
            </div>
        );
    }
}

export default PersonalDetail;