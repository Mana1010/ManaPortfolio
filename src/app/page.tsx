import React from "react";
import Home from "./_components/Home";
import About from "./_components/About";
import MyProjects from "./_components/MyProjects";
function Page() {
  return (
    <div className="w-full h-screen">
      <div className=" main-background">
        <Home />
        <About />
      </div>
      <MyProjects />
    </div>
  );
}

export default Page;
