import React, { useLayoutEffect, useState, Fragment } from "react";
import Navbar from "./Navbar";
import HeadingContent from "./HeadingContent";
import HeadingCard from "./HeadingCard";
import TradeSectionLarge from "./TradeSectionLarge";
import TradeWithUsLarge from "./TradeWithUsLarge";
import FooterText from "./FooterText";
import TradeSectionSmall from "./TradeSectionSmall";
import TradeWithUsSmall from "./TradeWithUsSmall";

function App() {
	const [size, setSize] = useState([0, 0]);
	function useWindowSize() {
		useLayoutEffect(() => {
			function updateSize() {
				setSize([window.innerWidth, window.innerHeight]);
			}
			window.addEventListener("resize", updateSize);
			updateSize();
			return () => window.removeEventListener("resize", updateSize);
		}, []);
		return size;
	}

	const [width, height] = useWindowSize();

	return width > 800 ? (
		<Fragment>
			<section className="title-section">
				<Navbar />
				<HeadingContent />

				<div className="container card-container">
					<div className="row justify-content-around type-card-row">
						<HeadingCard name="Stocks" />
						<HeadingCard name="Forex" />
						<HeadingCard name="Crypto" />
					</div>
				</div>
			</section>

			<TradeSectionLarge />

			<TradeWithUsLarge />
			<section className="footer">
				<FooterText />
				<div className="footer-bottom"></div>
			</section>
		</Fragment>
	) : (
		<Fragment>
			<section className="title-section">
				<Navbar />
				<HeadingContent />
			</section>
			<TradeSectionSmall />

			<TradeWithUsSmall />

			<section className="footer">
				<FooterText />
				<div className="footer-bottom"></div>
			</section>
		</Fragment>
	);
}

export default App;
