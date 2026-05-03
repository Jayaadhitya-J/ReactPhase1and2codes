import { useState } from "react";
import "./StarRatting.css";

function StarRatting() {
    const [rating, setRating] = useState(0);

    function handleClick(value) {
        setRating(value);
    }

    return (
        <div className="app-section star-rating-wrapper">
            <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        className={star <= rating ? "star filled" : "star"}
                        onClick={() => handleClick(star)}
                        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                    >
                        &#9733;
                    </button>
                ))}
            </div>
            <p>Rating: {rating}/5</p>
        </div>
    );
}

export default StarRatting;
