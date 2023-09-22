import React, { useContext, useState } from 'react'
import { Cart } from './context'
import { useNavigate } from 'react-router-dom';
import log from '../images/cheesepullpizza.jpg'

const Logging = (props) => {
    let loginDetails = useContext(Cart);
    let navigate = useNavigate();
    let [userLogin, setUserLogin] = useState({ uname: '', pwd: '' });

    let handlechange = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        if (window.localStorage[userLogin.uname]) {
            let userdata = JSON.parse(window.localStorage[userLogin.uname]);
            if (userdata && userdata.pwd === userLogin.pwd) {
                loginDetails.setUserName(userLogin.uname);
                window.localStorage.setItem(userLogin.uname, JSON.stringify({
                    ...userdata,
                    status: 'Login'
                }))
                // eslint-disable-next-line no-undef
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully. . . ',
                    text: "You'll Navigate to 'Home' page in 3 Sec.",
                })
                setTimeout(() => {
                    navigate('/');
                }, 4000)
            }
            else {
                // eslint-disable-next-line no-undef
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed! ',
                    text: "Wrong Password! Try Again.",
                })

            }
        } else {
            // eslint-disable-next-line no-undef
            Swal.fire({
                icon: 'error',
                title: 'Login Failed! ',
                text: "User Not Found! Try Again.",
            })
        }

    }

    return (
        // <form onSubmit={handleSubmit}>
        //     <div className="my-4">
        //         <h2 className="text-start fw-bold">Login</h2>
        //     </div>

        //     {/* <!-- Email input --> */}
        //     <div className="form-outline mb-4">
        //         <input type="text" id="uname" placeholder="Enter User Name" className="form-control form-control-lg"
        //             name='uname' required value={userLogin.uname} onChange={handlechange} />
        //         <label className="form-label" htmlFor="uname">Enter User Name</label>
        //     </div>

        //     {/* <!-- Password input --> */}
        //     <div className="form-outline mb-3">
        //         <input type="password" id="pwd" className="form-control form-control-lg" onChange={handlechange}
        //             name='pwd' required value={userLogin.pwd} placeholder="Enter password" />
        //         <label className="form-label" htmlFor="pwd">Password</label>
        //     </div>

        //     <div className="d-flex justify-content-between align-items-center">
        //         {/* <!-- Checkbox --> */}
        //         <div className="form-check mb-0">
        //             <input className="form-check-input me-2" type="checkbox" value="" id="chk-rmb" />
        //             <label className="form-check-label" htmlFor="chk-rmb">
        //                 Remember me
        //             </label>
        //         </div>
        //         <a href="#!" className="text-light">Forgot password?</a>
        //     </div>

        //     <div className="text-center text-lg-start mt-4 pt-2">
        //         <button type="submit" className="btn btn-primary btn-lg"
        //             style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
        //             Login
        //         </button>
        //         <p className="small fw-bold mt-2 pt-1 mb-0">
        //             Don't have an account?
        //             <a href="/login#register" className="link-danger">
        //                 Register
        //             </a>
        //         </p>
        //     </div>

        // </form>

        <div className="container d-flex justify-content-center align-items-center login-container">

            <div className="row border rounded-4 p-3 bg-white shadow box-area flex-md-row flex-column-reverse">

                <div className="col-md-6 d-flex justify-content-center align-items-center p-2 px-4">
                    <form onSubmit={handleSubmit}>
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2 className="sub-heading">Hello, Again!</h2>
                                <p>We are happy to have you back.</p>
                            </div>

                            <div className="input-group mb-3">
                                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Username"
                                    name='uname' required value={userLogin.uname} onChange={handlechange} />
                            </div>
                            <div className="input-group mb-1">
                                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password"
                                    name='pwd' required value={userLogin.pwd} onChange={handlechange} />
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                                </div>
                                <div className="forgot">
                                    <small><a href="/">Forgot Password?</a></small>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-lg btn-primary w-100 fs-6" type='submit'>Login</button>
                            </div>
                            <div className="row">
                                <small className="fw-bold">Don't have account? <a href="/login#register" className='link-danger'>Register</a></small>
                            </div>
                        </div>

                    </form>
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box p-2">
                    <div className="featured-image">
                        <img src={log} alt="" className="img-fluid rounded-4" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Logging