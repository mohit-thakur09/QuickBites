import React, { useContext } from 'react'
import { Cart } from './context';
import { useNavigate } from 'react-router-dom'

const ItemCard = (props) => {
    const navigate = useNavigate();
    let cartVal = useContext(Cart);

    let itemDetails = (e) => {

        if (props.data.pro_id.includes('p1')) {
            navigate(`${props.data.pro_id}`, { state: { ItemData: props.data } });
        }
        else if (props.data.pro_id.includes('p2')) {
            props.setAdd();


            // console.log(e.target);
            // console.log("cart val: ", cartVal.cartData);
            let id = e.target.id;
            let drinkIndex = cartVal.cartData.findIndex(i => i.pro_id === id);
            if (drinkIndex >= 0) {
                console.log("drink already present at index: ", drinkIndex);
                cartVal.cartData[drinkIndex].quantity += 1
                console.log(cartVal.cartData[drinkIndex])
            } else {
                // cartValue.setCartData(allCartData);
                cartVal.setCartData([...cartVal.cartData, props.data]);
                console.log("fresh drink added");
            }
            // let { pro_id, pro_name, item_img_src, price, quantity } = details;
            // let allCartData = [...cartValue.cartData, { pro_id, pro_name, item_img_src, price, quantity, size: pizzaSize, tops: toppings }];

            // let pizzaIndex = cartValue.cartData.findIndex(i => i.pro_id === details.pro_id);
            // if (pizzaIndex >= 0) {
            //     console.log("pizza already present at index: ", pizzaIndex);
            //     cartValue.cartData[pizzaIndex].quantity += 1
            //     console.log(cartValue.cartData[pizzaIndex])
            // } else {
            //     cartValue.setCartData(allCartData);
            //     console.log("fresh pizza added");
            // }

        }
    }

    return (
        <>
            {/* <div className='card text-dark m-3 topPizzaPage'>
                <div className=' rounded'>
                    <img src={props.data.item_img_src} alt={props.data.pro_id} className="card-img-top img-fluid px-5" />
                </div>
                <div className='card-footer'>
                    <h3 className='card-title'>{props.data.pro_name}</h3>
                    <div className="card-sub-title text-muted mb-2 fw-bold">Price: {props.data.price} </div>
                </div>
                <button className='btn btn-pill bg-success text-light m-2' id={props.data.pro_id} onClick={itemDetails}>
                    Add to Cart
                </button> */}

            <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-6 py-5 px-4 d-flex justify-content-center align-items-center "
            >
                <div
                    className="menu-card p-2 text-center yellow-gradient-right rounded-3"
                >
                    <div className="menu-card-img w-75 m-auto">
                        <img src={props.data.item_img_src} alt={props.data.pro_id}
                            className="img-fluid rounded-3"
                        />
                    </div>
                    <h4 className="menu-item">{props.data.pro_name}</h4>
                    <div className="content">
                        <p className='item-desc'>
                            {props.data.discription}
                        </p>
                        <div>
                            <button className="btn btn-success w-100 fw-bold" id={props.data.pro_id} onClick={itemDetails}>
                                <span className="float-start" >Add to cart</span>
                                <span className="float-end">Rs. {props.data.price}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
        </div > */}
        </>
    )
}

export default ItemCard