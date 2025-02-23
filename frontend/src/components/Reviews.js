import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Reviews() {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", comment: "Great service!", rating: 5 },
    { id: 2, name: "Jane Smith", comment: "Very helpful and professional.", rating: 4 },
  ]);
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 1 });
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      return;
    }
    setReviews([...reviews, { ...newReview, id: reviews.length + 1, rating: Number(newReview.rating) }]);
    setNewReview({ name: "", comment: "", rating: 1 });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center">Reviews</h2>
      <ul className="mt-4">
        {reviews.map((review) => (
          <li key={review.id} className="p-2 border-b">
            <p className="font-bold">{review.name}</p>
            <p>{review.comment}</p>
            <p className="text-yellow-500">Rating: {"⭐".repeat(review.rating)}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded mb-3"
          value={newReview.name}
          onChange={handleChange}
        />
        <textarea
          name="comment"
          placeholder="Your Review"
          className="w-full p-2 border rounded mb-3"
          value={newReview.comment}
          onChange={handleChange}
        />
        <select
          name="rating"
          className="w-full p-2 border rounded mb-3"
          value={newReview.rating}
          onChange={handleChange}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num} Stars</option>
          ))}
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit Review</button>
      </form>
    </div>
  );
}

export default Reviews;