"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import HudaldanAvah from "../../../public/image/AuditImg.jpg";

const Surgalt = () => {
  useEffect(() => {
    async function fetchSurgaltData() {
      try {
        const rawResponse = await fetch(
          "https://ndc.energy.mn/wp-admin/api/surgalts?populate=*",
          {
            headers: {
              Authorization:
                "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
            },
          }
        );

        const data = await rawResponse.json();
        setLoading(false);

        const sortedData = [...data.data].sort((a, b) => {
          const dateA = a.attributes.date || a.attributes.createdAt;
          const dateB = b.attributes.date || b.attributes.createdAt;
          return new Date(dateB) - new Date(dateA);
        });

        setSurgaltData(sortedData);
        const years = new Set();
        data.data.forEach((item) => {
          const date = item.attributes.date || item.attributes.createdAt;
          if (date) {
            const year = new Date(date).getFullYear();
            years.add(year);
          }
        });
        const sortedYears = Array.from(years).sort((a, b) => b - a);
        setAvailableYears(sortedYears);
        setSelectedYear("-");
      } catch (err) {
        setLoading(false);
      }
    }
    fetchSurgaltData();
  }, []);

  const [surgaltData, setSurgaltData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("-");
  const [availableYears, setAvailableYears] = useState([]);
  const [showMedeelel, setShowMedeelel] = useState(true);
  const [showTuvolvolguu, setShowTuvolvolguu] = useState(false);

  if (loading) {
    return (
      <p className="flex justify-center items-center min-h-screen text-lg">
        Уншиж байна...
      </p>
    );
  }

  return (
    <div className="lg:container mx-auto px-4 py-2  md:gap-10">
      <div className="flex justify-center items-center py-8 object-cover">
        <Image src={HudaldanAvah} width={400} height={100} />
      </div>
      <p>Энэхүү мэдээллийн талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл ЗУА-ны хүний нөөцийн  мэргэжилтэн: Б. Ганзоригтой холбогдоно уу. Дотуур утас: 291</p>
      <section id="unit" className="w-full px-4 pb-10 ">
        <div className="py-4">
          <ul className="w-full grid grid-cols-2 space-x-1 font-bold text-md font-sans">
            <li
              onClick={() => {
                setShowMedeelel(false);
                setShowTuvolvolguu(true);
                setSelectedYear("-");
              }}
              className={`${
                showTuvolvolguu
                  ? "border-red-600 rounded-lg uppercese"
                  : "border-2 border-gray-400"
              } unitLi`}
            >
              СУРГАЛТЫН ТӨЛӨВЛӨГӨӨ
            </li>
            <li
              onClick={() => {
                setShowMedeelel(true);
                setShowTuvolvolguu(false);
                setSelectedYear("-");
              }}
              className={`${
                showMedeelel
                  ? "border-red-600 rounded-lg uppercese "
                  : "border-2 border-gray-400"
              } unitLi`}
            >
              СУРГАЛТЫН МЭДЭЭЛЭЛ
            </li>
          </ul>
        </div>
        {showMedeelel && (
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-text mb-4">
                СУРГАЛТЫН МЭДЭЭЛЭЛ
              </h1>
              <div className="inline-flex items-center ">
                <label
                  htmlFor="year-filter"
                  className="text-sm font-semibold text-gray-700 pr-2"
                >
                  Жил:
                </label>
                <select
                  id="year-filter"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                >
                  <option value="-">-</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flow-root">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 font-sans">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <table className="min-w-full divide-y divide-gray-300 font-sans">
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
                            className="hidden lg:table-cell whitespace-nowrap px-2 py-3.5 text-left text-md font-sans font-semibold text-text"
                          >
                            Сургалтанд хамрагдсан ажилтны нэр
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
                              Үйлдэл
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {(() => {
                          const filteredData = surgaltData.filter((item) => {
                            const date =
                              item.attributes.date || item.attributes.createdAt;
                            if (!date) return false;
                            const itemYear = new Date(date).getFullYear();

                            const itemTurul = item.attributes.turul || "";
                            if (itemTurul !== "мэдээлэл") return false;

                            return (
                              selectedYear === "-" ||
                              itemYear === Number(selectedYear)
                            );
                          });

                          if (filteredData.length === 0) {
                            return (
                              <tr>
                                <td
                                  colSpan="5"
                                  className="text-center py-8 text-gray-500"
                                >
                                  Мэдээлэл олдсонгүй
                                </td>
                              </tr>
                            );
                          }

                          return filteredData.map((item, key) => (
                            <tr key={item.id}>
                              <td className="whitespace-nowrap py-2 pl-4 pr-3 text-md text-gray-500 sm:pl-0 text-center">
                                {key + 1}
                              </td>
                              <td className="  px-2 py-2 text-sm font-medium text-text max-w-[500px]  break-words">
                                {item.attributes?.name || "Гарчиг байхгүй"}
                              </td>
                              <td className="hidden lg:table-cell whitespace-nowrap px-2 py-2 text-sm text-text max-w-[600px] break-words text-center">
                                {item.attributes?.ownName || "Мэдээлэл байхгүй"}
                              </td>
                              <td className="whitespace-nowrap px-2 py-2 text-sm text-text">
                                {item.attributes?.date ||
                                  new Date(
                                    item.attributes?.createdAt
                                  ).toLocaleDateString("mn-MN")}
                              </td>
                              <td className="relative whitespace-nowrap py-2 text-center text-sm font-medium sm:pr-0">
                                {item.attributes?.file?.data?.[0]?.attributes
                                  ?.url ? (
                                  <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={`https://ndc.energy.mn/wp-admin${item.attributes.file.data[0].attributes.url}`}
                                    className="text-indigo-600 hover:text-red-500"
                                  >
                                    Харах
                                  </a>
                                ) : (
                                  <span className="text-gray-400">
                                    Файл байхгүй
                                  </span>
                                )}
                              </td>
                            </tr>
                          ));
                        })()}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {showTuvolvolguu && (
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-text mb-4">
                СУРГАЛТЫН ТӨЛӨВЛӨГӨӨ
              </h1>
              <div className="inline-flex items-center ">
                <label
                  htmlFor="year-filter"
                  className="text-sm font-semibold text-gray-700 pr-2"
                >
                  Жил:
                </label>
                <select
                  id="year-filter"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                >
                  <option value="-">-</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flow-root">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 font-sans">
                  {loading ? (
                    <p>Уншиж байна...</p>
                  ) : (
                    <table className="min-w-full divide-y divide-gray-300 font-sans">
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
                              Үйлдэл
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {(() => {
                          const filteredData = surgaltData.filter((item) => {
                            const date =
                              item.attributes.date || item.attributes.createdAt;
                            if (!date) return false;
                            const itemYear = new Date(date).getFullYear();

                            const itemTurul = item.attributes.turul || "";
                            if (itemTurul !== "төлөвлөгөө") return false;

                            return (
                              selectedYear === "-" ||
                              itemYear === Number(selectedYear)
                            );
                          });

                          if (filteredData.length === 0) {
                            return (
                              <tr>
                                <td
                                  colSpan="5"
                                  className="text-center py-8 text-gray-500"
                                >
                                  Мэдээлэл олдсонгүй
                                </td>
                              </tr>
                            );
                          }

                          return filteredData.map((item, key) => (
                            <tr key={item.id}>
                              <td className="whitespace-nowrap py-2 pl-4 pr-3 text-md text-gray-500 sm:pl-0 text-center">
                                {key + 1}
                              </td>
                              <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text max-w-[600px] break-words">
                                {item.attributes?.name || "Гарчиг байхгүй"}
                              </td>

                              <td className="whitespace-nowrap px-2 py-2 text-sm text-text">
                                {item.attributes?.date ||
                                  new Date(
                                    item.attributes?.createdAt
                                  ).toLocaleDateString("mn-MN")}
                              </td>
                              <td className="relative whitespace-nowrap py-2 text-center text-sm font-medium sm:pr-0">
                                {item.attributes?.file?.data?.[0]?.attributes
                                  ?.url ? (
                                  <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={`https://ndc.energy.mn/wp-admin${item.attributes.file.data[0].attributes.url}`}
                                    className="text-indigo-600 hover:text-red-500"
                                  >
                                    Харах
                                  </a>
                                ) : (
                                  <span className="text-gray-400">
                                    Файл байхгүй
                                  </span>
                                )}
                              </td>
                            </tr>
                          ));
                        })()}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Surgalt;
