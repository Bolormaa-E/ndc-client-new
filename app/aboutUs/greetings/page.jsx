'use client'

import React from "react";
import Image from 'next/image'

const Greetings = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-12 font-sans text-text">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <Image 
            src="/image/ceo.jpeg"
            width={500}
            height={500}
            alt="CEO"
          />
        </div>

        {/* Text */}
        <div className="text-justify">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-6">
            Мэндчилгээ
          </h1>

          <p className="mb-4">
            Эрхэм хүндэт хамтран ажиллагч байгууллагууд, харилцагчид, үе үеийн ахмад ажилтнууд, нийт ажилтан албан хаагчид Та бүхэнд энэ өдрийн мэндийг өргөн дэвшүүлье.
          </p>

          <p className="mb-4">
            Монгол Улсын эрчим хүчний нэгдсэн системийн найдвартай, тасралтгүй ажиллагааг хангах хариуцлагатай үүргийг нэр төртэйгөөр гүйцэтгэж ирсэн Диспетчерийн Үндэсний Төвийн хамт олон Та бүхний мэдлэг, ур чадвар, хичээл зүтгэл, хамтын ажиллагааны үр дүнд салбарын хөгжил, дэвшил тасралтгүй урагшилж байгааг онцлон тэмдэглэхэд таатай байна.
          </p>

          <p className="mb-4">
            Цаашид бид эрчим хүчний салбарын тогтвортой хөгжил, дэвшилд хувь нэмрээ оруулж, орчин үеийн технологи, мэргэжлийн өндөр түвшинд тулгуурласан удирдлага зохион байгуулалтыг улам боловсронгуй болгож, нэгдсэн системийн найдвартай ажиллагааг ханган ажиллах болно.
          </p>

          <p className="mb-6">
            Та бүхний ажил үйлс үргэлж өөдрөг бүтэмжтэй байж, эрүүл энх, аз жаргал, амжилт бүтээл арвин байхыг хүсэн ерөөе.
          </p>

          <div className="mt-6">
            <p className="font-semibold">Хүндэтгэсэн,</p>
            <p className="text-lg font-bold mt-2">Ч.Амарсанаа</p>
            <p className="text-sm text-gray-500">Гүйцэтгэх захирал</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Greetings;