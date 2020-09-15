import React from 'react';
import { CardBody, FormGroup, Row, Col, Label, Button, Badge } from 'reactstrap';

class StatusSection extends React.Component {
    render() {
        if (this.props.id === "1") {
            return (
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะคำร้อง</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="primary" className="ku-mw100px">กำลังดำเนินการ</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6"><Label for="paymentStatus">สถานะการชำระเงิน</Label></Col>
                                    <Col md="6">
                                        -
                        </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            );
        }
        else if (this.props.id === "2") {
            return (
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะคำร้อง</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="primary" className="ku-mw100px">กำลังดำเนินการ</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6"><Label for="paymentStatus">สถานะการชำระเงิน</Label></Col>
                                    <Col md="6">
                                        <Badge className="ku-mw100px" color="danger">ยังไม่ได้ชำระ</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            );
        }
        else if (this.props.id === "3") {
            return (
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะคำร้อง</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="success" className="ku-mw100px">ดำเนินการเสร็จสิ้น</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6"><Label for="paymentStatus">สถานะการชำระเงิน</Label></Col>
                                    <Col md="6">
                                        <Badge className="ku-mw100px" color="success">ชำระเงินแล้ว</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col md="6"><Label for="downloadPayslip">ดาวน์โหลดใบรับเงิน</Label></Col>
                                    <Col md="6">
                                        <Button color="primary" className="font-weight-bold">ดาวน์โหลดใบรับเงิน</Button>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            );
        }
        else if (this.props.id === "4") {
            return (
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะคำร้อง</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="danger" className="ku-mw100px">ไม่สามารถดำเนินการได้</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">เหตุผล</Label>
                                    </Col>
                                    <Col md="6">
                                        สินค้าหมด
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6"><Label for="paymentStatus">สถานะการชำระเงิน</Label></Col>
                                    <Col md="6">
                                        -
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            );
        }
        else if (this.props.id === "5") {
            return (
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะคำร้อง</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="danger" className="ku-mw100px">ยกเลิก</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6"><Label for="paymentStatus">สถานะการชำระเงิน</Label></Col>
                                    <Col md="6">
                                        -
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            );
        }
        else if (this.props.id === "6") {
            return (
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะคำร้อง</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="warning" className="ku-mw100px">อยู่ระหว่างพิจารณา</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะการอนุมัติ</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="warning" className="ku-mw100px">รออนุมัติ</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6"><Label for="paymentStatus">สถานะการชำระเงิน</Label></Col>
                                    <Col md="6">
                                        -
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            );
        }
        else if (this.props.id === "7") {
            return (
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะคำร้อง</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="primary" className="ku-mw100px">กำลังดำเนินการ</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะการอนุมัติ</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="success" className="ku-mw100px">อนุมัติ</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6"><Label for="paymentStatus">สถานะการชำระเงิน</Label></Col>
                                    <Col md="6">
                                        <Badge className="ku-mw100px" color="danger">ยังไม่ได้ชำระ</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            );
        }
        else if (this.props.id === "8") {
            return (
                <CardBody>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะคำร้อง</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="danger" className="ku-mw100px">ไม่สามารถดำเนินการได้</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">สถานะการอนุมัติ</Label>
                                    </Col>
                                    <Col md="6">
                                        <Badge color="danger" className="ku-mw100px">ปฏิเสธ</Badge>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Col md="6">
                                        <Label for="requestStatus">เหตุผล</Label>
                                    </Col>
                                    <Col md="6">
                                        เกินกำหนดระยะเวลาดำเนินการ
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Row>
                                    <Col md="6"><Label for="paymentStatus">สถานะการชำระเงิน</Label></Col>
                                    <Col md="6">
                                        -
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            );
        }
        return (
            <CardBody>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <Row>
                                <Col md="6">
                                    <Label for="requestStatus">สถานะคำร้อง</Label>
                                </Col>
                                <Col md="6">
                                    <Badge color="success" className="ku-mw100px">ดำเนินการเสร็จสิ้น</Badge>
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col md="6">
                                    <Label for="requestStatus">สถานะการอนุมัติ</Label>
                                </Col>
                                <Col md="6">
                                    <Badge color="success" className="ku-mw100px">อนุมัติ</Badge>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>

                    <Col md="6">
                        <FormGroup>
                            <Row>
                                <Col md="6"><Label for="paymentStatus">สถานะการชำระเงิน</Label></Col>
                                <Col md="6">
                                    <Badge className="ku-mw100px" color="secondary">ไม่มีค่าธรรมเนียม</Badge>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Row>
            </CardBody>
        );
    }
}

export default StatusSection;