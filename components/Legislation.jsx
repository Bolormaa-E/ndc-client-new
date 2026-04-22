"use client";

import React, { useEffect } from "react";
//jQuery libraries

// import "jquery/dist/jquery.min.js";

//Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import $ from "jquery";

export const durem = [
  {
    id: "1",
    title: "Компанийн дүрмийн нэмэлт өөрчлөлт",
    date: "2023.05.22",
    link: "https://ndc.energy.mn/wp-admin/uploads/Kompanijn_d_rmijn_nemelt_rchl_lt_2023_05_22_89d02371e7.pdf",
  },
  {
    id: "1",
    title: "Ажилтанд сар жилийн үйл ажиллагааны үр дүнгийн нэмэгдэл хөлс олгох",
    date: "2025.06.19",
    link: "https://ndc.energy.mn/wp-admin/uploads/Azhiltand_sar_zhilijn_jl_azhillagaany_r_d_ngijn_nemegdel_h_ls_olgoh_02f666266b.pdf",
  },
  {
    id: "1",
    title: "Ёс зүйн дүрэм-2023",
    date: "2023.02.13",
    link: "https://ndc.energy.mn/wp-admin/uploads/Yos_z_jn_d_rem_2023_02_13_5a04a70205.pdf",
  },
  {
    id: "1",
    title: "Хүний нөөцийн сонгон шалгаруулалт, бүрдүүлэлтийн журам",
    date: "2025.06.19",
    link: "https://ndc.energy.mn/wp-admin/uploads/2025_06_19_A_134_h_nij_n_czin_songon_shalgaruulalt_b_rd_leltijn_fad6d4a17d.pdf",
  },
  {
    id: "2",
    title: "Дүн шинжилгээний журам",
    date: "2024.04.11",
    link: "https://ndc.energy.mn/wp-admin/uploads/d_n_shinzhilgeenij_zhuram_a5df75cff8.pdf",
  },
  {
    id: "1",
    title: "Эрсдэлийн менежментийн журам",
    date: "2024.04.11",
    link: "https://ndc.energy.mn/wp-admin/uploads/MEDEELLIJN_A_Yu_ULG_J_BAJDLYN_Z_R_Ch_LIJN_ED_A_Zh_ILLAH_Zh_URAM_addf6445bb.pdf",
  },

  {
    id: "1",
    title: "Баримт бичиг бүртгэл хяналтын журам 2024",
    date: "2024.02.29",
    link: "https://ndc.energy.mn/wp-admin/uploads/Barimt_bichig_b_rtgel_hyanaltyn_zhuram_2024_85ece56cc7.pdf",
  },
  {
    id: "1",
    title: "5С хэрэгжүүлэх, хэвшүүлэх, үнэлэх журам",
    date: "2024.02.29",
    link: "https://ndc.energy.mn/wp-admin/uploads/5_S_heregzh_leh_hevsh_leh_neleh_zhuram_2024_3561762ebf.pdf",
  },
  {
    id: "1",
    title: "Чанарын гарын авлага 2023",
    date: "2023.08.29",
    link: "https://ndc.energy.mn/wp-admin/uploads/Ch_ANARYN_GARYN_AVLAGA_Sh_INE_2023_5eac21c6a3.pdf",
  },
  {
    id: "1",
    title: "Чанарын баримт бичиг бүртгэлийн журам",
    date: "2024.09.30",
    link: "https://ndc.energy.mn/wp-admin/uploads/Barimt_bichig_b_rtgel_hyanaltyn_zhuram_2024_b8c2e0d3dc.pdf",
  },
  {
    id: "1",
    title: "МТ-ны дотоод аудит хийх журам",
    date: "2024.03.27",
    link: "https://ndc.energy.mn/wp-admin/uploads/MT_ny_dotood_audit_hijh_zhuram_2024_5acc095c67.pdf",
  },
  {
    id: "1",
    title: "Бүтээмжийн багийн ажиллах журам",
    date: "2024.03.27",
    link: "https://ndc.energy.mn/wp-admin/uploads/B_teemzh_bagijn_azhillah_zhuram_2024_33980a0950.pdf",
  },
  {
    id: "1",
    title: "Архивын баримт хүлээн авах, ашиглуулах журам",
    date: "2024.03.27",
    link: "https://ndc.energy.mn/wp-admin/uploads/Arhivyn_barimt_h_leen_avah_hadgalah_ashigluulah_zhuram_2021_d4c76e9081.pdf",
  },
];
const Legislation = ({ data }) => {
  // Transform the API data to match the expected format
  console.log("Legislation data:", data);
  const duremData = data
    ? data.map((item, index) => ({
        id: (index + 1).toString(),
        title: item.attributes.title,
        date: item.attributes.date,
        link: item.attributes.file_name?.data?.[0]?.attributes?.url || "#",
      }))
    : [];

  // useEffect(() => {
  //   $(document).ready(function () {
  //     setTimeout(function () {
  //       $("#tableLegislation").DataTable();
  //     }, 1000);
  //   });
  // }, []);

  // useEffect(() => {
  //   $(document).ready(function () {
  //     setTimeout(function () {
  //       $("#tableLegislation").DataTable({
  //         language: {
  //           lengthMenu: "Нийт _MENU_ бичлэг байна.",
  //           zeroRecords: "Nothing found - sorry",
  //           info: "Дэлгэцэнд _PAGE_ -ийн _PAGES_",
  //           infoEmpty: "Хоосон",
  //           infoFiltered: "(filtered from _MAX_ total records)",
  //         },
  //         bDestroy: true,
  //       });
  //     }, 1000);
  //   });
  // }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto text-center">
          <h1 className="text-base font-semibold leading-6 text-text">
            Дүрэм журам
          </h1>
        </div>
      </div>
      <div className="flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table
              id="tableLegislation"
              className="min-w-full divide-y divide-gray-300 "
            >
              <thead>
                <tr>
                  {/* <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-text sm:pl-0"
                  >
                    Дугаар
                  </th> */}
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
                {duremData.map((linkData) => (
                  <tr key={linkData.id}>
                    {/* <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0 text-center">
                      {linkData.id}
                    </td> */}
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
                        href={"https://ndc.energy.mn/wp-admin" + linkData.link}
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
      </div>
    </div>
  );
};

export default Legislation;
