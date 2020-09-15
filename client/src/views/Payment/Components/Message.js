import React from 'react';
import { CardHeader, CardBody, Row, Col, Label, Card } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';

class Message extends React.Component {
    render() {
        return (
            <div>
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