"use client";

import React, { useEffect } from "react";
//jQuery libraries

// import "jquery/dist/jquery.min.js";

//Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import $ from "jquery";

export const law = [
  {
    id: "1",
    title: "Эрчим хүчний тухай хууль",
    date: "2001.02.01",
    link: "https://legalinfo.mn/mn/detail/60",
  },

  {
    id: "2",
    title: "Нийтийн мэдээллийн ил тод байдлын тухай хууль",
    date: "2021.12.17",
    link: "https://legalinfo.mn/mn/detail?lawId=16390263044601",
  },
  {
    id: "3",
    title: "Хөдөлмөрийн тухай хууль",
    date: "2021.07.02",
    link: "https://legalinfo.mn/mn/detail?lawId=16230709635751",
  },
  {
    id: "4",
    title: "Компанийн тухай хууль",
    date: "2021.07.02",
    link: "https://legalinfo.mn/mn/detail/310",
  },
  {
    id: "5",
    title: "Төрийн болон орон нутгийн өмчийн тухай хууль",
    date: "2021.07.02",
    link: "https://legalinfo.mn/mn/detail?lawId=492",
  },
  {
    id: "6",
    title:
      "Төрийн болон орон нутгийн өмчийн хөрөнгөөр ажил, бараа, үйлчилгээ авах хууль",
    date: "2021.12.01",
    link: "https://legalinfo.mn/mn/detail?lawId=493",
  },
  {
    id: "7",
    title:
      "Төрийн болон орон нутгийн өмчийн хөрөнгөөр ажил, бараа, үйлчилгээ авах хууль",
    date: "2021.12.01",
    link: "https://legalinfo.mn/mn/detail?lawId=493",
  },
  {
    id: "8",
    title: "Сэргээгдэх эрчим хүчний тухай хууль",
    date: "2007.01.11",
    link: "https://legalinfo.mn/mn/detail/465",
  },
  {
    id: "9",
    title: "Эрчим хүчний хэмнэлтийн тухай хууль",
    date: "2015.11.26",
    link: "https://legalinfo.mn/mn/detail/11488",
  },
  {
    id: "10",
    title: "Авлигын эсрэг хууль",
    date: "2006.07.06",
    link: "https://legalinfo.mn/mn/detail/8928",
  },
  {
    id: "11",
    title:
      "Нийтийн албанд нийтийн болон хувийн ашиг сонирхлыг зохицуулах, ашиг сонирхлын зөрчлөөс урьдчилан сэргийлэх тухай хууль",
    date: "2012.01.19",
    link: "https://legalinfo.mn/mn/detail/397",
  },
];
const Law = () => {
  // useEffect(() => {
  //   $(document).ready(function () {
  //     setTimeout(function () {
  //       $("#tableLaw").DataTable();
  //     }, 1000);
  //   });
  // }, []);

  // useEffect(() => {
  //   $(document).ready(function () {
  //     setTimeout(function () {
  //       $("#tableLaw").DataTable({
  //         language: {
  //           lengthMenu: "Нийт _MENU_ бичлэг байна.",
  //           zeroRecords: "Nothing found - sorry",
  //           info: "Дэлгэцэнд _PAGE_ -ийн _PAGES_",
  //           infoEmpty: "Хоосон",
  //           infoFiltered: "(filtered from _MAX_ total records)",
  //         },
  //         bDestroy: true,
  //       });
  //     }, 1000);
  //   });
  // }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto text-center">
          <h1 className="text-base font-semibold leading-6 text-text">
            Хууль тогтоомж
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          {/* <button
            type="button"
            className="block rounded-md bg-button py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
          >
            Export
          </button> */}
        </div>
      </div>
      <div className="flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table
              id="tableLaw"
              className="min-w-full divide-y divide-gray-300 "
            >
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-text     sm:pl-0"
                  >
                    Дугаар
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-text"
                  >
                    Гарчиг
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-text"
                  >
                    Огноо
                  </th>

                  <th
                    scope="col"
                    className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                  >
                    <span className="whitespace-nowrap px-2 py-3.5 text-center text-sm font-semibold text-text">
                      Линк
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {law.map((linkData) => (
                  <tr key={linkData.id}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0 text-center">
                      {linkData.id}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text">
                      {linkData.title}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-text">
                      {linkData.date}
                    </td>

                    <td className="relative whitespace-nowrap py-2   text-center text-sm font-medium sm:pr-0">
                      <a
                        rel="noopener"
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

export default Law;
