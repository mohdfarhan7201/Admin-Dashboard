import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackAnalytics from "./FeedbackAnalytics";
import QuarterGoalPage from "./QuarterGoalPage";
import FeedbackGrowthPage from "./FeedbackGrowthPage";
import NegativeFeedbackPage from "./NegativeFeedbackPage";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<FeedbackAnalytics />} />
        <Route path="/quarter-goal" element={<QuarterGoalPage />} />
        <Route path="/feedback-growth" element={<FeedbackGrowthPage />} />
        <Route path="/negative-feedback" element={<NegativeFeedbackPage />} />
      </Routes>
   
  );
}

export default App;
