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
import Fail from '../../assets/statusIcon/cross.png'
import Success from '../../assets/statusIcon/check.png'

class ImportList extends Component {
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
													<Label className="mb-0 mt-3 mt-md-0">วันที่นำเข้า จาก</Label>
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
								<Row className="mt-0 mb-3 ku-border">
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
													<Link to="/backend/import/add" className="text-decoration-none">
														<Button block className="btn-sm ku-tb-action font-weight-bold" style={{ height: 38 }} color="primary" >เลือกไฟล์ข้อมูล</Button>
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
													<th className="text-center">วันที่และเวลานำเข้า</th>
													<th className="text-center">ที่มา</th>
													<th className="text-center">ผู้ดำเนินการ</th>
													<th className="text-center">สรุปยอด</th>
													<th className="text-center">สถานะ</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="text-center result-number">1</td>
													<td className="text-center bg-td-striped">11-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">ไฟล์จากธนาคาร SCB</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">-</td>
													<td className="text-center bg-td-striped">
														<img src={Fail} title="ล้มเหลว" width="auto" height="24" alt="Fail" />
													</td>
												</tr>
												<tr>
													<td className="text-center result-number">2</td>
													<td className="text-center bg-td-striped">12-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">ไฟล์จากธนาคาร SCB</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">5,000 บาท</td>
													<td className="text-center bg-td-striped">
														<img src={Success} title="สำรเ็จ" width="auto" height="24" alt="Success" />
													</td>
												</tr>
												<tr>
													<td className="text-center result-number">3</td>
													<td className="text-center bg-td-striped">13-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">view วิทยาเขตบางเขน</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">5,000 บาท</td>
													<td className="text-center bg-td-striped">
														<img src={Success} title="สำรเ็จ" width="auto" height="24" alt="Success" />
													</td>
												</tr>
												<tr>
													<td className="text-center result-number">4</td>
													<td className="text-center bg-td-striped">14-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">view วิทยาเขตบางเขน</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">5,000 บาท</td>
													<td className="text-center bg-td-striped">
														<img src={Success} title="สำรเ็จ" width="auto" height="24" alt="Success" />
													</td>
												</tr>
												<tr>
													<td className="text-center result-number">5</td>
													<td className="text-center bg-td-striped">15-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">view วิทยาเขตบางเขน</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">5,000 บาท</td>
													<td className="text-center bg-td-striped">
														<img src={Success} title="สำรเ็จ" width="auto" height="24" alt="Success" />
													</td>
												</tr>
												<tr>
													<td className="text-center result-number">6</td>
													<td className="text-center bg-td-striped">16-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">view วิทยาเขตบางเขน</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">5,000 บาท</td>
													<td className="text-center bg-td-striped">
														<img src={Success} title="สำรเ็จ" width="auto" height="24" alt="Success" />
													</td>
												</tr>
												<tr>
													<td className="text-center result-number">7</td>
													<td className="text-center bg-td-striped">17-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">view วิทยาเขตบางเขน</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">5,000 บาท</td>
													<td className="text-center bg-td-striped">
														<img src={Success} title="สำรเ็จ" width="auto" height="24" alt="Success" />
													</td>
												</tr>
												<tr>
													<td className="text-center result-number">8</td>
													<td className="text-center bg-td-striped">18-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">view วิทยาเขตบางเขน</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">5,000 บาท</td>
													<td className="text-center bg-td-striped">
														<img src={Success} title="สำรเ็จ" width="auto" height="24" alt="Success" />
													</td>
												</tr>
												<tr>
													<td className="text-center result-number">9</td>
													<td className="text-center bg-td-striped">19-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">view วิทยาเขตบางเขน</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">5,000 บาท</td>
													<td className="text-center bg-td-striped">
														<img src={Success} title="สำรเ็จ" width="auto" height="24" alt="Success" />
													</td>
												</tr>
												<tr>
													<td className="text-center result-number">10</td>
													<td className="text-center bg-td-striped">20-04-63 09:10:00</td>
													<td className="text-center bg-td-striped">view วิทยาเขตบางเขน</td>
													<td className="text-center bg-td-striped">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">5,000 บาท</td>
													<td className="text-center bg-td-striped">
														<img src={Success} title="สำรเ็จ" width="auto" height="24" alt="Success" />
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

export default ImportList;
