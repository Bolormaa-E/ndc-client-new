'use client'
import React from "react";

function StrategicPlan() {
  return (
    
    <div className="lg:container mx-auto px-4 py-8 md:flex-row  md:gap-10 ">
              <h1 className="uppercase text-center font-bold text-text text-lg">
            Компанийн Стратеги төлөвлөгөө, биелэлт
        </h1>
            <div className="py-4 grid lg:grid-cols-2 gap-8">
        <div>
            <iframe className="w-full aspect-[4/3]" src="/pdf/duremM.pdf" title="testPdf" />
        </div>
        <div>
          <iframe className="w-full aspect-[4/3]" src="/pdf/stratik.pdf" title="testPdf" />

        </div>

        <div className="mt-6 text-xs text-gray-500 text-right">
                Эх сурвалж: ЗУА-ны Ахлах мэргэжилтэн
                Э.Өлзиймандах. Дотуур дугаар: 258
              </div>
  </div>
    
    
  </div>
  );
}

export default StrategicPlan;
