
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
const ModalConfirm = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const onClickBtn = () => {
		if(props.onClickBtn){
			props.onClickBtn();
		}
		toggle();
	};

	const confirm = (e) => {
		if (props.onConfirm) {
			props.onConfirm(e);
		}
		toggle();
	};

	return (
		<div className={props.className}>
			<Button block color={props.color} onClick={onClickBtn} className="font-weight-bold">{props.text}</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>{props.header}</ModalHeader>
				{props.body()}
				<ModalFooter>
					<Button color="danger" onClick={toggle} className="font-weight-bold">ย้อนกลับ</Button>{' '}
					<Button color="primary" onClick={confirm} className="font-weight-bold">ยืนยัน</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

const ModalAlert = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>{props.header}</ModalHeader>
				{props.body()}
				<ModalFooter>
					<Button color="primary" onClick={toggle} className="font-weight-bold">ย้อนกลับ</Button>{' '}
				</ModalFooter>
			</Modal>
		</div>
	);
}

const ModalIcon = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const onClickBtn = () => {
		if(props.onClickBtn){
			props.onClickBtn();
		}
		toggle();
	};

	const confirm = (e) => {
		if (props.onConfirm) {
			props.onConfirm(e);
		}
		toggle();
	};

    return (
        <div>
            <i className="fa fa-trash fa-lg text-danger" style={{ cursor: "pointer" }} title={props.text} onClick={onClickBtn}></i>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.header}</ModalHeader>
                {props.body()}
                <ModalFooter>
                    <Button color="danger" onClick={toggle} className="font-weight-bold">ย้อนกลับ</Button>{' '}
					<Button color="primary" onClick={confirm} className="font-weight-bold">ยืนยัน</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export { ModalConfirm, ModalAlert, ModalIcon };