import React, { Component } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export class Navbar extends Component {
	render() {
		const dogLinks = this.props.dogs.map((dog) => (
			<li className="nav-item" key={dog.name}>
				<NavLink
					exact
					to={`/dogs/${dog.name}`}
					className="nav-link"
					activeClassName="active"
				>
					{dog.name}
				</NavLink>
			</li>
		));
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to="/dogs" className="navbar-brand">
					Dog App
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavDropdown"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								exact
								to="/dogs"
								className="nav-link"
								activeClassName="active"
							>
								Home
							</NavLink>
						</li>
						{dogLinks}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
