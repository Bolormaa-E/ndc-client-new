'use client'
import React, { useState } from "react";

import Butets from "@/components/Butets"





const Structure = 
() => {
//     const [butetsData, setButetsData] = useState(true);
//   const [tuzData, setTuzData] = useState(false);
    return (
        <div className="py-10 lg:container mx-auto md:flex-row md:gap-10 font-sans">
            <h1>
            <p>Энэхүү мэдээллийн талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл ЗУА-ны хүний нөөцийн  мэргэжилтэн: Б.Ганзоригтой холбогдоно уу. Дотуур утас: 291</p>
            </h1>
            <Butets />
            {/* <section id="unit" className="w-full px-4 py-10 ">
                <div className="py-4">
                    <ul className="w-full grid grid-cols-2 font-sans font-bold text-sm">
                        <li
                        onClick={() => setButetsData(true) & setTuzData(false)}
                        className={`${
                          butetsData
                            ? "border-red-600 rounded-lg"
                            : "border-2 border-gray-300 "
                        } unitLi `}
                        >
                            КОМПАНИЙН БҮТЭЦ
                        </li>
                        <li
                        onClick={() => setButetsData(false) & setTuzData(true)}
                        className={`${
                          tuzData ? "border-red-600 rounded-lg" : "border-2 border-gray-300"
                        } unitLi`}
                        >
                            ТӨЛӨӨЛӨН УДИРДАХ ЗӨВЛӨЛ
                        </li>
                    </ul>
                </div>
                {tuzData && <Tuz />}
                {butetsData && <Butets />}
            </section> */}
        </div>
        
    )
}

export default Structure;
