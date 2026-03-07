import React from "react";
import Sidebar from "../Sidebar";
import Header from "./Header";
import WelcomeBox from "./WelcomeBox";
import StatsCards from "./StatsCards";
import ActiveStatusChart from "./ActiveStatusChart";
import TotalUsersChart from "./TotalUsersChart";
import GoalProgressChart from "./GoalProgressChart";
import InstructorTable from "./InstructorTable";
import Slidebar from "../Sidebar";

export default function Dashboard() {
  return (
    <>
    {/* <Slidebar/> */}
      <main className="flex-1 p-4 overflow-auto ">
        <Header />
        <WelcomeBox />
        <StatsCards />
        <div className="grid grid-cols-3 gap-6 mb-10">
          <ActiveStatusChart />
          <TotalUsersChart />
        </div>
        <GoalProgressChart />
        <InstructorTable />
      </main>
    </>
  );
}
