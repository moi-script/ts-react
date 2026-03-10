import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ModalPortal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const mountElement = document.getElementById('modal-root') as HTMLDivElement;

  if (!mountElement) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    mountElement
  );
};