import { IconStar } from "@tabler/icons-react";

interface IStarRating {
  rating: string | number | any;
}

const ReviewRating = ({ rating }: IStarRating) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, starIndex) => (
        <span
          key={starIndex}
          className={`
                  ${
                    starIndex < rating
                      ? "text-[#E73C17]"
                      : "text-[#ccc] bg-transparent"
                  }
                `}
        >
          <IconStar
            fill={starIndex < rating ? "#E73C17" : "currentColor"}
            className="w-3.5 h-3.5 md:w-4.5 md:h-4.5"
          />
        </span>
      ))}
    </div>
  );
};

export default ReviewRating;
