import React, { useContext, useState, useEffect } from 'react'
import './styling/AckCartModal.css';
import { Cart } from './context';
import { useNavigate } from 'react-router-dom';

const AckCartModal = () => {
    let sum = 0;
    let navigate = useNavigate();
    let cartValue = useContext(Cart);
    let [cartStatus, setCartStatus] = useState(false);

    let checkStatus = () => {
        if (cartValue && (cartValue.cartData.length > 0)) {
            setCartStatus(true);
        }
        else if (cartValue && (cartValue.cartData.length === 0)) {
            setCartStatus(false);
        }
    }

    let goToCart = () => {
        navigate('/cart');
    }

    useEffect(() => {
        checkStatus()
    })

    return (
        <>
            {
                cartValue && cartValue.cartData.forEach(element => {
                    sum += element.price;
                })
            }
            {
                cartStatus &&
                (
                    <div className='row fw-bold cart-ack-modal'>
                        <div className='col'>
                            <button className='btn btn-outline-light' onClick={goToCart}>Show Cart</button>
                        </div>
                        <div className='col d-flex align-items-center flex-row-reverse'>
                            <div>
                                <div className='fs-5'>Total: Rs. {sum}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default AckCartModal