import React, { ReactNode, useCallback } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: ReactNode;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children, onSubmit, title, body, footer, actionLabel, disabled}) => {

  const handleClose = useCallback(() => {
    if(disabled)return
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if(disabled)return
    onSubmit();
  }, [onSubmit, disabled]);
  }

  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">
        <button onClick={onClose} className="absolute top-2 right-2">
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body 
  );
};

export default Modal;
