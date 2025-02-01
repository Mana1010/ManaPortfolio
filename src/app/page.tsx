import React from "react";
import Home from "./_components/Home";
import About from "./_components/About";
import MyWorks from "./_components/MyWorks";
function Page() {
  return (
    <div className="w-full">
      <Home />

      <About />
      <MyWorks />
    </div>
  );
}

export default Page;
