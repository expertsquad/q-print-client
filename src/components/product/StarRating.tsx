import React from "react";
import { IconStarFilled } from "@tabler/icons-react";

const StarRating = ({ rating }: number | any) => {
  const maxRating = 5;
  const filledStars = Math.round(rating);
  const emptyStars = maxRating - filledStars;

  if (isNaN(filledStars) || isNaN(emptyStars)) {
    return null;
  }

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(filledStars)]?.map((_, index) => (
        <IconStarFilled
          key={index}
          className="text-[#E73C17] w-3.5 h-3.5 md:w-4.5 md:h-4.5"
        />
      ))}
      {[...Array(emptyStars)]?.map((_, index) => (
        <IconStarFilled
          key={index}
          className="text-gray-300 w-3.5 h-3.5 md:w-4.5 md:h-4.5"
        />
      ))}
    </div>
  );
};

export default StarRating;
