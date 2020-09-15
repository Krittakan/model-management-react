
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

const ModalExample = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button block color={props.color} onClick={toggle} className="font-weight-bold">{props.text}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.header}</ModalHeader>

                {props.body()}
                <ModalFooter>
                    <Button color="danger" onClick={toggle} className="font-weight-bold">ย้อนกลับ</Button>{' '}

                    <Link to={props.link} className="text-decoration-none">
                        <Button color="primary" onClick={toggle} className="font-weight-bold">ยืนยัน</Button>
                    </Link>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;