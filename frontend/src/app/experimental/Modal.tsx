import React, { useState, useEffect, useRef, ReactNode } from "react";

interface ModalProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ title, children, isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-25 d-flex justify-content-center align-items-center">
      <div ref={modalRef} className="modal-dialog">
        <div className="modal-content p-4 rounded bg-white">
          <h2 className="text-center text-success mb-4 fs-4 font-bold">
            {title}
          </h2>
          <div className="text-dark">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
