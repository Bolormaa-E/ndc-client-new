"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import HudaldanAvah from "../../../public/image/AuditImg.jpg";

const Procurement = () => {
  useEffect(() => {
    async function fetchFinancialData() {
      try {
        const rawResponse = await fetch(
          "https://ndc.energy.mn/wp-admin/api/hudaldan-awahs?sort=date:DESC&populate=*",
          {
            headers: {
              Authorization:
                "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
            },
          }
        );

        const data = await rawResponse.json();
        setLoading(false);
        setFinancialData(data.data);
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

        setTuvolvolguuData(
          data.data.filter((item) => item.attributes.turul === "төлөвлөгөө")
        );
        setTaylanData(
          data.data.filter((item) => item.attributes.turul === "тайлан")
        );
      } catch (err) {
        setLoading(false);
      }
    }
    fetchFinancialData();
  }, []);
  const [financialData, setFinancialData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [tuvolvolguuData, setTuvolvolguuData] = useState([]);
  const [taylanData, setTaylanData] = useState([]);
  const [showTuvolvolguu, setShowTuvolvolguu] = useState(true);
  const [showTaylan, setShowTaylan] = useState(false);
  const [selectedYear, setSelectedYear] = useState("-");
  const [availableYears, setAvailableYears] = useState([]);
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
      <section id="unit" className="w-full px-4 pb-10 ">
        <div className="py-4">
          <ul className="w-full grid grid-cols-2 space-x-1 font-bold text-md font-sans">
            <li
              onClick={() => {
                setShowTuvolvolguu(true);
                setShowTaylan(false);
                setSelectedYear("-");
              }}
              className={`${
                showTuvolvolguu
                  ? "border-red-600 rounded-lg uppercese "
                  : "border-2 border-gray-400"
              } unitLi`}
            >
              ТӨЛӨВӨЛГӨӨ
            </li>
            <li
              onClick={() => {
                setShowTuvolvolguu(false);
                setShowTaylan(true);
                setSelectedYear("-");
              }}
              className={`${
                showTaylan
                  ? "border-red-600 rounded-lg uppercese"
                  : "border-2 border-gray-400"
              } unitLi`}
            >
              ТАЙЛАН
            </li>
          </ul>
        </div>
        {showTuvolvolguu && (
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-text mb-4">ТӨЛӨВӨЛГӨӨ</h1>
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
                        {(() => {
                          const filteredData = tuvolvolguuData.filter(
                            (item) => {
                              const date =
                                item.attributes.date ||
                                item.attributes.createdAt;
                              if (!date) return false;
                              const itemYear = new Date(date).getFullYear();
                              return (
                                selectedYear === "-" ||
                                itemYear === Number(selectedYear)
                              );
                            }
                          );

                          if (filteredData.length === 0) {
                            return (
                              <tr>
                                <td
                                  colSpan="4"
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
                              <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text">
                                {item.attributes.title}
                              </td>
                              <td className="whitespace-nowrap px-2 py-2 text-sm text-text">
                                {item.attributes.date ||
                                  item.attributes.createdAt.split("T")[0]}
                              </td>
                              <td className="relative whitespace-nowrap py-2 text-center text-sm font-medium sm:pr-0">
                                {item.attributes.file_name?.data?.length >
                                  0 && (
                                  <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={`https://ndc.energy.mn/wp-admin${item.attributes.file_name.data[0].attributes.url}`}
                                    className="text-indigo-600 hover:text-red-500"
                                  >
                                    Татах
                                  </a>
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
        {showTaylan && (
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-text mb-4">Тайлан</h1>
              <div className="inline-flex items-center ">
                <label
                  htmlFor="year-filter"
                  className="text-sm font-semibold text-gray-700 pr-2"
                >
                  Жил:
                </label>
                <select
                  id="year-filter-audit"
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
                            className="whitespace-nowrap px-2 py-3.5 text-left text-md font-sans font-semibold text-text"
                          >
                            Огноо
                          </th>
                          <th
                            scope="col"
                            className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                          >
                            <span className="whitespace-nowrap px-2 py-3.5 text-center text-md font-sans font-semibold text-text">
                              Файл
                            </span>
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
                        {(() => {
                          const filteredData = taylanData.filter((item) => {
                            const date =
                              item.attributes.date || item.attributes.createdAt;
                            if (!date) return false;
                            const itemYear = new Date(date).getFullYear();
                            return (
                              selectedYear === "-" ||
                              itemYear === Number(selectedYear)
                            );
                          });

                          if (filteredData.length === 0) {
                            return (
                              <tr>
                                <td
                                  colSpan="4"
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
                              <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text">
                                {item.attributes.title}
                              </td>
                              <td className="whitespace-nowrap px-2 py-2 text-sm text-text">
                                {item.attributes.date ||
                                  item.attributes.createdAt.split("T")[0]}
                              </td>
                              <td className="relative whitespace-nowrap py-2 text-center text-sm font-medium sm:pr-0">
                                {item.attributes.file_name?.data?.length >
                                  0 && (
                                  <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={`https://ndc.energy.mn/wp-admin${item.attributes.file_name.data[0].attributes.url}`}
                                    className="text-indigo-600 hover:text-red-500"
                                  >
                                    Татах
                                  </a>
                                )}
                              </td>
                              <td className="relative whitespace-nowrap py-2 text-center text-sm font-medium sm:pr-0">
                                {item.attributes.url ? (
                                  <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={item.attributes.url}
                                    className="text-indigo-600 hover:text-red-500"
                                  >
                                    Харах
                                  </a>
                                ) : (
                                  <span className="text-gray-400">-</span>
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

      <div className="mt-6 text-xs text-gray-500 text-right">
        Эх сурвалж: ЗУА-ны Худалдан авах ажиллагааны мэргэжилтэн
        А.Нарангарав. Дотуур утас: 215
      </div>
      
    </div>
  );
};

export default Procurement;
