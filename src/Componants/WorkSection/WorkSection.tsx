import React from "react";
import "./worksection.css";
import Dummyimage1 from "../../assets/Rectangle 30.png";
import Dummyimage2 from "../../assets/Rectangle 32.png";
import Dummyimage3 from "../../assets/Rectangle 34.png";

const WorkSection: React.FC = () => {
  const featuredWorks = [
    {
      title: "Designing Dashboards",
      year: "2020",
      type: "Dashboard",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officina consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: Dummyimage1,
    },
    {
      title: "Vibrant Portraits of 2020",
      year: "2018",
      type: "Illustration",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officina consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: Dummyimage2,
    },
    {
      title: "36 Days of Malayalam type",
      year: "2018",
      type: "Typography",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officina consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: Dummyimage3,
    },
  ];

  return (
    <div className="container">
      {featuredWorks.map((work, index) => (
        <div key={index} className="featured-work">
          <div className="featured-work-image">
            <img src={work.image} alt={work.title} />
          </div>
          <div className="featured-work-content">
            <h3 className="featured-work-title">{work.title}</h3>
            <p className="featured-work-meta">
              {work.year} - {work.type}
            </p>
            <p className="featured-work-description">{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
