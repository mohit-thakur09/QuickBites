import React from 'react'
import "./styling/footer.css";

const Footer = () => {
    return (
        // <div className='container-fluid footer p-4 text-light'>
        //     <footer className='container '>
        //         <div className=' row'>
        //             <div className='col'>
        //                 <h2>QuickBites</h2>
        //             </div>
        //         </div>
        //         <hr></hr>

        //         <div className='row m-5 '>
        //             <div className='col'>
        //                 <p className='fw-bold'>About Us!</p>
        //                 <ul className="about-list">
        //                     <li className="about-item-one">Who We Are?</li>
        //                     <li className="about-item-two">Work With Us.</li>
        //                     <li className="about-item-three">Devlopers</li>
        //                 </ul>
        //             </div>
        //             <div className='col'>
        //                 <p className='fw-bold'> Services</p>
        //                 <ul className="about-list">
        //                     <li className="about-item-one">Delivery</li>
        //                     <li className="about-item-two">HotSpot</li>
        //                     <li className="about-item-three">Magic Potions</li>
        //                 </ul>
        //             </div>
        //             <div className='col'>
        //                 <p className='fw-bold'>Learn More!</p>
        //                 <ul className="about-list">
        //                     <li className="about-item-one">Privacy</li>
        //                     <li className="about-item-two">Security</li>
        //                     <li className="about-item-three">Terms</li>
        //                 </ul>
        //             </div>
        //             <div className='col'>
        //                 <p className='fw-bold'>Mail Us!</p>
        //                 <div className='search-loc'>
        //                     <input type='search' placeholder='Your Delivery Location?' className='p-2 pe-5 text-start rounded border border-warning border-2'>
        //                     </input>
        //                     <button type="button" className="p-2 px-3 mb-1 btn btn-warning border border-warning border-2">Find Out!</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <hr></hr>
        //         <div className='row'>
        //             <div className='col'>
        //                 <h5>All Rights Reserved &copy; quickBites FoodWorks Ltd.</h5>
        //             </div>
        //             <div className='col'>
        //                 <div className='text-end pe-5'>
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-facebook m-2" viewBox="0 0 16 16">
        //                         <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        //                     </svg>

        //                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-instagram m-2" viewBox="0 0 16 16">
        //                         <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        //                     </svg>

        //                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telegram m-2" viewBox="0 0 16 16">
        //                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
        //                     </svg>
        //                 </div>
        //             </div>
        //         </div>
        //     </footer >
        // </div>
        <>

            <footer className="mt-5 bg-grey quickbites-footer">
                <div className="px-3">
                    <div
                        className="d-flex justify-content-between border-bottom border-1 border-secondary pb-2"
                    >
                        <div className="quickbites-logo fs-2">QuickBites</div>
                        <div className="d-flex">
                            <div><i className="bi bi-envelope fs-2 me-4"></i></div>
                            <div><i className="bi bi-facebook fs-2 me-4"></i></div>
                            <div><i className="bi bi-instagram fs-2"></i></div>
                        </div>
                    </div>
                    <div
                        className="row justify-content-around py-3 border-bottom order-1 border-secondary"
                    >
                        <div
                            className="col-sm-4 d-flex justify-content-center align-items-center"
                        >
                            <div>
                                <h2>Abous Us!</h2>
                                <p>Who we are?</p>
                                <p>Work with us</p>
                                <p>Meet our Developers</p>
                            </div>
                        </div>
                        <div
                            className="col-sm-4 d-flex justify-content-center align-items-center"
                        >
                            <div>
                                <h2>Services</h2>
                                <p>Delivery</p>
                                <p>Hotspot</p>
                                <p>Magic Potions</p>
                            </div>
                        </div>
                        <div
                            className="col-sm-4 d-flex justify-content-center align-items-center"
                        >
                            <div>
                                <h2>Learn more</h2>
                                <p>Privacy & security</p>
                                <p>Terms & conditions</p>
                                <p>Help</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center fs-5 mt-2">
                        All rights reserved &copy; QuickBites Foodworks Ltd.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer