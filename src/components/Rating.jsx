import React, { useState } from "react";
const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = [
    "https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png",

    "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",

    "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",

    "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
  ];

  const handleRatingValue = (value) => {
    setRatingValue(value);
  };

  return (
    <div>
      <h2>Оценка</h2>
      <img
        src={ratingList[ratingValue]}
        alt={"Рейтинг: ${ratingValue}"}
        style={{ width: "150px", height: "150px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleRatingValueratingChange(1)}>Плохо</button>
        <button onClick={() => handleRatingValueratingChange(2)}>
          Приемлимо
        </button>
        <button onClick={() => handleRatingValueratingChange(3)}>Хорошо</button>
        <button onClick={() => handleRatingValueratingChange(4)}>
          Отлично
        </button>
      </div>
    </div>
  );
};

export default Rating;
