import { useState } from "react";
import { Zodiac } from "../../Constants/images";

const UpdateRate = () => {
  const [movie, setMovie] = useState({
    title: "Zodiac",
    ratings: 7.8,
  });

  const [rate, setRate] = useState(movie.ratings);

  const increaseRating = (e) => {
    e.preventDefault();
    setRate((rate) => rate + 0.1);
    setMovie({ ...movie, ratings: rate.toFixed(1) });
  };
  return (
    <div>
      <h1>Movie: {movie.title}</h1>
      <img src={Zodiac} alt="" />
      <p>Ratings: {rate.toFixed(1)}</p>
      <button onClick={increaseRating}>Increase Rating</button>
    </div>
  );
};

export default UpdateRate;
