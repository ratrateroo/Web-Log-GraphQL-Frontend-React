import React from 'react';
import RactDOM from 'react-dom'

import './Modal.css';

const ModalOverlay = props => {
    const content = (
        <div className={`modal ${props.classname}`} style={props.style}>

        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {

};

export default Modal;