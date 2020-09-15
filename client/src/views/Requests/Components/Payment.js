import React from 'react';
import { CardBody, FormGroup, Row, Col, Label, Card, Button, Input, ModalBody } from 'reactstrap';
import Modal from './Modal';

class Payment extends React.Component {
    paymentType = () => {
        if (this.props.id === "1") {
            return (
                <div>
                    <Card>
                        <CardBody className="bg-light">
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <u>กำหนดค่าธรรมเนียม</u>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="10" className="mr-auto ml-auto">
                                        <Label>กรุณากรอกค่าธรรมเนียม สำหรับ QR code</Label>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="10" className="mr-auto ml-auto">
                                        <Row>
                                            <Col md="9">
                                                <Input className="h-100"></Input>
                                            </Col>
                                            <Col md="3">
                                                <Modal
                                                    text="กำหนดค่าธรรมเนียม"
                                                    color="primary"
                                                    header="กำหนดค่าธรรมเนียม"
                                                    body={() => {
                                                        return (
                                                            <ModalBody>
                                                                ยืนยันการกำหนดค่าธรรมเนียม
                                                            </ModalBody>
                                                        );
                                                    }}
                                                    link="/backend/requests/2" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </CardBody>
                    </Card >

                    <Card>
                        <CardBody className="bg-light">
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <u>การชำระเงิน</u>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10" className="mr-auto ml-auto">
                                        <Label>กรุณาติดต่อผู้ดูแลผ่านทางกล่องข้อความด้านล่าง และชำระเงินภายหลัง</Label>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </div >
            );
        }
        else if (this.props.id === "4") {
            return (
                <div>
                    <Card>
                        <CardBody className="bg-light">
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <u>การชำระเงิน</u>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10" className="mr-auto ml-auto">
                                        <Label>คำร้องนี้ไม่สามารถดำเนินการได้</Label>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else if (this.props.id === "5") {
            return (
                <div>
                    <Card>
                        <CardBody className="bg-light">
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <u>การชำระเงิน</u>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10" className="mr-auto ml-auto">
                                        <Label>คำร้องนี้ถูกยกเลิกโดยผู้ยื่นคำร้อง</Label>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else if (this.props.id === "6" || this.props.id === "8") {
            return (
                <div>
                    <Card>
                        <CardBody className="bg-light">
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <u>การชำระเงิน</u>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10" className="mr-auto ml-auto">
                                        <Label>คำร้องนี้ต้องการการอนุมัติจากเจ้าหน้าที่เพื่อดำเนินการต่อไป</Label>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </div>
            );
        }

        else if (this.props.id === "9") {
            return (
                <div>
                    <Card>
                        <CardBody className="bg-light">
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <u>การชำระเงิน</u>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="10" className="mr-auto ml-auto">
                                        <Label>คำร้องนี้ไม่มีค่าธรรมเนียม</Label>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </div>
            );
        }

        return (
            <Card>
                <CardBody className="bg-light">
                    <FormGroup >
                        <Row>
                            <Col>
                                <u>การชำระเงิน</u>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="10" className="mr-auto ml-auto">
                                <Label>กรุณาจ่ายเงินผ่าน QR Code ด้านล่าง</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="10" className="mr-auto ml-auto">
                                <Label>คำเตือน - กรุณาระมัดระวังอย่าสแกนจ่ายเงินซ้ำมากกว่าหนึ่งครั้งเพราะทำให้ยากต่อการตรวจสอบและอาจจะไม่ได้รับเงินคืนส่วนที่จ่ายเกินเข้ามา ท่านสามารถกลับมาตรวจสถานะการชำระเงินได้ที่นี้หน้านี้ในภายหลังหากระบบได้รับแจ้งโอนเงินจากธนาคารแล้ว จะปรากฏสถานะว่า "ชำระเงินแล้ว"</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="8" className="mr-auto ml-auto">
                                <FormGroup row>
                                    <Col sm={{ size: 6, offset: 3 }} className="text-center order-xs-1 order-md-2">
                                        <img width="100%"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/
                                            xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAA
                                            ACXBIWXMAAABgAAAAYADwa0LPAAAFg0lEQVR42u3dwW3bQBRFUSlwF4LUf11aqA1m4XgRZGMaGfNf+pwCiDEtXMzm
                                            gddt27YLQMCvow8A8FmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZg
                                            gVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGW9HH+DD7Xa7vF6vo4+Rsm
                                            3bkuder9clZ9jz3FXvwe9sv1W/s69wwwIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gYM83Z4/l8Xu73+9H
                                            HWKI2HZkwt1nF72weNywgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsICM5DRnj1XTkT0mzEwmTGj2nGHVl3tW
                                            8Tv7Hm5YQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGaef5vBu1YRmwnn5OdywgAzBAjIEC8gQLCBDsIAMw
                                            QIyBAvIECwgQ7CADMECMkxz+MeqGc+E59LmhgVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpBx+mmO2cZa3u
                                            877+F7uGEBGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkJKc5j8fj6CPk+LrNfn5n87hhARmCBWQIFpAhWEC
                                            GYAEZggVkCBaQIVhAhmABGYIFZFy32l6CL9kzodlj1Yxn1Rloc8MCMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIy
                                            BAvIGPPVnFWzjT0mzExqJsxtJpxhlTN/legr3LCADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyTv/VnAmzj
                                            VXzitpzJ6j9bRMmYBPewwc3LCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgIwx05wzTyYmzGI8dy3n/R5uWE
                                            CGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARlvRx9gtQlfHdlj1QzCc9+tmqSsmh3xNzcsIEOwgAzBAjIEC8g
                                            QLCBDsIAMwQIyBAvIECwgQ7CAjDHTnAkTj1WTiVXPnfQ1k/+t9lWXCXObCe9hNTcsIEOwgAzBAjIEC8gQLCBDsIAM
                                            wQIyBAvIECwgQ7CAjDHTnAnOPG2YMA9aNbc583NXqU2fPrhhARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZ
                                            IyZ5txut8vr9Tr6GCmTJhMVE2Yx/m9f54YFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQMWaas8fz+bzc7/
                                            ejj7HEhInShOlI7Ss/Jj/fww0LyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgIznN2cNkYi0TmrXn5W9uWEC
                                            GYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmnn+bwbsJ0ZNVEacLfNsGev606F3PDAjIEC8gQLCBDsIAMwQIy
                                            BAvIECwgQ7CADMECMgQLyDDN+SFqk5RVM5NVk5QJ73fVRGnSjMcNC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLy
                                            BAsIOP005xJs4IzmvAlnD1qXwSa8LdN4oYFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQkZzmPB6Po4/AH6
                                            u+vjLhqy4TzjvhuZO4YQEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWRctwmf+wD4BDcsIEOwgAzBAjIEC8g
                                            QLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAs
                                            IEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CAjN+UZSVpEcx8HQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wN
                                            S0xM1QxMDoxNTo0MiswMDowMDUFftgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMTNUMTA6MTU6NDIrMDA6MD
                                            BEWMZkAAAAAElFTkSuQmCC"
                                            alt="qr-code" />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="8" className="mr-auto ml-auto">
                                <Row>
                                    <Col md="6">ค่าธรรมเนียมทั้งหมด</Col>
                                    <Col md="6">{this.props.id === "2" ? "20 บาท" : "100 บาท"}</Col>
                                </Row>
                            </Col>
                        </Row>
                    </FormGroup>
                </CardBody>
            </Card>
        );
    }


    submitButton = () => {
        if (this.props.id === "1") {
            return (
                <Button block color="primary" className="font-weight-bold">บันทึก</Button>
            );
        }
        return null;
    }

    render() {
        return (
            <Card>
                <CardBody>
                    {this.paymentType()}
                </CardBody>
            </Card>
        );
    }
}

export default Payment;