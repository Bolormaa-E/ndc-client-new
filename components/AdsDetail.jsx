"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const AdsDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ndc.energy.mn/wp-admin/api/hirings/${id}?populate=*`, {
        headers: {
          Authorization:
            "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
        },
      })
      .then((res) => {
        //   console.log(res.data);
        setPost(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:container mx-auto  gap-6 md:gap-10 justify-center items-center p-4">
      <div className="container flex  justify-center items-center px-8 mx-auto 2xl:px-32  flex-col  lg:py-20 gap-12">
        <div className="relative">
          <div className="flex flex-col gap-10  mx-auto px-4 items-center font-sans">
            {/*Title*/}
            <h1 className="xl:text-3xl  text-text text-2xl font-bold text-center">
              {post?.attributes.title}
            </h1>

            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
              <span>🕐</span>
              {post?.attributes.date && (
                <span>
                  {new Date(post.attributes.date)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, "-")}
                </span>
              )}
            </div>

            <div
              className="w-full text-text text-justify"
              dangerouslySetInnerHTML={{ __html: post?.attributes.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsDetail;
