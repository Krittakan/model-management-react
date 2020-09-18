import React, { Component } from 'react';
import { CardHeader, CardBody, FormGroup, Col, Label, Input } from 'reactstrap';

class Detail extends Component {
    title = () => {
        if (this.props.mode === "READ") {
            return <FormGroup row>
                <Label md="4">Title</Label>
                <Label md="8" id="title">{this.props.inputs ? this.props.inputs.title : ""}</Label>
            </FormGroup>
        }
        return <FormGroup row>
            <Label md="4">Title <span className="text-danger">*</span></Label>
            <Col md="8">
                <Input
                    id="title"
                    onChange={(e) => this.props.handleChange("title", e.target.value)}
                    value={this.props.inputs["title"]} />

                <span className="text-danger">{this.props.errors["title"]}</span>
            </Col>
        </FormGroup>;
    }

    description = () => {
        if (this.props.mode === "READ") {
            return <FormGroup row>
                <Label md="4">Description</Label>
                <Label md="8" id="description">{this.props.inputs ? this.props.inputs.description : ""}</Label>
            </FormGroup>
        }
        return <FormGroup row>
            <Label md="4">Description <span className="text-danger">*</span></Label>
            <Col md="8">
                <Input
                    id="description"
                    type="textarea"
                    onChange={(e) => this.props.handleChange("description", e.target.value)}
                    value={this.props.inputs["description"]} />

                <span className="text-danger">{this.props.errors["description"]}</span>
            </Col>
        </FormGroup>;
    }

    render() {
        return (
            <div>
                <CardHeader>
                    <label>{(this.props.cardHeader || "Detail")}</label>
                </CardHeader>
                <CardBody>
                    {this.title()}
                    {this.description()}
                </CardBody>
            </div>
        )
    }
}
export default Detail;