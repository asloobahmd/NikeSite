import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container p-3 flex flex-col justify-center items-center md:flex-row gap-x-2 gap-y-3">
        {/* Text section */}
        <div className="w-full justify-center items-start md:w-1/2">
          <h2 className="text-[35px] text-center md:text-left lg:text-5xl font-palanquin font-bold">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red">Quality </span> Shoes
          </h2>

          <p className="text-slate-gray text-lg mt-4 md:mt-7 text-justify md:text-left  md:w-[90%]">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <br />
          <p className="text-slate-gray text-lg mb-7 md:mb-10 text-justify md:text-left w-full md:w-[90%]">
            Our dedication to detail and excellence ensures your satisfaction
          </p>

          <div className="flex justify-center md:justify-start">
            <Button label="View details" />
          </div>
        </div>

        {/* img section */}
        <div className="w-full md:w-1/2 max-h-[450px]">
          <img
            src={shoe8}
            alt=""
            className="w-full max-md:h-[450px] md:h-[440px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
