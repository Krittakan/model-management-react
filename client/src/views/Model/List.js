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
    Row,
    ModalBody,
} from 'reactstrap';
import { DatePickerInput } from 'rc-datepicker';
import { Link } from 'react-router-dom';
import { ModalIcon } from '../Components/Modal';
import AppTable from '../Components/AppTable';

import moment from 'moment';

import modelService from '../../services/model';

let modelColumn = require('../../models/table/modelColumn.json');

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            masterGroup: [],
            masterNewsGroup: [],
            search: {
                keywords: '',
                dateFrom: '',
                dateTo: '',
            },
            table: {
                dataLoaded: false,
                columns: modelColumn
            },
        }
        
        this.modelService = new modelService(this);

        this.tableResultContainer = React.createRef();
        this.dateFrom = React.createRef();
        this.dateTo = React.createRef();
    }

    handleCriteriaChange = (value, key) => {
        let searchObj = this.state.search;
        searchObj[key] = value;
        this.setState({
            search: searchObj
        });
    }

    resetCriteria = () => {
        let searchObj = {
            keywords: '',
            dateFrom: '',
            dateTo: '',
        };
        this.setState({ search: searchObj });
    }

    searchData = () => {
        this.tableResultContainer.current.handleSearch(this.state.search, 1, 'df', 'df');
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <CardBody>
                                <Row className="mt-3 mb-3">
                                    <Col lg={12}>
                                        <h3>Search</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <Form action="" className="form-horizontal">
                                            <FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
                                                <Col md="2">
                                                    <Label className="mb-0 mt-3 mt-md-0">Keywords</Label>
                                                </Col>
                                                <Col md="10">
                                                    <Input name="keywords"
                                                        value={this.state.search.keywords}
                                                        onChange={(e) => { this.handleCriteriaChange(e.target.value, "keywords") }} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mr-auto ml-auto mb-0 mb-md-3" row>
                                                <Col md="2">
                                                    <Label className="mb-0 mt-3 mt-md-0">Create Date From</Label>
                                                </Col>
                                                <Col md="4">
                                                    <DatePickerInput
                                                        ref={this.dateFrom}
                                                        readOnly
                                                        displayFormat='DD MMMM YYYY'
                                                        returnFormat='YYYY-MM-DD'
                                                        value={this.state.search.dateFrom}
                                                        maxDate={moment().format("YYYY-MM-DD")}
                                                        locale="th"
                                                        onChange={(jsDate, dateString) => { this.handleCriteriaChange(moment(dateString).format("YYYY-MM-DD"), "dateFrom") }}
                                                        onClear={() => {
                                                            this.handleCriteriaChange("", "dateFrom")
                                                        }}
                                                    />
                                                </Col>
                                                <Col md="2">
                                                    <Label className="mb-0 mt-3 mt-md-0">To</Label>
                                                </Col>
                                                <Col md="4">
                                                    <DatePickerInput
                                                        ref={this.dateTo}
                                                        readOnly
                                                        displayFormat='DD MMMM YYYY'
                                                        returnFormat='YYYY-MM-DD'
                                                        value={this.state.search.dateTo}
                                                        minDate={this.state.search.dateFrom}
                                                        locale="th"
                                                        onChange={(jsDate, dateString) => { this.handleCriteriaChange(moment(dateString).format("YYYY-MM-DD"), "dateTo") }}
                                                        onClear={() => {
                                                            this.handleCriteriaChange("", "dateTo")
                                                        }}
                                                    />
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
                                                            <Button onClick={this.resetCriteria} block color="danger" className="font-weight-bold">Clear criteria</Button>
                                                        </Col>
                                                        <Col md="6" className="mb-3 mb-xl-0">
                                                            <Button onClick={this.searchData} block color="primary" className="font-weight-bold">Search</Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Row>

                                <AppTable
                                    ref={this.tableResultContainer}
                                    columns={this.state.table.columns}
                                    service={this.modelService.getList}
                                    search={true}
                                    rows={this.state.table.rows}
                                    rowCount={this.state.table.rowCount}
                                    tableWidth="100%"
                                    rowdisplay={(row, field) => {
                                        if (field === "detail") {
                                            return (
                                                <Link to={"/model/" + row["id"]}>
                                                    <i className="fa fa-search fa-lg text-success"></i>
                                                </Link>
                                            );
                                        }
                                        else if (field === "delete") {
                                            return (
                                                <ModalIcon
                                                    text="Delete"
                                                    color="danger"
                                                    header="Delete Model"
                                                    body={() => {
                                                        return (
                                                            <ModalBody>
                                                                Delete confirmation
                                                            </ModalBody>
                                                        );
                                                    }}
                                                    onConfirm={() => this.modelService.DeleteModel(row["id"])} />
                                            );
                                        }
                                        return row[field] ? row[field] : "-";
                                    }}
                                    actionContainer={() => {
                                        return <Col md={{ size: 2, offset: 4 }}>
                                            <Link to="/model/add" className="text-decoration-none">
                                                <Button block className="btn-sm font-weight-bold" style={{ height: 30 }} color="success" >Add Model</Button>
                                            </Link>
                                        </Col>
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default List;