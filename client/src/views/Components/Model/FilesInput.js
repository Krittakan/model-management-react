import React, { Component } from 'react';
import { CardHeader, CardBody, FormGroup, Col, Label, Row } from 'reactstrap';

import Dropzone from '../Dropzone';

class FilesInput extends Component {
    onDropAndroidFile = (acceptfiles, rejectedFiles) => {
        acceptfiles.map(file => {
            return this.props.handleChange('androidFile', [file]);
        });
    }

    onDropIosFile = (acceptfiles, rejectedFiles) => {
        acceptfiles.map(file => {
            return this.props.handleChange('iosFile', [file]);
        });
    }

    androidFileInput = () => {
        return (
            <div>
                <Dropzone
                    onDrop={this.onDropAndroidFile}
                    remove={() => () => this.props.handleChange('androidFile', [])}
                    files={this.props.inputs.androidFile}
                    accept={".glb"} />

                <span className="text-danger">{this.props.errors["androidFile"]}</span>
            </div>
        );
    }

    iosFileInput = () => {
        return (
            <div>
                <Dropzone
                    onDrop={this.onDropIosFile}
                    remove={() => () => this.props.handleChange('iosFile', [])}
                    files={this.props.inputs.iosFile} accept={".usdz"} />
            </div>
        );
    }

    render() {
        return (
            <div>
                <CardHeader>
                    <label>{(this.props.cardHeader || "File")}</label>
                </CardHeader>
                <CardBody>
                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="person" >
                                    GLB Model (Android) <span className="text-danger">*</span>
                                </Label>
                            </Col>
                            <Col md="8">
                                {this.androidFileInput()}
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col md="4">
                                <Label for="personal" >
                                    USDZ Model (iOS)
                                </Label>
                            </Col>
                            <Col md="8">
                                {this.iosFileInput()}
                            </Col>
                        </Row>
                    </FormGroup>
                </CardBody>
            </div>
        )
    }
}
export default FilesInput;