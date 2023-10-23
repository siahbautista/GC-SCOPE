import './css-components/DepartmentsTabination.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CHTM from '../assets/logos/departments/chtm_logo.png';
import CSS from '../assets/logos/departments/css_logo.png';
import CEAS from '../assets/logos/departments/ceas_logo.png';
import CAHS from '../assets/logos/departments/cahs_logo.png';
import CBA from '../assets/logos/departments/cba_logo.png';

// GENERAL NOTE: If you are looking for the CSS of the buttons for CSS, CHTM, CEAS, CAHS, CBA, go to global.css
/* 
For Quick Navigate the code for pages, You can search it by use the following terms:
1. CSS DEPARTMENT
2. CEAS DEPARTMENT
3. CHTM DEPARTMENT
4. CAHS DEPARTMENT
5. CBA DEPARTMENT
*/

// Soon to be move on compenents folder every department

function DepartmentsTabination() {
	return (
    	<div>
            <Tabs
                defaultActiveKey="ccs"
                id="departments_tabination"
                className="mb-3 tabs_style"
                >
                {/* CSS DEPARTMENT */}
                <Tab eventKey="ccs" title="CCS">
                    <div className="department_tab_content_row">
                        <div className="department_tab_content_container">
                            <div className="department_tab_contents">
                                <div className="dept_column_container">
                                    <div className="dept_column_image">
                                        <img src={CSS} alt="CSS Logo"/>
                                    </div>
                                    <div className="dept_column_content">
                                        <div className="dept_column_title">
                                            <span>Gordon College</span>
                                            <h2>College of Computer Studies</h2>
                                        </div>
                                        <div className="dept_column_description">
                                            <p>The College of Computer Studies focuses on the ever-evolving world of technology and computing. It offers programs in computer science, information technology, and related fields. Students in this college learn about programming, data analysis, and computer systems, preparing them for careers in the IT industry. </p>    
                                        </div>
                                    </div>
                                </div>
					            <div className="horizontal_line"><hr /></div>
                                <div className="dept_column_container_orgs">
                                    <div className="department_org_heads">
                                        <p>GC CCS Organizations</p>
                                    </div>
                                    <div className="department_orgs_row">
                                        <div className="department_orgs_container">
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CSS} alt="CSS Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>SPECS</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Society of Programming Enthusiasts in Computer Science</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope css">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CSS} alt="CSS Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>ELITES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Empowered League of Information Technology Education Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope css">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CSS} alt="CSS Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>IMAGES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Innovative Multimedia Artist Guild of Empowered Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope css">Explore now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                {/* CEAS DEPARTMENT */}
                <Tab eventKey="ceas" title="CEAS">
                    <div className="department_tab_content_row">
                        <div className="department_tab_content_container">
                            <div className="department_tab_contents">
                                <div className="dept_column_container">
                                    <div className="dept_column_image">
                                        <img src={CEAS} alt="CEAS Logo"/>
                                    </div>
                                    <div className="dept_column_content">
                                        <div className="dept_column_title">
                                            <span>Gordon College</span>
                                            <h2>College of Education, Arts and Sciences</h2>
                                        </div>
                                        <div className="dept_column_description">
                                            <p>The College of Education, Arts and Sciences is dedicated to fostering creativity, critical thinking, and educational excellence. It offers programs in education, humanities, social sciences, and natural sciences. This college prepares students for careers in teaching, research, and various other fields within the realm of education and the liberal arts.</p>    
                                        </div>
                                    </div>
                                </div>
					            <div className="horizontal_line"><hr /></div>
                                <div className="dept_column_container_orgs">
                                    <div className="department_org_heads">
                                        <p>GC CEAS Organizations</p>
                                    </div>
                                    <div className="department_orgs_row">
                                        <div className="department_orgs_container">
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CEAS} alt="CEAS Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>SPECS</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Society of Programming Enthusiasts in Computer Science</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope ceas">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CEAS} alt="CEAS Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>ELITES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Empowered League of Information Technology Education Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope ceas">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CEAS} alt="CEAS Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>IMAGES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Innovative Multimedia Artist Guild of Empowered Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope ceas">Explore now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                {/* CHTM DEPARTMENT */}
                <Tab eventKey="chtm" title="CHTM">
                    <div className="department_tab_content_row">
                        <div className="department_tab_content_container">
                            <div className="department_tab_contents">
                                <div className="dept_column_container">
                                    <div className="dept_column_image">
                                        <img src={CHTM} alt="CHTM Logo"/>
                                    </div>
                                    <div className="dept_column_content">
                                        <div className="dept_column_title">
                                            <span>Gordon College</span>
                                            <h2>College of Hospitality and Tourism Management</h2>
                                        </div>
                                        <div className="dept_column_description">
                                            <p>The College of Hospitality and Tourism Management focuses on preparing students for careers in the hospitality and tourism industry. This includes areas such as hotel management, restaurant management, event planning, and tourism management. Students in this college gain the skills and knowledge necessary to excel in the service and tourism sectors.</p>    
                                        </div>
                                    </div>
                                </div>
					            <div className="horizontal_line"><hr /></div>
                                <div className="dept_column_container_orgs">
                                    <div className="department_org_heads">
                                        <p>GC CHTM Organizations</p>
                                    </div>
                                    <div className="department_orgs_row">
                                        <div className="department_orgs_container">
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CHTM} alt="CHTM Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>SPECS</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Society of Programming Enthusiasts in Computer Science</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope chtm">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CHTM} alt="CHTM Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>ELITES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Empowered League of Information Technology Education Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope chtm">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CHTM} alt="CHTM Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>IMAGES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Innovative Multimedia Artist Guild of Empowered Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope chtm">Explore now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                {/* CAHS DEPARTMENT */}
                <Tab eventKey="cahs" title="CAHS">
                    <div className="department_tab_content_row">
                        <div className="department_tab_content_container">
                            <div className="department_tab_contents">
                                <div className="dept_column_container">
                                    <div className="dept_column_image">
                                        <img src={CAHS} alt="CAHS Logo"/>
                                    </div>
                                    <div className="dept_column_content">
                                        <div className="dept_column_title">
                                            <span>Gordon College</span>
                                            <h2>College of Allied Health Studies</h2>
                                        </div>
                                        <div className="dept_column_description">
                                            <p>The College of Allied Health Studies is dedicated to training healthcare professionals in various disciplines. It offers programs in areas such as nursing and midwifery. Graduates from this college go on to become essential members of the healthcare workforce, providing care and support to patients.</p>    
                                        </div>
                                    </div>
                                </div>
					            <div className="horizontal_line"><hr /></div>
                                <div className="dept_column_container_orgs">
                                    <div className="department_org_heads">
                                        <p>GC CAHS Organizations</p>
                                    </div>
                                    <div className="department_orgs_row">
                                        <div className="department_orgs_container">
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CAHS} alt="CAHS Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>SPECS</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Society of Programming Enthusiasts in Computer Science</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope cahs">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CAHS} alt="CAHS Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>ELITES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Empowered League of Information Technology Education Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope cahs">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CAHS} alt="CAHS Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>IMAGES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Innovative Multimedia Artist Guild of Empowered Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope cahs">Explore now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                {/* CBA DEPARTMENT */}
                <Tab eventKey="cba" title="CBA">
                    <div className="department_tab_content_row">
                        <div className="department_tab_content_container">
                            <div className="department_tab_contents">
                                <div className="dept_column_container">
                                    <div className="dept_column_image">
                                        <img src={CBA} alt="CBA Logo"/>
                                    </div>
                                    <div className="dept_column_content">
                                        <div className="dept_column_title">
                                            <span>Gordon College</span>
                                            <h2>College of Business and Accountancy</h2>
                                        </div>
                                        <div className="dept_column_description">
                                            <p>The College of Business and Accountancy provides students with a solid foundation in business management, finance, marketing, and accounting. Graduates from this college are well-equipped to work in various roles within the business world, including accounting, finance, management, and entrepreneurship.</p>    
                                        </div>
                                    </div>
                                </div>
					            <div className="horizontal_line"><hr /></div>
                                <div className="dept_column_container_orgs">
                                    <div className="department_org_heads">
                                        <p>GC CBA Organizations</p>
                                    </div>
                                    <div className="department_orgs_row">
                                        <div className="department_orgs_container">
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CBA} alt="CBA Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>SPECS</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Society of Programming Enthusiasts in Computer Science</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope cba">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CBA} alt="CBA Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>ELITES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Empowered League of Information Technology Education Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope cba">Explore now</a>
                                                </div>
                                            </div>
                                            <div className="department_org">
                                                <div className="department_org_image">
                                                    <img src={CBA} alt="CBA Logo"/>
                                                </div>
                                                <div className="department_org_title">
                                                    <h3>IMAGES</h3>
                                                </div>
                                                <div className="department_org_description">
                                                    <p>Innovative Multimedia Artist Guild of Empowered Students</p>
                                                </div>
                                                <div className="department_button">
                                                    <a href="#" className="button_gcscope cba">Explore now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
    	</div>
    );
}

export default DepartmentsTabination;