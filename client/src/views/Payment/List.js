import React, { Component } from 'react';
import {
	Button,
	ButtonDropdown,
	Card,
	CardBody,
	Col,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
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
import PaidIcon from '../../assets/statusIcon/green_dollar.png'
import NotPaidIcon from '../../assets/statusIcon/red_dollar.png'
import NoFee from '../../assets/statusIcon/zero.png';

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
				<td className="text-center result-number">{id}</td>
				<td className="text-center bg-td-striped">10-04-63</td>
				<td className="text-center bg-td-striped">การขอย้ายสาขา/หลักสูตร</td>
				<td className="text-center bg-td-striped">OSS00009/2563</td>
				<td className="text-center">
					<img src={NoFee} title="ไม่มีค่าธรรมเนียม" width="auto" height="24" alt="No fee" />
				</td>
				<td className="text-center bg-td-striped">บางเขน</td>
				<td className="text-center bg-td-striped">วิศวกรรมศาสตร์</td>
				<td className="text-center bg-td-striped">ปริญญาตรี</td>
				<td className="text-center">
					<Link to="/backend/payments/9">
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
													<Input type="select" name="select">
														<option value="0">Please select</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
												<Col md="2">
													<Label className="mb-0 mt-3 mt-md-0">สถานะการชำระเงิน</Label>
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
												</Col>
												<Col md="4">
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
									<Col lg={6}>
										<h3>ผลการค้นหา จำนวน 40 รายการ</h3>
									</Col>
									<Col lg="6" className="text-right">
										<h3 className="ku-lh2rem mb-0">รวมเป็นเงินทั้งสิ้น : 5,000.00 บาท</h3>
									</Col>
								</Row>
								<Row className="mt-2 mb-2">
									<Col lg={12}>
										<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
											<FormGroup className="mr-auto ml-auto mb-0" row>
												<Col md="2">
													<Input type="select" name="select">
														<option value="0">แสดง 5 รายการ</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
												<Col md={{ size: 2, offset: 8 }}>
													<ButtonDropdown className="text-decoration-none btn-block" style={{ height: 38 }}
														isOpen={this.state.dropdownOpen[1]} toggle={() => { this.btntoggle(1); }}>
														<DropdownToggle caret className="btn-sm ku-tb-action02 font-weight-bold" color="primary">
															ส่งออกข้อมูล
														</DropdownToggle>
														<DropdownMenu style={{ width: "100%" }}>
															<DropdownItem>CSV</DropdownItem>
														</DropdownMenu>
													</ButtonDropdown>
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
													<th className="text-center">วันยื่นคำร้อง</th>
													<th className="text-center">ประเภทคำร้อง</th>
													<th className="text-center">หมายเลขคำร้อง</th>
													<th className="text-center">สถานะการชำระเงิน</th>
													<th className="text-center">วิทยาเขต</th>
													<th className="text-center">คณะ</th>
													<th className="text-center">ระดับการศึกษา</th>
													<th className="text-center">ดูรายละเอียด</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="text-center result-number">1</td>
													<td className="text-center bg-td-striped">10-04-63</td>
													<td className="text-center bg-td-striped">ซองจดหมาย</td>
													<td className="text-center bg-td-striped">OSS00002/2563</td>
													<td className="text-center">
														<img src={NotPaidIcon} title="ยังไม่ได้ชำระ" width="auto" height="24" alt="Not Paid" />
													</td>
													<td className="text-center bg-td-striped">บางเขน</td>
													<td className="text-center bg-td-striped">วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">ปริญญาตรี</td>
													<td className="text-center">
														<Link to="/backend/payments/2">
															<i className="fa fa-search fa-lg text-success"></i>
														</Link>
													</td>
												</tr>

												<tr>
													<td className="text-center result-number">2</td>
													<td className="text-center bg-td-striped">10-04-63</td>
													<td className="text-center bg-td-striped">ซองจดหมาย</td>
													<td className="text-center bg-td-striped">OSS00003/2563</td>
													<td className="text-center">
														<img src={PaidIcon} title="ชำระเงินแล้ว" width="auto" height="24" alt="Paid" />
													</td>
													<td className="text-center bg-td-striped">บางเขน</td>
													<td className="text-center bg-td-striped">วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">ปริญญาตรี</td>
													<td className="text-center">
														<Link to="/backend/payments/3">
															<i className="fa fa-search fa-lg text-success"></i>
														</Link>
													</td>
												</tr>

												<tr>
													<td className="text-center result-number">3</td>
													<td className="text-center bg-td-striped">10-04-63</td>
													<td className="text-center bg-td-striped">การขอย้ายสาขา/หลักสูตร</td>
													<td className="text-center bg-td-striped">OSS00007/2563</td>
													<td className="text-center">
														<img src={NotPaidIcon} title="ชำระเงินแล้ว" width="auto" height="24" alt="Paid" />
													</td>
													<td className="text-center bg-td-striped">บางเขน</td>
													<td className="text-center bg-td-striped">วิศวกรรมศาสตร์</td>
													<td className="text-center bg-td-striped">ปริญญาตรี</td>
													<td className="text-center">
														<Link to="/backend/payments/7">
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