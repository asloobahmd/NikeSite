import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section className="py-14 md:py-28">
      <div className="container p-3">
        <div>
          <h2 className="text-[35px] font-bold font-palanquin">
            Our <span className="text-coral-red"> Popular </span> Products
          </h2>
          <p className="mt-5 text-slate-gray font-montserrat sm:w-1/2 lg:w-2/5">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-9 md:mt-10 gap-x-6 gap-y-6 max-sm:place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item, index) => (
            <PopularProductCard key={index} card={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
