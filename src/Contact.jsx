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

const Contact = () => {
  return (
    <section id="testimonials" className="testimonials section py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>
      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section - Contact Info & Map */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-600"><strong>Address:</strong> A108 Adam Street, New York, NY 535022</p>
          <p className="text-gray-600"><strong>Call Us:</strong> +1 5589 55488 55</p>
          <p className="text-gray-600"><strong>Email Us:</strong> info@example.com</p>
          <div className="mt-4">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=New+York"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
