import React from "react";
import { FiImage, FiVideo, FiStar } from "react-icons/fi";

export default function TrainerCard({ trainer }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <img src={trainer.image} alt={trainer.name} className="w-20 h-20 rounded-full mb-3" />
      <h4 className="font-semibold">{trainer.name}</h4>
      <p className="text-gray-500">{trainer.role}</p>
      <div className="mt-3 text-sm text-gray-600 flex flex-col gap-1">
        <p className="flex items-center gap-2"><FiImage /> {trainer.photos} Photos</p>
        <p className="flex items-center gap-2"><FiVideo /> {trainer.videos} Videos</p>
        <p className="flex items-center gap-2"><FiStar /> {trainer.feedback} Avg Feedback</p>
      </div>
    </div>
  );
}
