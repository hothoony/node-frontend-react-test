import React from "react";

export type ModalType = 'info' | 'warn' | 'error';

interface ModalProps {
    type: ModalType;
    message: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ type, message, onClose }) => {
    // 모달 타입에 따른 색상 및 아이콘 매핑
    const modalStyles = {
        info: {
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-800',
            borderColor: 'border-blue-500',
            icon: 'ℹ️'
        },
        warn: {
            bgColor: 'bg-yellow-100',
            textColor: 'text-yellow-800',
            borderColor: 'border-yellow-500',
            icon: '⚠️'
        },
        error: {
            bgColor: 'bg-red-100',
            textColor: 'text-red-800',
            borderColor: 'border-red-500',
            icon: '❌'
        }
    };

    const currentStyle = modalStyles[type] || modalStyles.info;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // 모달 배경(오버레이)을 직접 클릭했을 때만 닫히도록 처리
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" 
            onClick={handleOverlayClick}
        >
            <div 
                className={`
                    ${currentStyle.bgColor} 
                    ${currentStyle.textColor} 
                    ${currentStyle.borderColor} 
                    w-full max-w-md 
                    rounded-lg 
                    border-2 
                    shadow-xl 
                    p-6 
                    text-center 
                    relative
                `}
                // 모달 내부 클릭 시 이벤트 전파 방지
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-4xl mb-4">{currentStyle.icon}</div>
                <h2 className='text-2xl font-bold mb-4 uppercase'>{type}</h2>
                <p className="mb-6 text-lg">{message}</p>
                <button 
                    onClick={onClose} 
                    className="
                        w-full 
                        bg-white 
                        text-gray-800 
                        font-bold 
                        py-2 
                        px-4 
                        rounded 
                        hover:bg-gray-100 
                        transition 
                        duration-300 
                        ease-in-out
                    "
                >
                    닫기
                </button>
            </div>
        </div>
    );
}

export default Modal;
