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


class Upload extends Component {
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
											<FormGroup className="mr-auto ml-auto" row>
												<Col md="2">
													<Label htmlFor="">วันที่</Label>
												</Col>
												<Col md="4">
													<Input type="date" id="date-input" name="date-input" placeholder="date" />
												</Col>
												<Col md="2">
													<Label htmlFor="">ถึง</Label>
												</Col>
												<Col md="4">
													<Input type="date" id="date-input" name="date-input" placeholder="date" />
												</Col>
											</FormGroup>
											<FormGroup className="mr-auto ml-auto" row>
												<Col md="2">
												</Col>
												<Col md="4">
												</Col>
												<Col md="2">
												</Col>
												<Col md="4">
													<Row className="align-items-center">
														<Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
															<Button block color="danger">ล้างข้อมูล</Button>
														</Col>
														<Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
															<Button block color="primary">ค้นหา</Button>
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
													<Link to="/backend/payment-upload/upload">
														<Button block className="btn-sm ku-tb-action" color="primary" >นำเข้า</Button>
													</Link>
												</Col>
											</FormGroup>
										</Form>
									</Col>
								</Row>
								<Row>
									<Col lg={12}>
										<Table responsive>
											<thead>
												<tr className="ku-tb-head">
													<th className="text-center">#</th>
													<th className="text-center">วันที่นำเข้า</th>
													<th className="text-center">ชื่อไฟล์</th>
													<th className="text-center">ผู้ดำเนินการ</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="text-center">1</td>
													<td className="text-center">10 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
												</tr>
												<tr>
													<td className="text-center">2</td>
													<td className="text-center">11 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
												</tr>
												<tr>
													<td className="text-center">3</td>
													<td className="text-center">12 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
												</tr>
												<tr>
													<td className="text-center">4</td>
													<td className="text-center">13 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
												</tr>
												<tr>
													<td className="text-center">5</td>
													<td className="text-center">14 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
												</tr>
												<tr>
													<td className="text-center">6</td>
													<td className="text-center">15 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
												</tr>
												<tr>
													<td className="text-center">7</td>
													<td className="text-center">16 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
												</tr>
												<tr>
													<td className="text-center">8</td>
													<td className="text-center">17 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
												</tr>
												<tr>
													<td className="text-center">9</td>
													<td className="text-center">18 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
												</tr>
												<tr>
													<td className="text-center">10</td>
													<td className="text-center">19 เมษายน 2563</td>
													<td className="text-center">payment.txt</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
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

export default Upload;
