import React, { useState, useMemo } from "react";
import Header from "./Header";
import FilterBar from "./FilterBar";
import FeedbackList from "./FeedbackList";
import Feedback from "../../assets/feedback.jpg";
import { useTheme } from "../../context/ThemeContext";

const feedbackData = [
  {
    id: 1,
    name: "Ronald Richards",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    rating: 4,
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ronald Richards",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    rating: 4,
  },
  {
    id: 4,
    name: "Savannah Nguyen",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ronald Richards",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    rating: 4,
  },
  {
    id: 6,
    name: "Savannah Nguyen",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 2,
  },
];

export default function App() {
  const { darkMode } = useTheme();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = useMemo(() => {
    const q = search.toLowerCase().trim();
    return feedbackData.filter((f) => {
      const matchesSearch =
        q === "" ||
        f.name.toLowerCase().includes(q) ||
        (f.text && f.text.toLowerCase().includes(q));
      const matchesFilter =
        filter === "All" ? true : f.rating === Number(filter);
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <>
      <Header />
      <div
        className={`p-6 max-w-6xl mx-auto -mt-4
          ${darkMode ? "bg-[#191F36] text-white" : "bg-gray-100 text-gray-800"}
        `}
      >
        <FilterBar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />
        <div className="mt-4 h-[400px] overflow-y-scroll flex">
          {filteredData.length > 0 ? (
            <FeedbackList feedbacks={filteredData} />
          ) : (
            <div className="flex flex-col ml-100 mt-20 items-center">
              <img
                src={Feedback}
                alt="No Feedback"
                className="w-50 h-50 opacity-70"
              />
              <p
                className={`mt-4 font-medium ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                No feedback found
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
