import React from "react";
import { IconStarFilled } from "@tabler/icons-react";

const StarRating = ({ rating }: any) => {
  const maxRating = 5;
  const filledStars = Math.round(rating);
  const emptyStars = maxRating - filledStars;

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, index) => (
        <IconStarFilled
          key={index}
          className="text-[#E73C17] md:h-3 md:w-3 lg:h-3 lg:w-3 h-2 w-2"
        />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <IconStarFilled
          key={`empty-${index}`}
          className="text-gray-300 md:h-3 md:w-3 lg:h-3 lg:w-3 h-2 w-2"
        />
      ))}
    </div>
  );
};

export default StarRating;
