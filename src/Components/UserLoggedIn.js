import React, { useContext, useEffect, useState } from 'react'
import final from "../images/bgfinal.png";
import profile from "../images/profile.png"
import { useNavigate } from 'react-router-dom';
import { Cart } from './context';

const UserLoggedIn = (props) => {
    let conextData = useContext(Cart);
    let [uDet, setUDets] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        setUDets(JSON.parse(window.localStorage[props.hero]));
    }, [props.hero])

    let handleChange = () => {
        let uData = JSON.parse(window.localStorage[props.hero])
        uData.status = 'Logout';
        window.localStorage.setItem(props.hero, JSON.stringify(uData))
        // eslint-disable-next-line no-undef
        Swal.fire({
            icon: 'success',
            title: 'Logout Successfully. . . ',
            text: "You'll Navigate to 'Login' page in 3 Sec.",
        })
        setTimeout(() => {
            conextData.setUserName('');
            conextData.setuserCart([]);
            navigate('/');
        }, 3000);

    }
    return (
        <>
            {/* <div className="card bg-dark text-light rounded border border-3">
                <div className='row card-title'>
                    <div className='col-lg-3'>
                        <img className='img img-fluid rounded-circle m-3' src={avtr} alt='avtar'></img>
                    </div>
                    <div className='col-lg-9 mt-4'>
                        <h5 className='ms-2'>User Name : <span className='text-info'>{props.hero}</span></h5>
                        <h5 className='mt-2 ms-2'>User Number : <span className='text-info'>{uDet.number}</span></h5>
                    </div>
                </div>
                <button onClick={handleChange} className='btn btn-danger m-3'>LogOut</button>
            </div> */}
            <div
                className="container d-flex justify-content-center align-items-center"
                style={{ margin: "100px auto" }}
            >
                <div className="row border rounded-4 bg-white shadow box-area">
                    <div
                        className="col-sm-6 d-flex justify-content-center align-items-center flex-column left-box p-2"
                    >
                        <div className="featured-image">
                            <img src={final} alt='' className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div
                        className="col-sm-6 d-flex justify-content-center align-items-center px-4 p-2"
                    >
                        <div className="row align-items-center">
                            <div className="header-text mb-4 text-center">
                                <h2 className="quickbites-logo"><u>QuickBites</u></h2>
                            </div>

                            <div className="mt-2 fs-6 text-center">
                                <img src={profile} alt="" width="150px" />
                                <div className="sub-heading mt-2 fs-4">
                                    <span className='text-warning'> User Name: </span> {props.hero}
                                </div>
                                <div className="sub-heading mt-2 fs-4">
                                    <span className='text-warning'>No.:</span> {uDet.number}
                                </div>
                                <div className='d-grid mt-3'>
                                    <button onClick={handleChange} className='btn btn-danger fw-bold'>Logout</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLoggedIn