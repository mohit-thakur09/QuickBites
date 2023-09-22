import React from 'react'
import "./styling/AckModal.css";

const AckModal = () => {
    return (
        <>
            <div className='ack-modal text-center' id='modal'>
                Added to Cart Successfully!
                <img className='svg-icon' src="../images/Ack.gif" alt='ack-modal-img' />
            </div>
        </>
    )
}

export default AckModal