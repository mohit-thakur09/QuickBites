import React, { useEffect, useState } from 'react'
import './styling/Login.css';
import Logging from './Logging';
import Register from './Register';
import { useLocation } from 'react-router-dom';
import UserLoggedIn from './UserLoggedIn';

const Login = (props) => {
    let loc = useLocation();
    let loc_url = loc.hash;
    let [compo, setCompo] = useState(<Logging />);

    useEffect(() => {
        if (loc_url) {
            setCompo(<Register />);
        } else {
            setCompo(<Logging />);
        }
    }, [loc_url])

    return (
        // <div style={{ display: "absolute", height: "150%", marginTop: "44%" }}>
        //     <section className="vh-100" style={{
        //         backgroundImage: `url(${log})`,
        //         backgroundRepeat: "no-repeat",
        //         backgroundSize: "cover",
        //         position: "absolute",
        //         top: "0",
        //         left: "0",
        //         zIndex: "0",
        //         height: "700px",
        //         width: "100%"
        //     }}>
        //         <div className="container-fluid h-custom text-light">
        //             <div className="row d-flex justify-content-center align-items-center h-100">
        //                 <div className="col-md-9 col-lg-6 col-xl-5">
        //                 </div>

        //                 <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 pt-5 mt-5">
        //                     {
        //                         props.isLogin
        //                             ? < UserLoggedIn hero={props.isLogin} />
        //                             : compo
        //                     }
        //                 </div>
        //             </div>
        //         </div>

        //     </section>
        // </div>
        <>
            {
                props.isLogin
                    ? < UserLoggedIn hero={props.isLogin} />
                    : compo
            }
        </>

    )
}

export default Login