import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import './css_pages/Pages.css';
import DepartmentsTabination from '../components/DepartementsTabination.js';

function Departments() {
	return (
    	<div>
    		<Header />
			{/* Want to change css? Go to global.css*/}
			<div className="pages_hero_heading_row">
				<div className="pages_hero_heading_container">
					<div className="pages_hero_heading">
						<span className="silhoutte_heading">Departments</span>
						<h1>Departments</h1>
					</div>
				</div>
			</div>
			{/* Departments Tabination */}
			<div className="center_style_row">	
				<div className="center_style_container">	
					<DepartmentsTabination />	
				</div>
			</div>
			<Footer />
    	</div>
    );
}

export default Departments;