import React, { useEffect, useRef } from "react";

export default function InstructorCard({ item }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm fade-in-up"
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <img
          src={item.avatar}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Details */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-sm">{item.name}</div>
              <div className="text-xs text-gray-500">{item.gender}</div>
            </div>

          </div>

          {/* Extra Info */}
          <div className="mt-3 text-xs text-gray-600 space-y-1">
            {/* <div>Instructor ID: {item.instructorId}</div> */}
            <div>Specialization: {item.role}</div>
            <div>Experience: {item.experience}</div>
            {/* <div>Joined Date: {item.joined}</div> */}
            {/* Status Badge (like table) */}
            <div>Status:

            <span
              className={` ml-1 px-3 py-1 text-xs font-medium rounded-full ${
                item.active
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
              }`}
              >
              {item.active ? "● Active" : "● Inactive"}
            </span>
              </div>
          </div>

          {/* Action Button */}
          <div className="mt-3 justify-center items-center flex">
            <button 
              className={`px-4 py-1 text-sm rounded-full transition ${
                item.active
                  ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
