import React from 'react';
import Header from '../components/Header.js';
import HeroImage from '../assets/hero_image.png';
import './css_pages/Pages.css';

function Home() {
	return (
    	<div>
    		<Header />
    		<div className="hero_row">
	    		<div className="hero_container">
	    			<div className="hero_content">
	    				<h1 className="hero_title">Gordon College<br /><span>Student Councils & Organizations</span></h1>
	    				<p className="hero_description">Provide students with opportunities to pursue their interests, develop new skills, and contribute to their school communities in diverse ways.</p>
	    				<a href="#" className="button_gcscope">Explore now</a>
	    			</div>
	    			<div className="hero_image">
	    				<img src={HeroImage} alt="GC-SCOPE Hero Image" />
	    			</div>
	    		</div>
    		</div>
    	</div>
    );
}

export default Home;