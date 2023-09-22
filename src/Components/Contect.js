import React from 'react'
import './styling/Contect.css';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import mohit from '../images/mohit.jpg';
import rupu from '../images/rupu.jpg';
import pizzu from '../images/pizzu2.png';
import pizzabackground from '../images/pizzabackground.jpg';

const Contect = () => {
    return (
        <>
            {/* <main className="container">
                <div id="map" className="section-spacer">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-info">Find us here...</h2>
                            <div className="mt-4 ms-4">
                                <h4 className="mb-3">Contact Address</h4>
                                <p>
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <span className="ms-2"
                                    >Plot No. 29, Ground Floor, Sector A, Indrapuri, Bhopal,
                                        Madhya Pradesh 462023</span
                                    >
                                </p>
                                <p>
                                    <i className="bi bi-truck"></i>
                                    <span className="ms-2">Place an order</span>
                                </p>
                                <p>
                                    <i className="bi bi-globe-americas"></i>
                                    <span className="ms-2">
                                        <a href="/" className="text-info">
                                            mypizza.co.in
                                        </a>
                                    </span>
                                </p>
                                <p>
                                    <i className="bi bi-telephone"></i>
                                    <span className="ms-2">1800-987-7783</span>
                                </p>
                                <p>
                                    <i className="bi bi-list-ul"></i>
                                    <span className="ms-2">Menu</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14663.075440095352!2d77.458185!3d23.2514967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42061fb738a7%3A0x839a8e3f3a71422d!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1691916909444!5m2!1sen!2sin"
                                width="500"
                                height="350"
                                style={{ border: 0 }}
                                loading="lazy"
                                className="rounded-3"
                                title='maps'
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div
                    id="feedbacks"
                    className="section-spacer border border-2 py-4 px-3 rounded-3"
                >
                    <h2 className="mb-5">Our Foodies...</h2>
                    <div className="carousel slide w-75 m-auto" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <img src={one} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="ms-5">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Consequatur repudiandae vitae quia eligendi praesentium
                                                libero officia nihil, necessitatibus, corrupti amet
                                                temporibus non voluptatem dolores assumenda placeat!
                                                Eveniet maxime ex consectetur esse exercitationem. Fuga
                                                sed adipisci quod praesentium?
                                            </p>

                                            <h3 className="mt-4">~Sam~</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <img src={two} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="ms-5">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Consequatur repudiandae vitae quia eligendi praesentium
                                                libero officia nihil, necessitatibus, corrupti amet
                                                temporibus non voluptatem dolores assumenda placeat!
                                                Eveniet maxime ex consectetur esse exercitationem. Fuga
                                                sed adipisci quod praesentium?
                                            </p>
                                            <h3 className="mt-4">~Sam~</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <img src={three} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="ms-5">
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Consequatur repudiandae vitae quia eligendi praesentium
                                                libero officia nihil, necessitatibus, corrupti amet
                                                temporibus non voluptatem dolores assumenda placeat!
                                                Eveniet maxime ex consectetur esse exercitationem. Fuga
                                                sed adipisci quod praesentium?
                                            </p>

                                            <h3 className="mt-4">~Sam~</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-spacer">
                    <div className="row">
                        <div className="col-md-6 p-2">
                            <div className="card text-light text-center" id="feedbackCard">
                                <div className="card-body py-5">
                                    <h3 className="card-title">Have any feedback or queries?</h3>
                                    <p className="card-text">
                                        We''d love to hear from you. Write to us at
                                        <a href="/" className="text-info">xyz@gmail.com</a>
                                    </p>
                                    <p>
                                        Try our delicious treats and Rescue hunger with our
                                        cheeselicious Pizza.
                                    </p>
                                    <img
                                        src={pizzu}
                                        alt=""
                                        className="rounded-circle"
                                        width="200px"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-2">
                            <h2>Get in touch with us...</h2>
                            <p>
                                We appreciate your trust and hope you want to leave us a positive
                                review, however, if you are not completely satisfied, we hope that
                                you will contact us directly to make things right for you.
                            </p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username">Name</label>
                                    <input type="text" id="username" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="useremail">Email</label>
                                    <input type="email" id="useremail" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="feedback">Query/Feedback</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div id="developersInfo" className="section-spacer p-4 rounded-2 ">
                    <h2>Meet Our Developers</h2>
                    <div className="d-flex align-items-center justify-content-center text-dark">
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src={mohit}
                                                className="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Mohit Thakur</h5>
                                                <p className="card-text">
                                                    This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a
                                                    little bit longer.
                                                </p>
                                                <div>
                                                    <span><i className="bi bi-linkedin"></i></span>
                                                    <span className="ms-4"><i className="bi bi-github"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src={rupu}
                                                className="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Rupal Gupta</h5>
                                                <p className="card-text">
                                                    This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a
                                                    little bit longer.
                                                </p>
                                                <div>
                                                    <span><i className="bi bi-linkedin"></i></span>
                                                    <span className="ms-4"><i className="bi bi-github"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="socialMedia" className="section-spacer">
                    <div className="row text-center">
                        <div className="col-sm-6 col-md-3">
                            <div className="socialMediaCards d-flex align-items-center justify-content-center">
                                <div>
                                    <span className="display-3"><i className="bi bi-envelope"></i></span>
                                    <p>
                                        For any queries, email us on <a href="/" className="text-info">xyz@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="socialMediaCards d-flex align-items-center justify-content-center">
                                <div>
                                    <span className="display-3"><i className="bi bi-facebook"></i></span>
                                    <p>Visit our page on Facebook</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="socialMediaCards d-flex align-items-center justify-content-center">
                                <div>
                                    <span className="display-3"><i className="bi bi-instagram"></i></span>
                                    <p>Visit our page on Instagram</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="socialMediaCards d-flex align-items-center justify-content-center">
                                <div>
                                    <span className="display-3"><i className="bi bi-twitter"></i></span>
                                    <p>Follow us on Twitter for the latest updates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main> */}

            <main>

                <div id="map" className="container mt-5 p-5 yellow-gradient-right rounded-3">
                    <div className="row">
                        <div className="col-md-6 fs-5">
                            <h2>Find us here...</h2>
                            <div className="mt-4 ms-4">
                                <h4 className="mb-3">Contact Address</h4>
                                <p>
                                    <i className="bi bi-geo-alt-fill text-primary"></i>
                                    <span className="ms-2"
                                    >Plot No. 29, Ground Floor, Sector A, Indrapuri, Bhopal,
                                        Madhya Pradesh 462023</span
                                    >
                                </p>
                                <p>
                                    <i className="bi bi-truck text-primary"></i>
                                    <span className="ms-2">Place an order</span>
                                </p>
                                <p>
                                    <i className="bi bi-globe-americas text-primary"></i>
                                    <span className="ms-2">
                                        <a href="/" className="text-primary"> quickbites.co.in </a>
                                    </span>
                                </p>
                                <p>
                                    <i className="bi bi-telephone text-primary"></i>
                                    <span className="ms-2">1800-987-7783</span>
                                </p>
                                <p>
                                    <i className="bi bi-list-ul text-primary"></i>
                                    <span className="ms-2">Menu</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14663.075440095352!2d77.458185!3d23.2514967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42061fb738a7%3A0x839a8e3f3a71422d!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1691916909444!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                loading="auto"
                                className="rounded-4"
                                title="maps"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div
                        className="row p-5 mt-5 rounded-3"
                        style={{ backgroundColor: "rgba(243, 243, 243, 0.956)" }}
                    >
                        <div className="col-md-4 p-2">
                            <div className="card text-center" style={{ backgroundColor: "#d1dccf" }}>
                                <div className="card-body">
                                    <h3 className="card-title">Have any feedback or queries?</h3>
                                    <p className="card-text">
                                        We'd love to hear from you. Write to us at
                                        <a href="/" className="text-primary"> quickbites@gmail.com</a>
                                    </p>
                                    <p>
                                        Try our delicious treats and Rescue hunger with our
                                        cheeselicious Pizza.
                                    </p>
                                    <img
                                        src={pizzu}
                                        alt=""
                                        className="img-fluid rounded-circle"
                                        width="150px"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 p-2 bg-white rounded-3">
                            <div id="feedbacks" className="rounded-3">
                                <h2 className="mb-3">Our Foodies...</h2>
                                <div className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active text-center bg-white">
                                            <img
                                                src={three}
                                                alt=""
                                                className="img-fluid rounded-3"
                                                width="150px"
                                            />
                                            <p className="mt-3 w-75 m-auto">
                                                From the very first bite, it's clear that this isn't your
                                                average pizza joint. The crust, that perfect balance between
                                                crispy and doughy, lays the foundation for a masterpiece.
                                                Toppings aren't just toppings here – they're carefully
                                                curated ingredients that harmonize in a way that feels
                                                almost symphonic.
                                            </p>
                                            <h3>~Sam~</h3>
                                        </div>
                                        <div className="carousel-item text-center bg-white">
                                            <img
                                                src={one}
                                                alt=""
                                                className="img-fluid rounded-3"
                                                width="150px"
                                            />
                                            <p className="mt-3 w-75 m-auto">
                                                The attention to detail is undeniable, with each dessert
                                                resembling a carefully sculpted masterpiece. But it's when
                                                you take that first bite that the real magic happens. And
                                                let's not forget the tiramisu – a delicate balance of
                                                coffee-infused richness that's nothing short of divine.
                                            </p>
                                            <h3>~Ana~</h3>
                                        </div>
                                        <div className="carousel-item text-center bg-white">
                                            <img
                                                src={two}
                                                alt=""
                                                className="img-fluid rounded-3"
                                                width="150px"
                                            />
                                            <p className="mt-3 w-75 m-auto">
                                                Calling this pizza 'delicious' is an understatement. It's a
                                                flavor explosion that takes your taste buds on a
                                                rollercoaster ride. The crust is the ideal balance of chewy
                                                and crispy, and the creative toppings showcase a culinary
                                                masterpiece and Side dishes that steal the show! The
                                                mozzarella sticks are golden perfection, and the sweet
                                                potato fries are the stuff of legends.
                                            </p>
                                            <h3>~Siri~</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className="row mt-5 p-5 img-fluid"
                    style={{ backgroundImage: `url(${pizzabackground})` }}
                >
                    <div
                        className="col-lg-6 col-sm-10 m-auto p-5 rounded-3"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.633)" }}
                    >
                        <div>
                            <h2>Get in touch with us...</h2>
                            <p>
                                We appreciate your trust and hope you want to leave us a positive
                                review, however, if you are not completely satisfied, we hope that
                                you will contact us directly to make things right for you.
                            </p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="fw-bold">Name</label>
                                    <input type="text" id="username" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="useremail" className="fw-bold">Email</label>
                                    <input type="email" id="useremail" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="feedback" className="fw-bold">Query/Feedback</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div
                    id="developersInfo"
                    className="container mt-5 p-5 rounded-3"
                    style={{ backgroundColor: "rgba(243, 243, 243, 0.956)" }}
                >
                    <h3>Meet our Developers...</h3>
                    <div className="row bg-white p-3 mt-5 rounded-3">
                        <div className="col-md-4 text-center p-2">
                            <img
                                src={mohit}
                                className="img-fluid rounded-3"
                                alt="..."
                            />
                        </div>
                        <div
                            className="col-md-8 d-flex justify-content-center align-items-center p-2"
                        >
                            <div>
                                <p>
                                    I fulfilled the role of a backend developer in this project,
                                    constructing the application utilizing the React framework for a
                                    seamless single-page experience. In addition, I seamlessly
                                    integrated external packages such as React Router, Swal, and the
                                    Intersection Observer API to provide a comprehensive range of
                                    functionalities. Throughout the development process, I adhered
                                    to React's best-practice methods, ensuring the application
                                    followed industry standards and delivered an exceptional and
                                    cohesive user experience.
                                </p>
                                <h5>~ Mohit Thakur</h5>
                                <div>
                                    <span><i className="bi bi-linkedin text-primary fs-2"></i></span>
                                    <span className="ms-2 fs-2"><i className="bi bi-github"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-white p-3 mt-5 rounded-3 flex-md-row flex-column-reverse">
                        <div
                            className="col-md-8 d-flex justify-content-center align-items-center p-2"
                        >
                            <div>
                                <p>
                                    I contributed to the project as a front-end developer,
                                    responsible for crafting the application's frontend using a
                                    blend of HTML, customized CSS, and Bootstrap framework. With a
                                    strong focus on responsive design and adherence to best
                                    practices, I precisely fashioned an engaging and user-friendly
                                    interface. My efforts aimed to not only enhance the visual
                                    appeal of the application but also to elevate the overall user
                                    experience.
                                </p>
                                <h5>~ Rupal Gupta</h5>
                                <div>
                                    <span><i className="bi bi-linkedin text-primary fs-2"></i></span>
                                    <span className="ms-2 fs-2"><i className="bi bi-github"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center p-2">
                            <img
                                src={rupu}
                                className="img-fluid rounded-3"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>

                <div id="socialMedia" className="m-5 yellow-gradient-right p-5">
                    <div className="row text-center">
                        <div className="col-sm-6 col-md-3 p-3">
                            <div
                                className="socialMediaCards d-flex align-items-center justify-content-center rounded-3"
                            >
                                <div>
                                    <span className="display-3"><i className="bi bi-envelope"></i></span>
                                    <p>
                                        For any queries, email us on
                                        <a href="/" className="text-primary"> quickbites@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 p-3">
                            <div
                                className="socialMediaCards d-flex align-items-center justify-content-center rounded-3"
                            >
                                <div>
                                    <span className="display-3"><i className="bi bi-facebook"></i></span>
                                    <p>Visit our page on Facebook</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 p-3">
                            <div
                                className="socialMediaCards d-flex align-items-center justify-content-center rounded-3"
                            >
                                <div>
                                    <span className="display-3"><i className="bi bi-instagram"></i></span>
                                    <p>Visit our page on Instagram</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 p-3">
                            <div
                                className="socialMediaCards d-flex align-items-center justify-content-center rounded-3"
                            >
                                <div>
                                    <span className="display-3"><i className="bi bi-twitter"></i></span>
                                    <p>Follow us on Twitter for the latest updates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>


        </>
    )
}

export default Contect