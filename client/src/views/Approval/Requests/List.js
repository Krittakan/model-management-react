import React, { Component } from 'react';
import {
	Button,
	Card,
	CardBody,
	Col,
	Form,
	FormGroup,
	Input,
	Label,
	Pagination,
	PaginationItem,
	PaginationLink,
	Row,
	Table,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Pending from '../../../assets/statusIcon/yellow_watch.png'
import Approved from '../../../assets/statusIcon/check.png'
import Rejected from '../../../assets/statusIcon/cross.png'

class List extends Component {
	repeatTableRecord(id) {
		return (
			<tr>
				<td className="text-center result-number">{id}</td>
				<td className="text-center bg-td-striped">10-04-63</td>
				<td className="text-center bg-td-striped">
					ขอผ่อนผันค่าธรรมเนียมการศึกษา
				</td>
				<td className="text-center bg-td-striped">OSS00009/2563</td>
				<td className="text-center">
					<img src={Approved} title="อนุมัติ" width="auto" height="24" alt="Approved" />
				</td>
				<td className="text-center bg-td-striped">บางเขน</td>
				<td className="text-center bg-td-striped">วิศวกรรมศาสตร์</td>
				<td className="text-center bg-td-striped">ปริญญาตรี</td>
				<td className="text-center bg-td-striped">5612345610</td>
				<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
				<td className="text-center">
					<Link to="/backend/approvals/requests/9">
						<i className="fa fa-search fa-lg text-success"></i>
					</Link>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col lg={12}>
						<Card>
							<CardBody>
								<Row className="mt-3 mb-3 ku-border">
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
													<Label className="mb-0 mt-3 mt-md-0">วันที่ยื่นคำร้อง จาก</Label>
												</Col>
												<Col md="4">
													<Input type="date" id="date-input" name="date-input" placeholder="วว/ดด/ปป" />
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
													<Input type="select" name="select">
														<option value="0">Please select</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
												<Col md="2">
													<Label className="mb-0 mt-3 mt-md-0">สถานะ</Label>
												</Col>
												<Col md="4">
													<Input type="select" name="select">
														<option value="0">-</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
											</FormGroup>
											<FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
												<Col md="2">
													<Label className="mb-0 mt-3 mt-md-0">วิทยาเขต</Label>
												</Col>
												<Col md="4">
													<Input type="select" name="select">
														<option value="0">Please select</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
												<Col md="2">
													<Label className="mb-0 mt-3 mt-md-0">คณะ</Label>
												</Col>
												<Col md="4">
													<Input type="select" name="select">
														<option value="0">Please select</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
											</FormGroup>

											<FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>

												<Col md="2">
													<Label className="mb-0 mt-3 mt-md-0">ระดับการศึกษา</Label>
												</Col>
												<Col md="4">
													<Input type="select" name="select">
														<option value="0">Please select</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
												<Col md="2">
													<Label className="mb-0 mt-3 mt-md-0">รหัสประจำตัวนิสิต</Label>
												</Col>
												<Col md="4">
													<Input type="text" name="text-input" placeholder="" />
												</Col>
											</FormGroup>
											<FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
												<Col md="2">
													<Label className="mb-0 mt-3 mt-md-0">ชื่อ - นามสกุล</Label>
												</Col>
												<Col md="4">
													<Input type="text" name="text-input" placeholder="" />
												</Col>
											</FormGroup>
											<FormGroup className="mr-auto ml-auto mt-3" row>
												<Col md="2">
												</Col>
												<Col md="4">
												</Col>
												<Col md="2">
												</Col>
												<Col md="4">
													<Row className="align-items-center">
														<Col md="6" className="mb-3 mb-xl-0">
															<Button block color="danger" className="font-weight-bold">ล้างเงื่อนไขสืบค้น</Button>
														</Col>
														<Col md="6" className="mb-3 mb-xl-0">
															<Button block color="primary" className="font-weight-bold">ค้นหา</Button>
														</Col>
													</Row>
												</Col>
											</FormGroup>
										</Form>
									</Col>
								</Row>
								<Row className="mt-3 mb-3 ku-border">
									<Col lg={12}>
										<h3>ผลการค้นหา จำนวน 40 รายการ</h3>
									</Col>
								</Row>
								<Row className="mt-2 mb-2">
									<Col lg={12}>
										<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
											<FormGroup className="mr-auto ml-auto mb-0" row>
												<Col md="2">
													<Input type="select" name="select">
														<option value="0">แสดง 10 รายการ</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
												<Col md="2">
												</Col>
												<Col md="2">
												</Col>
												<Col md="2">
												</Col>
												<Col md="2">
												</Col>
												<Col md="2">
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
													<th className="text-center">วันที่ยื่นคำร้อง</th>
													<th className="text-center">ประเภทคำร้อง</th>
													<th className="text-center">หมายเลขคำร้อง</th>
													<th className="text-center">สถานะ</th>
													<th className="text-center">วิทยาเขต</th>
													<th className="text-center">คณะ</th>
													<th className="text-center">ระดับการศึกษา</th>
													<th className="text-center">รหัสประจำตัวนิสิต</th>
													<th className="text-center">ชื่อ - นามสกุล</th>
													<th className="text-center">ดูรายละเอียด</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="text-center result-number">1</td>
													<td className="text-center bg-td-striped">10-04-63</td>
													<td className="text-center bg-td-striped">
														การขอย้ายสาขา/หลักสูตร
													</td>
													<td className="text-center bg-td-striped">OSS00001/2563</td>
													<td className="text-center">
														<img src={Pending} title="รออนุมัติ" width="auto" height="24" alt="Pending" />
													</td>
													<td className="text-center bg-td-striped">บางเขน</td>
													<td className="text-center bg-td-striped">วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">ปริญญาตรี</td>
													<td className="text-center bg-td-striped">5612345610</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center">
														<Link to="/backend/approvals/requests/6">
															<i className="fa fa-search fa-lg text-success"></i>
														</Link>
													</td>
												</tr>

												<tr>
													<td className="text-center result-number">1</td>
													<td className="text-center bg-td-striped">10-04-63</td>
													<td className="text-center bg-td-striped">
														การขอย้ายสาขา/หลักสูตร
													</td>
													<td className="text-center bg-td-striped">OSS00001/2563</td>
													<td className="text-center">
														<img src={Approved} title="อนุมัติ" width="auto" height="24" alt="Approved" />
													</td>
													<td className="text-center bg-td-striped">บางเขน</td>
													<td className="text-center bg-td-striped">วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">ปริญญาตรี</td>
													<td className="text-center bg-td-striped">5612345610</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center">
														<Link to="/backend/approvals/requests/7">
															<i className="fa fa-search fa-lg text-success"></i>
														</Link>
													</td>
												</tr>

												<tr>
													<td className="text-center result-number">1</td>
													<td className="text-center bg-td-striped">10-04-63</td>
													<td className="text-center bg-td-striped">
														การขอย้ายสาขา/หลักสูตร
													</td>
													<td className="text-center bg-td-striped">OSS00001/2563</td>
													<td className="text-center">
														<img src={Rejected} title="ปฏิเสธ" width="auto" height="24" alt="Rejected" />
													</td>
													<td className="text-center bg-td-striped">บางเขน</td>
													<td className="text-center bg-td-striped">วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">ปริญญาตรี</td>
													<td className="text-center bg-td-striped">5612345610</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center">
														<Link to="/backend/approvals/requests/8">
															<i className="fa fa-search fa-lg text-success"></i>
														</Link>
													</td>
												</tr>

												{this.repeatTableRecord(4)}

												{this.repeatTableRecord(5)}

												{this.repeatTableRecord(6)}

												{this.repeatTableRecord(7)}

												{this.repeatTableRecord(8)}

												{this.repeatTableRecord(9)}

												{this.repeatTableRecord(10)}
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

export default List;