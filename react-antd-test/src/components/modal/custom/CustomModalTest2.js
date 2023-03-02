import { useState } from "react";
import CustomModal from "./CustomModal";

const data = [
    {id: '11', message: 'google'},
    {id: '22', message: 'apple'},
    {id: '33', message: 'microsoft'},
];

const CustomModalTest2 = () => {

    const [ openModal, setOpenModal ] = useState(false);
    const [ modalMessage, setModalMessage ] = useState('');

    const onPreview = (item) => {
        console.log('onPreview', item);
        setOpenModal(true);
        setModalMessage(item.message);
    }

    return (
        <>
            <div>
                CustomModalTest2
                {data.map((item, index) => (
                    <div key={index}>
                        <span>id={item.id}</span>{', '}
                        <span>message={item.message}</span>{', '}
                        <span>
                            <button onClick={() => onPreview(item)}>preview</button>
                        </span>{', '}
                    </div>
                ))}
            </div>

            {openModal ? (
                <CustomModal open={openModal} message={modalMessage} setOpen={setOpenModal} />
            ) : null}
            
        </>
    );
}

export default CustomModalTest2;
