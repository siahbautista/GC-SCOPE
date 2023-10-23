import Footer from '../../components/Footer.js';
import Header from '../../components/Header.js';

function Contact() {
	return (
    	<div>
    		<Header />
			{/* Want to change css? Go to global.css*/}
			<div className="pages_hero_heading_row">
				<div className="pages_hero_heading_container">
					<div className="pages_hero_heading">
						<span className="silhoutte_heading">Contact</span>
						<h1>Contact</h1>
					</div>
				</div>
			</div>
			{/* Page Hero Heading End */}
			<Footer />
    	</div>
    );
}

export default Contact;