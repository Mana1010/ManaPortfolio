import React from "react";
import Home from "./_components/Home";
import About from "./_components/About";
function Page() {
  return (
    <div>
      <Home />
      <div className="bg-[#0D121C] w-full h-[0.100rem]"> </div>
      <About />
    </div>
  );
}

export default Page;
