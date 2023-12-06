import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Mumbai",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];
  return (
    <div className="flex max-sm:flex-wrap max-sm:gap-2 items-center justify-around mb-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium cursor-pointer max-sm:border-2 max-sm:px-1 max-sm:rounded-lg"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
