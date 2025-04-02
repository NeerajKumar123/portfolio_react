import akshi from "./assets/akshi.jpeg"

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Senior Frontend & Mobile Developer with 12+ years of experience building high-performance, scalable, and user-friendly applications. My expertise spans React.js, React Native, and iOS (Objective-C), with a strong focus on clean architecture, UI/UX, and performance optimization.
          From startups to enterprise solutions, I’ve led projects from ideation to deployment, ensuring seamless experiences across web and mobile platforms. Passionate about cutting-edge technologies and innovation, I thrive on solving complex challenges and delivering pixel-perfect solutions.
          Let’s build something incredible! 🚀
        </p>
      </div>

      {/* About Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            src={akshi}
            alt="Profile"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
           Mobile App and Web App Developer
          </h2>
          <p className="italic text-gray-600 dark:text-gray-300 py-3">
          Experienced Mobile & Web App Developer specializing in React.js, React Native, and iOS (Objective-C). Passionate about building high-performance, scalable, and user-friendly applications. Focused on clean code, UI/UX excellence, and seamless user experiences. 🚀
          </p>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Birthday:</strong> <span>February, 1989</span></li>
              <li><strong>Website:</strong> <span>www.examplewebsite.com</span></li>
              <li><strong>Phone:</strong> <span>+91 8010993612</span></li>
              <li><strong>City:</strong> <span>New Delhi, India</span></li>
            </ul>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Degree:</strong> <span>Batchlors in Maths, Batchlor in Computer Science and Engineering</span></li>
              <li><strong>Email:</strong> <span>neerajkiet@gmail.com</span></li>
              <li><strong>Freelance:</strong> <span>Available</span></li>
            </ul>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mt-4 italic">
          Choosing duties and working with hardships and difficulties is truly an option. Anyone can achieve and possess everything. No accusation of pain happens officially over time. And everything belongs to him. The desire to command reaches its peak in duties because of this. It is established and connected because it repels and does not retreat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
