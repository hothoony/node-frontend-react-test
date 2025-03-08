import React from "react";

export type ModalType = 'info' | 'warn' | 'error';

interface ModalProps {
    type: ModalType;
    message: string;
    onClose: () => void;
}

const bgColors: Record<ModalType, string> = {
    info: 'bg-blue-500',
    warn: 'bg-yellow-500',
    error: 'bg-red-500'
};

const Modal: React.FC<ModalProps> = ({ type, message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div>
                <h2 className='text-xl font-bold'>{type.toUpperCase()}</h2>
                <p>{message}</p>
                <button onClick={onClose} className="mt-2 bg-white text-black px-4 py-2 rounded">닫기</button>
            </div>
        </div>
    );
}

export default Modal;
