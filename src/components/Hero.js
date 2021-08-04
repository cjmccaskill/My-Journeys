import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <img
        className="hero-img "
        src="https://res.cloudinary.com/mccaskillmediagroup/image/upload/v1627699130/computerDeskSetup_ckkphp.jpg"
        alt="computer desk setup"
      />
      <div className="hero-text">
        <p>
          Sharing <span>my journey</span> in web development, working remotely,
          current projects that I am working on, and the lastest invovations in
          the world of tech.
        </p>
      </div>
    </div>
  );
};

export default Hero;
