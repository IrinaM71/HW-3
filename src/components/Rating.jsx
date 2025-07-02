import { useState } from "react";

const ratingList = [
  "https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png",

  "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",

  "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",

  "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
];

const ratingLabels = ["Отлично", "Хорошо", "Приемлимо", "Плохо"];
const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="rating-container">
      <h2>Оценка</h2>
      <img
        src={ratingList[ratingValue]}
        alt={"Рейтинг: ${ratingLabels[ratingValue]}"}
        className="rating-image"
      />
      <div className="button-group">
        {ratingLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => setRatingValue(index)}
            className="rating-button"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;
