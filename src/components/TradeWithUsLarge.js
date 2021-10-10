import React from "react";
import TradeWithUsHeading from "./TradeWithUsHeading";
import TradeWithUsDescription from "./TradeWithUsDescription";
import TradeWithUsSmallHeading from "./TradeWithUsSmallHeading";
import TradeWithUsContent from "./TradeWithUsContent";

function TradeWithUsLarge(props) {
	return (
		<section className="trade-with-us">
			<div className="container trade-with-us-container">
				<div className="row">
					<div className="">
						<TradeWithUsHeading />
						<TradeWithUsDescription />
					</div>
				</div>
				<div className="container" style={{ margin: "3% 0" }}>
					<div className="row">
						<div className="col-4 trade-with-us-column">
							<TradeWithUsSmallHeading
								heading={`INTUITIVE TOOLS AND COMPETITIVE PRICING`}
							/>

							<TradeWithUsContent
								data={`Whether you’re an active trader or long-term investor our web,
								mobile, and downloadable platforms give you everything you need
								to research stocks, place trades, and manage your portfolio with
								live-streaming access, real-time quotes and specialists with
								years of floor trading experience. As an No name 1 broker, we do
								not have any conflict of interest regarding our clients’ trades,
								as we only receive a commission on the volume of the trades and
								do not benefit in any additional way by any client losses.`}
							/>
						</div>
						<div className="col-4 trade-with-us-column trade-with-us-column-right">
							<TradeWithUsSmallHeading heading="TRANSPARENT AND TRUSTWORTHY" />
							<TradeWithUsContent
								data={`For a few years now, No Name 1 has been proud to help our
								clients pursue their financial goals while giving them more time
								to focus on what really matters in life. Everything we provide,
								from guidance to powerful trading tools, to retirement resources
								is built around one thing, you. We know it’s important to get
								professional guidance you can trust. That’s why our experienced,
								licensed reps are available by phone, email, online, and in
								person for one-on-one support when you need it most. You can
								always count on us.`}
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-4 trade-with-us-column">
							<TradeWithUsSmallHeading heading={`SECURED FUNDS`} />

							<TradeWithUsContent
								data={`Your funds are kept in segregated 3rd party regulated financial
								institutions and we use advanced encryption tools to keep all of
								your transactions and personal data safe and secured. Also our
								flat-rate commission on all online equity trades gives you
								access to our award-winning investing and trading experience.
								Plus, we keep our pricing simple with no share limits or hidden
								fees, no trade requirements to access advanced features, and no
								deposit minimums. At No name 1 all transactions are simple and
								direct.`}
							/>
						</div>
						<div className="col-4 trade-with-us-column trade-with-us-column-right">
							<TradeWithUsSmallHeading heading={`ALGO TRADING`} />

							<TradeWithUsContent
								data={`Algorithmic Trading is a program that offers everyone the
								opportunity to trade with better precision and high success rate
								than he/she would normally get. It makes use of a scenario-based
								approach and artificial intelligence so as to develop the best
								trading approach for the circumstances. Different variables such
								as price, quantity and time period are taken into serious
								consideration as well. The number of traders that use our
								Algorithmic trading keeps increasing by the day, as it makes the
								trading journey easy and well-profiting.`}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TradeWithUsLarge;
