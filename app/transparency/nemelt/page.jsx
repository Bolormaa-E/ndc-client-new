'use client'

import Container from "@/components/Container";
import React from "react";

const linkData = [
  {
    id: "1",
    title: "Төсөл арга хэмжээ техник хяналтын зардал тайлагнах журам",
    date: "2022",
    link: "https://ndc.energy.mn/wp-admin/uploads/T_s_l_arga_hemzhee_tehnik_hyanaltyn_zardal_tajlagnah_zhuram_ce2d36cbc6.pdf",
  },
  {
    id: "2",
    title: "Цахилгаан дулааны техникийн нөхцөл хүссэн журам",
    date: "2023",
    link: "https://ndc.energy.mn/wp-admin/uploads/2023_Nemelt_azhil_jlchilgeenij_zhuram_shinechlegdsen_4358162481.pdf",
  },
  {
    id: "3",
    title: "Нэмэлт ажил үйлчилгээний журам",
    date: "2022",
    link: "https://ndc.energy.mn/wp-admin/uploads/Nemelt_azhil_jlchilgeenij_zhuram_2025_d4d3de2043.pdf",
  },

];

const linkkData = [

  {
    id: "1",
    title: "Ажил үйлчилгээний үнэ тариф",
    date: "2022",
    link: "https://ndc.energy.mn/wp-admin/uploads/Azhil_jlchilgeenij_ne_tarif_957dbb9f7a.pdf",
  },

];

const Head = "text-sm text-center text-text fpnt-bold  px-4 py-4 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

function Nemelt () {
 

  return (

        <Container >
          <div className="flex justify-center gap-16 py-8 px-auto">

          <div className="">

            <div className="sm:flex-auto text-center py-4 ">
              <h1 className="text-base font-bold leading-6 uppercase text-red-600">
                ХУУЛЬ ДҮРЭМ
              </h1>
            </div>

            <table className="table-auto border border-gray-400 divide-y divide-gray-400">
              <thead>
                <tr className="bg-gray-300">
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-md font-sans font-semibold text-text sm:pl-0 text-center "
                  >
                    №
                  </th>
                  <th
                    scope="col"
                    className={`${Head}`}
                  >
                    Гарчиг
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {linkData.map((linkData) => (
                  <tr key={linkData.id}>
                    <td className={`${Text} font-bold `}>
                      {linkData.id}
                    </td>
                    <td className={`${Text}`}>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href={linkData.link}
                        className="text-indigo-600 hover:text-red-500"
                      >
                        {linkData.title}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="">

            <div className="sm:flex-auto text-center py-4  ">
              <h1 className="text-base font-bold leading-6 uppercase text-red-600">
                ҮЙЛЧИЛГЭЭНИЙ ТАРИФ
              </h1>
            </div>

            <table className="table-auto border border-gray-400 divide-y divide-gray-400">
              <thead>
                <tr className="bg-gray-300">
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-md font-sans font-semibold text-text sm:pl-0 text-center "
                  >
                    №
                  </th>
                  <th
                    scope="col"
                    className={`${Head}`}
                  >
                    Гарчиг
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {linkkData.map((linkkData) => (
                  <tr key={linkkData.id}>
                    <td className={`${Text} font-bold `}>
                      {linkkData.id}
                    </td>
                    <td className={`${Text}`}>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href={linkkData.link}
                        className="text-indigo-600 hover:text-red-500"
                      >
                        {linkkData.title}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
          <div>
          <h1 className="text-text text-center py-2">
            Нэмэлт үйлчилгээний ажлын орлогыг Худалдаа хөгжлийн банкны
             406002860  тоот дансанд төвлөрүүлнэ.
            </h1>
          </div>
          <div className="text-text text-center py-4">

          <h2 className="font-bold py-2">
          Гэрээний мэргэжилтэн
          </h2>
          <p className="uppercase px-8">Г.Алтанзул</p>
          <h4 className="px-8 ">Мэйл: altanzul.g@ndc.energy.mn</h4>
        </div>
        </Container>

  );
}

export default Nemelt ;
