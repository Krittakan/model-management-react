import React, { Component } from 'react';
import {
	Badge,
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

class List extends Component {

	constructor(props) {
		super(props);

		this.btntoggle = this.btntoggle.bind(this);
		this.state = {
			dropdownOpen: new Array(19).fill(false),
		};
	}

	btntoggle(i) {
		const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
		this.setState({
			dropdownOpen: newArray,
		});
	}


	repeatTableRecord(id) {
		return (
			<tr>
				<td className="text-center">{id}</td>
				<td className="text-center">10 เมษายน 2563</td>
				<td className="text-center">KYC</td>
				<td className="text-center">จอน วิศวกรรมศาสตร์</td>
				<td className="text-center">1234567890123</td>
				<td className="text-center"><Badge color="success" className="ku-mw100px">ได้รับการอนุมัติ</Badge></td>
				<td className="text-center">
					<Link to="/backend/approvals/3">
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
											<FormGroup className="mr-auto ml-auto" row>
												<Col md="2">
													<Label htmlFor="">คีย์เวิร์ด</Label>
												</Col>
												<Col md="10">
													<Input name="keyword" id="keyword" />
												</Col>
											</FormGroup>

											<FormGroup className="mr-auto ml-auto" row>
												<Col md="2">
													<Label htmlFor="">วันที่รับเรื่อง</Label>
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
													<Label htmlFor="">ประเภทคำขออนุมัติ</Label>
												</Col>
												<Col md="4">
													<Input type="select" name="select">
														<option value="0">-</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
												<Col md="2">
													<Label htmlFor="">ชื่อ - นามสกุล</Label>
												</Col>
												<Col md="4">
													<Input type="text" name="text-input" placeholder="" />
												</Col>
											</FormGroup>
											<FormGroup className="mr-auto ml-auto" row>
												<Col md="2">
													<Label htmlFor="">เลขบัตรประชาชน / หนังสือเดินทาง</Label>
												</Col>
												<Col md="4">
													<Input type="text" name="text-input" placeholder="" />
												</Col>
												<Col md="2">
													<Label htmlFor="">สถานะ</Label>
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
										<Table responsive>
											<thead>
												<tr className="ku-tb-head">
													<th className="text-center">#</th>
													<th className="text-center">วันที่ยื่นเรื่อง</th>
													<th className="text-center">ประเภทคำขออนุมัติ</th>
													<th className="text-center">ชื่อ - นามสกุล</th>
													<th className="text-center">เลขบัตรประชาชน / หนังสือเดินทาง</th>
													<th className="text-center">สถานะ</th>
													<th className="text-center">ดูรายละเอียด</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="text-center">1</td>
													<td className="text-center">10 เมษายน 2563</td>
													<td className="text-center">KYC</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center">1234567890123</td>
													<td className="text-center">
														<Badge color="primary" className="ku-mw100px">รอการอนุมัติ</Badge>
													</td>
													<td className="text-center">
														<Link to="/backend/approvals/2">
															<i className="fa fa-search fa-lg text-success"></i>
														</Link>
													</td>
												</tr>
												<tr>
													<td className="text-center">2</td>
													<td className="text-center">10 เมษายน 2563</td>
													<td className="text-center">KYC</td>
													<td className="text-center">จอน วิศวกรรมศาสตร์</td>
													<td className="text-center">1234567890123</td>
													<td className="text-center"><Badge color="success" className="ku-mw100px">ได้รับการอนุมัติ</Badge></td>
													<td className="text-center">
														<Link to="/backend/approvals/3">
															<i className="fa fa-search fa-lg text-success"></i>
														</Link>
													</td>
												</tr>
												{this.repeatTableRecord(3)}

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