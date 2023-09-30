import React from 'react'

const ProductsCard = (props) => {

    let navigateItem = (e) => {
        console.log(props.data.item_Name);
        // props.element(e.target.id, e.target.previousSibling.firstElementChild.innerText);
        props.element(props.data.id, props.data.item_Name);
    }

    return (
        <>
            {/* <div className='card text-dark m-3'>
                <div className=' rounded'>
                    <img src={props.data.pro_img_src} alt="id" className="card-img-top img-fluid px-5" />
                </div>
                <div className='card-footer'>
                    <h3 className='card-title'>{props.data.item_Name}</h3>
                    <div className="card-sub-title text-muted mb-2 fw-bold">italian food</div>
                </div>
                <button className='btn btn-pill bg-success text-light m-2' id={props.data.id} onClick={navigateItem}>
                    Order Now
                </button>
            </div> */}

            {
                props.alterKey % 2 === 0
                    ? (
                        <div className="row mt-5 menu-option-card-right p-4 rounded-3 w-75 m-auto ">
                            <div className="col-md-4 text-center">
                                <img src={props.data.pro_img_src} alt="" className="img-fluid rounded-3" width="300px" />
                            </div>
                            <div className="col-md-8 d-flex justify-content-center align-items-center">
                                <div className='mt-3'>
                                    <h4>{props.data.item_Name}: Savor a slice of heaven with every bite – it's pizza perfection!</h4>
                                    <button className="btn btn-primary mt-2 fw-bold" href="pizzamenu.html" id={props.data.id} onClick={navigateItem}>
                                        Try Our Pizzas Now!
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row mt-5 menu-option-card-left p-4 rounded-3 w-75 m-auto flex-md-row flex-column-reverse">
                            <div className="col-md-8 d-flex justify-content-center align-items-center">
                                <div className='mt-3'>
                                    <h4>{props.data.item_Name}: Complete Your Feast with Sides that Steal the Show!</h4>
                                    <button className="btn btn-primary mt-2 fw-bold" id={props.data.id} onClick={navigateItem}>
                                        Taste Our Sides Now!
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={props.data.pro_img_src} alt="" className="img-fluid rounded-3" width="300px" />
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default ProductsCard