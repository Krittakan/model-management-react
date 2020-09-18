import React from 'react';
import Dropzone from 'react-dropzone';
import { Row, Col, Button } from 'reactstrap';

class FileDropzone extends React.Component {
    render() {
        const thumbs = this.props.files.map((file, index) => {
            return (
                <Row key={index} className="border-bottom border-light">
                    <Col>
                        {file.name}
                        <span className="float-right" style={{ cursor: "pointer" }}>
                            <Button outline block color="danger" onClick={this.props.remove()} className="font-weight-bold">&times;</Button>
                        </span>
                    </Col>
                </Row>
            );
        });

        return (
            <Dropzone
                onDrop={this.props.onDrop}
                multiple={false}
                accept={this.props.accept}
            >
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p className="mt-auto mb-auto">Drop file here</p>
                        </div>
                        <aside style={{
                            marginTop: 16
                        }}>
                            {thumbs}
                        </aside>
                    </section>
                )}
            </Dropzone>
        );
    }
}

export default FileDropzone;