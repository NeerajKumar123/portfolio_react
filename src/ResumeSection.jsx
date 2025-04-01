const resumeData = {
    summary: {
      name: "Brandon Johnson",
      description:
        "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
      contact: [
        "Portland par 127, Orlando, FL",
        "(123) 456-7891",
        "alice.barkley@example.com",
      ],
    },
    education: [
      {
        degree: "Master of Fine Arts & Graphic Design",
        year: "2015 - 2016",
        institution: "Rochester Institute of Technology, Rochester, NY",
        description:
          "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti.",
      },
      {
        degree: "Bachelor of Fine Arts & Graphic Design",
        year: "2010 - 2014",
        institution: "Rochester Institute of Technology, Rochester, NY",
        description:
          "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis.",
      },
    ],
    experience: [
      {
        title: "Senior Graphic Design Specialist",
        year: "2019 - Present",
        company: "Experion, New York, NY",
        responsibilities: [
          "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
          "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
          "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
          "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
        ],
      },
      {
        title: "Graphic Design Specialist",
        year: "2017 - 2018",
        company: "Stepping Stone Advertising, New York, NY",
        responsibilities: [
          "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).",
          "Managed up to 5 projects or tasks at a given time while under pressure",
          "Recommended and consulted with clients on the most appropriate graphic design",
          "Created 4+ design presentations and proposals a month for clients and account managers",
        ],
      },
    ],
  };
  
  const ResumeSection = () => {
    return (
      <section id="resume" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Resume</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
              quidem.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Summary & Education */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">Summary</h3>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
                <h4 className="text-xl font-bold">{resumeData.summary.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{resumeData.summary.description}</p>
                <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                  {resumeData.summary.contact.map((item, index) => (
                    <li key={index}>📍 {item}</li>
                  ))}
                </ul>
              </div>
  
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mt-8">
                Education
              </h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <h5 className="text-gray-600 dark:text-gray-400">{edu.year}</h5>
                  <p className="text-gray-500 dark:text-gray-300 mt-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
  
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                Professional Experience
              </h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <h5 className="text-gray-600 dark:text-gray-400">{exp.year}</h5>
                  <p className="text-gray-500 dark:text-gray-300 mt-2">{exp.company}</p>
                  <ul className="mt-4 list-disc pl-5 text-gray-600 dark:text-gray-300">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ResumeSection;
  