import React, { Component } from 'react';
import './../styles/home.css';

class Home extends Component {
	render() {
		return (
			<main className="homeHeader">
				<section className="headliner" />
				<section className="secondSection">
					<div className="sectionHeader">
						<div className="title">NEW HEIGHTS</div>
						<div className="body">
							Higher than any Force before it, the military-inspired design of our SF AF-1 High makes it
							unmistakable in all the right ways.
						</div>
						<div className="shopButtonsContainer">
							<button className="shopButton">SHOP MEN</button>
							<button className="shopButton">SHOP WOMEN</button>
						</div>
					</div>
				</section>
				<section className="thirdSection">
					<div className="thirdSectionTitle">OUR LATEST FORCE STYLES</div>
					<div className="placeholderContainer">
						<div className="placeholder">
							<div className="pic1" />
							<div className="textContain">
								<p>Nike Lunar Force 1 Duckboot '17</p>
								<p className="lightShade">Men's Shoe</p>
								<p>Shop Now</p>
							</div>
						</div>
						<div className="placeholder">
							<div className="pic2" />
							<div className="textContain">
								<p>Nike SF Air Force 1 High</p>
								<p className="lightShade">Women's Shoe</p>
								<p>Shop Now</p>
							</div>
						</div>
						<div className="placeholder">
							<div className="pic3" />
							<div className="textContain">
								<p>Nike SF Air Force 1 Mid</p>
								<p className="lightShade">Women's Shoe</p>
								<p>Shop Now</p>
							</div>
						</div>
						<div className="placeholder">
							<div className="pic4" />
							<div className="textContain">
								<p>Nike SF Air Force 1 Mid</p>
								<p className="lightShade">Men's Shoe</p>
								<p>Shop Now</p>
							</div>
						</div>
					</div>
				</section>
				<section className="fourthSection">
					<div className="layerSmarter">
						<div className="layerContainer">
							<div className="layerTitle">LAYER SMARTER</div>
							<br />
							<div className="body2">
								From base layer to outerwear, take your workouts up a notch with innovative fabrics made
								to keep you warm, cool and dry while you move outside.
							</div>
							<br />
							<br />
							<div className="shopNow">SHOP NOW</div>
						</div>
					</div>
					<div className="layerSmarter2" />
				</section>
				<section className="thirdSection">
					<div className="thirdSectionTitle">SUEDE FOR WINTER</div>
					<div className="placeholderContainer">
						<div className="placeholder">
							<div className="pic5" />
							<div className="textContain">
								<p>Nike Classic Cortez Suede</p>
								<p className="lightShade">Women's Shoe</p>
								<p>Shop Now</p>
							</div>
						</div>
						<div className="placeholder">
							<div className="pic6" />
							<div className="textContain">
								<p>Nike Air Huarache SD</p>
								<p className="lightShade">Women's Shoe</p>
								<p>Shop Now</p>
							</div>
						</div>
						<div className="placeholder">
							<div className="pic7" />
							<div className="textContain">
								<p>Nike Air Force 1 07 LV8 Suede</p>
								<p className="lightShade">Men's Shoe</p>
								<p>Shop Now</p>
							</div>
						</div>
						<div className="placeholder">
							<div className="pic8" />
							<div className="textContain">
								<p>Nike Air Force 1 High '07 LV8 Suede</p>
								<p className="lightShade">Men's Shoe</p>
								<p>Shop Now</p>
							</div>
						</div>
					</div>
				</section>
				<section className="lastSection">
					<div className="lastSectionContainer">
						<div className="jackets" />
						<div className="fleece" />
						<div className="tights" />
					</div>
				</section>
			</main>
		);
	}
}

export default Home;
