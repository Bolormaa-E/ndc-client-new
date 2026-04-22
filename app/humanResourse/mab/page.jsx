
'use client'
import React from "react";

function Mab() {
  return (

    <div className="lg:container mx-auto px-4 py-8 md:flex-row  md:gap-10 ">
        <h1 className="uppercase text-center font-bold text-text text-lg">
            Мэдээллийн аюулгүй байдлын бодлого
        </h1>

    <div className="py-4 grid gap-8">
        <div>
            <iframe className="w-full  aspect-[3/2]" src="/pdf/mab.pdf" title="testPdf" />
        </div>

  </div>
    </div>
  );
}

export default Mab;

