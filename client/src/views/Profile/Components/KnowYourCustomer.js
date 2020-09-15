import React from 'react';
import { CardHeader, CardBody, FormGroup, Row, Col, Label, Table } from 'reactstrap';
import logo from '../../../assets/img/brand/kugreen.svg';
import ImageDropzone from './ImageDropzone';

// frontend/profile/0 => นิสิตปัจจุบัน (no need to KYC)
// frontend/profile/1 => นิสิตเก่า (need to KYC)
// frontend/profile/2 => waiting for approve
// frontend/profile/3 => approved
// frontend/profile/4 => invalid (need to KYC again)
// frontend/profile/5 => reject (need to KYC again)
class KnowYourCustomer extends React.Component {
    state = { files1: [], files2: [] };

    onDrop1 = (acceptfiles, rejectedFiles) => {
        acceptfiles.map(file => {
            return this.setState({
                files1: [file]
            });
        });
    }

    onDrop2 = (acceptfiles, rejectedFiles) => {
        acceptfiles.map(file => {
            return this.setState({
                files2: [file]
            });
        });
    }

    history = () => {
        switch (this.props.type) {
            case "1": return (
                <tbody>
                    <tr>
                        <td colSpan="6" className="text-center">
                            ไม่มีประวัติการยืนยันตัวตน
                        </td>
                    </tr>
                </tbody>
            );

            case "2": return (
                <tbody>
                    <tr>
                        <td className="text-center">
                            1
                        </td>
                        <td className="text-center">
                            15 พฤษภาคม 2563 15:35
                        </td>
                        <td className="text-center">
                            รอการอนุมัติ
                        </td>
                        <td className="text-center">
                            -
                        </td>
                        <td className="text-center">
                            -
                        </td>
                        <td className="text-center">
                            -
                        </td>
                    </tr>
                </tbody>
            );

            case "3": return (
                <tbody>
                    <tr>
                        <td className="text-center">
                            1
                        </td>
                        <td className="text-center">
                            15 พฤษภาคม 2562 15:35
                        </td>
                        <td className="text-center">
                            ได้รับการอนุมัติ
                        </td>
                        <td className="text-center">
                            16 พฤษภาคม 2563 09:05
                        </td>
                        <td className="text-center">
                            15 พฤษภาคม 2564
                        </td>
                        <td className="text-center">
                            -
                        </td>
                    </tr>
                </tbody>
            );

            case "4": return (
                <tbody>
                    <tr>
                        <td className="text-center">
                            1
                        </td>
                        <td className="text-center">
                            15 พฤษภาคม 2563 15:35
                        </td>
                        <td className="text-center">
                            หมดอายุการใช้งาน
                        </td>
                        <td className="text-center">
                            16 พฤษภาคม 2563 09:05
                        </td>
                        <td className="text-center">
                            15 พฤษภาคม 2564
                        </td>
                        <td className="text-center">
                            -
                        </td>
                    </tr>
                </tbody>
            );

            case "5": return (
                <tbody>
                    <tr>
                        <td className="text-center">
                            1
                        </td>
                        <td className="text-center">
                            15 พฤษภาคม 2563 15:35
                        </td>
                        <td className="text-center">
                            ถูกปฏิเสธ
                        </td>
                        <td className="text-center">
                            16 พฤษภาคม 2563 09:03
                        </td>
                        <td className="text-center">
                            -
                        </td>
                        <td className="text-center">
                            รูปไม่ชัดเจน กรุณาอัฟโหลดใหม่
                        </td>
                    </tr>
                </tbody>
            );

            default: return null;
        }
    }

    suggestText = () => {
        if (["1", "4", "5"].includes(this.props.type)) {
            return (
                <FormGroup>
                    <Row>
                        <Col md="12">
                            <Label for="degree" className="text-danger">โปรดอัปโหลดภาพคู่บัตรประชาชน และภาพถ่ายบัตรประชาชนเพื่อทำการยืนยันตัวตน</Label>
                        </Col>
                    </Row>
                </FormGroup>
            );
        }
        return null;
    }

    fileInput1 = () => {
        if (["1", "4", "5"].includes(this.props.type) && window.location.href.includes("/frontend/")) {
            return (
                <ImageDropzone onDrop={this.onDrop1} files={this.state.files1} />
            );
        }
        return null;
    }

    fileInput2 = () => {
        if (["1", "4", "5"].includes(this.props.type) && window.location.href.includes("/frontend/")) {
            return (
                <ImageDropzone onDrop={this.onDrop2} files={this.state.files2} />
            );
        }
        return null;
    }

    previewImage = () => {
        if (["1", "4", "5"].includes(this.props.type)) {
            return null;
        }
        return (
            <img style={{
                borderRadius: 2,
                border: '1px solid #eaeaea',
                padding: 4,
                display: 'block',
                width: 'auto',
                height: '200px'
            }} alt="preview"
                src={logo} />
        );
    }

    render() {
        return (
            <div>
                <CardHeader className="bg-ku-primary01 text-white">
                    <label>KYC</label>
                </CardHeader>
                <CardBody>
                    <FormGroup>
                        <Table responsive>
                            <thead>
                                <tr className="ku-tb-head2">
                                    <th className="text-center">#</th>
                                    <th className="text-center">วันที่ยื่นเรื่อง</th>
                                    <th className="text-center">สถานะ</th>
                                    <th className="text-center">วันที่รับเรื่อง</th>
                                    <th className="text-center">ใช้งานได้ถึงวันที่</th>
                                    <th className="text-center">หมายเหตุ</th>
                                </tr>
                            </thead>
                            {this.history()}
                        </Table>
                    </FormGroup>

                    {this.suggestText()}

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="person" >ภาพถ่ายคู่บัตรประชาชน</Label>
                            </Col>
                            <Col md="8">
                                {this.fileInput1()}

                                {this.previewImage()}
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="personal" >ภาพบัตรประชาชน</Label>
                            </Col>
                            <Col md="8">
                                {this.fileInput2()}

                                {this.previewImage()}
                            </Col>
                        </Row>
                    </FormGroup>
                </CardBody>
            </div>
        );
    }
}

export default KnowYourCustomer;