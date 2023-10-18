import './css-components/Header.css';
import logo from '../assets/logos/gc-logo.png';
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<div className="container_nav">
				<div className="nav_items">
					<img src={logo} alt="GC Logo"/>
			        <nav>
						<Link className="nav_item" to="/">Home</Link>
						<Link className="nav_item" to="/departments">Departments</Link>
						<Link className="nav_item" to="/events">Events</Link>
						<Link className="nav_item" to="/about">About</Link>
						<Link className="nav_item" to="/contact">Contact</Link>
			        </nav>
				</div>
				<div className="button_wrapper">
					<a href="/login" className="login">Login</a>
					<a href="#" className="button_gcscope register">Register</a>
				</div>
			</div>
		</header>
	);
}

export default Header;