import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white max-w-[415px] px-6 py-12 rounded-xl shadow-xl">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={service.imgURL} alt={service.label} />
      </div>
      <h3 className="mt-4 font-bold text-xl font-palanquin">{service.label}</h3>
      <p className="mt-2 text-slate-gray">{service.subtext}</p>
    </div>
  );
};

export default ServiceCard;
