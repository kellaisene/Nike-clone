import React, { Component } from 'react';
import '../styles/header.css';
import {Link} from 'react-router-dom';
// import {leaveHome, returnHome} from './../ducks/reducer';
// import {connect} from 'react-redux';


class Header extends Component {
    constructor(props) {
        super(props);
            this.state={
                defaultPage: this.props.currentPage
            }
    }

    componentDidMount(){
        this.setState({
            defaultPage: true
        })
    }
    render() {
        const homeHeader = {position: "relative"}
        const homeLogo = {position: "absolute", top: "35px", height: "12.5vh", width: "25%"}
        const homeLogoPhone = {position: "absolute", top: "13px", height: "6vh", width: "30%"}
        const homeLogoTablet = {position: "absolute", top: "35px", height: "8.5vh", width: "27.5%"}
    
        return(
            <main className="mainHeader">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700" rel="stylesheet"/>
                <section className="topHeader">
                    <div className="topHeaderLinks1">NikePlus</div>
                    <div className="topHeaderLinks2">
                        <div className="jordan"></div>
                        {/* <img src="./../images/airJordan.png" height="15px" width="15px"/> */}
                    </div>
                    <div className="topHeaderLinks3"></div>
                    <div className="topHeaderLinks4">
                        <div className="converse"></div>
                    </div>
                <div className="endLinks">
                    <div className="topHeaderLinks5">Join / Log In To Nike+ Account</div>
                    <div className="topHeaderLinks6">Help</div>
                    <div className="topHeaderLinks7">                  
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 554.748 554.748" width="15px" height="15px">
                        <g>
                            <g>
                                <path d="M548.873,164.412c4.896,6.12,6.73,13.464,5.508,22.032l-23.256,133.417    c-0.816,6.938-3.979,12.648-9.486,17.136c-5.508,4.488-11.729,6.732-18.666,6.732H163.925l-6.732,37.944H480.33    c7.752,0,14.48,2.754,20.195,8.262c5.713,5.508,8.566,12.342,8.566,20.502s-2.854,14.994-8.566,20.502    c-5.715,5.508-12.443,8.262-20.195,8.262H122.921c-8.568,0-15.912-3.468-22.032-10.401c-5.712-6.938-7.956-14.895-6.732-23.868    l15.3-83.232L86.201,87.914L20.105,67.106c-7.752-2.448-13.362-7.141-16.83-14.076c-3.468-6.937-4.182-14.28-2.142-22.032    c2.448-7.752,7.242-13.362,14.382-16.83s14.382-4.182,21.726-2.142l84.456,26.928c5.304,1.632,9.69,4.692,13.158,9.18    c3.468,4.488,5.61,9.589,6.426,15.301l4.896,46.512l383.112,42.84C537.857,154.008,544.385,157.884,548.873,164.412z     M166.374,455.113c12.24,0,22.644,4.284,31.212,12.854c8.568,8.565,12.852,18.972,12.852,31.212    c0,12.237-4.284,22.746-12.852,31.518c-8.568,8.772-18.972,13.158-31.212,13.158s-22.644-4.386-31.212-13.158    c-8.568-8.771-12.852-19.278-12.852-31.518s4.284-22.646,12.852-31.212C143.729,459.397,154.133,455.113,166.374,455.113z     M427.697,455.113c12.238,0,22.645,4.284,31.213,12.854c8.564,8.565,12.852,18.972,12.852,31.212    c0,12.237-4.285,22.746-12.852,31.518c-8.568,8.772-18.975,13.158-31.213,13.158c-12.24,0-22.646-4.386-31.211-13.158    c-8.568-8.771-12.855-19.278-12.855-31.518s4.285-22.646,12.855-31.212C405.053,459.397,415.457,455.113,427.697,455.113z" fill="#747474"/>
                            </g>
                        </g>
                        </svg>

                         </div>
                    <div className="topHeaderLinks8">
                        {/* <img src="./../images/united-states.png" width="15px" height="15px" alt="us-flag"/> */}
                    </div>
                </div>
                </section>
                <section className="bottomHeader">
                    <Link to="/" className="nikeHome"></Link>
                <div className="menuSpread">
                    <div className="dropdown">
                    <span><Link to="/men" className="menLink">MEN</Link></span>
                        <div className="dropdown-content">
                            <section className="hoverdrop">
                                <div className="dropColumns"></div>
                                <div className="dropColumns"></div>
                                <div className="dropColumns"></div>
                                Yo wassup this is the dropdown menu within the menu! 
                            </section>
                        </div>

                    </div>
                    <Link to="/women" className="womenLink">WOMEN</Link>
                    <Link to="/boys" className="boysLink">BOYS</Link>
                    <Link to="/girls" className="girlsLink">GIRLS</Link>
                    <Link to="/customize" className="customizeLink">CUSTOMIZE</Link>
                </div>
                <div className="searchContainer">
                    <div className="magnifyingGlass"></div>
                    <div className="searchLink">Search</div>
                </div>
                </section>
            </main>
        )
    }
}


export default Header;