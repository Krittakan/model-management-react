import React, { Component } from 'react';
import {
  Row, Col,
  Table, Card, CardBody,
  Button, Input,
  Label,
  Form, FormGroup,
  Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Inprogress from '../../assets/statusIcon/blue_watch.png';
import Pending from '../../assets/statusIcon/yellow_watch.png';
import Success from '../../assets/statusIcon/check.png';
import CannotProceed from '../../assets/statusIcon/cross.png';
import Cancel from '../../assets/statusIcon/cancel.png';

import PaidIcon from '../../assets/statusIcon/green_dollar.png';
import NotPaidIcon from '../../assets/statusIcon/red_dollar.png';
import NoFee from '../../assets/statusIcon/zero.png';

class RequestList extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <Row className="mb-3 ku-border">
                  <Col lg={12}>
                    <h3>ค้นหา</h3>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Form action="" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
                        <Col md="2">
                          <Label className="mb-0 mt-3 mt-md-0">คำค้น</Label>
                        </Col>
                        <Col md="10">
                          <Input name="keyword" id="keyword" />
                        </Col>
                      </FormGroup>

                      <FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
                        <Col md="2">
                          <Label className="mb-0 mt-3 mt-md-0">วันที่</Label>
                        </Col>
                        <Col md="4">
                          <Input type="date" id="date-input" name="date-input" placeholder="date" />
                        </Col>
                        <Col md="2">
                          <Label className="mb-0 mt-3 mt-md-0">ถึง</Label>
                        </Col>
                        <Col md="4">
                          <Input type="date" id="date-input" name="date-input" placeholder="date" />
                        </Col>
                      </FormGroup>

                      <FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
                        <Col md="2">
                          <Label className="mb-0 mt-3 mt-md-0">ประเภทคำร้อง</Label>
                        </Col>
                        <Col md="4">
                          <Input type="select" name="requestType" id="requestType">
                            <option value defaultValue="">-</option>
                            <option>ใบคะแนน</option>
                            <option>การลงทะเบียนเรียนข้ามวิทยาเขต/สถาบัน</option>
                          </Input>
                        </Col>
                        <Col md="2">
                          <Label className="mb-0 mt-3 mt-md-0">สถานะคำร้อง</Label>
                        </Col>
                        <Col md="4">
                          <Input type="select" name="status" id="status">
                            <option value defaultValue="">-</option>
                            <option>กำลังดำเนินการ</option>
                            <option>ดำเนินการเสร็จสิ้น</option>
                            <option>ไม่สามารถดำเนินการได้</option>
                          </Input>
                        </Col>
                      </FormGroup>

                      <FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
                        <Col md="2">
                          <Label className="mb-0 mt-3 mt-md-0">สถานะการชำระเงิน</Label>
                        </Col>
                        <Col md="4">
                          <Input type="select" name="status" id="status">
                            <option value defaultValue="">-</option>
                            <option>ยังไม่ได้ชำระ</option>
                            <option>ชำระเงินแล้ว</option>
                          </Input>
                        </Col>
                        <Col md="2">
                          <Label className="mb-0 mt-3 mt-md-0">รหัสประจำตัวนิสิต</Label>
                        </Col>
                        <Col md="4">
                          <Input type="select" name="studentID" id="studentID">
                            <option value defaultValue="">-</option>
                            <option>5612345610</option>
                            <option>6012345610</option>
                          </Input>
                        </Col>
                      </FormGroup>

                      <FormGroup className="mr-auto ml-auto mt-3" row>
                        <Col md={{ size: 4, offset: 8 }}>
                          <Row className="align-items-center">
                            <Col md="6" className="mb-3 mb-xl-0 order-sm-2">
                              <Button block color="primary" className="font-weight-bold">ค้นหา</Button>
                            </Col>
                            <Col md="6" className="mb-3 mb-xl-0">
                              <Button block color="danger" className="font-weight-bold">ล้างเงื่อนไขสืบค้น</Button>
                            </Col>
                          </Row>
                        </Col>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3 mr-auto ku-border">
                  <Col lg={12}>
                    <h3>ผลการค้นหา จำนวน 40 รายการ</h3>
                  </Col>
                </Row>

                <Row className="mt-2 mb-2">
                  <Col lg={12}>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup className="mr-auto ml-auto mb-0" row>
                        <Col md="2" className="mb-2">
                          <Input type="select" name="select">
                            <option value="0">แสดง 10 รายการ</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </Input>
                        </Col>
                        <Col md={{ size: 2, offset: 8 }}>
                          <Link to="/frontend/requests/add" className="text-decoration-none">
                            <Button block className="btn-sm ku-tb-action font-weight-bold" style={{ height: 38 }} color="primary" >ยื่นคำร้อง</Button>
                          </Link>
                        </Col>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12}>
                    <Table responsive striped>
                      <thead>
                        <tr className="ku-tb-head">
                          <th className="text-center">#</th>
                          <th className="text-center">วันที่ยื่นเรื่อง</th>
                          <th className="text-center">ประเภทคำร้อง</th>
                          <th className="text-center">หมายเลขคำร้อง</th>
                          <th className="text-center">สถานะคำร้อง</th>
                          <th className="text-center">สถานะการชำระเงิน</th>
                          <th className="text-center">รหัสประจำตัวนิสิต</th>
                          <th className="text-center">แสดงรายละเอียด</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center result-number">1</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">การลงทะเบียนเรียนข้ามวิทยาเขต/สถาบัน</td>
                          <td className="text-center bg-td-striped">OSS00001/2563</td>
                          <td className="text-center">
                            <img src={Inprogress} title="กำลังดำเนินการ" width="auto" height="24" alt="Inprogress" />
                          </td>
                          <td className="text-center">
                            -
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/1">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>

                        <tr>
                          <td className="text-center result-number">2</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">ใบคะแนน</td>
                          <td className="text-center bg-td-striped">OSS00002/2563</td>
                          <td className="text-center">
                            <img src={Inprogress} title="กำลังดำเนินการ" width="auto" height="24" alt="Inprogress" />
                          </td>
                          <td className="text-center">
                            <img src={NotPaidIcon} title="ยังไม่ได้ชำระ" width="auto" height="24" alt="Not Paid" />
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/2">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>

                        <tr>
                          <td className="text-center result-number">3</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">ซองจดหมาย</td>
                          <td className="text-center bg-td-striped">OSS00003/2563</td>
                          <td className="text-center">
                            <img src={Success} title="ดำเนินการเสร็จสิ้น" width="auto" height="24" alt="Sucess" />
                          </td>
                          <td className="text-center">
                            <img src={PaidIcon} title="ชำระเงินแล้ว" width="auto" height="24" alt="Paid" />
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/3">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>

                        <tr>
                          <td className="text-center result-number">4</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">ซองจดหมาย</td>
                          <td className="text-center bg-td-striped">OSS00004/2563</td>
                          <td className="text-center">
                            <img src={CannotProceed} title="ไม่สามารถดำเนินการได้" width="auto" height="24" alt="Cannot proceed" />
                          </td>
                          <td className="text-center">
                            -
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/4">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>

                        <tr>
                          <td className="text-center result-number">5</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">ซองจดหมาย</td>
                          <td className="text-center bg-td-striped">OSS00005/2563</td>
                          <td className="text-center">
                            <img src={Cancel} title="ยกเลิก" width="auto" height="24" alt="Cancel" />
                          </td>
                          <td className="text-center">
                            -
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/5">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>
                        
                        <tr>
                          <td className="text-center result-number">6</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">การขอย้ายสาขา/หลักสูตร</td>
                          <td className="text-center bg-td-striped">OSS00006/2563</td>
                          <td className="text-center">
                            <img src={Pending} title="อยู่ระหว่างพิจารณา" width="auto" height="24" alt="Pending" />
                          </td>
                          <td className="text-center">
                            -
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/6">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>
                        
                        <tr>
                          <td className="text-center result-number">7</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">การขอย้ายสาขา/หลักสูตร</td>
                          <td className="text-center bg-td-striped">OSS00007/2563</td>
                          <td className="text-center">
                            <img src={Inprogress} title="กำลังดำเนินการ" width="auto" height="24" alt="Inprogress" />
                          </td>
                          <td className="text-center">
                            <img src={NotPaidIcon} title="ยังไม่ได้ชำระ" width="auto" height="24" alt="Not Paid" />
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/7">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>
                        
                        <tr>
                          <td className="text-center result-number">8</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">การขอย้ายสาขา/หลักสูตร</td>
                          <td className="text-center bg-td-striped">OSS00008/2563</td>
                          <td className="text-center">
                            <img src={CannotProceed} title="ไม่สามารถดำเนินการได้" width="auto" height="24" alt="Cannot proceed" />
                          </td>
                          <td className="text-center">
                            -
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/8">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>
                        
                        <tr>
                          <td className="text-center result-number">9</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">ขอผ่อนผันค่าธรรมเนียมการศึกษา</td>
                          <td className="text-center bg-td-striped">OSS00009/2563</td>
                          <td className="text-center">
                            <img src={Success} title="ดำเนินการเสร็จสิ้น" width="auto" height="24" alt="Sucess" />
                          </td>
                          <td className="text-center">
                            <img src={NoFee} title="ไม่มีค่าธรรมเนียม" width="auto" height="24" alt="No fee" />
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/9">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>
                        
                        <tr>
                          <td className="text-center result-number">10</td>
                          <td className="text-center bg-td-striped">10-04-63</td>
                          <td className="text-center bg-td-striped">ขอผ่อนผันค่าธรรมเนียมการศึกษา</td>
                          <td className="text-center bg-td-striped">OSS00009/2563</td>
                          <td className="text-center">
                            <img src={Success} title="ดำเนินการเสร็จสิ้น" width="auto" height="24" alt="Sucess" />
                          </td>
                          <td className="text-center">
                            <img src={NoFee} title="ไม่มีค่าธรรมเนียม" width="auto" height="24" alt="No fee" />
                          </td>
                          <td className="text-center bg-td-striped">5612345610</td>
                          <td className="text-center">
                            <Link to="/frontend/requests/9">
                              <i className="fa fa-search fa-lg text-success"></i>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Pagination className="ku-pagination pull-right clearfix">
                      <PaginationItem>
                        <PaginationLink previous tag="button"></PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button">4</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next tag="button"></PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RequestList;
