import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-pale-blue">
      <div className="container p-3 flex flex-col items-center justify-center gap-y-[70px]">
        {/* text */}
        <div className="flex flex-col items-center">
          <h3 className="text-center text-4xl font-bold font-palanquin">
            What Our
            <span className="text-coral-red"> Customers </span>
            Say?
          </h3>
          <p className="mt-5 text-lg text-slate-gray text-center md:w-[460px]">
            Hear genuine stories from our satisfied customers about their
            exceptional experiences with us.
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-10 md:gap-x-[120px] lg:gap-x-[200px] gap-y-12">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
