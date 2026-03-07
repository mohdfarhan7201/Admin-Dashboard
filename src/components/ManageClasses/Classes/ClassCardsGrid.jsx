import React from "react";
import ClassCard from "./ClassCard";

const ClassCardsGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {cards.map((card, idx) => (
        <ClassCard key={idx} {...card} />
      ))}
    </div>
  );
};

export default ClassCardsGrid;
