import { useEffect } from "react";
import '../css/modal.css';

const Modal = ({ isOpen, duration, onClose, message }
    : { 
      isOpen: boolean, 
      duration: number, 
      onClose: () => void, 
      message: string 
    }) => {
        
    useEffect(() => {
        if (isOpen) {
            // 모달이 열리면 body 스크롤 및 상호작용 방지
            document.body.style.overflow = 'hidden';
            document.body.style.pointerEvents = 'none'; // 전체 클릭 비활성화
            // document.querySelector('.modal-overlay').style.pointerEvents = 'auto'; // 오버레이만 활성화
    
            const timer = setTimeout(() => {
            onClose();
            }, duration);
    
            return () => {
            // 모달이 닫히면 원상 복구
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
            document.body.style.pointerEvents = 'auto';
            };
        }
        }, [isOpen, duration, onClose]);
    
        if (!isOpen) return null;
    
        return (
        <div className="modal-overlay">
            <div className="modal-content">
            <p>{message}</p>
            </div>
        </div>
        );
  };

export default Modal;
