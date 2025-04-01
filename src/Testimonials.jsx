import React from "react";

const testimonials = [
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((service, index) => (
            <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm mx-auto">
            <p className="text-gray-600 italic relative">
              <span className="text-blue-500 text-3xl font-bold">“</span>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <span className="text-blue-500 text-3xl font-bold">”</span>
            </p>
            <img
              src="/src/assets/akshi.jpeg"
              alt="John Larson"
              className="w-20 h-20 rounded-full mx-auto mt-4 border-2 border-blue-500 object-cover"
            />
            <h3 className="text-lg font-semibold mt-2">John Larson</h3>
            <h4 className="text-gray-500 text-sm">Entrepreneur</h4>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
