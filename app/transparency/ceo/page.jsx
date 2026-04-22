'use client'
import React from "react";

function Ceo() {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* Гарчиг */}
      <h1 className="uppercase text-center font-bold text-text text-lg mb-6">
        Гүйцэтгэх захиралд тавигдах шалгуур үзүүлэлт
      </h1>

      {/* Контент */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Зураг */}
        <div className="lg:col-span-1">
          <img
            src="/pdf/ceo1.jpeg"
            alt="CEO"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* PDF-үүд */}
        <div className="lg:col-span-2 space-y-6">

          {/* CEO PDF */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <iframe
              className="w-full aspect-[4/3] rounded"
              src="/pdf/ceo.pdf"
              title="CEO requirements"
            />
          </div>

          {/* CEO PER PDF */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <iframe
              className="w-full aspect-[4/3] rounded"
              src="/pdf/ceoper.pdf"
              title="CEO performance"
            />
          </div>

        </div>
      </div>

      {/* Холбоо барих */}
      <p className="text-center text-text mt-8">
        Энэхүү мэдээллийн талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл
        Дотоод зохион байгуулалт хариуцсан мэргэжилтэн бөгөөд захирлын туслах
        <span className="font-semibold"> Э.Ариунзаяа</span>-тай холбогдоно уу.
        <br />
        Дотуур утас: <span className="font-semibold">201</span>
      </p>

    </div>
  );
}

export default Ceo;

