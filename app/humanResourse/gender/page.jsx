'use client'
 
import React, {useState, useEffect} from "react";
import Video from "@/components/Video";




function Gender () {
  const [genderData, setGenderData] = useState([]);

  useEffect(() => {
    async function fetchSurgalt() {
      try {
        const response = await fetch(
          "https://ndc.energy.mn/wp-admin/api/genders?populate=*",
          {
            headers: {
              "Authorization": "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2"
            },
          }
        );

        const data = await response.json();
        setGenderData(data.data);
      } catch (error) {
        console.error("Error fetching gender data:", error);
      }
    }
    fetchSurgalt();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="flex justify-center text-xl font-bold text-md uppercase text-text py-12">
            Тоон үзүүлэлт
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center  ">
          <img src="/image/gender_graph_1.png" alt="Ажилтнуудын дундаж нас" className="max-w-[400px] w-full rounded shadow" />
          <img src="/image/gender_graph_2.png" alt="Хүйсний харьцаа" className="max-w-[400px] w-full rounded shadow" />
          <img src="/image/gender_graph_3.png" alt="Удирдах албан тушаалд" className="max-w-[400px] w-full rounded shadow" />
        </div> 
        <div className="flex flex-col md:flex-row gap-8 w-full mt-12"> 
          <div className="flex-1 min-w-0">
            <div className="text-center">
              <h2 className="flex justify-center text-xl font-bold text-md uppercase text-text py-10">
                Баримт бичгийн жагсаалт
              </h2>
            </div>
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border">
                      <th scope="col" className="w-12 px-2 py-3 text-center text-xs font-bold text-text uppercase">№</th>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-bold text-text uppercase">Файлын нэр</th>
                      <th scope="col" className="hidden md:table-cell w-24 px-2 py-3 text-left text-xs font-bold text-text uppercase">Огноо</th>
                      <th scope="col" className="w-32 px-2 py-3 text-center text-xs font-bold text-text uppercase">Үйлдэл</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {genderData.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="text-center py-4 text-gray-400">Мэдээлэл алга</td>
                      </tr>
                    ) : (
                      genderData.map((item, idx) => {
                        const fileObj = item.attributes?.file?.data?.[0]?.attributes;
                        const fileUrl = fileObj?.url;
                        const isPdf = fileUrl && fileUrl.toLowerCase().endsWith('.pdf');
                        return (
                          <tr key={item.id}>
                            <td className="whitespace-nowrap py-2 px-2 text-sm text-text text-center">{idx + 1}</td>
                            <td className="px-2 py-2 text-sm font-medium text-text max-w-[600px] break-words">{item.attributes?.file_name || 'Гарчиг байхгүй'}</td>
                            <td className="hidden md:table-cell whitespace-nowrap px-2 py-2 text-sm text-text">{item.attributes?.date || new Date(item.attributes?.createdAt).toLocaleDateString('mn-MN')}</td>
                            <td className="relative whitespace-nowrap py-2 text-center text-sm font-medium sm:pr-0">
                              {isPdf ? (
                                <a
                                  rel="noopener"
                                  href={`https://ndc.energy.mn/wp-admin${fileUrl}`}
                                  target="_blank"
                                  className="text-indigo-600 hover:text-red-500"
                                >
                                  Харах
                                </a>
                              ) : (
                                <span className="text-gray-400">Файл байхгүй</span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div> 
          <div className="flex-1 min-w-0 flex flex-col items-center">
            <div className="text-center">
              <h2 className="flex justify-center text-xl font-bold text-md uppercase text-text py-10">
                Бусад мэдээлэл
              </h2>
            </div>
            <div className="w-full flex items-center justify-center">
              <Video />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gender;