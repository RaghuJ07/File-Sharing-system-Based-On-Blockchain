import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Firstpage.css";
import "./Secondpage";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";
import myvideo from "./videos/first.mp4";
import img1 from "./images/first-image-min.png";
import img2 from "./images/second-image-min.png";
import img3 from "./images/third-image-min.png";
import Navbar from "./Navbar";

function Firstpage() {
  const [imageSrc, setImageSrc] = useState(img3);
  const [pin, setPin] = useState("");
  const correctPin = "1234"; // Hardcoded 4-digit PIN

  const handleHeadingClick = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleButtonClick = () => {
    if (pin === correctPin) {
      window.location.href = "/secondpage";
    } else {
      alert("Invalid PIN. Please try again."); // Show alert for wrong PIN
    }
  };

  return (
    <div>
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="hero">
        <div className="video-background">
          <video autoPlay muted loop>
            <source src={myvideo} type="video/mp4" />
          </video>
          <div className="hero-content">
            <div className="hero-heading-box">
              <h1 className="hero-heading">
              Revolutionize File Storage with Decentralization
              </h1>
            </div>
            <h1 className="hero-subheading">Your Data, Your Control</h1>
            <p className="hero__description">
            Join the decentralized web, where you control your data, free from censorship and surveillance.
            </p>

            {/* PIN Input Section */}
            <div className="pin-input-section">
              <input
                type="password"
                className="pin-input"
                placeholder="Enter 4-digit PIN"
                value={pin}
                onChange={handlePinChange}
                maxLength="4"
              />
              <button className="hero-button" onClick={handleButtonClick}>
                <span className="hero-button-text">Submit PIN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
