import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="resume section">

            <div className="container section-title" data-aos="fade-up">
                <h2>Resume</h2>
                <p>Motivated Junior Frontend Developer seeking an opportunity to create clean, responsive, and user-
focused web interfaces. Eager to apply my skills in HTML, CSS, JavaScript, and React to contribute to

a dynamic development team while continuously learning modern technologies and improving product
experiences.</p>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Sumary</h3>

                        <div className="resume-item pb-0">
                            <h4>SKILLS</h4>
                            <p><em>I turn ideas into smooth, modern web apps using the MERN Stack.</em></p>
                            <ul>
                                <li>Languages : HTML5, CSS3, JavaScript (ES6+)</li>
                                <li>Frontend : React.js, Tailwind CSS, Responsive Web Design, UI/UX Implementation.</li>
                                <li>Backend : Node.js, Express.js, REST API Development, Authentication (JWT)</li>
                                <li>Database : MongoDB.</li>
                                <li>Deployment : Vercel, Netlify.</li>
                                <li>Tools : Github, VS Code, npm, Figma.</li>
                                <li>Soft Skills : Communication, Team Collaboration, Problem-Solving, Time Management.</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>BSc. In Computer Science and Engineering</h4>
                            <h5>2024 - 2028</h5>
                            <p><em>Bangladesh University</em></p>
                            <p>Currently In 6th Semester</p>
                        </div>

                        <div className="resume-item">
                            <h4>SSC and HSC</h4>
                            <h5>2019 - 2021</h5>
                            <p><em>R.K.B.K Harishchandra Collegiate Institute</em></p>
                            
                        </div>

                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="resume-title">Projects</h3>
                        <div className="resume-item">
                            <h4>Import Export Hub - Global Trade Platform</h4>
                            
                            
                            <ul>
                                <p>Import Export Hub is a modern Single Page Application (SPA) designed to streamline global trade operations. The platform enables users to browse products, manage exports, track imports, and handle inventory in real-time. Built with React, Tailwind CSS, and Firebase, this responsive application provides a seamless experience across all devices with features like dark mode, secure authentication, and comprehensive CRUD operations. 
</p>
                                  <p><b>Key Features :</b> Authentication & Security, Product Management, Export Management (CRUD Operations), Import Operations. </p>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>Ideas Parking Lot - Next.js Application </h4>
                            <ul>
                               <p>A modern, full-featured Ideas Parking Lot application built with Next.js (App Router) where users can save and manage their creative ideas. 
</p>
<p><b>Key Features :</b> Modern UI, Authentication, Idea Management, Search & Filter, Responsive, Protected Routes.  
</p>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Resume;
