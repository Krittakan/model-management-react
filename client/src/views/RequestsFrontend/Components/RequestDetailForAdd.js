import React from 'react';
import { CardHeader, CardBody, FormGroup, Row, Col, Label, Input } from 'reactstrap';
import Dropzone from './Dropzone';

class RequestDetailForAdd extends React.Component {
    state = { document: '', files: [] };

    onDrop = (acceptfiles, rejectedFiles) => {
        acceptfiles.map(file => {
            return this.setState({
                files: [...this.state.files, file]
            });
        });
    }

    inputForDocumentType = () => {
        if (this.state.document === "1") {
            return (
                <div>
                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="detail">รายละเอียดเพิ่มเติม</Label>
                            </Col>
                            <Col md="8">
                                <Input type="textarea" id="detail" defaultValue="ขอลงทะเบียนข้ามเขต" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Dropzone onDrop={this.onDrop} files={this.state.files} />
                    </FormGroup>
                </div>
            );
        }
        else if (this.state.document === "2") {

            return (
                <div>
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

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="email">อีเมล์ที่ต้องการจัดส่ง</Label>
                            </Col>
                            <Col md="8">
                                <Input id="email" defaultValue="john@example.net" />
                            </Col>
                        </Row>
                    </FormGroup>
                </div>
            );
        }
        else if (this.state.document === "3") {
            return (
                <div>
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
                                <Input id="amount" defaultValue="20" />
                            </Col>
                        </Row>
                    </FormGroup>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div>
                <CardHeader className="bg-ku-primary01 text-white">
                    <label>ข้อมูลคำร้อง</label>
                </CardHeader>
                <CardBody>
                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="type">ยื่นคำร้องสำหรับบัญชีนิสิต</Label>
                            </Col>
                            <Col md="8">
                                <Input type="select" id="type" name="type">
                                    <option defaultValue value="">โปรดเลือกบัญชีนิสิต</option>
                                    <option value="1">5612345610</option>
                                    <option value="2">6012345610</option>
                                </Input>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="type">ประเภทคำร้อง</Label>
                            </Col>
                            <Col md="8">
                                <Input type="select" id="type" name="type"
                                    onChange={(e) => this.setState({ document: e.target.value })}>
                                    <option defaultValue value="">โปรดประเภทคำร้อง</option>
                                    <option value="1">การลงทะเบียนเรียนข้ามวิทยาเขต/สถาบัน</option>
                                    <option value="2">ใบคะแนน</option>
                                    <option value="3">ซองจดหมาย</option>
                                </Input>
                            </Col>
                        </Row>
                    </FormGroup>

                    {this.inputForDocumentType()}
                </CardBody>
            </div>
        );
    }
}

export default RequestDetailForAdd;