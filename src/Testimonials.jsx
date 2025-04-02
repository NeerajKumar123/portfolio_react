import React from "react";

const testimonials = [
  {
    name:"JP Canth",
    image: "src/assets/jpcanth.jpg",
    designation: "Entrepreneur, Canada",
    description:
      "Neeraj is a highly driven individual who is ready to go above and beyond the call of duty to get the project done. Neeraj is not afraid to take on challenging work, and taps into his resources to find solutions to complex problems. I have not faced a situation where Neeraj says that something cannot be done. He has a LET ME FIND A SOLUTION attitude. Looking forward to working on more projects with Neeraj",
  },
  {
    name:"JP Canth",
    image: "src/assets/jpcanth.jpg",
    designation: "Entrepreneur, Canada",
    description:
      "Neeraj is a highly driven individual who is ready to go above and beyond the call of duty to get the project done. Neeraj is not afraid to take on challenging work, and taps into his resources to find solutions to complex problems. I have not faced a situation where Neeraj says that something cannot be done. He has a LET ME FIND A SOLUTION attitude. Looking forward to working on more projects with Neeraj",
  },
  {
    name:"JP Canth",
    image: "src/assets/jpcanth.jpg",
    designation: "Entrepreneur, Canada",
    description:
      "Neeraj is a highly driven individual who is ready to go above and beyond the call of duty to get the project done. Neeraj is not afraid to take on challenging work, and taps into his resources to find solutions to complex problems. I have not faced a situation where Neeraj says that something cannot be done. He has a LET ME FIND A SOLUTION attitude. Looking forward to working on more projects with Neeraj",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((service, index) => (
            <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm mx-auto">
            <p className="text-gray-600 italic relative">
              {service?.description}
            </p>
            <img
              src={service?.image}
              alt="John Larson"
              className="w-20 h-20 rounded-full mx-auto mt-4 border-2 border-blue-500 object-cover"
            />
            <h3 className="text-lg font-semibold mt-2">{service?.name}</h3>
            <h4 className="text-gray-500 text-sm">{service?.designation}</h4>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
