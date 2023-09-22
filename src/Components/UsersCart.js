import React, { useContext, useState } from 'react'
import { Cart } from './context'
import CartCardItem from './CartCardItem'
import "./styling/Cart.css";
import user from "../images/profile.png"
import emptyCart from "../images/emptyCart.png"


const UsersCart = () => {
    let cartVal = useContext(Cart);
    let [allCartData, setAllCartData] = useState(cartVal.cartData);
    let sum = 0;

    let delItem = (index) => {
        let newCartData = [...allCartData.slice(0, index), ...allCartData.slice(index + 1)];
        console.log("newc: ", newCartData);
        setAllCartData(newCartData);
        cartVal.setCartData(newCartData);
        console.log("allcd: ", allCartData);
    }

    return (
        <>
            {/* <div className='row text-dark cart-user-div'>
                <div className='col m-5'>
                    <h2>
                        Hello User!
                    </h2>
                </div>
            </div>
            {
                (cartVal.cartData.length > 0) ?
                    (<div className='cart-item py-2'>
                        {
                            cartVal.cartData.map((i, e) => {
                                return <CartCardItem key={e} cartItem={i} />
                            })
                        }
                        <div className='row w-50 cartDiv py-2 bg-light'>
                            {
                                cartVal.cartData.forEach((i) => {
                                    sum += i.price;
                                })
                            }
                            <h4>
                                Sub Total:
                                <p className='text-end h5'>
                                    Rs. {sum}
                                </p>
                            </h4>
                            <button className='btn-ord text-light btn btn-outline-success h4 mx-auto my-3 p-2'>Order Confirm</button>
                        </div>
                    </div >) : (<div className='row w-50 cartDiv py-2 bg-light mx-auto my-5'>
                        <h3 className='text-center'>Empty cart!</h3>
                        <h6 className='text-center'>Order Some Delicious Pizza, Baverages and SideDishes. . .!</h6>
                    </div>)
            } */}

            {/* {console.log(cartVal)} */}
            <main className="container">
                <div className="row p-4 yellow-gradient-right rounded-3">

                    <div className="col-lg-6 p-3 d-flex align-items-center justify-content-center" >
                        <div className="user-details-container rounded-3 w-100 p-4">
                            <div className="text-center">
                                <img
                                    src={user}
                                    alt=""
                                    className="img-fluid my-2"
                                    width="150px"
                                />
                                <h2>Hello UserName!</h2>
                                <table className="m-auto text-start">
                                    <tbody>
                                        <tr>
                                            <td><span className="fw-bold">Current Address: </span></td>
                                            <td className="ps-3">Indrapuri sector C Bhopal - 462023</td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-bold">Contact Number: </span></td>
                                            <td className="ps-3">9182993028</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="cart" className="col-lg-6 p-2">

                        {
                            allCartData.map((i, e) => {
                                return <div key={e} className="accordion accordion-flush">
                                    <CartCardItem id_no={e} cartItem={i} delItem={delItem} />
                                </div>
                            })
                        }
                        {/* <div className="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne"
                                    >
                                        <h5>Momo Mia Pizza</h5>
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    className="accordion-collapse collapse show"
                                >
                                    <div className="accordion-body d-flex">
                                        <div>
                                            <img
                                                src="images/momo.jpg"
                                                alt=""
                                                className="img-fluid rounded-3"
                                                width="150px"
                                            />
                                        </div>
                                        <div className="ps-4 flex-grow-1">
                                            <div className="d-flex justify-content-between">
                                                <h5>Momo Mia Pizza</h5>
                                                <span className="fw-bold d-block text-primary fs-5">Rs 225</span>
                                            </div>

                                            <h6 className="text-muted">Medium</h6>
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-outline-secondary">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary">
                                                    1
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary">
                                                    <i className="bi bi-plus-lg"></i>
                                                </button>
                                            </div>
                                            <div className="mt-1">
                                                <span className="fw-bold text-primary"
                                                >Your Customization</span
                                                >
                                                <div className="overflow-auto toppings-container">
                                                    <table className="table table-sm table-light text-center">
                                                        <tr>
                                                            <td>Jalapeno</td>
                                                            <td className="ps-5"><i className="bi bi-x-circle"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Black Olives</td>
                                                            <td className="ps-5"><i className="bi bi-x-circle"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Red Pepper</td>
                                                            <td className="ps-5"><i className="bi bi-x-circle"></i></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        <h5>Cheesy Fries</h5>
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseTwo"
                                    className="accordion-collapse collapse"
                                >
                                    <div className="accordion-body d-flex">
                                        <div>
                                            <img
                                                src="images/fries.png"
                                                alt=""
                                                className="img-fluid rounded-3"
                                                width="150px"
                                            />
                                        </div>
                                        <div className="ps-4 flex-grow-1">
                                            <div className="d-flex justify-content-between">
                                                <h5>Cheesy Fries</h5>
                                                <span className="fw-bold d-block text-primary fs-5">Rs 150</span>
                                            </div>
                                            <h6 className="text-muted">Regular</h6>
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-outline-secondary">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary">
                                                    1
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary">
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree"
                                    >
                                        <h5>Pepsi</h5>
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseThree"
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
                                                <button type="button" className="btn btn-outline-secondary">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary">
                                                    1
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary">
                                                    <i className="bi bi-plus-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> */}
                        {
                            allCartData.forEach((i) => {
                                sum += i.price;
                            })
                        }

                        {
                            allCartData.length > 0 ? (
                                <>
                                    <div className="my-3">
                                        <h5 className="d-inline">SubTotal</h5>
                                        <span className="float-end fw-bold fs-6">Rs. {sum}</span>
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-success fw-bold py-2">PLACE ORDER</button>
                                    </div>
                                </>
                            ) : (
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div>
                                        <img src={emptyCart} className='img-fluid' width="250px" alt='' />
                                        <h2 className='sub-heading text-center'>Empty Cart</h2>
                                    </div>
                                </div>
                            )
                        }

                    </div>

                </div>
            </main>

        </>
    )
}

export default UsersCart