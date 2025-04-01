import { useEffect, useState } from "react";

const skillsData = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 75 },
  { name: "PHP", value: 80 },
  { name: "WordPress/CMS", value: 90 },
  { name: "Photoshop", value: 55 },
];

const SkillsSection = () => {
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress.map((p, index) =>
          p < skillsData[index].value ? p + 1 : p
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="w-full">
              <span className="block font-semibold text-gray-800 dark:text-white mb-2">
                {skill.name} <span className="float-right">{progress[index]}%</span>
              </span>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-indigo-600 dark:bg-indigo-400 h-4 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
