import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import brand_logo from "../images/Pizza-icon.png";
import { Cart } from './context';

const Navbar = () => {
    let userDetails = useContext(Cart);

    return (
        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-dark text-light">
        //         <div className="container-fluid">
        //             <NavLink className="nav-brand navbar-brand w-75 text-start" to="/">
        //                 <img src={img} className="img-fluid pe-2" alt="brand-pizza" width="34" height="34" />
        //                 QuickBites
        //             </NavLink>

        //             <button className="navbar-toggler d-lg-none"
        //                 type="button" data-bs-toggle="collapse"
        //                 data-bs-target="#collapsibleNavId"
        //                 aria-controls="collapsibleNavId"
        //                 aria-expanded="false"
        //                 aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>

        //             <div className="collapse navbar-collapse " id="collapsibleNavId">
        //                 <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        //                     <li className="nav-item h4">
        //                         <NavLink className="nav-link px-4" to="/">Home</NavLink>
        //                     </li>
        //                     <li className="nav-item h4">
        //                         <NavLink className="nav-link px-4" to="/products">Products</NavLink>
        //                     </li>
        //                     <li className="nav-item h4">
        //                         <NavLink className="nav-link px-4" to="/contect">Contect</NavLink>
        //                     </li>
        //                     <li className="nav-item login-ref h5">
        //                         <NavLink className="nav-link" to="/login"
        //                             id={(userDetails.userName === '') ? 'loggedOut' : 'loggedIn'}>
        //                             {(userDetails.userName === '') ? `User Login` : `Hello ${userDetails.userName} `}
        //                         </NavLink>
        //                     </li>
        //                 </ul>

        //             </div>
        //         </div>
        //     </nav>
        // </div>


        <nav className="navbar navbar-expand-lg quickbites-nav">
            <div className="container-fluid">
                <img src={brand_logo} alt="" width="50px" />
                <a className="navbar-brand fs-3 ms-2" href="/">QuickBites</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 sub-heading">
                        <li className="nav-item me-4">
                            <NavLink
                                className="nav-link active fs-5 sub-heading"
                                aria-current="page"
                                to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink
                                className="nav-link active fs-5 sub-heading"
                                aria-current="page"
                                to="/products"
                            >Menu</NavLink
                            >
                        </li>
                        <li className="nav-item me-4">
                            <NavLink
                                className="nav-link active fs-5 sub-heading"
                                aria-current="page"
                                to="/contect"
                            >Contact Us</NavLink
                            >
                        </li>
                        <li className="nav-item me-4 sub-heading">
                            <NavLink
                                className="nav-link active fs-5"
                                aria-current="page"
                                to="/login"
                                id={(userDetails.userName === '') ? 'loggedOut' : 'loggedIn'}>
                                {(userDetails.userName === '') ? `User Login` : `Hello ${userDetails.userName} `}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
