//everything made by ai. just gonna used this for reference and practice.

import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={star <= rating ? "star on" : "star"}
          onClick={() => setRating(star)}
          aria-label={`${star} stars`}
        >
          ★
        </button>
      ))}
      <p>{rating === 0 ? "Not rated yet" : `You rated it ${rating} / 5`}</p>
    </div>
  );
}