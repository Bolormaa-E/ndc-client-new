"use client";
import React, { useEffect } from "react";

function StrategicPlan() {
  const [processPlans, setProcessPlans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    async function fetchProcessPlansData() {
      try {
        const rawResponse = await fetch(
          "https://ndc.energy.mn/wp-admin/api/uil-ajillagaani-tailans?sort=date:DESC&populate=*",
          {
            headers: {
              Authorization:
                "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
            },
          }
        );
        const json = await rawResponse.json();
        setProcessPlans(json.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    fetchProcessPlansData();
  }, []);
  if (loading) {
    return <div className="lg:container mx-auto px-4 py-8">Уншиж байна...</div>;
  }

  const baseUrl = "https://ndc.energy.mn/wp-admin";

  return (
    <div className="lg:container mx-auto px-4 py-8 md:flex-row  md:gap-10 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center my-6">
          <h1 className="text-2xl font-bold text-text mb-4 uppercase">
            Үйл ажиллагааны тайлан
          </h1>
        </div>
        <div className="flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 font-sans">
              <table className="min-w-full divide-y divide-gray-300 font-sans">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-md font-sans font-semibold text-text sm:pl-0 text-center"
                    >
                      Дугаар
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-md font-sans font-semibold text-text"
                    >
                      Гарчиг
                    </th>
                    <th
                      scope="col"
                      className="hidden md:table-cell whitespace-nowrap px-2 py-3.5 text-left text-md font-sans font-semibold text-text"
                    >
                      Оруулсан огноо
                    </th>
                    <th
                      scope="col"
                      className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="whitespace-nowrap px-2 py-3.5 text-center text-md font-sans font-semibold text-text">
                        Линк
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {processPlans.length === 0 ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center py-8 text-gray-500"
                      >
                        Мэдээлэл алга
                      </td>
                    </tr>
                  ) : (
                    processPlans.map((plan, idx) => {
                      const fileObj =
                        plan.attributes.file_name?.data?.[0]?.attributes;
                      const fileUrl = fileObj?.url;
                      const isPdf =
                        fileUrl && fileUrl.toLowerCase().endsWith(".pdf");
                      const date =
                        plan.attributes.date ||
                        new Date(plan.attributes.createdAt).toLocaleDateString(
                          "mn-MN"
                        );
                      return (
                        <tr key={plan.id}>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-md text-gray-500 sm:pl-0 text-center">
                            {idx + 1}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text">
                            {plan.attributes.title || "Гарчиг байхгүй"}
                          </td>
                          <td className="hidden md:table-cell whitespace-nowrap px-2 py-2 text-sm text-text">
                            {date}
                          </td>
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
                              <span className="text-gray-400">
                                Файл байхгүй
                              </span>
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

        <div className="mt-6 text-xs text-gray-500 text-right">
          Эх сурвалж: Дотоод зохион байгуулалт хариуцсан мэргэжилтэн бөгөөд захирлын туслах
          Э.Ариунзаяа. Дотуур дугаар: 203
        </div>
        
      </div>
    </div>
  );
}

export default StrategicPlan;
