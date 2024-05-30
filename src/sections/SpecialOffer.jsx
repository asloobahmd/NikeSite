import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="py-16">
      <div className="container p-3 flex gap-x-10 gap-y-11 flex-col-reverse md:flex-row items-center justify-center">
        {/* img section */}
        <div className="w-full md:w-1/2">
          <img src={offer} alt="" />
        </div>

        {/* text section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold font-palanquin text-center md:text-left">
            <span className="text-coral-red">Special </span>
            Offer
          </h2>
          <p className="mt-4 text-slate-gray text-justify md:text-left">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 text-slate-gray text-justify md:text-left">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>

          <div className="mt-11 flex justify-center md:justify-start gap-x-5">
            <Button label={"Shop now"} iconURL={arrowRight} />
            <Button
              label={"Learn more"}
              backgroundColor={"bg-white"}
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
