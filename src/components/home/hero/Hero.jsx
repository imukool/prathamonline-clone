import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        {/* Header with selection count */}
        <div className="selections-header">
          <div className="count">80</div>
          <div className="title-container">
            <div className="title">FINAL SELECTIONS IN</div>
            <div className="subtitle">
              SSCBS<span className="small-text">For BMS & BBA(FIA)</span>
            </div>
            <div className="through">through CUET 2024</div>
          </div>
        </div>
        
        {/* Student Carousel */}
        <div className="carousel-container">
          <button className="nav-btn prev-btn">&lt;</button>
          
          <div className="students-carousel">
            <img src="/images/student-carousel.png" alt="Student selections" className="carousel-image" />
          </div>
          
          <button className="nav-btn next-btn">&gt;</button>
        </div>
        
        {/* Carousel indicators */}
        <div className="carousel-indicators">
          <span className="indicator"></span>
          <span className="indicator"></span>
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
        
        {/* Programs Grid */}
        <div className="programs-grid">
          {/* Row 1 */}
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-desktop"></i>
            </div>
            <h3 className="program-title">2 Year Program</h3>
            <ul className="program-features">
              <li>600+ hours of training</li>
              <li>Interactive Online Learning portal</li>
              <li>100+ Mock Tests</li>
            </ul>
          </div>
          
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className="program-title">1 Year Program</h3>
            <ul className="program-features">
              <li>450+ hours of training</li>
              <li>Personalized Mentorship</li>
              <li>65+ recorded Concept Videos</li>
            </ul>
          </div>
          
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="program-title">Online Program</h3>
            <ul className="program-features">
              <li>Convenience and Flexibility</li>
              <li>More interaction and greater ability to concentrate</li>
              <li>Avoid commuting</li>
              <li>Personal Mentorship</li>
            </ul>
          </div>
          
          {/* Row 2 */}
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-sync"></i>
            </div>
            <h3 className="program-title">Retaker Program</h3>
            <ul className="program-features">
              <li>1 on 1 Mentorship Program</li>
              <li>Mock Tests based on Latest pattern</li>
              <li>Special classes for DU, IPM and CLAT</li>
            </ul>
          </div>
          
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-book"></i>
            </div>
            <h3 className="program-title">Crash Course</h3>
            <ul className="program-features">
              <li>250 + hours of intensive Training</li>
              <li>200+ Tests to boost performance</li>
              <li>Current Affairs and Quizzes</li>
            </ul>
          </div>
          
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="program-title">International Education</h3>
            <ul className="program-features">
              <li>Coaching in SAT ® with complete application assistance</li>
              <li>Class for English and Maths</li>
              <li>15 real-time mock tests and result analysis</li>
            </ul>
          </div>
          
          {/* Row 3 */}
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-keyboard"></i>
            </div>
            <h3 className="program-title">Correspondence Course</h3>
            <ul className="program-features">
              <li>An E-learning system for students who cannot reach centers</li>
              <li>Provides class-room level preparation</li>
              <li>40+ video/audio lectures and more than 50 mock test series conducted</li>
            </ul>
          </div>
          
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="program-title">NCFM Derivatives</h3>
            <ul className="program-features">
              <li>Skill based course for active trading on the market</li>
              <li>Right knowledge + Competency</li>
              <li>For entry level professionals in the Financial Service Industry</li>
            </ul>
          </div>
          
          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-columns"></i>
            </div>
            <h3 className="program-title">Counseling Division</h3>
            <ul className="program-features">
              <li>For those confused about stream selection</li>
              <li>Stream Competency Test (IX-X) - Psychometric + Biometric</li>
              <li>Career Competency Test (XI - XII) - Psychometric + Biometric</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
