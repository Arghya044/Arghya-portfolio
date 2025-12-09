import React from 'react';

const About = () => {
    return (
        <section id="about" className="about section">

            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <p>Hi! I’m Arghya Biswas, a MERN Stack Developer who loves building cool, modern, and user-friendly web apps. I enjoy learning new things, experimenting with ideas, and creating projects that actually help people. I’m easy to work with, curious by nature, and always excited to improve my skills and take on new challenges.</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4">
                        <img src="assets/img/my-profile-img.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 content">
                        <h2> Web Developer</h2>
                        <p className="fst-italic py-3">
                            I mix logic, design, and problem-solving to craft meaningful web experiences.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>30 July 2004</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.notavailable.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+ 8801570297033</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Dhaka,Bangladesh</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>BSc.</strong> <span>Computer Science and Engineering</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>arghya.rkbk19@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            I enjoy creating web applications that feel simple, smooth, and enjoyable to use. I like taking ideas, breaking them down, and turning them into real products with clean code and thoughtful design. Every project I work on helps me grow as a developer and pushes me to build better, smarter, and more user-focused digital experiences.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default About;
