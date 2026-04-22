import React from "react";

export const biylelt = [
  {
    id: "1",
    title: "Авлигатай тэмцэх үндэсний хөтөлбөрийн биелэлт",
    date: "2025.03.13",
    link: "https://drive.google.com/file/d/1nFAPz4dB92I6hA7v-XA_fjzwSxifDoeS/view?usp=drive_link",
  },
  {
    id: "2",
    title: "2024 оны Авлигын эсрэг үйл ажиллагааны төлөвлөгөөний биелэлт",
    date: "2025.03.13",
    link: "https://drive.google.com/file/d/1xYxae_uYC9gBZAPAOJUtydaDlPQnRew6/view?usp=drive_link",
  },
  {
    id: "3",
    title: "2023 оны Авлигын эсрэг үйл ажиллагааны төлөвлөгөөний биелэлт",
    date: "2023.12.13",
    link: "https://ndc.energy.mn/wp-admin/uploads/Avligyn_esreg_2023_ony_bielelt_1_compressed_6cbafbe522.pdf",
  },
  {
    id: "4",
    title: "2022 оны Авлигын эсрэг үйл ажиллагааны төлөвлөгөөний биелэлт",
    date: "2022.12.13",
    link: "https://ndc.energy.mn/wp-admin/uploads/022_12_13_01_1919_compressed_fc0bff2eba.pdf",
  },
  {
    id: "5",
    title: "2021 оны Авлигын эсрэг үйл ажиллагааны төлөвлөгөөний биелэлт",
    date: "2021.12.15",
    link: "https://ndcold.energy.mn/wp-content/uploads/2022/11/%D0%90%D0%B2%D0%BB%D0%B8%D0%B3%D1%8B%D0%BD_%D1%8D%D1%81%D1%80%D1%8D%D0%B3_2021_%D0%BE%D0%BD%D1%8B_%D1%82%D3%A9%D0%BB%D3%A9%D0%B2%D0%BB%D3%A9%D0%B3%D3%A9%D3%A9_%D0%91%D0%98%D0%95%D0%9B%D0%AD%D0%9B%D0%A2.pdf",
  },
];
const Biylelt = ({ sectionTitle, loading, tableData }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto text-center">
          <h1 className="text-base font-semibold leading-6 text-text">
            {sectionTitle}
          </h1>
        </div>
      </div>
      <div className="flow-root">
        {loading ? (
          <p>getting list</p>
        ) : tableData ? (
          tableData.length === 0 ? (
            <p>no data</p>
          ) : (
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300 ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-text     sm:pl-0"
                      >
                        Дугаар
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-text"
                      >
                        Гарчиг
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-text"
                      >
                        Огноо
                      </th>

                      <th
                        scope="col"
                        className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="whitespace-nowrap px-2 py-3.5 text-center text-sm font-semibold text-text">
                          Линк
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {tableData.map((linkData) => (
                      <tr key={linkData.id}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0 text-center">
                          {linkData.id}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text">
                          {linkData.title}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-text">
                          {linkData.date}
                        </td>

                        <td className="relative whitespace-nowrap py-2   text-center text-sm font-medium sm:pr-0">
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href={linkData.link}
                            className="text-indigo-600 hover:text-red-500"
                          >
                            Харах
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        ) : (
          <p>failed to fetch data</p>
        )}
      </div>
    </div>
  );
};

export default Biylelt;
