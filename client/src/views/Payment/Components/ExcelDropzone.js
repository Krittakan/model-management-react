import React from 'react';
import Dropzone from 'react-dropzone';
import { Row, Col } from 'reactstrap';

class ExcelDropzone extends React.Component {
    render() {
        const thumbs = this.props.files.map((file, index) => {
            return (
                <Row key={index}>
                    <Col>
                        {file.name}
                    </Col>
                </Row>
            );
        });

        return (
            <Dropzone onDrop={this.props.onDrop} multiple={false} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps({ className: 'dropzone' })} style={{ height: "calc(1em + 0.75rem + 2px)" , padding: 0 }}>
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

export default ExcelDropzone;