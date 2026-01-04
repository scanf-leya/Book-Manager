import { useState } from "react";
import { Star } from "./star";

type RatingsProps = {
  defaultRating: number;
};

export const Ratings = ({
  defaultRating,
}: RatingsProps) => {
  const [currentRatings, setCurrentRatings] = useState<number>(defaultRating);

  const handleOnClick = (
    e: React.MouseEvent<HTMLSpanElement>,
    index: number
  ) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();

    const fraction = (e.clientX - left) / width > 0.5 ? 1 : 0.5;

    const rating = index + fraction;

    setCurrentRatings(rating);
  };

  const getWidth = (index: number): number => {
    if (index >= currentRatings) return 0;
    return Math.min(1, currentRatings - index);
  };

  return (
    <div className="ratings flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          onClick={(e) => handleOnClick(e, index)}
          className="cursor-pointer"
        >
          <Star percent={getWidth(index)} />
        </span>
      ))}
    </div>
  );
};
