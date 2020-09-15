import React, { Component } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
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


class Uploading extends Component {
	repeatRecord(id) {
		return (
			<tr>
				<td>{id}</td>
				<td>D000002</td>
				<td>014</td>
				<td>2353002135</td>
				<td>08032020</td>
				<td>093058</td>
				<td>น.ส. สุนิดา ธารานุวง</td>
				<td>19598001660920320</td>
				<td>1</td>
				<td>20</td>
				<td>001047</td>
				<td>04</td>
				<td>010517</td>
				<td>080320</td>
				<td>00000000</td>
				<td>C</td>
				<td>NET</td>
				<td>9000</td>
				<td>0994000159382</td>
				<td>87</td>
				<td>030</td>
				<td>0000000000</td>
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
										<h3>นำเข้าข้อมูล</h3>
									</Col>
								</Row>
								<Row>
									<Col lg={12}>
										<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
											<FormGroup className="mr-auto ml-auto" row>
												<Col md="2">
													<Label htmlFor="">ธนาคาร</Label>
												</Col>
												<Col md="4">
													<Input type="select" name="select">
														<option value="0">SCB</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
												<Col md="4">
													<Input type="file" id="file" />
												</Col>
												<Col md="2">
													<Button block color="primary">ประมวลผล</Button>
												</Col>
											</FormGroup>
										</Form>
									</Col>
								</Row>
								<Row>
									<Col lg={12}>
										<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
											<FormGroup className="mr-auto ml-auto" row>
												<Col md="2">
													<Label htmlFor="">นำเข้า View</Label>
												</Col>
												<Col md="4">
													<Input type="select" name="select">
														<option value="0">บางเขน</option>
														<option value="1">Option #1</option>
														<option value="2">Option #2</option>
														<option value="3">Option #3</option>
													</Input>
												</Col>
												<Col md="4">
												</Col>
												<Col md="2">
													<Button block color="primary">ประมวลผล</Button>
												</Col>
											</FormGroup>
										</Form>
									</Col>
								</Row>
								<Row className="mt-0 mb-3 ku-border">
									<Col lg={12}>
										<h3>จำนวน 40 รายการ</h3>
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
													<th className="text-center">RowId</th>
													<th className="text-center">PayeeBankId</th>
													<th className="text-center">PayeeAccountNumber</th>
													<th className="text-center">TransferDate</th>
													<th className="text-center">TransferTime</th>
													<th className="text-center">PayerName</th>
													<th className="text-center">Ref1Prefix</th>
													<th className="text-center">Formula</th>
													<th className="text-center">CheckDigit</th>
													<th className="text-center">Ref2Prefix</th>
													<th className="text-center">AppCode</th>
													<th className="text-center">TransactionId</th>
													<th className="text-center">ExpireDate</th>
													<th className="text-center">Unknown</th>
													<th className="text-center">CreditDebit</th>
													<th className="text-center">PaymentType</th>
													<th className="text-center">Amount</th>
													<th className="text-center">BillerId</th>
													<th className="text-center">BillerSuffix</th>
													<th className="text-center">PayerBankId</th>
													<th className="text-center">PayerAccountNumber</th>
												</tr>
											</thead>
											<tbody>
												{this.repeatRecord(1)}

												{this.repeatRecord(2)}

												{this.repeatRecord(3)}

												{this.repeatRecord(4)}

												{this.repeatRecord(5)}

												{this.repeatRecord(6)}

												{this.repeatRecord(7)}

												{this.repeatRecord(8)}

												{this.repeatRecord(9)}

												{this.repeatRecord(10)}
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
							<CardFooter className="bg-white">
								<Row className="align-items-center">
									<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
										<Link to="/backend/payment-upload">
											<Button block color="danger">ยกเลิก</Button>
										</Link>
									</Col>
									<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
									</Col>
									<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
										<Link to="/backend/payment-upload">
											<Button block color="primary">ยืนยัน</Button>
										</Link>
									</Col>
								</Row>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Uploading;
