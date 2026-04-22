'use client'

import React from "react";

const linkData = [
  {
    id: "1",
    title: "Эхний хагас жилийн санхүүгийн тайлан",
    date: "2022",
    link: "https://ndc.energy.mn/wp-admin/uploads/Ehnij_hagas_zhilijn_tajlan_page_0001_826014e8b6.pdf",
  },
  {
    id: "2",
    title: "Төлсөн татвар, НДШ-ын тайлан",
    date: "2024",
    link: "https://ndc.energy.mn/wp-admin/uploads/Tatvar_shimtgel_2024_rotated_f29dafad77.pdf",
  },

  {
    id: "3",
    title: "Актлагдсан хөрөнгө",
    date: "2024",
    link: "https://ndc.energy.mn/wp-admin/uploads/024_11_18_01_1423_2_compressed_0e20f5ab71.pdf",
  }

];


const linkkData = [

  {
    id: "1",
    title: "Аудитлагдсан санхүүгийн тайлан 2024",
    date: "2024",
    link: "https://drive.google.com/file/d/1ND9f3EhNZdFK7F8EVMEjeHsqqTwPblTX/view?usp=drive_link",
  },
  
  {
    id: "2",
    title: "Дотоод аудитын ажлын тайлан 2024 он",
    date: "2025",
    link: "https://drive.google.com/file/d/1qlgpfABR-Tf8787iNaOHN2Lqa0acChBA/view",
  },

];

function Horinduruw() {
 

  return (
  <div className="px-4 sm:px-6 lg:px-8">

      <div className="w-full grid grid-cols-2 lg:container mx-auto px-4 py-2  md:gap-10">

      <div className="flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 font-sans">
          <div className="sm:flex-auto text-center">
          <h1 className="text-base font-bold leading-6 uppercase text-red-600">
            Тайлан
          </h1>
        </div>
            <table className="min-w-full divide-y divide-gray-300 font-sans ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-md font-sans font-semibold text-text sm:pl-0 text-center "
                  >
                    Дугаар
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-sans font-semibold text-text"
                  >
                    Гарчиг
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {linkData.map((linkData) => (
                  <tr key={linkData.id}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-md text-gray-500 sm:pl-0 text-center">
                      {linkData.id}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text">
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
        </div>
      </div>
      <div className="flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 font-sans">
          <div className="sm:flex-auto text-center">
          <h1 className="text-base font-bold leading-6 uppercase text-red-600">
            Аудит
          </h1>
        </div>
            <table className="min-w-full divide-y divide-gray-300 font-sans ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-md font-sans font-semibold text-text sm:pl-0 text-center "
                  >
                    Дугаар
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-sans font-semibold text-text"
                  >
                    Гарчиг
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {linkkData.map((linkkData) => (
                  <tr key={linkkData.id}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-md text-gray-500 sm:pl-0 text-center">
                      {linkkData.id}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text">
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
      </div>
      </div>
    </div>
  );
}

export default Horinduruw;
