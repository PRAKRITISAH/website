// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo-container">
            <img
              src={process.env.PUBLIC_URL + '/Logo.jpg'}
              alt="Logo"
              className="logo"
            />
          </div>
          {/* Navigation Links */}
          <a href="#Beauty">Beauty</a>
          <a href="#Treatment">Treatment</a>
          <a href="#about">About</a>
          <a href="#Pricelist">Price List</a>
          <a href="#FreeConsultation">Free consultation</a>
        </nav>
      </header>

      {/* Main Section */}
      <section className="main-section">
        <div className="text-section">
          <h1>
            <span className="black-letter">We bring</span>
            <span className="pink-letter"> terrificed <br /> change </span>
            <span className="black-letter">in you.</span>
          </h1>
          <p>
            We are dedicated to helping you achieve a sense of well<br></br>being for
            your body, mind & soul by providing a variety <br></br>of healthcare &
            beauty services.
          </p>
        </div>

        {/* Girl's Image */}
        <div className="avatar-container">
          <img
            src={process.env.PUBLIC_URL + '/girl.jpg'}
            alt="Avatar"
            className="avatar"
          />
        </div>
      </section>

      {/* MORE.jpg Image */}
      <img
        src={process.env.PUBLIC_URL + '/MORE.jpg'}
        alt="More Image"
        className="more-image"
      />

      {/* Why Choose Us Section */}
      <section className="choose-us-section">
        <h2>Why Choose Us?</h2>
      </section>

      {/* Three Pink Square Boxes with Logos and Text */}
      <div className="pink-boxes">
        <div className="pink-box">
          <img
            src={process.env.PUBLIC_URL + '/flowe1.png'}
            alt="Logo 1"
            className="box-logo"
          />
          <p className="box-text">Advance</p>
          <h1>Advance 5 star <br></br> medical technologies.</h1>
        </div>
        <div className="pink-box">
          <img
            src={process.env.PUBLIC_URL + '/flower.png'}
            alt="Logo 2"
            className="box-logo"
          />
          <p className="box-text">Specialised</p>
          <h1>Highly experiences <br></br> and Specialised staff.</h1>
         
        </div>
        <div className="pink-box">
          <img
            src={process.env.PUBLIC_URL + '/leaf.png'}
            alt="Logo 3"
            className="box-logo"
          />
          <p className="box-text">Customised</p>
          <h1>Fully customised <br></br>beauty programs.</h1>
        </div>
      </div>

    </div>
  );
}

export default App;
