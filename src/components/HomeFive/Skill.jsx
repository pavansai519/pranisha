import React from 'react';

const Progress_Line = ({ label, percent }) => (
    <div className="progress-box">
        <p>{label}</p>
        <div className="bar-inner">
            <div className="bar progress-line" style={{ width: `${percent}%` }}></div>
            <div className="count-text">{`${percent}%`}</div>
        </div>
    </div>
  );
function SkillHomeFive({ className }) {
    return (
        <>
            <section className={`title-skill-text-ten pb-60 ${className || ''}`}>
                <h1 className="text-center text-uppercase">Techo</h1>
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-lg-4">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>We’re Doing the Right Thing. The Right Way</h2>
                                </div>
                            </div>
                        </div>
                        {/* Title Column */}
                        <div className="column col-lg-4">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <div className="text">There are many variations of passages of but the majority have in some form, by injected humou or which words <br/> <br/>Lorem don't look even slightly believable of but the majority have suffered</div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-column col-lg-4">
                            <div className="inner-column">
                                {/* Skills */}
                                <div className="skills">
                                    {/* Skill Item */}
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Maintenance</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: `${90}%` }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">90%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skill Item */}
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Solutions</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: `${70}%` }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">70%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skill Item */}
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Solutions</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: `${60}%` }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">60%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SkillHomeFive;
