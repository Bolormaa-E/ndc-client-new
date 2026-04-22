import React from "react";

const AwilgaPlan = ({ sectionTitle, loading, tableData }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto text-center font-sans">
          <h1 className="text-base font-semibold leading-6 text-text">
            {sectionTitle}
          </h1>
        </div>
      </div>
      <div className="flow-root">
        {loading ? (
          <p>Уншиж байна</p>
        ) : tableData ? (
          tableData && tableData.length === 0 ? (
            <p>Мэдээлэл олдсонгүй</p>
          ) : (
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 font-sans">
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
                    {tableData.map((linkData, key) => (
                      <tr key={linkData.id}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0 text-center">
                          {key + 1}
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
                            href={`https://ndc.energy.mn/wp-admin${linkData.link}`}
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
          <p>Мэдээлэл олдсонгүй</p>
        )}
      </div>
    </div>
  );
};

export default AwilgaPlan;
