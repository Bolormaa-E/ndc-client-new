"use client";

import React, { useEffect, useState } from "react";

const Tuz3 = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    async function fetchEmp() {
      const rawEmp = await fetch(
        "https://ndc.energy.mn/wp-admin/api/tuzs?filters[turul][$eq]=хорин%20гурав&populate=*",
        {
          headers: {
            Authorization:
              "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
          },
        }
      );

      const emp = await rawEmp.json();
      console.log("emp", JSON.stringify(emp.data));

      setEmp(emp.data);
    }
    fetchEmp();
  }, []);

  return (
    <div className="overflow-x-auto overflow-hidden relative w-full text-left py-4">
      <table
        id="tableEmpList"
        className="w-full border border-gray-400 divide-y text-text"
      >
        <thead className=" ">
          <tr className="bg-gray-300 ">
            <th className="text-center w-12 px-2">№</th>
            <th className="px-3 min-w-[120px]">Албан тушаал</th>
            <th className="px-3 min-w-[100px]">Овог Нэр</th>
            <th className="px-3 min-w-[150px]">Одоо эрхэлж буй ажил</th>
            <th className="px-3 min-w-[100px]">Мэргэжил</th>
            <th className="px-3 min-w-[120px]">Цалин хөлс /төг/</th>
            <th className="px-3 min-w-[120px]">Цахим шуудан</th>
            <th className="px-3 min-w-[140px]">ХОМ-ээ мэдүүлсэн эсэх</th>
          </tr>
        </thead>
        <tbody className=" divide-y text-sm text-slate-600">
          {emp.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row" className="text-center px-2">
                  {item.attributes.num}
                </th>
                <th scope="row" className="px-3">
                  {item.attributes.major}
                </th>
                <th scope="row" className="px-3">
                  {item.attributes.name}
                </th>
                <th scope="row" className="px-3">
                  {item.attributes.majorN}
                </th>
                <th scope="row" className="px-3">
                  {item.attributes.mergejil}
                </th>
                <th scope="row" className="px-3">
                  {item.attributes.salary}
                </th>
                <th scope="row" className="px-3">
                  {item.attributes.mail}
                </th>
                <th scope="row" className="px-3">
                  {item.attributes.hom}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Tuz3;
