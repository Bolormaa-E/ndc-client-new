"use client";

import React, { useEffect } from "react";

const ShareHolder = ({ data }) => {
  const shareData = data
    ? data
        .map((item, index) => ({
          id: (index + 1).toString(),
          title: item.attributes.title,
          dateA: (index + 1).toString().padStart(2, "0"),
          date: item.attributes.date,
          link: item.attributes.file_name?.data?.[0]?.attributes?.url || "#",
        }))
        .sort((a, b) => b.date.localeCompare(a.date))
    : [];

  // useEffect(() => {
  //   $(document).ready(function () {
  //     setTimeout(function () {
  //       $("#tableShareHolder").DataTable();
  //     }, 1000);
  //   });
  // }, []);

  // useEffect(() => {
  //   $(document).ready(function () {
  //     setTimeout(function () {
  //       $("#tableShareHolder").DataTable({
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
            Хувьцаа эзэмшигч
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
              id="tableShareHolder"
              className="min-w-full divide-y divide-gray-300 "
            >
              <thead>
                <tr>
                  {/* <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-semibold text-text sm:pl-0 text-center"
                  >
                    Дугаар
                  </th> */}
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
                {shareData.map((linkData) => (
                  <tr key={linkData.id}>
                    {/* <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0 text-center">
                      {linkData.id}
                    </td> */}
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text">
                      {linkData.title}
                    </td>

                    <td className="whitespace-nowrap px-2 py-2 text-sm text-text">
                      {linkData.date}
                    </td>

                    <td className="relative whitespace-nowrap py-2   text-center text-sm font-medium sm:pr-0">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={"https://ndc.energy.mn/wp-admin" + linkData.link}
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

export default ShareHolder;
