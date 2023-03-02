import { Button, Modal, Space } from "antd";

const ModalTest2 = () => {

    const modalConfig = {
        closable: true,
        maskClosable: true,
        transitionName: '',
        maskTransitionName: '',
        centered: true,
    };

    const handlerSuccess = (e) => {
        Modal.success({
            ...modalConfig,
            title: 'Success',
            content: '성공했습니다.',
            // iconType: 'close-circle',
            okText: '예',
            cancelText: '아니오',
            onOk: () => {
                console.log('ok clicked');
            },
        });
    };
    
    const handlerConfirm = (e) => {
        Modal.confirm({
            ...modalConfig,
            title: 'Confirm',
            content: '저장하시겠습니까?',
            okText: '예',
            cancelText: '아니오',
            onOk: () => {
                console.log('ok clicked');
            },
        });
    };

    const handlerInfo = (e) => {
        Modal.info({
            ...modalConfig,
            title: 'Info',
            content: '저장이 완료됐습니다.',
            okText: '확인',
            onOk: () => {
                console.log('ok clicked');
            },
        });
    };

    const handlerWarning = (e) => {
        Modal.warning({
            ...modalConfig,
            title: 'Warning',
            content: '주의하세요',
            okText: '확인',
            onOk: () => {
                console.log('ok clicked');
            },
        });
    };

    const handlerError = (e) => {
        Modal.error({
            ...modalConfig,
            title: 'Error',
            content: '에러가 발생했습니다.',
            okText: '확인',
            onOk: () => {
                console.log('ok clicked');
            },
        });
    };

    return (
        <>
            <h2>ModalTest2</h2>
            <Space>
                <Button onClick={handlerSuccess}>
                    Success
                </Button>
                <Button onClick={handlerConfirm}>
                    Confirm
                </Button>
                <Button onClick={handlerInfo}>
                    Info
                </Button>
                <Button onClick={handlerWarning}>
                    Warning
                </Button>
                <Button onClick={handlerError}>
                    Error
                </Button>
            </Space>
        </>
    );
}

export default ModalTest2;
