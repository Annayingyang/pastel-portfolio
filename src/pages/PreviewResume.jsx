import '../App.css';

function PreviewResume() {
  return (
    <div className="resume-scene">
      <div className="character">👧</div>

      <div className="platform start">
        <h2>I’m Anna</h2>
        <p>A Web Developer</p>
      </div>

      <div className="castle-section projects">
        <h3>Projects</h3>
        <ul>
          <li>🌸 Dreany Resume</li>
          <li>🎮 Woodworm Clone</li>
          <li>📱 Club Calling App</li>
        </ul>
      </div>

      <div className="castle-section skills">
        <h3>Skills</h3>
        <p>React, HTML, CSS, JavaScript, Git</p>
        <div className="bar-graph">
          <div style={{ height: '50%' }}></div>
          <div style={{ height: '70%' }}></div>
          <div style={{ height: '90%' }}></div>
        </div>
      </div>

      <div className="castle-section experience">
        <h3>Experience</h3>
        <p>Company A – Intern</p>
        <p>Company B – Junior Designer</p>
      </div>

      <div className="castle-section contact">
        <h3>Contact</h3>
        <p>📧 anna@example.com</p>
        <p>📞 +27 123 456 789</p>
      </div>
    </div>
  );
}

export default PreviewResume;
