import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Button, CardFooter, Form, Input, ModalBody } from 'reactstrap';

import Education from '../../Profile/Components/Education';
import KnowYourCustomer from '../../Profile/Components/KnowYourCustomer';
import PersonalDetail from '../../Profile/Components/PersonalDetail';

import { Link } from 'react-router-dom';
import Modal from './Components/Modal';

class KYC extends Component {

	KYC = () => {
		if (this.props.match.params.type === "0") {
			return null;
		}
		return <KnowYourCustomer type={this.props.match.params.type} />
	}

	footer = () => {
		if (this.props.match.params.type === "2") {
			return (
				<Row className="align-items-center">
					<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
						<Link to="/backend/approvals/kyc" className="text-decoration-none">
							<Button block color="danger" className="font-weight-bold">ย้อนกลับ</Button>
						</Link>
					</Col>
					<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-2">
						<Modal
							text="ปฏิเสธ"
							color="danger"
							header="ยืนยันการปฏิเสธ"
							body={() => {
								return (
									<div>
										<Col>
											กรุณากรอกเหตุผล
										</Col>
										<ModalBody>
											<Input type="textarea"></Input>
										</ModalBody>
									</div>
								);
							}}
							link="/backend/approvals/kyc/5" />
					</Col>
					<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-3">
						<Modal
							text="อนุมัติ"
							color="primary"
							header="ยืนยันการอนุมัติ"
							body={() => {
								return (
									<ModalBody>
										ยืนยันการอนุมัติ
									</ModalBody>
								);
							}}
							link="/backend/approvals/kyc/3" />
					</Col>
				</Row>
			);
		}
		return (
			<Row className="align-items-center">
				<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
					<Link to="/backend/approvals/kyc" className="text-decoration-none">
						<Button block color="danger" className="font-weight-bold">ย้อนกลับ</Button>
					</Link>
				</Col>
			</Row>);
	}
	render() {
		return (
			<Card>
				<CardBody>
					<Row className="mb-3 ku-border">
						<Col lg={12}>
							<h3>รายละเอียดคำขออนุมัติ KYC</h3>
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={10} className="mr-auto ml-auto">
							<Card>
								<Form>

									<PersonalDetail type="3" />

									<Education type={this.props.match.params.type} />


									{this.KYC()}


									<CardFooter className="bg-white">
										{this.footer()}
									</CardFooter>
								</Form>
							</Card>
						</Col>
					</Row >
				</CardBody >

			</Card >
		);
	}
}

export default KYC;