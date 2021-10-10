import React from "react";

function HeadingCard({ name, col }) {
	return (
		<div className={`d-flex justify-content-center type-card`}>
			<p className="type-card-text">{name}</p>
		</div>
	);
}

export default HeadingCard;
