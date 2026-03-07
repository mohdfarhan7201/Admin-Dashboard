import React from "react";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackList({ feedbacks }) {
  return (
    <div>
      {feedbacks.map((f) => (
        <FeedbackCard
          key={f.id}
          name={f.name}
          image={f.image}
          text={f.text}
          rating={f.rating}
        />
      ))}
    </div>
  );
}
