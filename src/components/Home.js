import React, { Component } from 'react';
import './../styles/home.css';

class Home extends Component {
    render() {
        return(
            <main className="homeHeader">
            <section className="headliner"></section>
            <section className="secondSection">
                <div className="sectionHeader">
                    <div className="title">NEW HEIGHTS</div>
                    <div className="body">Higher than any Force before it, the military-inspired design of our SF AF-1 High
makes it unmistakable in all the right ways.</div>
            <div className="shopButtonsContainer">
                <div className="shopButton">
                    SHOP MEN
                </div>
                <div className="shopButton">
                    SHOP WOMEN
                </div>
            </div>
                </div>
            </section>
            <section className="thirdSection">
                <div className="thirdSectionTitle">
                    OUR LATEST FORCE STYLES
                </div>
            <div className="placeholderContainer">
                <div className="placeholder">
                    <div className="pic1"></div>
                    <div className="textContain">
                    <p>Nike Lunar Force 1 Duckboot '17</p>
                    <p>Men's Shoe</p>
                    <p>Shop Now</p>
                    </div>
                    </div>
                <div className="placeholder">
                    <div className="pic2"></div>
                    <div className="textContain">                
                    <p>Nike SF Air Force 1 High</p>
                    <p>Women's Shoe</p>
                    <p>Shop Now</p>
                    </div>
                    </div>
                <div className="placeholder">
                    <div className="pic3"></div>  
                    <div className="textContain">                                  
                    <p>Nike SF Air Force 1 Mid</p>
                    <p>Women's Shoe</p>
                    <p>Shop Now</p>
                    </div>
                    </div>
                <div className="placeholder">
                    <div className="pic4"></div> 
                    <div className="textContain">                                       
                    <p>Nike SF Air Force 1 Mid</p>
                    <p>Men's Shoe</p>
                    <p>Shop Now</p>
                    </div>
                    </div>
            </div>
            </section>
            </main>
        )
    }
}

export default Home;