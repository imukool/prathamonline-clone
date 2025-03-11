// Head.js
import React from "react"
import './Head.css';

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='marquee'>
            <marquee>Registrations Open for CUET | CLAT | IPMAT 2025 and 2026</marquee>
          </div>

          <div className='auth-buttons'>
            <button className='pay-online-btn'>Pay Online</button>
            <button className='register-btn'>Register</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
