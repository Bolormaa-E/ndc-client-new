import React from "react";

export const medeelel = [
  {
    id: "1",
    title: "Авлигатай тэмцэх үйл ажиллагаа дэлхий дахинд",
    date: "2022",
    link: "https://ndcold.energy.mn/wp-content/uploads/2022/11/%D0%90%D0%92%D0%9B%D0%98%D0%93%D0%90%D0%A2%D0%90%D0%99_%D0%A2%D0%AD%D0%9C%D0%A6%D0%AD%D0%A5_%D2%AE%D0%99%D0%9B_%D0%90%D0%96%D0%98%D0%9B%D0%9B%D0%90%D0%93%D0%90%D0%90_%D0%94%D0%AD%D0%9B%D0%A5%D0%98%D0%99_%D0%94%D0%90%D0%A5%D0%98%D0%9D%D0%94.pdf",
  },
  {
    id: "2",
    title: "Авлигатай тэмцэх үндэсний хөтөлбөр",
    date: "2017",
    link: "https://ndcold.energy.mn/wp-content/uploads/2022/11/ATU-khutulbur.pdf",
  },
  {
    id: "3",
    title: "Шүгэл үлээгч",
    date: "2022",
    link: "https://ndcold.energy.mn/wp-content/uploads/2022/11/Shugel-uleegch.pdf",
  },
  {
    id: "4",
    title: "Мэдээллийн ил тод байдал",
    date: "2022",
    link: "https://ndcold.energy.mn/wp-content/uploads/2022/11/Il-tod-2017.pdf",
  },
];
const Amedeelel = ({ sectionTitle, loading, tableData }) => {
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

export default Amedeelel;
