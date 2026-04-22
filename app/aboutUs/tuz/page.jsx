"use client";

import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { tuzData } from "../../data/tuzData";
import Tuz4 from "@/components/Tuz4";
import Tuz3 from "@/components/Tuz3";
import Tuz5 from "@/components/Tuz5";

const EmpDataList = () => {
  const { image } = tuzData;
  const [tuz1Data, setTuz1Data] = useState(false);
  const [tuz2Data, setTuz2Data] = useState(false);
  const [tuz3Data, setTuz3Data] = useState(false);
  const [tuz4Data, setTuz4Data] = useState(false);
  const [tuz5Data, setTuz5Data] = useState(true);

  const [emp, setEmp] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    async function fetchEmp() {
      const rawEmp = await fetch(
        "https://ndc.energy.mn/wp-admin/api/tuzs?populate=*",
        {
          headers: {
            Authorization:
              "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
          },
        }
      );

      const emp = await rawEmp.json();
      console.log("emp", emp.data);

      setEmp(emp.data);
    }
    fetchEmp();
  }, [limit]);

  return (
    <Container>
      <h2 className="flex justify-center  font-bold text-md uppercase text-text py-8">
        {" "}
        Төлөөлөн удирдах зөвлөлийн гишүүдийн мэдээлэл
      </h2>
      <div className="justify-center flex flex-col items-center py-4">
        <Image src={image} width={860} alt="Picture of the author" />
      </div>
      <div className="overflow-x-scroll overflow-hidden relative w-full text-left py-4">
        {/* <table id="tableEmpList" className="w-full table-auto border border-gray-400 div</div>ide-y  text-text">
        <thead className=" ">
          <tr className="bg-gray-300 ">
                <th className="text-center">
                  №
                </th>
                <th>
                  Албан тушаал
                </th>
                <th>
                  Овог Нэр
                </th>
                <th>
                  Одоо эрхэлж буй ажил
                </th>
                <th>
                  Мэргэжил
                </th>
                <th>
                  Цалин хөлс
                </th>
                <th>
                  Цахим шуудан
                </th>
                <th>
                  ХОМ-ээ өгсөн эсэх
                </th>
          </tr>
        </thead>
        <tbody className=" divide-y text-sm text-slate-600">
            {emp.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row" className="text-center">{item.attributes.num}</th>
                          <th scope="row">{item.attributes.major}</th>
                          <th scope="row">{item.attributes.name}</th>
                          <th scope="row">{item.attributes.majorN}</th>
                          <th scope="row">{item.attributes.mergejil}</th>
                          <th scope="row">{item.attributes.salary}</th>
                          <th scope="row">{item.attributes.mail}</th>
                          <th scope="row">{item.attributes.hom}</th>
                        </tr>
                      );
                    })}
        </tbody>
        </table> */}
        <section id="unit" className="w-full px-4 py-10 ">
          <div className="py-4">
            <ul className="w-full grid grid-cols-3 gap-1 font-bold  text-md font-sans">
              <li
                onClick={() =>
                  setTuz3Data(true) & setTuz4Data(false) & setTuz5Data(false)
                }
                className={`${
                  tuz3Data
                    ? "border-red-600 rounded-lg uppercese"
                    : "border-2 border-gray-400"
                } unitLi`}
              >
                2023
              </li>
              <li
                onClick={() =>
                  setTuz3Data(false) & setTuz4Data(true) & setTuz5Data(false)
                }
                className={`${
                  tuz4Data
                    ? "border-red-600 rounded-lg uppercese"
                    : "border-2 border-gray-400"
                } unitLi`}
              >
                2024
              </li>

              <li
                onClick={() =>
                  setTuz3Data(false) & setTuz4Data(false) & setTuz5Data(true)
                }
                className={`${
                  tuz5Data
                    ? "border-red-600 rounded-lg uppercese"
                    : "border-2 border-gray-400"
                } unitLi`}
              >
                2025
              </li>
            </ul>
          </div>

          {tuz3Data && <Tuz3 />}
          {tuz4Data && <Tuz4 />}
          {tuz5Data && <Tuz5 />}
        </section>
      </div>

      <div className="mt-6 text-xs text-gray-500 text-right">
        Эх сурвалж: ЗУА-ны Ахлах мэргэжилтэн
        Э.Өлзиймандах. Дотуур дугаар: 258
      </div>
      
    </Container>
  );
};
export default EmpDataList;
