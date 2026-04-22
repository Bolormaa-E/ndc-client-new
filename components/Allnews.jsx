import Link from "next/link";
import React from "react";

function AllNews({ news }) {
  return (
    <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden font-sans">
      {/* {news} */}
      <Link
        key={news.id}
        href={`/info/news/${news.id}`}
        className="w-full relative"
      >
        <img
          src={`https://ndc.energy.mn/wp-admin${news.attributes.image.data?.attributes.url}`}
          alt={news.attributes.title}
          className="w-full h-64 object-cover"
        />
        {/* Date overlay on top right corner */}
        <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-black px-2 py-1 rounded text-xs font-medium">
          {new Date(news.attributes.date)
            .toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\//g, "-")}
        </div>
      </Link>
      {/* {JSON.stringify(news.attributes)} */}
      <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-2 font-sans">
        <h3
          className="font-semibold text-text truncate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {news.attributes.title}
        </h3>
      </div>
    </div>
  );
}

export default AllNews;
