import { useEffect, useState } from "react";
import { BiSmile,BiLogoProductHunt,BiHeadphone,BiGroup} from "react-icons/bi";

const statsData = [
  { icon: <BiSmile size={50} color="white" />, end: 20, title: "Happy Clients", subtitle: "Consequences that follow." },
  { icon: <BiLogoProductHunt size={50} color="white" />, end: 30, title: "Projects", subtitle: "To obtain and with because or." },
  { icon: <BiHeadphone  size={50} color="white" />, end: 500, title: "Hours Of Support", subtitle: "Or a convenient claim" },
  { icon: <BiGroup  size={50} color="white" />, end: 10, title: "Hard Workers", subtitle: "Harsh suffering of matters" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => (count < statsData[index].end ? count + 1 : count))
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md justify-center">
               <div className="justify-center flex">
               {stat.icon}
                </div>
              <span className="block text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {counts[index]}
              </span>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>{stat.title}</strong> <span className="block text-sm">{stat.subtitle}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
