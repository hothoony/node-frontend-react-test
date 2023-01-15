import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TestModal = () => {

    const [ show, setShow ] = useState(false);

    const handleModalShow = () => setShow(true);
    const handleModalHide = () => setShow(false);
    
    return (
        <>
            <h3>Test Modal</h3>
            <button onClick={handleModalShow}>
                open modal
            </button>

            <Modal show={show} onHide={handleModalHide}>
                <Modal.Header closeButton>
                    <Modal.Title>모달 제목</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    모달 내용
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleModalHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TestModal;
