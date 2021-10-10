import React from "react";
import BusinessImage from "./BusinessImage";

import TradeHeading from "./TradeHeading";
import TradeDescription from "./TradeDescription";
import TradeDescriptionContinued from "./TradeDescriptionContinued";

function TradeSectionLarge(props) {
	return (
		<section className="trade-oriented">
			<div className="container trade-oriented-container">
				<div className="row justify-content-evenly trade-oriented-row">
					<div className="trade-oriented-col">
						<BusinessImage />
					</div>
					<div className="trade-oriented-col">
						<TradeHeading />
						<TradeDescription />
					</div>
				</div>
				<div className="trade-para-continued">
					<TradeDescriptionContinued />
				</div>
			</div>
		</section>
	);
}

export default TradeSectionLarge;
