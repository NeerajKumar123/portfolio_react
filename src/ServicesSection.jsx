import React from "react";

const services = [
  {
    icon: "bi-briefcase",
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  },
  {
    icon: "bi-card-checklist",
    title: "Dolor Sitema",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
  },
  {
    icon: "bi-bar-chart",
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: "bi-binoculars",
    title: "Magni Dolores",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    icon: "bi-brightness-high",
    title: "Nemo Enim",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
  },
  {
    icon: "bi-calendar4-week",
    title: "Eiusmod Tempor",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services section py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Services</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item flex p-6 bg-white shadow-lg rounded-lg items-center space-x-4 "
            >
              {/* <div className="icon text-4xl text-blue-600">
                <i className={`bi ${service.icon}`}></i>
              </div> */}
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
