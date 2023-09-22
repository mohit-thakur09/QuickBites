import React, { useEffect, useState } from 'react'
import carouselOne from "../images/carousel-img-1.jpg";
import carouselTwo from "../images/carousel-img-2.jpg";
import carouselThree from "../images/carousel-img-3.jpg";
import cardImgOne from "../images/transparentpizza.png";
import cardImgTwo from "../images/fries.png";
import cardImgThree from "../images/drinks.png";
import loc from "../images/loc.png";
import './styling/Home.css'

const Home = () => {
    let [msg, setMsg] = useState('Foodie Delicious...');
    let updateLocation = async (long, lati) => {
        let usr_loc = (d) => {
            return d.json();
        }

        try {
            let data = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lati}&lon=${long}&appid=f63f0ff3bfdba021cdb5dae198676e5b`);

            let json_loc = await usr_loc(data);
            // console.log(document.getElementsByClassName("user-loc").innerText);
            setMsg(`${json_loc[0].name}, (${json_loc[0].state[0]}.${json_loc[0].state[json_loc[0].state.lastIndexOf(" ") + 1]})`)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        let loc = window.navigator.geolocation;

        let getLoc = (pos) => {
            let long = pos.coords.longitude;
            let lati = pos.coords.latitude;
            updateLocation(long, lati);
        }
        let getError = (locErr) => {
            console.log(locErr)
        }

        loc.getCurrentPosition(getLoc, getError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 10000
        })

    })

    useEffect(() => {
        let counting_statistic = (enteries) => {
            // console.log(enteries);
            enteries.forEach((enter, i) => {
                if (enter.isIntersecting) {
                    enter.target.innerText = 0;
                    let count = Number(enter.target.innerText);
                    let id = setInterval(() => {
                        count += 1;
                        enter.target.innerText = count;
                        if (i === 0 && count === 50) {
                            clearInterval(id);
                            observer.unobserve(enter.target);
                        }
                        if (i === 1 && count === 40) {
                            clearInterval(id);
                            observer.unobserve(enter.target);
                        }
                        if (i === 2 && count === 60) {
                            clearInterval(id);
                            observer.unobserve(enter.target);
                        }
                    }, 30);
                }
            });
        }

        let observer = new IntersectionObserver(counting_statistic);
        let div = document.querySelectorAll(".target-count");
        for (let x of div) {
            observer.observe(x);
        }
    }, [])

    return (
        // <div style={{ display: "absolute", height: "150%", marginTop: "75%" }}>

        //     <div style={{
        //         backgroundImage: `url(${bgi})`,
        //         backgroundRepeat: "no-repeat",
        //         backgroundSize: "cover",
        //         position: "absolute",
        //         top: "0",
        //         left: "0",
        //         zIndex: "0",
        //         height: "700px",
        //         width: "100%"
        //     }}>
        //         <div className='loc-div container text-light mt-5'>
        //             <div className='row'>
        //                 <div className='col'>
        //                     <h1 className='user-loc'>{msg}</h1>
        //                 </div>
        //             </div>
        //             <div className='row'>
        //                 <div className='col'>
        //                     <p className='description fs-5'>Order Pizza, Baverages & Fries . . .</p>
        //                 </div>
        //             </div>
        //             <div className='row'>
        //                 <div className='col'>
        //                     <div className='search-loc'>
        //                         <input type='search' placeholder='Your Delivery Location?' className='p-2 pe-5 text-start rounded border border-warning border-2'>
        //                         </input>
        //                         <button type="button" className="p-2 px-3 mb-1 btn btn-warning border border-warning border-2">Find Out!</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>


        //         <div className='row container-fluid mid-features bg-dark text-light mb-5 text-center'>
        //             <div className='col d-flex flex-column'>
        //                 <div>
        //                     <img src={min_order} className="pb-3" alt="min_order" width="115" height="190" />
        //                 </div>
        //                 <h5>No Minimum Order</h5>
        //                 <div className='counting-statistics text-warning'>
        //                     <h2>+<span className='target-count'></span></h2>
        //                 </div>
        //                 <p className='w-50 pt-2 mx-auto'>Order in for yourself or for the group, with no restrictions on order value</p>
        //             </div>
        //             <div className='col'>
        //                 <div>
        //                     <img src={fs_del} className=" pb-3" alt="fs_delivery" width="115" height="190" />
        //                 </div>
        //                 <h5>Lightning-Fast Delivery</h5>
        //                 <div className='counting-statistics text-warning'>
        //                     <h2>+<span className='target-count'></span></h2>
        //                 </div>
        //                 <p className='w-50 pt-2 mx-auto'>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
        //             </div>
        //             <div className='col   '>
        //                 <div>
        //                     <img src={live_order} className="pb-3" alt="live_order" width="115" height="190" />
        //                 </div>
        //                 <h5>Live Order Tracking</h5>
        //                 <div className='counting-statistics text-warning'>
        //                     <h2>+<span className='target-count'></span></h2>
        //                 </div>
        //                 <p className='pt-2 w-50 mx-auto'>Know where your order is at all times, from the restaurant to your doorstep</p>
        //             </div>
        //         </div>

        //     </div>

        // </div>

        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={carouselOne}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="sub-heading">Irresistible pizza</h1>
                            <p className="fs-5 fw-bold">
                                Pizza: the universally loved, customizable, and delicious slice
                                of perfection.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={carouselTwo}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="sub-heading">Flavorful sides</h1>
                            <p className="fs-5 fw-bold">
                                Side dishes: where culinary creativity complements the main
                                event.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={carouselThree}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="sub-heading">Sweet endings</h1>
                            <p className="fs-5 fw-bold">
                                Desserts: a sweet conclusion to any meal, bringing joy in every
                                bite.
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row p-4 mt-5 shadow bg-diagonal rounded-3 loc-container">
                <div className="col-sm-6 text-center">
                    <img
                        src={loc}
                        alt=""
                        width="250px"
                        className="loc-img"
                    />
                </div>
                <div className="col-sm-6 d-flex justify-content-center align-items-center">
                    <div>
                        <h2 className="mt-3 sub-heading">{msg}</h2>
                        <p>Order Pizza, Side dishes & Bevarages...</p>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Delivery Location?"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                            />
                            <button
                                className="btn btn-warning fw-bold"
                                type="button"
                                id="button-addon2"
                            >
                                Find Out!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row px-3 py-5 m-auto mt-5 bg-grey">
                    <div
                        className="col-md-4 d-flex align-items-center justify-content-center"
                    >
                        <h3 className="fw-bold">What we have for you?</h3>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md p-3">
                                <div className="card counting-cards">
                                    <div className="card-body text-center">
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            We serve
                                        </h6>
                                        <h1 className="card-title sub-heading">
                                            <span className='target-count'> 50 </span>+
                                        </h1>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            varieties of delicious Pizzas.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md p-3">
                                <div className="card counting-cards">
                                    <div className="card-body text-center">
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            We have
                                        </h6>
                                        <h1 className="card-title sub-heading">
                                            <span className='target-count'> 30 </span>+
                                        </h1>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            amazing side dishes.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md p-3">
                                <div className="card counting-cards">
                                    <div className="card-body text-center">
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Get</h6>
                                        <h1 className="card-title sub-heading">
                                            <span className='target-count'> 60 </span>+
                                        </h1>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            refreshing moktails and drinks.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4 rounded-3">
                <div className="ads-container yellow-gradient-right rounded-3 my-4 p-2">
                    <div>
                        <img
                            src={cardImgOne}
                            alt=""
                            className="img-fluid"
                            width="400px"
                        />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <div>
                            <h2 className="sub-heading">Craving for Pizza?</h2>
                            <p className="fs-5">
                                Try our cheeselicious pizza with your favourite toppings.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="fries-ads-container yellow-gradient-left rounded-3 my-4 p-2"
                >
                    <div className="d-flex align-items-center justify-content-center">
                        <div>
                            <h2 className="sub-heading">Cooking gone wrong?</h2>
                            <p className="fs-5">
                                Give yourself a break and try out our amazing side dishes.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            src={cardImgTwo}
                            alt=""
                            className="img-fluid"
                            width="350px"
                        />
                    </div>
                </div>
                <div className="ads-container yellow-gradient-right rounded-3 my-4 p-2">
                    <div>
                        <img
                            src={cardImgThree}
                            alt=""
                            className="img-fluid"
                            width="400px"
                        />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <div>
                            <h2 className="sub-heading">Want something refreshing?</h2>
                            <p className="fs-5">
                                Try out amazing variety of fresh and chilled bevarages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
