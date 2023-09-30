import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./styling/PizzaStyle.css";
import './styling/AckCartModal.css';
import AckModal from './AckModal';
import { Cart } from './context';
import AckCartModal from './AckCartModal';

const ItemPizzaDetail = () => {
    let [Added, setAdded] = useState(false);

    let cartValue = useContext(Cart);
    let loc = useLocation();
    let details = loc.state.ItemData;

    let [toppings, setToppings] = useState([])
    let [pizzaSize, setPizzaSize] = useState("Regular");

    useEffect(() => {
        if (Added) {
            let modal = document.getElementById("modal");
            modal.classList.add("modal-show");
            setTimeout(() => {
                setAdded(false);
                modal.style.top = '-5%';
            }, 1500)
        }
    }, [Added]);

    let spaceIndex = details.pro_name.indexOf(" ");
    let removeTopping = (ref) => {

        let itemIndex = toppings.indexOf(ref);
        toppings.splice(itemIndex, 1);
        setToppings([...toppings]);
    }

    let getTopping = (e) => {
        if (toppings.includes(e.target.alt)) {
            // eslint-disable-next-line no-undef
            Swal.fire({
                icon: 'warning',
                title: `${e.target.alt} is already added!`,
                text: "You can add each topping for only once.",
            })
            return;
        }
        setToppings([...toppings, e.target.alt]);
    }

    let haddleSize = (e) => {
        setPizzaSize(e.target.value);
    }

    let getPizzaValue = (e) => {
        setAdded(true);
        let { pro_id, pro_name, item_img_src, price, quantity } = details;
        let allCartData = [...cartValue.cartData, { pro_id, pro_name, item_img_src, price, quantity, size: pizzaSize, tops: toppings }];

        let pizzaIndex = cartValue.cartData.findIndex(i => i.pro_id === details.pro_id);
        if (pizzaIndex >= 0) {
            console.log("pizza already present at index: ", pizzaIndex);
            cartValue.cartData[pizzaIndex].quantity += 1
            console.log(cartValue.cartData[pizzaIndex])
        } else {
            cartValue.setCartData(allCartData);
            console.log("fresh pizza added");
        }
    }
    return (
        <>

            {Added && <AckModal />}

            <main className="container">
                <div className="row my-5 p-4 rounded-4 yellow-gradient-left">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                            <img src={`../${details.item_img_src}`} className="img-fluid rounded-3" alt="" width="550px" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className='d-flex justify-content-between mt-2'>

                            <h2 className='sub-heading'>

                                {details.pro_name[0] + details.pro_name.slice(1, spaceIndex).toLowerCase() + " " + details.pro_name[spaceIndex + 1] + details.pro_name.slice(spaceIndex + 2).toLowerCase()}
                            </h2>
                            <span className='d-block fw-bold fs-5 text-success'>
                                Rs. {details.price} | Qty.: {details.quantity}
                            </span>
                        </div>
                        <p>
                            Epic combination of signature pan crust, delicious paneer momos topped with spicy Schezwan sauce,
                            Schezwan meatballs, onion, capsicum & 100% mozzarella.
                        </p>
                        <div className="row mt-4">
                            <div className="col-md-6 p-2">
                                <div className="dropdown d-grid">
                                    <button className="btn btn-light btn-lg dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Size
                                    </button>
                                    <ul className="dropdown-menu" onChange={haddleSize}>
                                        {
                                            details.size.map((i, n) => {
                                                return <li key={n} className="dropdown-item">{Object.keys(i)}<span className="float-end">{Object.values(i)}</span></li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="d-grid">
                                    <button className="btn btn-success btn-lg fw-bold" type="button" onClick={getPizzaValue}>Add to cart</button>
                                </div>
                            </div>
                        </div>

                        <div id="toppings" className="mt-4">
                            <h5>Add Toppings - Rs.35 each</h5>
                            <div className="row">
                                <div className="col">
                                    <div className='scroll-container border border-3 rounded-3 p-3'>
                                        {
                                            details.toppings.map((i, e) => {
                                                return <figure key={e}>
                                                    <div className="topsImg border border-2 border-warning rounded">
                                                        <img src={`../${Object.values(i)}`} alt={Object.keys(i)} onClick={getTopping} width="100px"
                                                            className="image-fluid rounded " />
                                                    </div>
                                                    <figcaption>{Object.keys(i)}</figcaption>
                                                </figure>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    toppings.length > 0 && (
                        <div id="showToppings" className="row">
                            <div className="col-12">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" colSpan="4" className="bg-secondary bg-gradient text-white">
                                                Your toppings
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody id='topTable'>
                                        {
                                            toppings.map((i, n) => {
                                                return <tr key={n}>
                                                    <th scope="row">{n + 1}</th>
                                                    <td className="newToppings">{i}</td>
                                                    <td> Rs.35 </td>
                                                    <td>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16" onClick={() => removeTopping(i)}>
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                        </svg>
                                                    </td>
                                                </tr>;
                                            }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
            <AckCartModal />
            </main >
        </>
    )
}

export default ItemPizzaDetail
