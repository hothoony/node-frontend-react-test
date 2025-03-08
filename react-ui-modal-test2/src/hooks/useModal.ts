import { useState } from "react"
import { ModalType } from "../components/Modal";

export const useModal = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType>("info");
    const [message, setMessage] = useState('');

    const openModal = (type: ModalType, message: string) => {
        setModalType(type);
        setMessage(message);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return {
        isOpen,
        modalType,
        message,
        openModal,
        closeModal,
    };
}