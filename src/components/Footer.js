import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
    render() {
        return(
            <main className="mainFooter">
                <section className="topFooter">
                    <div className="columns">
                        <div className="column">
                            <p>GIFT CARDS</p>
                            <p>STUDENT DISCOUNT</p>
                            <p>MILITARY DISCOUNT</p>
                            <p>FIND A STORE</p>
                            <p>SIGN UP FOR EMAIL</p>
                            <p>BECOME A MEMBER</p>
                            <p>SITE FEEDBACK</p>
                        </div>
                        <div className="column">
                            <p>GET HELP</p>
                            <p className="normalFont">Order Status</p>
                            <p className="normalFont">Shipping and Discovery</p>
                            <p className="normalFont">Returns</p>
                            <p className="normalFont">Payment Options</p>
                            <p className="normalFont">Contact Us</p>
                        </div>
                        <div className="column">
                            <p>ABOUT NIKE</p>
                            <p className="normalFont">News</p>
                            <p className="normalFont">Careers</p>
                            <p className="normalFont">Converse Culture & Careers</p>
                            <p className="normalFont">Investors</p>
                            <p className="normalFont">Sustainable Innovation</p>
                            <p className="normalFont">CA Supply Chains Act</p>
                        </div>
                    </div>
                    <div className="socialIcons">
                        
                        <a href="https://twitter.com/Nike" target="_blank">
                        <div className="socialCircle"><div className="twitter"></div><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
                        </a>
                        
                        
                        <a href="https://www.facebook.com/nike" target="blank">
                        <div className="socialCircle"><div className="facebook"></div><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
                        </a>
                        
                        
                        <a href="https://www.youtube.com/user/nike" target="_blank">
                        <div className="socialCircle"><div className="youtube"></div><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
                        </a>
                        
                        
                        <a href="https://www.instagram.com/nike/" target="_blank">
                        <div className="socialCircle"><div className="instagram"></div><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
                        </a>
                        
                    </div>
                </section>
                <section className="bottomFooter">
                    <div className="leftSide">
                        <div className="flagLink"></div>
                        <div className="unitedStates">United States</div>
                        © 2017 Nike, Inc. All Rights Reserved
                    </div>
                    <div className="rightSide">
                        <div className="guides">Guides</div>  
                        <div className="terms">Terms Of Use</div>    
                        <div className="privacy">Nike Privacy Policy</div>
                    </div>
                </section>

            </main>
            // <img src="https://images4.alphacoders.com/632/thumb-1920-632661.jpg" 
            // height="900px" width="1680px" 
            // alt="Nike Swoosh"/>
        )
    }
}

export default Footer;
