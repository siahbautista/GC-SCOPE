import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import HeroImage from '../assets/hero_image.png';
import CHTM from '../assets/logos/departments/chtm_logo.png';
import CSS from '../assets/logos/departments/css_logo.png';
import CEAS from '../assets/logos/departments/ceas_logo.png';
import CAHS from '../assets/logos/departments/cahs_logo.png';
import CBA from '../assets/logos/departments/cba_logo.png';
import './css_pages/Pages.css';

function Home() {
	{/* GENERAL NOTE: CSS style width for container and row are in global.css and for just styling for element are in pages.css */}
	return (
    	<div>
    		<Header />
			{/* Hero Section */}
    		<div className="hero_row">
	    		<div className="hero_container">
	    			<div className="hero_content">
	    				<div className="hero_title">
							<h1>Gordon College<br /><span>Student Councils & Organizations</span></h1>
						</div>
						<div className="hero_description">
	    					<p>Provide students with opportunities to pursue their interests, develop new skills, and contribute to their school communities in diverse ways.</p>
						</div>
	    				<div className="hero_buttons">
							<a href="#" className="button_gcscope">Explore now</a>
						</div>
	    			</div>
	    			<div className="hero_image">
	    				<img src={HeroImage} alt="GC-SCOPE Hero Image" />
	    			</div>
	    		</div>
    		</div>
			{/* Gordon College Department Section */}
			<div className="center_style_row">
				<div className="center_style_container">
					<div className="content_title">
						<h2>Gordon College Departments</h2>
					</div>
					<div className="horizontal_line"><hr /></div>
					<div className="content_subtitle">
						<p>They serve as the organizational framework for curriculum development, teaching, research, and the administration of academic programs and services</p>
					</div>
					<div className="departments_row">
						<div className="departments_container">
							<div className="per_department">
								<div className="department_column">
									<div className="department_image">
										<img src={CAHS} alt="GC-SCOPE Hero Image" />
									</div>
									<div className="department_infos">
										<div className="department_name">
											<h3>GC - CAHS</h3>
										</div>
										<div className="department_description">
											<p>College of Allied Health Studies</p>
										</div>
									</div>
								</div>
								<div className="department_column">
									<div className="department_image">
										<img src={CSS} alt="GC-SCOPE Hero Image" />
									</div>
									<div className="department_infos">
										<div className="department_name">
											<h3>GC - CCS</h3>
										</div>
										<div className="department_description">
											<p>College of Computer Studies</p>
										</div>
									</div>
								</div>
							</div>
							<div className="per_department">
								<div className="department_column">
									<div className="department_image">
										<img src={CBA} alt="GC-SCOPE Hero Image" />
									</div>
									<div className="department_infos">
										<div className="department_name">
											<h3>GC - CBA</h3>
										</div>
										<div className="department_description">
											<p>College of Business and Accountacy</p>
										</div>
									</div>
								</div>
								<div className="department_column">
									<div className="department_image">
										<img src={CEAS} alt="GC-SCOPE Hero Image" />
									</div>
									<div className="department_infos">
										<div className="department_name">
											<h3>GC - CEAS</h3>
										</div>
										<div className="department_description">
											<p>College of Education, Arts, and Sciences</p>
										</div>
									</div>
								</div>
							</div>
							<div className="per_department">
								<div className="department_column">
									<div className="department_image">
										<img src={CHTM} alt="GC-SCOPE Hero Image" />
									</div>
									<div className="department_infos">
										<div className="department_name">
											<h3>GC - CHTM</h3>
										</div>
										<div className="department_description">
											<p>College of Hospitality and Tourism Management</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    		<Footer />
    	</div>
    );
}

export default Home;