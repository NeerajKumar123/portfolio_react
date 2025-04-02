import React from "react";
import { BiMobileAlt, BiCloudUpload ,BiLogoReact, BiShieldPlus,BiBowlRice} from "react-icons/bi";

const services = [
  {
    icon: <BiMobileAlt size={24} />,
    title: "Mobile App Development",
    description:
      "Specialize in developing high-performance mobile applications tailored to user needs and business goals.",
  },
  {
    icon:  <BiLogoReact size={24} />,
    title: "Web App Development",
    description: 
      "Creating fast, scalable, and interactive web applications with modern technologies.",
  },
  {
    icon: <BiCloudUpload size={24} />,
    title: "Backend Development",
    description:
      "Providing robust backend solutions to support scalable and secure applications.",
  },
  {
    icon: <BiShieldPlus size={24} />,
    title: "Deployment & Maintenance",
    description:
      "Publishing apps to the App Store, Play Store, and Web platforms. Deploying apps on AWS, DigitalOcean, Vercel, Netlify, and Firebase. Regular updates, bug fixes, and performance optimization.",
  },
  {
    icon: <BiBowlRice size={24} />,
    title: "End-to-End Automation for Development, Testing, and CI/CD Pipelines",
    description:
      "Specialize in implementing fully automated workflows that streamline the development, testing, and deployment processes. By integrating CI/CD pipelines, I ensure faster release cycles, improved code quality, and seamless deployments",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Services</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item flex p-6 bg-white shadow-lg rounded-lg items-center space-x-4 "
            >
              <div className="icon text-4xl text-blue-600">
                {service?.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
