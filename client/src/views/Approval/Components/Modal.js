
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const ModalExample = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button block color="danger" onClick={toggle}>ปฎิเสธ</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>กรุณากรอกเหตุผล</ModalHeader>
                <ModalBody>
                    <Input type="textarea"></Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>ยกเลิก</Button>{' '}

                    <Link to="/backend/approvals">
                        <Button color="primary" onClick={toggle}>ยืนยัน</Button>
                    </Link>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;