import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import reg from "../images/registrationbanner.png";
import "./styling/register.css";

const Register = () => {
    let navigate = useNavigate();
    let [userDetails, setUserDetails] = useState({ uname: '', number: '', pwd: '', repwd: '' });

    let handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (userDetails.pwd !== userDetails.repwd) {
            let err = document.getElementById('error-msg');
            err.style.color = 'crimson';
            err.innerText = 'Password & Re-Password Does not matched! Try Again.'
        } else {
            // eslint-disable-next-line no-undef
            Swal.fire({
                icon: 'success',
                title: 'Registerd Successfully. . . ',
                text: "You'll Navigate to 'Login' page in 3 Sec.",
            })
            userDetails['status'] = 'logout';
            window.localStorage.setItem(userDetails.uname, JSON.stringify(userDetails));
            setTimeout(() => {
                navigate('/login');
            }, 4000)
        }
    }
    return (
        <>
            {/* 
            <form onSubmit={handleSubmit}>
                <div className="my-4">
                    <h2 className="text-start fw-bold">Register!</h2>
                </div>

                <div className="form-outline mb-3">
                    <input type="text" required id="userEmail" className="form-control form-control-lg"
                        name='uname' value={userDetails.uname} onChange={handleChange} placeholder="Enter UserName" />
                    <label className="form-label" htmlFor="userEmail">User Name</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="text" required id="mob" className="form-control form-control-lg"
                        name='number' value={userDetails.number} onChange={handleChange} placeholder="Enter Mobile Number" />
                    <label className="form-label" htmlFor="mob">Enter Mobile Number</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="password" required id="pwd" className="form-control form-control-lg"
                        name='pwd' value={userDetails.pwd} onChange={handleChange} placeholder="Enter password" />
                    <label className="form-label" htmlFor="pwd">Enter Password</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="password" required id="re-pwd" className="form-control form-control-lg"
                        name='repwd' value={userDetails.repwd} onChange={handleChange} placeholder="Re-Enter password" />
                    <label className="form-label" htmlFor="re-pwd">Re-Enter Password</label>
                </div>

                <p className='text-center fw-bold ' id='error-msg'></p>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg"
                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                        Register
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                        Already have an account!
                        <a href="/login" className="link-Success">
                            Login
                        </a>
                    </p>
                </div>
            </form> 
            */}
            <div className="container d-flex justify-content-center align-items-center register-container">

                <div className="row border rounded-4 p-3 bg-white shadow box-area flex-md-row flex-column-reverse">

                    <div className="col-md-6 d-flex justify-content-center align-items-center p-2 px-4">
                        <form onSubmit={handleSubmit}>
                            <div className="row align-items-center">
                                <div className="header-text mb-4">
                                    <h2 className="sub-heading">Hello!</h2>
                                    <p>Try out our cheeselious pizza.</p>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Username"
                                        name='uname' value={userDetails.uname} onChange={handleChange} required />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control form-control-lg bg-light fs-6" placeholder="Contact"
                                        name='number' value={userDetails.number} onChange={handleChange} required />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password"
                                        name='pwd' value={userDetails.pwd} onChange={handleChange} required />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Re-enter Password"
                                        name='repwd' value={userDetails.repwd} onChange={handleChange} required />
                                </div>
                                <span id='error-msg'></span>
                                <div className="input-group mb-3">
                                    <button className="btn btn-lg btn-primary w-100 fs-6" type='submit'>Register</button>
                                </div>
                                <div className="row">
                                    <small className="fw-bold">Already have an account? <a href="/login">Login</a></small>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box p-2">
                        <div className="featured-image">
                            <img src={reg} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Register