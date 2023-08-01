import React from "react";
import { IoIosPartlySunny } from "react-icons/io";
import NavButton from "./navButton/NavButton";

function getGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function Kdashboard() {
  const greeting = getGreeting();

  return (
    <>
      <h4 className="pt-4 pb-2 text-center font-semibold text-xl flex justify-center">
        <IoIosPartlySunny className="mr-2 self-center" /> {greeting}
      </h4>
      <NavButton />
    </>
  );
}

export default Kdashboard;
