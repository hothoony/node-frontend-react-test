import { Modal } from "antd";

const CustomModal = ({ open, message, setOpen }) => {

    const onCancel = () => {
        console.log('onCancel');
        setOpen(false);
    }

    return (
        <Modal open={open} onCancel={onCancel}
            footer={
                <div>
                    <button onClick={onCancel}>Close</button>
                </div>
            }
        >
            <div> 
                CustomModal
            </div>
            <div> 
                This is custom modal test.
            </div>
            <div>
                message = <h1 style={{display: 'inline-block'}}>{message}</h1>
            </div>
        </Modal>
    );
}

export default CustomModal;
