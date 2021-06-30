import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

const portalRoot = document.getElementById("portal-root") 

export default function UIModal({children, isOpen, onClickClose}){
    
    if(!isOpen){
        return null
    }
    return ReactDom.createPortal(
        <div className="ui-modal__overlay"> 
            <div className="ui-modal">
                {children}
                <button className="btn-modal__close" type="button" onClick={onClickClose}>x</button>
            </div>
        </div>,
        portalRoot
    )

}