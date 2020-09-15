import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Button, CardFooter, Form } from 'reactstrap';

import Education from '../Profile/Components/Education';
import KnowYourCustomer from '../Profile/Components/KnowYourCustomer';
import PersonalDetail from '../Profile/Components/PersonalDetail';

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
						<Link to="/backend/approvals">
							<Button block color="danger">ยกเลิก</Button>
						</Link>
					</Col>
					<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-2">
						<Modal buttonLabel="buttonLabel" />
					</Col>
					<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-3">
						<Link to="/backend/approvals/3">
							<Button block color="primary">อนุมัติ</Button>
						</Link>
					</Col>
				</Row>
			);
		}
		return (
			<Row className="align-items-center">
				<Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-1">
					<Link to="/backend/approvals">
						<Button block color="danger">ยกเลิก</Button>
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