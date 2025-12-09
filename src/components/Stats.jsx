import React from 'react';

const Stats = () => {
    return (
        <section id="stats" className="stats section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">

                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-emoji-smile"></i>
                            <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" className="purecounter"></span>
                            <p><strong>Happy Clients</strong> </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-journal-richtext"></i>
                            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                            <p><strong>Projects</strong> <span></span></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-headset"></i>
                            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                            <p><strong>Hours Of Support</strong> <span></span></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item">
                            <i className="bi bi-people"></i>
                            <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" className="purecounter"></span>
                            <p><strong>Hard Workers</strong> <span></span></p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Stats;
