import akshi from "./assets/akshi.jpeg"

const AboutSection = () => {
    return (
      <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
        {/* Section Title */}
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
            alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
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
              UI/UX Designer & Web Developer.
            </h2>
            <p className="italic text-gray-600 dark:text-gray-300 py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
  
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Birthday:</strong> <span>1 May 1995</span></li>
                <li><strong>Website:</strong> <span>www.example.com</span></li>
                <li><strong>Phone:</strong> <span>+123 456 7890</span></li>
                <li><strong>City:</strong> <span>New York, USA</span></li>
              </ul>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Age:</strong> <span>30</span></li>
                <li><strong>Degree:</strong> <span>Master</span></li>
                <li><strong>Email:</strong> <span>email@example.com</span></li>
                <li><strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
  
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
              Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore.
              Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui
              quia repellendus itaque neque.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  