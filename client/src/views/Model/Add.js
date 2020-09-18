import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Button, CardFooter, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Detail from '../Components/Model/Detail';
import FilesInput from '../Components/Model/FilesInput';
import { ModalConfirm } from '../Components/Modal';

import modelService from '../../services/model';

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataLoaded: false,
            dataSending: false,
            inputs: {
                title: "",
                description: "",
                androidFile: [],
                iosFile: [],
            },
            errors: {
                title: "",
                description: "",
                androidFile: "",
            }
        }
        this.modelService = new modelService(this);
    }

    handleChange(field, value) {
        let inputs = this.state.inputs;
        inputs[field] = value;
        this.setState({ inputs: inputs });
    }
    
    handleValidation() {
        let inputs = this.state.inputs;
        let errors = {};
        let formIsValid = true;

        if (inputs["title"].length === 0) {
            formIsValid = false;
            errors["title"] = "Please input title";
        }

        if (inputs["description"].length === 0) {
            formIsValid = false;
            errors["description"] = "Please input description";
        }

        if (inputs["androidFile"].length === 0) {
            formIsValid = false;
            errors["androidFile"] = "Please input model file";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    submit = () => {
        if (this.handleValidation() && !this.state.dataSending) {
            this.setState({ dataSending: true });
            this.modelService.create(this.state.inputs);
        }
    }

    render() {
        return <Card>
            <CardBody>
                <Row className="mb-3">
                    <Col lg={12}>
                        <h3>Model Add</h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={10} className="mr-auto ml-auto">
                        <Card>
                            <Detail
                                inputs={this.state.inputs}
                                errors={this.state.errors}
                                handleChange={this.handleChange.bind(this)}
                            />

                            <FilesInput
                                inputs={this.state.inputs}
                                errors={this.state.errors}
                                handleChange={this.handleChange.bind(this)}
                            />

                            <CardFooter className="bg-white">
                                <Row className="align-items-center">
                                    <Col md="3" className="mr-auto ml-auto mb-1 mb-xl-0 order-md-3">
                                        <ModalConfirm
                                            text="Add"
                                            color="primary"
                                            header="Add model"
                                            body={() => {
                                                return (
                                                    <ModalBody>
                                                        Add confirmation
                                                    </ModalBody>
                                                );
                                            }}
                                            onConfirm={this.submit} />
                                    </Col>
                                    <Col md="3" className="mr-auto ml-auto order-md-2">
                                    </Col>
                                    <Col md="3" className="mr-auto ml-auto order-md-1">
                                        <Link to="/model" className="text-decoration-none">
                                            <Button block color="danger" className="font-weight-bold">Back</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

            </CardBody>
        </Card >;
    }
}

export default Add;