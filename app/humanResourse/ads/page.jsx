"use client";

import React from "react";

import Jobs from "../../../components/Jobs";
import JobProvider from "../../context/JobProvider";

const Ads = () => {
  return (
    <JobProvider>
      <div className="lg:container mx-auto px-4 py-8 text-text">
        <Jobs />
      </div>
    </JobProvider>
  );
};

export default Ads;
