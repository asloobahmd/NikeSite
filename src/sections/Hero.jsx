import Button from "../components/Button";
import { useState } from "react";

import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [currentBigImg, setCurrentBigImg] = useState(bigShoe1);

  // const changeImage = (shoe) => {
  //   setCurrentBigImg(shoe);
  // };

  return (
    <section className="pb-14 px-3">
      <div className="container min-h-screen  flex flex-col items-center justify-center lg:flex-row gap-x-5 gap-y-6">
        <div className="pt-6 w-full lg:w-[45%] flex flex-col items-center lg:items-start">
          <p className="text-2xl text-coral-red font-medium">
            Our Summer collections
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl text-center lg:text-left font-bold font-palanquin mt-6 sm:mt-10">
            <span className="whitespace-nowrap bg-[#FAF9F6] md:relative lg:pr-10 z-10 inline-block">
              The New Arrival
            </span>
            <br />
            <span className="inline-block mt-3 sm:mt-5 text-coral-red">
              Nike
            </span>{" "}
            Shoes
          </h1>

          <p className="mt-5 md:mt-6 text-center lg:text-left mb-5 md:mb-8 lg:mb-10">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <Button label={"click me"} iconURL={arrowRight} />

          <div className="flex gap-x-7 mt-6 md:mt-10">
            {statistics.map((item, index) => (
              <div key={index}>
                <p className="text-3xl sm:text-5xl font-bold font-palanquin">
                  {item.value}
                </p>
                <p className="font-montserrat text-slate-gray">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="w-full lg:w-[55%] relative flex flex-col items-center justify-center bg-primary bg-hero bg-cover bg-center lg:min-h-screen pt-10 pb-32">
          <img src={currentBigImg} alt="Big Shoe" className="" />

          <div className="absolute bottom-[-5%] lg:left-[12%] flex items-center justify-center gap-x-2 md:gap-x-4">
            {shoes.map((Shoe, index) => (
              <ShoeCard
                key={index}
                image={Shoe}
                changeCurrentImage={(shoe) => setCurrentBigImg(shoe)}
                currentBigImg={currentBigImg}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
