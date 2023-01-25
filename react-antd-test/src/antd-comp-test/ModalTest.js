import { Button, Modal, Space } from "antd";

const ModalTest = () => {

    const [modal, contextHolder] = Modal.useModal();

    const config = {
        title: 'Use Hook',
        content: (
            <>
            </>
        ),
    };

    const handlerSuccess = (e) => {
        modal.success({
            title: 'Success',
            content: (
                <>
                    <div>성공했습니다.</div>
                </>
            ),
            closable: true,
            okText: '예',
            cancelText: '아니오',
        });
    };
    const handlerConfirm = (e) => {
        modal.confirm({
            title: 'Confirm',
            content: (
                <>
                    <div>저장하시겠습니까?</div>
                </>
            ),
            closable: true,
            okText: '예',
            cancelText: '아니오',
        });
    };
    const handlerInfo = (e) => {
        modal.info({
            title: 'Info',
            content: (
                <>
                    <div>저장이 완료됐습니다.</div>
                </>
            ),
            closable: true,
            okText: '확인',
        });
    };
    const handlerWarning = (e) => {
        modal.warning({
            title: 'Warning',
            content: (
                <>
                    <div>주의하세요</div>
                </>
            ),
            closable: true,
            okText: '확인',
        });
    };
    const handlerError = (e) => {
        modal.error({
            title: 'Error',
            content: (
                <>
                    <div>에러가 발생했습니다.</div>
                </>
            ),
            closable: true,
            okText: '확인',
        });
    };

    return (
        <>
            <h2>ModalTest</h2>
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
            {contextHolder}
        </>
    );
}

export default ModalTest;
