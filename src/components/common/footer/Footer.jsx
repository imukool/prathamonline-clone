import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="/path-to-pratham-logo.png" alt="Pratham Test Prep" className="logo-img" />
            <p>PRATHAM is an educational institute that remains adamant in emerging as one of the leading institutes, enhancing the budding youth into successful individuals.</p>
            <div className="social">
              <h3>We're Social</h3>
              <div className="social-icons">
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-linkedin-in icon"></i>
                <i className="fab fa-google-plus-g icon"></i>
              </div>
              <div className="terms">
                <p>Terms of Service & Policies</p>
              </div>
            </div>
          </div>
          
          <div className="box courses">
            <h3>TOP COURSES</h3>
            <ul>
              <li><i className="fas fa-chevron-right"></i> CUET</li>
              <li><i className="fas fa-chevron-right"></i> CLAT</li>
              <li><i className="fas fa-chevron-right"></i> IIM Indore, IPM</li>
              <li><i className="fas fa-chevron-right"></i> IIM Rohtak, IPM</li>
              <li><i className="fas fa-chevron-right"></i> NLU Delhi</li>
            </ul>
          </div>
          
          <div className="box prep">
            <h3>PREP MODULE</h3>
            <ul>
              <li><i className="fas fa-chevron-right"></i> 2 Year Program</li>
              <li><i className="fas fa-chevron-right"></i> 1 Year Program</li>
              <li><i className="fas fa-chevron-right"></i> Online Program</li>
              <li><i className="fas fa-chevron-right"></i> Crash Course</li>
              <li><i className="fas fa-chevron-right"></i> International Education</li>
              <li><i className="fas fa-chevron-right"></i> Correspondence Course</li>
            </ul>
          </div>
          
          <div className="box contact">
            <h3>GET IN TOUCH</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p>PRATHAM Head Office</p>
                  <p>HS-13, 2nd Floor, Kailash Colony</p>
                  <p>Main Market</p>
                  <p>New Delhi 110048</p>
                </div>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <div>
                  <p>+91- 99999 75392</p>
                  <p>011-42 666 000</p>
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <p>info@prathamonline.com</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      
      <div className="partners">
        <div className="container">
          <h3>PARTNERS</h3>
          <div className="partner-list">
            <div className="partner">IIFM</div>
            <div className="partner">NCFM Derivatives</div>
            <div className="partner">FIREFISH</div>
            <div className="partner">PRIMARY OLYMPIAD</div>
            <div className="partner">WORLD GK OLYMPIAD</div>
            <div className="partner">INTERNATIONAL FINANCE OLYMPIAD</div>
            <div className="partner">GLOBAL ECONOMICS OLYMPIAD</div>
            <div className="partner">GLOBAL OLYMPIAD ON APTITUDE</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
