'use client'

import React from "react";

const linkData = [  
{
    id: "1",
    title: "2025 оны ХАА-ны тодотгосон төлөвлөгөө",
    date: "2025.08.06",
    link: "/pdf/todotgoson-tuluvluguu-2025-08-06.pdf",
  },
  {
    id: "2",
    title: "2025 оны ХАА-ны төлөвлөгөө",
    date: "2024.01.03",
    link: "https://ndc.energy.mn/wp-admin/uploads/2025_ony_batlagdsan_t_l_vl_g_428d62b0a1.pdf",
  },
  // {
  //   id: "3",
  //   title: "2024 оны Зорилтот түвшний төлөвлөгөө батлах тухай",
  //   date: "2024.01.03",
  //   link: "https://ndc.energy.mn/wp-admin/uploads/Zoriltot_t_vshnij_t_l_vl_g_batlahtuhaj_d5374d8b28.pdf",
  // },
  {
    id: "3",
    title: "2024 оны ХАА-ны төлөвлөгөө",
    date: "2024.01.10",
    link: "https://ndc.energy.mn/wp-admin/uploads/HAA_ny_2024_ony_t_l_vl_g_6_rotated_08e036cd25.pdf",
  },
  {
    id: "4",
    title: "2023 оны худалдан авах ажиллагааны төлөвлөгөө",
    date: "2023.01.10",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/01/%D0%A5%D0%90%D0%90-%D0%BD%D1%8B-2023-%D0%BE%D0%BD%D1%8B-%D1%82%D3%A9%D0%BB%D3%A9%D0%B2%D0%BB%D3%A9%D0%B3%D3%A9%D3%A9.pdf",
  },
  {
    id: "5",
    title: "2022 оны худалдан авах ажиллагааны тодотгосон төлөвлөгөө",
    date: "2022",
    link: "https://ndcold.energy.mn/wp-content/uploads/2022/11/2022-%D0%A5%D1%83%D0%B4%D0%B0%D0%BB%D0%B4%D0%B0%D0%BD-%D0%B0%D0%B2%D0%B0%D1%85-%D0%B0%D0%B6%D0%B8%D0%BB%D0%BB%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D1%8B-%D1%82%D0%BE%D0%B4%D0%BE%D1%82%D0%B3%D0%BE%D1%81%D0%BE%D0%BD-%D1%82%D3%A9%D0%BB%D3%A9%D0%B2%D0%BB%D3%A9%D0%B3%D3%A9%D3%A9.pdf",
  },
  {
    id: "6",
    title: "2021 оны худалдан авах ажиллагааны төлөвлөгөө",
    date: "2021.02.02",
    link: "https://ndcold.energy.mn/wp-content/uploads/2022/11/2021-%D0%BE%D0%BD%D1%8B-%D1%85%D1%83%D0%B4%D0%B0%D0%BB%D0%B4%D0%B0%D0%BD-%D0%B0%D0%B2%D0%B0%D1%85-%D0%B0%D0%B6%D0%B8%D0%BB%D0%BB%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D1%8B-%D1%82%D3%A9%D0%BB%D3%A9%D0%B2%D0%BB%D3%A9%D0%B3%D3%A9%D3%A9.pdf",
  },

];
const Plan = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto text-center font-sans">
          <h1 className="text-base font-semibold leading-6 text-text">
            Төлөвлөгөө
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
      </div>
      <div className="flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 font-sans">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-md font-sans font-semibold text-text sm:pl-0 text-center"
                  >
                    Дугаар
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-sans font-semibold text-text"
                  >
                    Гарчиг
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-sans font-semibold text-text"
                  >
                    Огноо
                  </th>

                  <th
                    scope="col"
                    className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                  >
                    <span className="whitespace-nowrap px-2 py-3.5 text-center text-md font-sans font-semibold text-text">
                      Линк
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {linkData.map((linkData) => (
                  <tr key={linkData.id}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-md text-gray-500 sm:pl-0 text-center font-sans">
                      {linkData.id}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text font-sans">
                      {linkData.title}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-text">
                      {linkData.date}
                    </td>

                    <td className="relative whitespace-nowrap py-2   text-center text-sm font-medium sm:pr-0">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={linkData.link}
                        className="text-indigo-600 hover:text-red-500"
                      >
                        Харах
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
  );
};

export default Plan;
