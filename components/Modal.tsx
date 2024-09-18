'use client'
import React, { ReactNode, useCallback } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) return;
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled || !onSubmit) return;
    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) return null;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">

      </div>
    </>
  );
};

export default Modal;
