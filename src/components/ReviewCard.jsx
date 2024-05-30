import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="max-w-[300px] min-h-[300px] flex flex-col items-center">
      <div>
        <img
          src={imgURL}
          alt="customer"
          className="rounded-full object-cover w-[120px] h-[120px]"
        />
      </div>
      <p className="text-center text-slate-gray font-montserrat mt-5">
        {feedback}
      </p>
      <div className="flex items-center gap-x-2 mt-3">
        <img src={star} alt="" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-4 text-2xl font-bold font-palanquin">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
