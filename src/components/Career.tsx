import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Intern (Front-End Developer)</h4>
                <h5>Alobha Technologies, Noida, Uttar Pradesh</h5>
              </div>
              <h3>06/2024 - 07/2024</h3>
            </div>
            <p>
              Developed a responsive inventory dashboard adapting across mobile, tablet, and desktop. Collaborated with stakeholders to gather UI/UX requirements and implemented modular, maintainable front-end components following SDLC principles and Agile practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Logistics Trainee (Data &amp; Systems)</h4>
                <h5>Committed Cargo Care Ltd, Mahipalpur, New Delhi</h5>
              </div>
              <h3>08/2025 - 12/2025</h3>
            </div>
            <p>
              Extracted, analyzed, and validated logistics data using MS SQL Server and Excel. Prepared customs documentation via EDI systems (ICEGATE), ensuring compliance. Identified data gaps, recommended process improvements, and executed data migration tasks maintaining data integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
