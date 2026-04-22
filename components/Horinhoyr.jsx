'use client'

import React from "react";

const linkData = [
  {
    id: "1",
    title: "Акталсан хөрөнгө",
    date: "2022",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/12/Ашиглалтын-хугацаа-дууссан-элэгдлээрээ-анхны-өртгөө-нөхсөн-сэргээн-засварлах-боломжгүй-хөрөнгийг-актлах.pdf",
  },
  {
    id: "2",
    title: "Балансаас балансад шилжүүлэх хөрөнгө",
    date: "2022",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/09/Төрийн-хэмнэлтйн-хуулийн-хэрэгжилтийг-хангах.pdf",
  },

];

const linkkData = [

  {
    id: "1",
    title: "Аудитлагдсан санхүүгийн тайлан 2022",
    date: "2022",
    link: "https://drive.google.com/file/d/1ElCHSMfdCGvWLEGpu6_3frQnVp2dwOF_/view?usp=drive_link",
  },
  {
    id: "2",
    title: "Аудитын зөвлөмж, зөвлөмжийн хэрэгжилт",
    date: "2022/09/15",
    link: "https://drive.google.com/file/d/1Fkq3hFYOxu6K3JNauYqI15F5Tb5E62D_/view?usp=drive_link",
  },
    {
    id: "3",
    title: "Дотоод аудитын жилийн эцсийн тайлан",
    date: "2022",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_ony_zhilijn_eczsijn_tajlan_0e8e1575ad.pdf",
  },

];

function Horinhoyr() {
 

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

export default Horinhoyr;
