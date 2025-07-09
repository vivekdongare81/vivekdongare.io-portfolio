import React from "react";
import SectionTitle from "../global/SectionTitle";

function Experience() {
  // Updated experience data with detailed responsibilities
  const experienceData = [
    {
      company: "Zoho Corporation",
      companyUrl: "https://www.linkedin.com/company/zoho/",
      logo: "/static/logos/zoho-1.svg",
      location: "Chennai, Tamil Nadu, India",
      roles: [
        {
          jobTitle: "Software Developer",
          duration: "July 2023 - Present · Full-time · 2yrs",
          responsibilities: [
            `DRI of 2 products, Implemented a fully asynchronous watermarking pipeline for Zoho Mail using Tesseract OCR + ONNX in Java; scaled to 200k daily requests, reducing inference latency by 40% via thread-pool tuning.`,
            `Focused on backend optimization, improving API response times by over 25%.`,
            `Deployed PII service on-premise for NIC (Govt of India), enforcing Microsoft DLP policies and enabling real-time sensitive data masking.`,
          ],
        },
        {
          jobTitle: "Project Trainee",
          duration: "Feb 2023 - July 2023 · Full-time · 6 mos",
          responsibilities: [
            `Assisted in the development of a web application to streamline internal workflows, focusing on the user interface.`,
            `Contributed to the design and implementation of RESTful APIs for internal tools used by multiple teams.`,
            `Tech Stack - Node.js, Express, MongoDB, AWS, Docker, JavaScript`,
          ],
        },
        {
          jobTitle: "Summer Intern",
          duration: "May 2022 - Aug 2022 · Internship · 2 mos",
          responsibilities: [
            `Assisted in the development of a web application to streamline internal workflows, focusing on the user interface.`,
            `Contributed to the design and implementation of RESTful APIs for internal tools used by multiple teams.`,
            `Tech Stack - Node.js, Express, MongoDB, AWS, Docker, JavaScript`,
          ],
        },
      ],
    },
    {
      company: "ShopBonanza Pvt. Ltd.",
      companyUrl: "https://www.linkedin.com/company/shopbonanza/",
      logo:  "/static/logos/shopbonanza.svg",
      location: "Remote / Dehradun, Uttarakhand, India",
      roles: [
        {
          jobTitle: "Web Developer Intern",
          duration: "Sep 2021 - Nov 2021 · Internship · 3 mos",
          responsibilities: [
            `Developed and maintained web applications for e-commerce platform.`,
            `Worked on MySQL, Java, and other technologies.`,
            `Helped automate business processes and improve user experience.`,
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        Where I’ve made an impact —
      </h2>
      <SectionTitle title="My professional journey so far." />

      <div className="mt-16">
        <div className="relative max-w-5xl mx-auto flex"> {/* <<<< Adjust */}
          {/* Main vertical rod for all experience */}
          {/* <div className="relative" style={{ width: '40px' }}>
            <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-fun-pink-light via-fun-pink to-fun-pink-dark rounded-full shadow-lg opacity-80 -translate-x-1/2" style={{ zIndex: 0 }} />
          </div> */}
          <div className="flex-1">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="mb-16 flex ">
                {/* Company-specific mini-timeline */}
                <div className="relative flex  flex-col items-center mr-8" style={{ width: '56px' }}>
                  {/* Render SVG image as company logo, no box or border */}
                  <div className="relative z-10 mb-2">
                    {/* If exp.logo is an SVG path, render as <img src={exp.logo} ... /> */}
                    <img src={exp.logo} alt={exp.company} className="w-14 h-14" style={{ background: 'none', border: 'none', boxShadow: 'none' }} />
                  </div>
                  {/* Company-specific vertical bar with fading gradient, connected to bottom of image */}
                  <div className="absolute left-1/2 top-14 w-1 h-full bg-gradient-to-b from-fun-pink-light/80 via-fun-pink/60 to-transparent rounded-full -translate-x-1/2" />
                  {/* Dots for each role on the company bar are removed */}
                </div>
                {/* Company and roles */}
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-fun-pink mb-1 drop-shadow">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline hover:text-fun-pink-dark transition-colors group"
                      >
                        {exp.company}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 ml-1 text-fun-pink opacity-80 group-hover:text-fun-pink-dark transition"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          style={{ display: "inline" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" />
                        </svg>
                      </a>
                    </h3>
                    <div className="text-xs text-fun-gray font-monospace">{exp.location}</div>
                  </div>
                  <div className="relative ml-2 md:ml-8 mt-2">
                    <div className="space-y-8">
                      {exp.roles.map((role, rIdx) => (
                        <div key={rIdx} className="flex items-start relative">
                          <div style={{ width: '24px' }} />
                          <div className="flex-1">
                            <div className="font-semibold text-white text-base flex items-center gap-2">
                              {role.jobTitle}
                            </div>
                            <div className="text-xs text-fun-gray mb-2 mt-1 font-monospace">{role.duration}</div>
                            <ul className="list-disc pl-5 text-fun-gray-light text-sm mt-2 space-y-1">
                              {role.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
