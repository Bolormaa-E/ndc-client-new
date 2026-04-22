'use client'

import React from "react";

const linkData = [
    {
        id: "1",
        title: "Төлсөн татвар, НДШ-ын тайлан-3",
        link: "https://ndcold.energy.mn/wp-content/uploads/2023/05/2023_%D0%BE%D0%BD%D1%8B_1_%D1%80_%D1%83%D0%BB%D0%B8%D1%80%D0%BB%D1%8B%D0%BD_%D1%82%D0%B0%D1%82%D0%B2%D0%B0%D1%80_%D1%88%D0%B8%D0%BC%D1%82%D0%B3%D1%8D%D0%BB_%D1%82%D3%A9%D0%BB%D3%A9%D0%BB%D1%82%D0%B8%D0%B9%D0%BD_%D1%82%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD-3.pdf",
      },
      {
        id: "2",
        title: "Балансаас балансад шилжүүлсэн хөрөнгө",
        date: "2023/06/30",
        link: "https://ndcold.energy.mn/wp-content/uploads/2023/02/%D0%A2%D3%A9%D1%80%D0%B8%D0%B9%D0%BD_%D1%85%D1%8D%D0%BC%D0%BD%D1%8D%D0%BB%D1%82%D0%B8%D0%B9%D0%BD_%D1%82%D1%83%D1%85%D0%B0%D0%B9_%D1%85%D1%83%D1%83%D0%BB%D0%B8%D0%B9%D0%BD_%D1%85%D1%8D%D1%80%D1%8D%D0%B3%D0%B6%D0%B8%D0%BB%D1%82%D0%B8%D0%B9%D0%BD_%D1%82%D0%B0%D0%B9%D0%BB%D0%B0%D0%BD.pdf",
      },
      
      {
        id: "3",
        title: "Эхний хагас жилийн санхүүгийн тайлан",
        link: "https://ndcold.energy.mn/wp-content/uploads/2023/08/Санхүүгийн-тайлан-2023-06-30.pdf",
      },
      {
        id: "4",
        title: "Жайкагын төслийн буцалтгүй тусламж - RTDS",
        link: "https://ndcold.energy.mn/wp-content/uploads/2023/08/RTDS.pdf",
      },
      {
        id: "4",
        title: "Төлсөн татвар, НДШ-ын тайлан",
        link: "https://ndc.energy.mn/wp-admin/uploads/Tatvar_shimtgnlijn_tajlan_2023_1_4bdbd2f589.pdf",
      },
    
];

const linkkData = [
  {
    id: "1",
    title: "Аудитын зөвлөмж, зөвлөмжийн хэрэгжилт",
    date: "2023",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_Audityn_z_vl_mzhijn_heregzhilt_2_558d5ec222.pdf",
  },
  {
    id: "2",
    title: "Аудитлагдсан санхүүгийн тайлан 2023",
    date: "2023",
    link: "https://drive.google.com/file/d/1Fkq3hFYOxu6K3JNauYqI15F5Tb5E62D_/view?usp=drive_link",
  },

  {
    id: "3",
    title: "Дотоод аудитын жилийн эцсийн тайлан",
    date: "2023",
    link: "https://ndc.energy.mn/wp-admin/uploads/2023_ony_zhilijn_eczsijn_tajlan_d9509b8e2e.pdf",
  },

];

function Horinguraw() {
 

  return (
  <div className="px-4 sm:px-6 lg:px-8">

      <div className="w-full grid grid-cols-2 lg:container mx-auto px-4 py-2  md:gap-10">

      <div className="flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 font-sans">
          <div className="sm:flex-auto text-center">
          <h1 className="text-base font-sans font-bold leading-6 text-red-600 uppercase">
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
                  <tr key={linkData.id}>
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

export default Horinguraw;
