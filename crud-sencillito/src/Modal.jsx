import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) =>{
    if(!isOpen) return null;

    return(
        <div className='modal-overlay'>
            <div className='modal-content' >
                <button className='close-button' onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );

};

export default Modal;