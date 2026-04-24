import React from 'react'
import {createPortal} from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
      />

      {/* Center wrapper */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        
        {/* Modal box */}
        <div className="w-[90%] max-w-[400px] bg-white p-4 rounded-lg relative">
          
          <div className="flex justify-end">
            <AiOutlineClose
              onClick={onClose}
              className="text-2xl cursor-pointer"
            />
          </div>

          {children}

        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  )
}

export default Modal
