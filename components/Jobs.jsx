"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import jobImage from "@/public/image/job.png";
import { BsCollectionFill } from "react-icons/bs";
import Container from "./Container";

const Jobs = () => {
  const [ads, setAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const postsPerPage = 8;

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const rawAds = await fetch(
          `https://ndc.energy.mn/wp-admin/api/hirings?sort=createdAt:DESC&populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${postsPerPage}`,
          {
            headers: {
              Authorization:
                "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
            },
          }
        );

        const response = await rawAds.json();

        setAds(response.data);
        setTotalPages(response.meta.pagination.pageCount);
      } catch (error) {
        console.error("Error fetching ads:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, [currentPage]);

  return (
    <Container>
      <div className="justify-start uppercase flex items-center text-text border-b-2 w-72 border-text ">
        <BsCollectionFill className="sm:w-6 sm:h-6 w-4 h-4 " />
        <p className="text-lg font-bold mx-4 sm:text-xl font-sans">
          Ажлын байрны зар
        </p>
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-10 justify-center items-center p-4">
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-text"></div>
          </div>
        ) : ads.length > 0 ? (
          ads.map((data) => {
            return (
              <div
                key={data.id}
                className="self-stretch transition-all duration-500 group group/item p-[20px] bg-white rounded-[10px]  shadow-md shadow-gray-400 hover:shadow-lg flex flex-col justify-between font-sans font-bold"
              >
                <div>
                  <span className="flex justify-between items-center gap-4">
                    <h1 className="text-text text-[16px]  font-semibold ">
                      {data.attributes.title}
                    </h1>
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Image src={jobImage} alt="job" width={80} height={80} />
                    <div>
                      <span className="text-[14px] py-[1rem]  text-center font-sans">
                        {data.attributes.unit}
                      </span>
                      <p className="flex items-end gap-1 text-gray-500 mt-2 text-xs">
                        {data.attributes.date}
                      </p>
                    </div>
                  </div>
                  <Link key={data.id} href={`/humanResourse/ads/${data.id}`}>
                    <button className="border-[2px] rounded-[10px] p-[4px] w-full text-[14px] text-text font-semibold  group-hover/item:text-text hover:bg-button group-hover:text-text  font-sans">
                      Дэлгэрэнгүй...
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p>failed to fetch ads</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-text hover:bg-gray-50 border-border"
            }`}
          >
            ←
          </button>

          <div className="flex gap-1">
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-lg border transition-colors ${
                    currentPage === pageNum
                      ? "bg-[#082e68] text-white border-[#082e68]"
                      : "bg-white text-text hover:bg-gray-50 border-border"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-text hover:bg-gray-50 border-border"
            }`}
          >
            →
          </button>
        </div>
      )}
    </Container>
  );
};

export default Jobs;
