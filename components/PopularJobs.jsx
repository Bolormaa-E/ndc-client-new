"use client";

import React, { useEffect, useState } from "react";
import Jobs from "@/components/Jobs";

export default function Home() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const rawAds = await fetch(
        "https://ndc.energy.mn/wp-admin/api/hirings?sort=createdAt:DESC&populate=*",
        {
          headers: {
            Authorization:
              "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
          },
        }
      );

      const ads = await rawAds.json();
      // console.log("adss", ads)

      setAds(ads.data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="mb-6">
      <Jobs data={ads} />
    </div>
  );
}
