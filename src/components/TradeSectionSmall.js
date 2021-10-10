import React from "react";
import BusinessImage from "./BusinessImage";

import TradeHeading from "./TradeHeading";
import TradeDescription from "./TradeDescription";
import TradeDescriptionContinued from "./TradeDescriptionContinued";
import HeadingCard from "./HeadingCard";

function TradeSectionSmall(props) {
	return (
		<section className="trade-oriented">
			<TradeHeading />
			<TradeDescription />
			<BusinessImage />
			<div className="container justify-content-center">
				<HeadingCard name="Stocks" />
				<HeadingCard name="Forex" />
				<HeadingCard name="Crypto" />
			</div>
			<TradeDescriptionContinued />
		</section>
	);
}

export default TradeSectionSmall;
