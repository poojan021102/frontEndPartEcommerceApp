export default function Footer(){
    return (
        <footer className="bg-dark absolute-bottom d-flex flex-column">
            <div className="text-white d-flex flex-row  justify-content-around">   
                <div className="d-flex flex-column mt-5">
                    <h3>Exclusive</h3>
                    <h5 className="mt-2">Subscribe</h5>
                    <p className="mt-3">Get 10% off on your first order</p>
                    <form>
                        <div className="d-flex flex-row mt-3">
                            <input type="email" className="me-2 border border-white rounded bg-dark p-1" placeholder="Enter Your email"/>
                            <button type="submit" className="btn btn-dark btn-sm border border-white rounded">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="d-flex flex-column mt-5 mb-5">
                    <h3>Support</h3>
                    <p className="mt-1">111 Bijoy Sarani Dhaka, <br/> DH 1515, Bangladesh.</p>
                    <p className="mt-1">exclusive@gmail.com</p>
                    <p className="mt-1">+88015-88888-9999</p>
                </div>
                <div className="d-flex flex-column mt-5 mb-5">
                    <h3>Account</h3>
                    <p className="mt-1">My Account</p>
                    <p className="mt-1">Login / Register</p>
                    <p className="mt-1">Cart</p>
                    <p className="mt-1">Wishlist</p>
                    <p className="mt-1">Shop</p>
                </div>
                <div className="d-flex flex-column mt-5 mb-5">
                    <h3>Quick Link</h3>
                    <p className="mt-1">Privacy Policy</p>
                    <p className="mt-1">Terms of Use</p>
                    <p className="mt-1">FAQ</p>
                    <p className="mt-1">Contact</p>
                </div>
                <div className="d-flex flex-column mt-5 mb-5">
                    <h3>Download App</h3>
                    <small className="text-white-50 mt-2">Save $3 with App New User only</small>
                    <div className="mt-2 d-flex flex-row">
                        <div>
                            <a className="btn btn-outline-light btn-floating me-2" href="#!" role="button"><i className='fas fa-7x'>&#xf029;</i></a>
                        </div>
                        <div className="d-flex flex-column">
                            <button class="btn btn-outline-light btn-icon-text mb-2">
                            <i class="fa-brands fa-apple btn-icon-prepend"></i>
                            <span class="d-inline-block text-left">
                                <small class="font-weight-light d-block">Available on the</small>
                                App Store
                            </span>
                            </button>
                            <button class="btn btn-outline-light btn-icon-text">
                            <i class="fa-brands fa-google-play btn-icon-prepend me-2"></i>
                            <span class="d-inline-block text-left">
                                <small class="font-weight-light d-block">Get it on the</small>
                                Google Play
                            </span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <section className="mt-2">
                            <a className="btn btn-outline-light btn-floating me-3" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-floating me-3" href="#!" role="button"><i className="fab fa-twitter"></i></a>   
                            <a className="btn btn-outline-light btn-floating me-3" href="#!" role="button"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-floating me-3" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-floating" href="#!" role="button"><i className="fab fa-google"></i></a>
                        </section>
                    </div>
                </div>
            </div>
            <div className="text-center text-white-50 p-3">
                © Copyright Rimel 2023. All Rights Reserved
            </div>
        </footer>
    );

}