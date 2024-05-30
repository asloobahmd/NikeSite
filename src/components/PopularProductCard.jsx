import { star } from "../assets/icons";

const PopularProductCard = ({ card }) => {
  return (
    <div className="shadow-lg max-sm:w-[280px] w-full rounded-3xl overflow-hidden">
      {/* image section */}
      <div className="">
        <img src={card.imgURL} alt="" className="w-full" />
      </div>

      {/* Details section */}
      <div className="p-4 pt-6">
        <div className="flex items-center gap-x-2 mb-3">
          <img src={star} alt="rating icon" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="font-palanquin font-bold mb-2">{card.name}</h3>
        <p className="font-montserrat font-semibold text-coral-red">
          {card.price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
