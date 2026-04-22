"use client";

import React, { useState, useEffect } from "react";

import Ceo from "@/components/Ceo";
import Law from "@/components/Law";
import ShareHolder from "@/components/ShareHolder";
import Tuz from "@/components/TuzLaw";
import Legislation from "@/components/Legislation";
import Image from "next/image";
import LegalImg from "../../../public/image/LegalImg.jpg";

const Legal = () => {
  const [ceoData, setCeoData] = useState(false);
  const [lawData, setLawData] = useState(true);
  const [legislationData, setLegislationData] = useState(false);
  const [shareHolderData, setShareHolderData] = useState(false);
  const [tuzData, setTuzData] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLegalData() {
      try {
        const rawResponse = await fetch(
          "https://ndc.energy.mn/wp-admin/api/legals?sort=date:DESC&populate=*",
          {
            headers: {
              Authorization:
                "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
            },
          }
        );
        const json = await rawResponse.json();
        setPosts(json.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    fetchLegalData();
  }, []);

  // Function to filter data by turul category
  const filterDataByTurul = (turul) => {
    return posts.filter((post) => post.attributes.turul === turul);
  };

  if (loading) {
    return <div className="lg:container mx-auto px-4 py-8">Уншиж байна...</div>;
  }

  return (
    <div className="lg:container mx-auto px-4 py-2  md:gap-10">
      <div className="flex justify-center items-center py-8 object-cover">
        <Image src={LegalImg} width={400} height={100} alt="SankhuuImg.title" />
        <p>Энэхүү мэдээллийн талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл ЗУА-ны хуульч: С.Намчиндоржтой холбогдоно уу. Дотуур утас: 215</p>
      </div>

      <section id="unit" className="w-full px-4 py-10 ">
        <div className="py-4">
          <ul className="w-full grid grid-cols-5 font-bold  text-sm font-sans">
            <li
              onClick={() =>
                setLawData(true) &
                setCeoData(false) &
                setLegislationData(false) &
                setShareHolderData(false) &
                setTuzData(false)
              }
              className={`${
                lawData
                  ? "border-red-600 rounded-lg "
                  : "border-2 border-gray-400"
              } unitLi`}
            >
              ХУУЛЬ ТОГТООМЖ
            </li>
            <li
              onClick={() =>
                setLawData(false) &
                setCeoData(false) &
                setLegislationData(true) &
                setShareHolderData(false) &
                setTuzData(false)
              }
              className={`${
                legislationData
                  ? "border-red-600 rounded-lg"
                  : "border-2 border-gray-400"
              } unitLi`}
            >
              ДҮРЭМ ЖУРАМ
            </li>
            <li
              onClick={() =>
                setLawData(false) &
                setCeoData(false) &
                setLegislationData(false) &
                setShareHolderData(true) &
                setTuzData(false)
              }
              className={`${
                shareHolderData
                  ? "border-red-600 rounded-lg"
                  : "border-2 border-gray-400"
              } unitLi`}
            >
              ХУВЬЦАА ЭЗЭМШИГЧ
            </li>
            <li
              onClick={() =>
                setLawData(false) &
                setCeoData(false) &
                setLegislationData(false) &
                setShareHolderData(false) &
                setTuzData(true)
              }
              className={`${
                tuzData
                  ? "border-red-600 rounded-lg"
                  : "border-2 border-gray-400"
              } unitLi`}
            >
              ТӨЛӨӨЛӨН УДИРДАХ ЗӨВЛӨЛ
            </li>
            <li
              onClick={() =>
                setLawData(false) &
                setCeoData(true) &
                setLegislationData(false) &
                setShareHolderData(false) &
                setTuzData(false)
              }
              className={`${
                ceoData
                  ? "border-red-600 rounded-lg"
                  : "border-2 border-gray-400"
              } unitLi`}
            >
              ГҮЙЦЭТГЭХ ЗАХИРАЛ
            </li>
          </ul>
        </div>
        {lawData && <Law data={lawData} />}
        {legislationData && <Legislation data={filterDataByTurul("журам")} />}
        {shareHolderData && <ShareHolder data={filterDataByTurul("хэх")} />}
        {tuzData && <Tuz data={filterDataByTurul("туз")} />}
        {ceoData && <Ceo data={filterDataByTurul("захирал")} />}
        {/* <Ceo
            sectionTitle={tablist[activeTab]}
            loading={loading}
            tableData={tableData}
          /> */}
      </section>
    </div>
  );
};

export default Legal;
