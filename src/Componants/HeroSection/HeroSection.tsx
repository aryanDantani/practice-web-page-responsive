import "./hero.css";
import heroImage from "../../assets/Ellipse 1.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I am John, <br /> <span>Creative Technologist</span>
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="download-button">Download Resume</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="John" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
