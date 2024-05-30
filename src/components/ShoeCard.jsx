import React from "react";

const ShoeCard = ({ image, changeCurrentImage, currentBigImg }) => {
  return (
    <div
      onClick={() => changeCurrentImage(image.bigShoe)}
      className={`cursor-pointer rounded-xl overflow-hidden ${
        currentBigImg == image.bigShoe ? "border-2 border-coral-red" : ""
      }`}
    >
      <div className=" h-[84px] w-[100px] md:h-[130px] md:w-[150px] bg-primary bg-card bg-cover bg-center">
        <img
          src={image.thumbnail}
          alt="thumbnail image"
          className="h-full w-full p-2"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
