import { useEffect, useState } from "react";

const statsData = [
  { icon: "bi-emoji-smile", end: 232, title: "Happy Clients", subtitle: "consequuntur quae" },
  { icon: "bi-journal-richtext", end: 521, title: "Projects", subtitle: "adipisci atque cum quia aut" },
  { icon: "bi-headset", end: 1453, title: "Hours Of Support", subtitle: "aut commodi quaerat" },
  { icon: "bi-people", end: 32, title: "Hard Workers", subtitle: "rerum asperiores dolor" },
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
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <i className={`bi ${stat.icon} text-4xl text-indigo-600 dark:text-indigo-400`}></i>
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
