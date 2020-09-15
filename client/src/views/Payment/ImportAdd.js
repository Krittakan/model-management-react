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
	ModalBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ExcelDropzone from './Components/ExcelDropzone';
import Modal from './Components/Modal';

class ImportAdd extends Component {
	state = { type: '', files: [] };

	onDrop = (acceptfiles, rejectedFiles) => {
		acceptfiles.map(file => {
			return this.setState({
				files: [file]
			});
		});
	}

	importField() {
		if (this.state.type === "1") {
			return (
				<Row>
					<Col lg={12}>
						<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
							<FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
								<Col md="2">
									<Label className="mb-0 mt-3 mt-md-0">ธนาคาร</Label>
								</Col>
								<Col md="4">
									<Input type="select" name="bank">
										<option value="0">SCB</option>
										<option value="1">Option #1</option>
										<option value="2">Option #2</option>
										<option value="3">Option #3</option>
									</Input>
								</Col>
								<Col md="4">
									<ExcelDropzone onDrop={this.onDrop} files={this.state.files} />
								</Col>
								<Col md="2">
									<Button block color="primary" className="font-weight-bold">อ่านไฟล์ข้อมูล</Button>
								</Col>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			);
		}
		else if (this.state.type === "2") {
			return (
				<Row>
					<Col lg={12}>
						<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
							<FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
								<Col md="2">
									<Label className="mb-0 mt-3 mt-md-0">นำเข้า View</Label>
								</Col>
								<Col md="4">
									<Input type="select" name="campus">
										<option value="0">บางเขน</option>
										<option value="1">Option #1</option>
										<option value="2">Option #2</option>
										<option value="3">Option #3</option>
									</Input>
								</Col>
								<Col md="4">
								</Col>
								<Col md="2">
									<Button block color="primary" className="font-weight-bold">อ่านไฟล์ข้อมูล</Button>
								</Col>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			);
		}
		return null;
	}

	repeatRecord(id) {
		return (
			<tr>
				<td className="text-center result-number">{id}</td>
				<td className="text-center bg-td-striped">D000002</td>
				<td className="text-center bg-td-striped">014</td>
				<td className="text-center bg-td-striped">2353002135</td>
				<td className="text-center bg-td-striped">08032020</td>
				<td className="text-center bg-td-striped">093058</td>
				<td className="text-center bg-td-striped">น.ส. สุนิดา ธารานุวง</td>
				<td className="text-center bg-td-striped">19598001660920320</td>
				<td className="text-center bg-td-striped">1</td>
				<td className="text-center bg-td-striped">20</td>
				<td className="text-center bg-td-striped">001047</td>
				<td className="text-center bg-td-striped">04</td>
				<td className="text-center bg-td-striped">010517</td>
				<td className="text-center bg-td-striped">080320</td>
				<td className="text-center bg-td-striped">00000000</td>
				<td className="text-center bg-td-striped">C</td>
				<td className="text-center bg-td-striped">NET</td>
				<td className="text-center bg-td-striped">9000</td>
				<td className="text-center bg-td-striped">0994000159382</td>
				<td className="text-center bg-td-striped">87</td>
				<td className="text-center bg-td-striped">030</td>
				<td className="text-center bg-td-striped">0000000000</td>
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
											<FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
												<Col md="2">
													<Label className="mb-0 mt-3 mt-md-0">นำเข้าข้อมูลจาก</Label>
												</Col>
												<Col md="4">
													<Input type="select" name="type"
														onChange={(e) => this.setState({ type: e.target.value })}>
														<option value="0">Please select</option>
														<option value="1">ไฟล์จากธนาคาร</option>
														<option value="2">View</option>
													</Input>
												</Col>
											</FormGroup>
										</Form>
									</Col>
								</Row>
								
								{this.importField()}

								<Row className="mt-3 mb-3 ku-border">
									<Col lg={6}>
										<h3>จำนวน 40 รายการ</h3>
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
													<Input type="select" name="entries">
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
										<Link to="/backend/import" className="text-decoration-none">
											<Button block color="danger" className="font-weight-bold">ย้อนกลับ</Button>
										</Link>
									</Col>
									<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
									</Col>
									<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
										<Modal
											text="ยืนยัน"
											color="primary"
											header="ยืนยันการนำเข้าข้อมูล"
											body={() => {
												return (
													<ModalBody>
														ยืนยันการนำเข้าข้อมูล
													</ModalBody>
												);
											}}
											link="/backend/import" />
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

export default ImportAdd;
