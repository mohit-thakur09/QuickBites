import { Cart } from './context'
import React, { useContext, useState } from 'react'

const CartCardItem = (props) => {
    let cartVal = useContext(Cart);
    let [quant, setQuant] = useState();
    let imgName = props.cartItem.item_img_src;

    let changeQuantity = (e) => {
        // e.preventDefault();
        // console.log(e.target.id);
        let id = e.target.id;

        let operation = id.slice(0, id.indexOf(" "));
        id = id.slice(id.indexOf(" ") + 1);
        // console.log(operation);
        // console.log(id);

        let itemIndex = cartVal.cartData.findIndex(i => i.pro_id === id);

        console.log(cartVal.cartData);
        setQuant(cartVal.cartData[itemIndex].quantity)

        if (operation === 'plus') {
            cartVal.cartData[itemIndex].quantity += 1;
            setQuant(prevQuant => prevQuant + 1)
        }
        else if (operation === 'minus') {
            if (cartVal.cartData[itemIndex].quantity > 1) {
                cartVal.cartData[itemIndex].quantity -= 1;
                setQuant(prevQuant => prevQuant + 1)
            } else {
                // let updateCart = cartVal.cartData;
                // updateCart.splice(cartVal.cartData.findIndex(i => i.pro_id === id), 1);
                // cartVal.setCartData(updateCart);
                setQuant(0);
                props.delItem(itemIndex);
            }
        }
    }

    let getImg = () => {
        if (props.cartItem.pro_id.includes("p1")) {
            return `/products/pizza${imgName.slice(imgName.lastIndexOf('/'))}`;
        }
        else if (props.cartItem.pro_id.includes("p2")) {
            return `/products/baverages${imgName.slice(imgName.lastIndexOf('/'))}`;
        }
        else if (props.cartItem.pro_id.includes("p3")) {
            return `/products/fries${imgName.slice(imgName.lastIndexOf('/'))}`;
        }
    }

    return (
        <>
            {/* <div className='row w-50 cartDiv py-2 bg-light'>
                <div className='col-lg-4'>
                    <img className="img img-fluid" src={getImg()} alt='img' width='100' height='90' />
                </div>
                <div className='col'>
                    <h4 className='text-start'>{props.cartItem.pro_name}</h4>
                    <h6 className='text-end pt-3'>Rs. {props.cartItem.price}</h6>
                </div>
            </div> */}
            {
                console.log(quant)
                    (props.cartItem.pro_id.includes("p1")) && (

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${props.id_no}`}
                                aria-expanded="false"
                                aria-controls={props.id_no}
                            >
                                <h5>{props.cartItem.pro_name}</h5>
                            </button>
                        </h2>
                        <div
                            id={props.id_no}
                            className="accordion-collapse collapse"
                        >
                            <div className="accordion-body row">
                                <div className='col-sm-4 d-flex justify-content-between align-items-center'>
                                    <div>
                                        <img
                                            src={getImg()}
                                            alt=""
                                            className="img-fluid rounded-3"
                                            width="150px"
                                        />
                                    </div>
                                </div>
                                <div className="ps-4 col-sm-8">
                                    <div className="d-flex justify-content-between">
                                        <h5>{props.cartItem.pro_name}</h5>
                                        <span className="fw-bold d-block text-primary fs-5">Rs. {props.cartItem.price}</span>
                                    </div>

                                    <h6 className="text-muted">{props.cartItem.size}</h6>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-outline-secondary" id={`minus ${props.cartItem.pro_id}`} onClick={changeQuantity}>
                                            {props.cartItem.quantity === 1 ? <i className="bi bi-trash" id={`minus ${props.cartItem.pro_id}`}></i> : <i className="bi bi-dash" id={`minus ${props.cartItem.pro_id}`}></i>}
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary disabled text-primary fw-bold">
                                            {props.cartItem.quantity}
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary" id={`plus ${props.cartItem.pro_id}`} onClick={changeQuantity}>
                                            <i className="bi bi-plus-lg" id={`plus ${props.cartItem.pro_id}`}></i>
                                        </button>
                                    </div>
                                    <div className="mt-1">
                                        <span className="fw-bold text-primary"
                                        >Your Customization</span
                                        >
                                        <div className="overflow-auto toppings-container">
                                            <table className="table table-sm table-secondary text-center">
                                                {
                                                    (props.cartItem.tops.length > 0) && (props.cartItem.tops.map((i, e) => (
                                                        <tbody>
                                                            <tr key={e}>
                                                                <td>{i}</td>
                                                                <td className="ps-5"><i className="bi bi-x-circle"></i></td>
                                                            </tr>
                                                        </tbody>)
                                                    )
                                                    )
                                                }
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }

            {
                (props.cartItem.pro_id.includes("p3")) && (
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${props.id_no}`}
                                aria-expanded="false"
                                aria-controls={props.id_no}
                            >
                                <h5>Pepsi</h5>
                            </button>
                        </h2>
                        <div
                            id={props.id_no}
                            className="accordion-collapse collapse"
                        >
                            <div className="accordion-body d-flex">
                                <div>
                                    <img
                                        src="images/pepsi.webp"
                                        alt=""
                                        className="img-fluid rounded-3"
                                        width="150px"
                                    />
                                </div>
                                <div className="ps-4 flex-grow-1">
                                    <div className="d-flex justify-content-between">
                                        <h5>Pepsi</h5>
                                        <span className="fw-bold d-block text-primary fs-5">Rs 75</span>
                                    </div>
                                    <h6 className="text-muted">1 Liter</h6>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-outline-secondary" id={`minus ${props.cartItem.pro_id}`} onClick={changeQuantity}>
                                            {props.cartItem.quantity === 1 ? <i className="bi bi-trash" id={`minus ${props.cartItem.pro_id}`}></i> : <i className="bi bi-dash" id={`minus ${props.cartItem.pro_id}`}></i>}
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary disabled text-primary fw-bold">
                                            {props.cartItem.quantity}
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary" id={`plus ${props.cartItem.pro_id}`} onClick={changeQuantity}>
                                            <i className="bi bi-plus-lg" id={`plus ${props.cartItem.pro_id}`}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )
            }
            {
                (props.cartItem.pro_id.includes("p2")) && (
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${props.id_no}`}
                                aria-expanded="false"
                                aria-controls={props.id_no}
                            >
                                <h5>{props.cartItem.pro_name}</h5>
                            </button>
                        </h2>
                        <div
                            id={props.id_no}
                            className="accordion-collapse collapse"
                        >
                            <div className="accordion-body d-flex">
                                <div>
                                    <img
                                        src={getImg()}
                                        alt=""
                                        className="img-fluid rounded-3"
                                        width="150px"
                                    />
                                </div>
                                <div className="ps-4 flex-grow-1">
                                    <div className="d-flex justify-content-between">
                                        <h5>{props.cartItem.pro_name}</h5>
                                        <span className="fw-bold d-block text-primary fs-5">Rs {props.cartItem.price}</span>
                                    </div>
                                    <h6 className="text-muted">h</h6>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-outline-secondary" id={`minus ${props.cartItem.pro_id}`} onClick={changeQuantity}>
                                            {props.cartItem.quantity === 1 ? <i className="bi bi-trash" id={`minus ${props.cartItem.pro_id}`}></i> : <i className="bi bi-dash" id={`minus ${props.cartItem.pro_id}`}></i>}
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary disabled text-primary fw-bold">
                                            {props.cartItem.quantity}
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary" id={`plus ${props.cartItem.pro_id}`} onClick={changeQuantity}>
                                            <i className="bi bi-plus-lg" id={`plus ${props.cartItem.pro_id}`}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </>
    )
}

export default CartCardItem