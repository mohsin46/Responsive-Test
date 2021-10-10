import React, { Fragment } from "react";

export default function Navbar() {
	return (
		<Fragment>
			<nav className="navbar navbar-dark navbar-row ">
				<div className="container-fluid justify-content-evenly">
					<div className="col-6 d-flex justify-content-center">
						<a className="navbar-brand logo-container" href="#">
							<img className="logo" src="/images/logo.png" />
						</a>
					</div>
					<div className="col-6 d-flex justify-content-center">
						<button
							className="btn btn-outline-light login-btn nav-btn"
							id="loginBtn"
						>
							LOG IN
						</button>
						<button className="btn btn-outline-light nav-btn">
							<i class="fas fa-bars"></i>
						</button>
					</div>
				</div>
			</nav>
		</Fragment>
	);
}
