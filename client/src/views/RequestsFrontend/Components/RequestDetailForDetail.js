import React from 'react';
import { CardHeader, CardBody, FormGroup, Row, Col, Label } from 'reactstrap';

class RequestDetailForDetail extends React.Component {
    documentType = () => {
        if (this.props.id === "1") {
            return (
                <div>
                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="file">ยื่นคำร้องสำหรับบัญชีนิสิต</Label>
                            </Col>
                            <Col md="8">
                                <Label id="id">5612345610</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="type">คำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="type">ขอลงทะเบียนข้ามเขต</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="id">หมายเลขคำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="id">OSS00001/2563</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="detail">รายละเอียดเพิ่มเติม</Label>
                            </Col>
                            <Col md="8">
                                <Label id="detail">ขอลงทะเบียนข้ามเขต</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="file">ไฟล์แนบ</Label>
                            </Col>
                            <Col md="6" className="mb-1">
                                <Label id="file"><a href="/">ขอลงทะเบียนข้ามเขต.pdf</a></Label>
                                <br />
                                <Label id="file"><a href="/">รูป.png</a></Label>
                            </Col>
                        </Row>
                    </FormGroup>
                </div>
            );
        }
        else if (this.props.id === "2") {
            return (
                <div>
                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="file">ยื่นคำร้องสำหรับบัญชีนิสิต</Label>
                            </Col>
                            <Col md="8">
                                <Label id="id">5612345610</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="type">คำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="type">ใบคะแนน</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="id">หมายเลขคำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="id">OSS00001/2563</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="email">อีเมล์ที่ต้องการจัดส่ง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="email">john@example.net</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="price">ราคาต่อคำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="price">20 บาท</Label>
                            </Col>
                        </Row>
                    </FormGroup>
                </div>
            );
        }
        else if (this.props.id === "6" || this.props.id === "7" || this.props.id === "8") {
            return (
                <div>
                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="file">ยื่นคำร้องสำหรับบัญชีนิสิต</Label>
                            </Col>
                            <Col md="8">
                                <Label id="id">5612345610</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="type">คำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="type">การขอย้ายสาขา/หลักสูตร</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="id">หมายเลขคำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="id">OSS00001/2563</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="detail">รายละเอียดเพิ่มเติม</Label>
                            </Col>
                            <Col md="8">
                                <Label id="detail">ขอย้ายสาขา</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="file">ไฟล์แนบ</Label>
                            </Col>
                            <Col md="6" className="mb-1">
                                <Label id="file"><a href="/">ขอย้ายสาขา.pdf</a></Label>
                                <br />
                                <Label id="file"><a href="/">รูป.png</a></Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="price">ราคาต่อคำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="price">100 บาท</Label>
                            </Col>
                        </Row>
                    </FormGroup>
                </div>
            );
        }
        else if (this.props.id === "9") {
            return (
                <div>
                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="file">ยื่นคำร้องสำหรับบัญชีนิสิต</Label>
                            </Col>
                            <Col md="8">
                                <Label id="id">5612345610</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="type">คำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="type">ขอผ่อนผันค่าธรรมเนียมการศึกษา</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="id">หมายเลขคำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="id">OSS00001/2563</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="detail">รายละเอียดเพิ่มเติม</Label>
                            </Col>
                            <Col md="8">
                                <Label id="detail">ขอผ่อนผันค่าธรรมเนียมการศึกษา ปีการศึกษา 2564</Label>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="file">ไฟล์แนบ</Label>
                            </Col>
                            <Col md="6" className="mb-1">
                                <Label id="file"><a href="/">ขอผ่อนผันค่าธรรมเนียมการศึกษา.pdf</a></Label>
                                <br />
                                <Label id="file"><a href="/">รูป.png</a></Label>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="price">ราคาต่อคำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Label id="price">0 บาท</Label>
                            </Col>
                        </Row>
                    </FormGroup>
                </div>
            );
        }
        return (
            <div>
                <FormGroup>
                    <Row>
                        <Col md="4">
                            <Label for="file">ยื่นคำร้องสำหรับบัญชีนิสิต</Label>
                        </Col>
                        <Col md="8">
                            <Label id="id">5612345610</Label>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row>
                        <Col md="4">
                            <Label for="type">คำร้อง</Label>
                        </Col>
                        <Col md="8">
                            <Label id="type">ซองจดหมาย</Label>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row>
                        <Col md="4">
                            <Label for="id">หมายเลขคำร้อง</Label>
                        </Col>
                        <Col md="8">
                            <Label id="id">OSS00002/2563</Label>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row>
                        <Col md="4">
                            <Label for="price">ราคาต่อคำร้อง</Label>
                        </Col>
                        <Col md="8">
                            <Label id="price">5 บาท</Label>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row>
                        <Col md="4">
                            <Label for="amount">จำนวน</Label>
                        </Col>
                        <Col md="8">
                            <Label id="amount">20 หน่วย</Label>
                        </Col>
                    </Row>
                </FormGroup>
            </div>
        );
    }

    render() {
        return (
            <div>
                <CardHeader className="bg-ku-primary01 text-white">
                    <label>ข้อมูลคำร้อง</label>
                </CardHeader>
                <CardBody>
                    {this.documentType()}
                </CardBody>
            </div>
        );
    }
}

export default RequestDetailForDetail;