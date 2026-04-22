"use client";

import React, { useState, useEffect } from "react";
import { BsCollectionFill } from "react-icons/bs";

import Allnews from "./Allnews";

function PopularNews() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const postsPerPage = 8;

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const rawPosts = await fetch(
          `https://ndc.energy.mn/wp-admin/api/blogs?sort=createdAt:DESC&populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${postsPerPage}`,
          {
            headers: {
              Authorization:
                "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
            },
          }
        );

        const response = await rawPosts.json();
        console.log(response);

        setPosts(response.data);
        setTotalPages(response.meta.pagination.pageCount);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, [currentPage]);

  return (
    <div
      className="lg:container mx-auto px-4 py-8 text-text"
      data-aos="fade-down"
      data-aos-delay="500"
    >
      <div className="justify-start uppercase flex items-center border-b-2 w-56 border-text ">
        <BsCollectionFill className="sm:w-6 sm:h-6 w-4 h-4 " />
        <p className="text-lg font-bold mx-4 sm:text-xl font-sans">
          Шинэ мэдээ
        </p>
      </div>

      <div className="grid sm:mt-12 py-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 font-sans">
        {/* {News.name} */}
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-text"></div>
          </div>
        ) : posts.length > 0 ? (
          posts.map((item, index) => <Allnews key={item.id} news={item} />)
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            Мэдээ олдсонгүй
          </div>
        )}
      </div>

      {/* Pagination Controls */}
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
    </div>
  );
}

export default PopularNews;
