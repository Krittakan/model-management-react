import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { Card, CardBody, Col, Row, Button, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import Detail from '../Components/Model/Detail';

import modelService from '../../services/model';

class AnnouncementDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataLoaded: false,
            inputs: {
                title: "",
                description: "",
            },
        }

        this.modelService = new modelService(this);
    }

    componentDidMount() {
        this.modelService.getDetail(this.props.match.params.id);
    }

    render() {
        return this.state.dataLoaded ? (
            <Card>
                <CardBody>
                    <Row className="mb-3 ku-border">
                        <Col lg={12}>
                            <h3>Model Detail</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={10} className="mr-auto ml-auto">
                            <Card>
                                <Detail
                                    inputs={this.state.inputs}
                                    mode="READ"
                                />
                                <model-viewer
                                    src={"/api/model/androidFile/" + this.props.match.params.id}
                                    alt={this.state.inputs.title}
                                    camera-controls
                                    auto-rotate
                                    ar
                                    shadow-intensity="1"
                                />

                                <CardFooter className="bg-white">
                                    <Row className="align-items-center">
                                        <Col md="3" className="mr-auto ml-auto order-md-1">
                                            <Link to="/model" className="text-decoration-none">
                                                <Button block color="danger" className="font-weight-bold">ย้อนกลับ</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>

                </CardBody>
            </Card >
        ) :
            <LoadingOverlay
                active={this.state.dataLoaded}
                spinner
                text='Loading your content...' />;
    }
}

export default AnnouncementDetail;