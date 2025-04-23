import './Resume.scss';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <iframe
        src="/resume.pdf"
        title="Resume"
        width="85%"
        height="570px"
        style={{ border: 'none', borderRadius: '12px', boxShadow: '0 0 40px rgba(0,0,0,0.3)' }}
      ></iframe>
    </div>
  );
};

export default Resume;
