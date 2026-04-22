"use client";

import React, { useState, useEffect } from "react";

import AwilgaPlan, { awilga } from "../../../components/AwilgaPlan";
import { biylelt } from "@/components/Biylelt";
import { medeelel } from "@/components/Amedeelel";
import Image from "next/image";
import LegislationImg from "../../../public/image/LegislationImg.jpg";
import AwilgaImg from "../../../public/image/AwilgaImg.jpg";

const Awilga = () => {
  const [tablist, setTablist] = useState(["ТӨЛӨВЛӨГӨӨ", "БИЕЛЭЛТ", "МЭДЭЭЛЭЛ"]);
  const [dta, setDta] = useState([awilga, biylelt, medeelel]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState(dta[0]);
  const updateList = async (index) => {
    setActiveTab(index);
    setSelectedYear("-");
    setLoading(true);
    try {
      let activeData;
      switch (index) {
        case 0:
          activeData = tolovlogoData.length > 0 ? tolovlogoData : dta[0];
          break;
        case 1:
          activeData = biileltData.length > 0 ? biileltData : dta[1];
          break;
        case 2:
          activeData = medeelelData.length > 0 ? medeelelData : dta[2];
          break;
        default:
          activeData = tolovlogoData.length > 0 ? tolovlogoData : dta[0];
      }
      setTableData(activeData);
    } catch (err) {
      setTableData(dta[index]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchAwilagasData() {
      try {
        const rawResponse = await fetch(
          "https://ndc.energy.mn/wp-admin/api/awilgas?sort=date:DESC&populate=*",
          {
            headers: {
              Authorization:
                "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
            },
          }
        );

        const data = await rawResponse.json();

        if (data.data) {
          setAwilgasData(data.data);
        }
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

        if (data.data) {
          const transformedData = data.data.map((item) => ({
            id: item.id,
            title: item.attributes.title,
            date: item.attributes.date,
            link: item.attributes.file_name.data[0]?.attributes.url || "",
            turul: item.attributes.turul,
          }));

          setTolovlogoData(
            transformedData.filter((item) => item.turul === "Төлөвлөгөө")
          );
          setBiileltData(
            transformedData.filter((item) => item.turul === "биелэлт")
          );
          setMedeelelData(
            transformedData.filter((item) => item.turul === "мэдээлэл")
          );
        }
      } catch (err) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    fetchAwilagasData();
  }, []);
  const [awilgasData, setAwilgasData] = useState([]);

  const [tolovlogoData, setTolovlogoData] = useState([]);
  const [biileltData, setBiileltData] = useState([]);
  const [medeelelData, setMedeelelData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("-");
  const [availableYears, setAvailableYears] = useState([]);

  const getFilteredData = () => {
    const currentData = getActiveData();
    if (selectedYear === "-") return currentData;

    return currentData.filter((item) => {
      const date = item.date;
      if (!date) return false;
      const itemYear = new Date(date).getFullYear();
      return itemYear === Number(selectedYear);
    });
  };

  const getActiveData = () => {
    if (activeTab === 0) return tolovlogoData;
    if (activeTab === 1) return biileltData;
    return medeelelData;
  };

  if (loading) {
    return (
      <p className="flex justify-center items-center min-h-screen text-lg">
        Уншиж байна...
      </p>
    );
  }

  return (
    <div className="lg:container mx-auto px-4 py-2 md:flex-row  md:gap-10 ">
      <div className="flex justify-center items-center py-8 object-cover">
        <Image
          src={LegislationImg}
          width={400}
          height={100}
          alt="Legislation.title"
        />
      </div>
      <section id="unit" className="w-full px-4 py-10 ">
        {!loading && (
          <div className="py-4">
            <ul className="w-full self-stretch group flex relative font-bold text-sm md:text-xs xs:text-xs sm:text-sm font-sans ">
              {tablist.map((el, indx) => (
                <li
                  key={indx}
                  onClick={() => updateList(indx)}
                  className={`${
                    indx === activeTab
                      ? "border-red-600 rounded-lg"
                      : "border-2 border-gray-400"
                  } unitLi`}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Year Filter */}
        <div className="px-4 sm:px-6 lg:px-8 mb-6">
          <div className="text-center">
            <div className="inline-flex items-center">
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
        </div>

        <AwilgaPlan
          sectionTitle={tablist[activeTab]}
          loading={loading}
          tableData={getFilteredData()}
        />
      </section>

      <div className="py-4 grid lg:grid-cols-3 gap-4">
        <div className="">
          <Image src={AwilgaImg} width={360} />
        </div>

        <>
          <div className="">
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vigspbonfqo?si=8R6oXemyk_DnpPCQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iUM8l7Q_4lM?si=8wE0TlnM0Ph8IwYh"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9p6Z9bJk9gA?si=hhaHPKBO6ifrpIuP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JgHcn-rPsCY?si=AJo-JGUSdxELgH7v"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="">
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vigspbonfqo?si=8R6oXemyk_DnpPCQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="">
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ubENKv9libE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/K282C6Gtdzc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4whCEkbgCYM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fMcQr9GumEA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jyW_F_mCsPY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hh6J8qxaE_c?si=T-6BqjT6DsY0IRsI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </>
      </div>
    </div>
  );
};

export default Awilga;
