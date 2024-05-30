import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="py-20">
      <div className="container p-3 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-10">
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl sm:text-4xl leading-[50px] md:leading-[68px] lg:max-w-md font-palanquin font-bold">
            Sign Up for
            <span className="text-coral-red"> Updates </span>& Newsletter
          </h3>
        </div>

        <div className="relative w-full md:w-[440px] flex justify-center">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="py-4 px-6 w-full  rounded-full focus:outline-none border-2 border-gray-200"
          />
          <button className="bg-coral-red py-3 px-6 right-[8px]  top-[50%] -translate-y-[50%] font-montserrat text-lg leading-none text-white border-coral-red rounded-full absolute">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
