import React from 'react';
import Dropzone from 'react-dropzone';
import { Row, Col } from 'reactstrap';

class ImageDropzone extends React.Component {

    render() {
        const thumbs = this.props.files.map((file, index) => {
            return (
                <Row key={index} className="border-bottom border-light">
                    <Col md={6}>
                        <div style={{
                            display: 'inline-flex',
                            borderRadius: 2,
                            border: '1px solid #eaeaea',
                            marginBottom: 8,
                            marginRight: 8,
                            width: 'auto',
                            height: 100,
                            padding: 4,
                            boxSizing: 'border-box'
                        }}>
                            <div style={{
                                display: 'flex',
                                minWidth: 0,
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    style={{
                                        display: 'block',
                                        width: 'auto',
                                        height: '100%'
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} style={{ margin: "auto" }}>
                        {file.name}
                    </Col>
                </Row>
            );
        });

        return (
            <Dropzone onDrop={this.props.onDrop} multiple={false} accept="image/*">
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p className="mt-auto mb-auto">วางไฟล์ที่นี่</p>
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

export default ImageDropzone;