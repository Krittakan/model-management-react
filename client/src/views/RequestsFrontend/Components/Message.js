import React from 'react';
import { CardHeader, CardBody, FormGroup, Row, Col, Label, Card, CardFooter, ModalBody } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from './Dropzone';
import Modal from './Modal';

class Message extends React.Component {
    state = { files: [] };

    InputField = () => {
        if(this.props.id === "8" || this.props.id === "9"){
            return null;
        }
        return (
            <Card>
                <CardBody>
                    <FormGroup>
                        <ReactQuill theme="snow" />
                        <br />
                        <Dropzone onDrop={this.onDrop} files={this.state.files} />
                    </FormGroup>
                </CardBody>

                <CardFooter className="bg-white">
                    <Row className="align-items-center">
                        <Col md="3">
                        </Col>
                        <Col md="3">
                        </Col>
                        <Col md="3">
                        </Col>
                        <Col md="3" xl className="order-md-1">
                        <Modal
                            text="ยืนยัน"
                            color="primary"
                            header="ยืนยันการข้อความ"
                            body={() => {
                                return (
                                    <ModalBody>
                                        ยืนยันการข้อความ
                                    </ModalBody>
                                );
                            }}
                            />
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        );
    }

    onDrop = (acceptfiles, rejectedFiles) => {
        acceptfiles.map(file => {
            return this.setState({
                files: [...this.state.files, file]
            });
        });
    }

    render() {
        return (
            <div>
                {this.InputField()}

                <Card>
                    <CardHeader className="bg-ku-primary02 text-white">
                        <Label className="mb-0"><i className="cui-user icons"></i> จอน วิศวกรรมศาสตร์ - 15 พฤษภาคม 2563 15:45 น.</Label>
                    </CardHeader>
                    <CardBody>
                        Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16
                                                            </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Label className="mb-0"><i className="cui-user icons"></i> ผู้ดูแล วิศวกรรมศาสตร์ - 15 พฤษภาคม 2563 15:45 น.</Label>
                    </CardHeader>
                    <CardBody>
                        Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16
                                                            </CardBody>

                    <CardBody className="border-top">
                        <Row>
                            <Col md="4">
                                <Label for="file" >ไฟล์แนบ</Label>
                            </Col>
                            <Col md="6" className="mb-1">
                                <Label id="file"><a href="/">ตัวอย่างเอกสาร.pdf</a></Label>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Message;