import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <span className="material-symbols-outlined">fiber_manual_record</span>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <span className="material-symbols-outlined">info</span>
      </div>

      {newsArticle("Vishnu Vardhan Maheswaran", "Full Stack Developer and Software Engineer Level 3")}
      {newsArticle("Jaya Prakash", "Top Aerospace CFD R&D Engineering")}
      {newsArticle("Sreeraj Subburaj", "Top Cyber Security Level 3 SOC Analyst")}
      {newsArticle("Sriraman Jayaraman", "Engineering Management Product Manager")}
      {newsArticle("Sangeetha Venkatesan", "Expert in AI and NLP Engineering")}
    </div>
  );
};

export default Widgets;
