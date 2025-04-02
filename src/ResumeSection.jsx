const resumeData = {
    summary: {
      name: " iOS & React Native Expert | Mobile App developer",
      description:
        "Passionate and results-driven iOS & React Native Developer with extensive experience in designing, developing, and optimizing high-performance mobile applications. Adept at leveraging cutting-edge technologies to build scalable, intuitive, and visually engaging apps.",
      contact: [
        "Building 23 ,Gurgaon sector 29 Haryana ",
        "+91-8010993612",
        "neerajkiet@gmail.com",
      ],
    },
    education: [
      {
        degree: "B.Tech (Computer Science & Engineering)",
        year: "Jul 2008 – Jul 2011 | Ghaziabad, UP",
        institution: "Krishna Institute of Engineering & Technology (GBTU)",
        description:
          "Earned a B.Tech in Computer Science from KIET Engineering College, demonstrating a strong foundation in software development and technology.",
      },
      {
        degree: "Bachelor of Science (Mathematics)",
        year: "2010 - 2014",
        institution: "Meerut college, Meerut",
        description:
          "Earned a B.Sc. in Mathematics from Meerut College, Meerut, showcasing strong analytical and problem-solving skills.",
      },
    ],
    experience: [
      {
        title: "Lead Engineer Mobile Apps and Web Apps",
        year: "2022 - Present",
        company: "Tata Consultancy Services, India",
        responsibilities: [
          "Leading a team of professionals through the entire project lifecycle—from requirement gathering and design to development and delivery—ensuring seamless execution, optimal performance, and high-quality outcomes.",
        ],
      },
      {
        title: "Lead Engineer Mobile Apps",
        year: "2015 - 2022",
        company: "Polibazaar.com, India",
        responsibilities: [
          "Role: Served as Mobile Apps Tech Lead at Policybazaar.com.",
          "Team Leadership: Led a team in developing and optimizing iOS (Objective-C) and React Native applications.",
          "Business Implementation: Played a key role in implementing business requirements and managing app data logging.",
          "Strategic Enhancements: Drove strategic improvements to enhance app performance and user experience.",
          "Featured App: Contributed to the Paisabazaar mobile app, which was featured on the App Store.",
          "Award-Winning Innovation: Led the development of PB-Inspect, recognized as the Most Innovative App by IFTA 2018 for its impact on car insurance processes."
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
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Summary & Education */}
            <div>
              <h3 className="text-2xl font-semibold text-white">Summary</h3>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
                <h4 className="text-xl font-bold text-white">{resumeData.summary.name}</h4>
                <p className="text-white mt-2">{resumeData.summary.description}</p>
                <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                  {resumeData.summary.contact.map((item, index) => (
                    <li key={index}>📍 {item}</li>
                  ))}
                </ul>
              </div>
  
              <h3 className="text-2xl font-semibold text-white mt-8">
                Education
              </h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <h5 className="text-gray-600 dark:text-gray-400">{edu.year}</h5>
                  <p className="text-gray-500 dark:text-gray-300 mt-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
  
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Professional Experience
              </h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
                  <h4 className="text-xl font-bold text-white">{exp.title}</h4>
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
  