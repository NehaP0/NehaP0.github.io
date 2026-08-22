import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Clodura.ai",
      location: "Pune, India",
      duration: "12/2023 – 07/2026",
      description: [
        "Designed and developed a Calendly-like meeting scheduling platform, enabling users to create shareable booking links, manage availability, recurring schedules, and seamless meeting booking.",
        "Built an interactive scheduling interface using FullCalendar, supporting timezone-aware scheduling, recurring availability, calendar synchronization, and meeting management.",
        "Developed backend APIs using Node.js, Express.js, and MongoDB to manage users, availability, events, meetings, and scheduling workflows.",
        "Implemented robust timezone conversion logic to accurately display user availability and meeting schedules across multiple time zones.",
        "Successfully completed 180+ development tasks spanning feature implementation, production issue resolution, UI enhancements, CRM integrations, and performance optimization.",
        "Resolved complex production issues involving calendar synchronization, CRM integrations, API workflows, state management, filtering, pagination, and dashboard analytics, improving overall application reliability.",
        "Improved application performance and maintainability by refactoring reusable React components, optimizing rendering, and enhancing frontend architecture.",
        "Collaborated with product managers, designers, QA engineers, and backend developers in an Agile environment to deliver scalable, user-centric features on schedule."
      ]
    }
  ];

  return (
    <div id="experience" className="experience-section">
      <h3>Experience</h3>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot">
              <svg className="briefcase-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h4 className="role-title">{exp.role}</h4>
                  <h5 className="company-name">{exp.company}</h5>
                </div>
                <div className="timeline-meta">
                  <span className="duration">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {exp.duration}
                  </span>
                  <span className="location">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {exp.location}
                  </span>
                </div>
              </div>
              <ul className="experience-list">
                {exp.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="experience-bullet">
                    <span className="bullet-point"></span>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
