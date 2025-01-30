import React from "react";
import Home from "./_components/Home";
import About from "./_components/About";
import MyProjects from "./_components/MyProjects";
function Page() {
  return (
    <div className="w-full h-screen">
      <Home />
      <div className="about-background">
        <About />
        <MyProjects />
      </div>
    </div>
  );
}

export default Page;
