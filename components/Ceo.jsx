"use client";

import React, { useEffect } from "react";
//jQuery libraries

// import "jquery/dist/jquery.min.js";

//Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import $ from "jquery";

export const ceoData = [
  {
    id: "1",
    title: "Үндсэн хөрөнгийн тооллогын ажлын хэсэг",
    dateA: "A/131",
    date: "2022.10.21",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_10_21_A_131_3e7088e9f5.pdf",
  },
  {
    id: "2",
    title:
      "Нэг худалдан авагчтай загварт ашиглаж байгаа санхүүгийн програмыг сайжруулах",
    dateA: "А/127",
    date: "2022.10.05",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_10_05_A_127_25ca150f15.pdf",
  },
  {
    id: "3",
    title:
      "эрчим хүчний салбарын спортын их наадамд оролцох баг тамирчдыг бэлтгэх ажлын хэсэг",
    dateA: "А/122",
    date: "2022.08.30",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_08_30_A_121_8e490be3db.pdf",
  },
  {
    id: "4",
    title: "Компанийн 2023 оны бизнес төлөвлөгөөг боловсруулах ажлын хэсэг",
    dateA: "А/120",
    date: "2022.08.30",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_08_25_A_120_9636e8f032.pdf",
  },
  {
    id: "5",
    title: "ЭХС-ийн мэдээллийн санг үүсгэх системийн сервер орчинг бий болгох",
    dateA: "А/118",
    date: "2022.08.02",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_08_02_A_118_11b01dc2fe.pdf",
  },
  {
    id: "6",
    title: "Тайшир гуулин УЦС ХХК-тай хэлцэл хийх ажлыг хэсэг",
    dateA: "А/117",
    date: "2022.08.02",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_08_02_A_117_272cb0366e.pdf",
  },
  {
    id: "7",
    title: "Шилэн кабелийн залгааны багаж нийлүүлэх ажлыг хүлээж ажлын хэсэг",
    dateA: "А/116",
    date: "2022.07.20",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_07_20_A_116_721f5def54.pdf",
  },
  {
    id: "8",
    title: "RTDS хүлээж авах ажлын хэсэг",
    dateA: "А/114",
    date: "2022.07.06",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_07_06_A_114_bab1a00d06.pdf",
  },
  {
    id: "9",
    title: "RTDS хүлээж авах ажлын хэсэг",
    dateA: "А/111",
    date: "2022.07.04",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_07_04_A_111_cac58963bd.pdf",
  },
  {
    id: "10",
    title:
      "Скада системийн үйл ажилланаан хэвийн найдвартай явуулах системийн шинэчлэлтийг хийхэд бэлэн байдлыг хангах ажлын хэсэг",
    dateA: "А/110",
    date: "2022.06.29",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_06_29_A_110_4d886a8965.pdf",
  },
  {
    id: "11",
    title: "Агааржуулалтын тоног төхөөрөмж худалдан авч, суурилуулах",
    dateA: "А/109",
    date: "2022.06.29",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_06_29_A_109_460bc2e570.pdf",
  },
  {
    id: "12",
    title: "Лиценз худалан авах ажлын хэсэг",
    dateA: "А/104",
    date: "2022.06.23",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_06_23_A_104_ec8c91d802.pdf",
  },
  {
    id: "13",
    title: "Цахим архивын систем хүлээж авах ажлын хэсэг",
    dateA: "А/99",
    date: "2022.06.06",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_06_06_A_99_43ceb2e4ef.pdf",
  },
  {
    id: "14",
    title: "UPS-A8 UPS-B солих ажлын хэсэг",
    dateA: "А/98",
    date: "2022.06.06",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_06_06_A_98_b42028dd2c.pdf",
  },
  {
    id: "15",
    title: "ЦЭХ худалдан авах гэрээ",
    dateA: "А/97",
    date: "2022.06.06",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_06_06_A_97_71499a89c0.pdf",
  },
  {
    id: "16",
    title: "Хөдөлмөр хамгааллын хувцас худалдан авах",
    dateA: "А/88",
    date: "2022.05.26",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_05_26_A_88_77b792bdfb.pdf",
  },
  {
    id: "17",
    title: "Үндсэн хөрөнгийн тооллогын комисс",
    dateA: "А/86",
    date: "2022.05.11",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2022-05-11-А-86.pdf",
  },
  {
    id: "18",
    title:
      "Ажлын хэрэгцээнд компьютер, принтер, тэдгээрийн дагалдах хэрэгсэл худадлаж авах",
    dateA: "А/84",
    date: "2022.05.10",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_05_10_A_84_5e6af7d1f6.pdf",
  },
  {
    id: "19",
    title: "Сэлбэг хэрэгсэл худалдаж авах",
    dateA: "А/80",
    date: "2022.05.02",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_05_02_A_80_b9b6d8bc55.pdf",
  },
  {
    id: "20",
    title: "Дэд станцуудыг шуурхай ажиллагааны холбооны систед холбох",
    dateA: "А/79",
    date: "2022.05.02",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_05_02_A_79_64d61f8a2d.pdf",
  },
  {
    id: "21",
    title: "Шилэн кабелийн төгсгөлийн төхөөрөмж суурилуулах",
    dateA: "А/78",
    date: "2022.05.02",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_05_02_A_78_64dc1ab169.pdf",
  },
  {
    id: "22",
    title: "Мод тарьж ургуулах ажлын хэсэг",
    dateA: "А/76",
    date: "2022.04.26",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_27_A_76_ccadf6b056.pdf",
  },
  {
    id: "23",
    title: "Дэд станцуудын удирдлагын карт болон лицензийг шинэчлэх",
    dateA: "А/75",
    date: "2022.04.26",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_26_A_75_f150c79ee7.pdf",
  },
  {
    id: "24",
    title: "Өмч хамгаалах зөвлөлөөр хэлэлцүүлэх ажлын хэсэг байгуулах тухай",
    dateA: "А/73",
    date: "2022.04.20",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_20_A_73_4d30f64474.pdf",
  },
  {
    id: "25",
    title: "Програм хангамжийн лиценз худалдан авах, тохируулах тухай",
    dateA: "А/71",
    date: "2022.04.14",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_15_A_71_62a2cf4023.pdf",
  },
  {
    id: "26",
    title: "Зөвлөмж хэрэгжүүлэх",
    dateA: "А/70",
    date: "2022.04.14",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_14_A_70_656a9af0e3.pdf",
  },
  {
    id: "27",
    title: "Зөвлөмж хэрэгжүүлэх",
    dateA: "А/68",
    date: "2022.04.12",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_12_A_68_cb3699000c.pdf",
  },
  {
    id: "28",
    title: "Дүгнэлт гаргах",
    dateA: "А/67",
    date: "2022.04.07",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_07_A_67_b26faaaab1.pdf",
  },
  {
    id: "29",
    title: "Хяналт мэдээллийн системийн хувиргуурыг ухаалаг хэмжүүрээр солих",
    dateA: "А/66",
    date: "2022.04.05",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_05_A_66_d8b3ff7081.pdf",
  },
  {
    id: "30",
    title: "VPN сүлжээ үүсгэх",
    dateA: "А/65",
    date: "2022.04.05",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_05_A_65_ebd727ce73.pdf",
  },
  {
    id: "31",
    title: "Баримт мэдээлэл цуглуулах",
    dateA: "А/64",
    date: "2022.04.05",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_04_05_A_64_4956a9c168.pdf",
  },
  {
    id: "32",
    title: "Баримт мэдээлэл цуглуулах",
    dateA: "А/60",
    date: "2022.03.24",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_03_24_A_60_abfef727ce.pdf",
  },
  {
    id: "33",
    title: "ЦЭХ худалдах, худалдан авах гэрээ",
    dateA: "А/59",
    date: "2022.03.22",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2022-03-22-А-59.pdf",
  },
  {
    id: "34",
    title: "ЦЭХ худалдах, худалдан авах гэрээ",
    dateA: "А/58",
    date: "2022.03.17",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_03_17_A_58_65d9b4a9eb.pdf",
  },
  {
    id: "35",
    title: "ЦЭХ худалдах, худалдан авах гэрээ",
    dateA: "А/55",
    date: "2022.03.15",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_03_15_A_55_c3ebaf5e9b.pdf",
  },
  {
    id: "36",
    title: "Хөдөлмөр хамгааллын 3-р шатны үзлэг",
    dateA: "А/44",
    date: "2022.02.17",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_02_09_A_44_6855cffd44.pdf",
  },
  {
    id: "37",
    title:
      "ЭХ-ны салбар үүсэж хөгжсөний 100 жилийн ойн арга хэмжээний хөтөлбөр боловсруулах",
    dateA: "А/45",
    date: "2022.02.10",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_02_10_A_45_388ecfc1ab.pdf",
  },
  {
    id: "38",
    title: "Ажлын байранд үзлэг шалгалт хийх",
    dateA: "А/44",
    date: "2022.02.44",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2022-02-09-А-44.pdf",
  },
  {
    id: "39",
    title: "Шууд худалдан авадтыг зохион байгуулах",
    dateA: "А/41",
    date: "2022.01.31",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_01_31_A_41_07f4f6d136.pdf",
  },
  {
    id: "40",
    title: "Шууд худалдан авадтыг зохион байгуулах",
    dateA: "А/39",
    date: "2022.01.24",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2022-01-24-А-39.pdf",
  },
  {
    id: "41",
    title: "Шууд худалдан авадтыг зохион байгуулах",
    dateA: "А/38",
    date: "2022.01.24",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_01_24_A_38_0da6c84b07.pdf",
  },
  {
    id: "42",
    title: "2021 оны бичиг баримт архивлах",
    dateA: "А/35",
    date: "2022.01.20",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_01_20_A_35_03b9f8cc33.pdf",
  },
  {
    id: "43",
    title: "Шууд худалдан авадтыг зохион байгуулах",
    dateA: "А/04",
    date: "2022.01.13",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_01_13_A_04_bd50e2a7fc.pdf",
  },
  {
    id: "44",
    title: "Шууд худалдан авадтыг зохион байгуулах",
    dateA: "А/05",
    date: "2022.01.13",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_01_13_A_05_013fbb1d5c.pdf",
  },
  {
    id: "45",
    title: "Шууд худалдан авадтыг зохион байгуулах",
    dateA: "А/04",
    date: "2022.01.13",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2022-01-13-А-04.pdf",
  },
  {
    id: "46",
    title: "Ажил хүлээлцэх ажлын хэсэг",
    dateA: "Б/17",
    date: "2022.01.05",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2022-01-05-Б-17.pdf",
  },
  {
    id: "47",
    title: "Ажил хүлээлцэх ажлын хэсэг",
    dateA: "Б/16",
    date: "2022.01.05",
    link: "https://ndc.energy.mn/wp-admin/uploads/2022_01_05_B_16_e958fb7d99.pdf",
  },
  {
    id: "48",
    title: "Акт тогтоох коммисс",
    dateA: "A/246",
    date: "2021.12.21",
    link: "https://ndc.energy.mn/wp-admin/uploads/2021_12_21_A_246_5036a6eb8b.pdf",
  },
  {
    id: "49",
    title: "Цахилгаан эрчим хүч худалдах, худалдан авах",
    dateA: "A/245",
    date: "2021.12.21",
    link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2021-12-21-А-245.pdf",
  },

  {
    id: "50",
    title: "Ажлын байрын түрээсийн асуудлыг судлаж, сонгон шалгаруулах",
    dateA: "A/243",
    date: "2021.12.15",
    link: "https://ndc.energy.mn/wp-admin/uploads/2021_12_01_A_237_b849cd11cf.pdf",
  },
  // {
  //   id: "51",
  //   title: "Үндсэн хөрөнгө актлах устгах ажлын хэсэг",
  //   dateA: "A/242 ",
  //   date: "2021.12.13",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2021-12-13-А-242.pdf",
  // },

  // {
  //   id: "52",
  //   title: "Хяналт мэдээллийн системүүдийн үйл ажиллагааг шалгах ажлын хэсэг",
  //   date: "2021.12.09",
  //   dateA: "А/237",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2021-12-01-А-237.pdf",
  // },
  // {
  //   id: "53",
  //   title: "ЦЭХХХА гэрээний бүрдлийг нягтлан шалгах ажлын хэсэг",
  //   date: "2021.11.18",
  //   dateA: "А/223",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2021-11-18-А-223.pdf",
  // },
  // {
  //   id: "54",
  //   title: "Онол практикийн хурлыг зохион байгуулах ажлын хэсэг",
  //   date: "2021.11.18",
  //   dateA: "А/222",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2021-11-18-А-222.pdf",
  // },
  // {
  //   id: "55",
  //   title: "Тооллогын зохион байгуулах ажлын хэсэг",
  //   date: "2021.11.03",
  //   dateA: "A/212",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2021-11-03-А-212.pdf",
  // },
  // {
  //   id: "56",
  //   title: "Туршилт хэмжилт хийх ажлын хэсэг",
  //   date: "2021.10.14",
  //   dateA: "A/198",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/2021-10-14-А-198.pdf",
  // },

  // {
  //   id: "57",
  //   title: " Ажлын хэсэг Энержи сторежи",
  //   date: "2021.07.22",
  //   dateA: "A/144",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/144-Ажлын-хэсэг-Энержи-сторежи.pdf",
  // },
  // {
  //   id: "58",
  //   title: "Компьютер принтер хүлээн авах",
  //   date: "2021.06.10",
  //   dateA: "A/103",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/103-Ажлын-хэсэг-Компьютер-принтер-хүлээн-авах.pdf",
  // },
  // {
  //   id: "59",
  //   title: "Сэлбэг хэрэгсэл хүлээн авах",
  //   date: "2021.06.10",
  //   dateA: "A/102",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/102-Ажлын-хэсэг-Сэлбэг-хэрэгсэл-хүлээн-авах.pdf",
  // },

  // {
  //   id: "60",
  //   title: "Шинэ барилга зураг хүлээн авах",
  //   date: "2021.03.04",
  //   dateA: "A/53",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2022/11/%D0%93%D2%AF%D0%B9%D1%86%D1%8D%D1%82%D0%B3%D1%8D%D1%85_%D0%B7%D0%B0%D1%85%D0%B8%D1%80%D0%BB%D1%8B%D0%BD_%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%BA%D1%82%D1%8B%D0%BD_%D0%B1%D0%B8%D0%B5%D0%BB%D1%8D%D0%BB%D1%82_2021_%D0%BE%D0%BD-1.pdf",
  // },
  // {
  //   id: "61",
  //   title: "Ажлын хэсэг үйл ажиллагаа сурталчлах",
  //   date: "2021.02.09",
  //   dateA: "A/17",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/17_Ажлын_хэсэг_үйл_ажиллагаа_сурталчлах.pdf",
  // },
  // {
  //   id: "62",
  //   title: "Ажлын хэсэг ҮХ актлах устгах",
  //   date: "2021.01.20",
  //   dateA: "A/11",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/11-Ажлын-хэсэг-ҮХ-актлах-устгах.pdf",
  // },
  // {
  //   id: "63",
  //   title: "Шууд гэрээ",
  //   date: "2021.01.12",
  //   dateA: "A/10",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/10-ажлын-хэсэг-Шууд-гэрээ.pdf",
  // },
  // {
  //   id: "64",
  //   title: "ДҮТ ТӨХК болон ЦДҮС ТӨХК хамтарсан ажлын хэсэг багуулах тухай",
  //   date: "2021.04.16",
  //   dateA: "A/71, A/117",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/A-71-A-117-345-MBт-ЦДҮС.pdf",
  // },
  // {
  //   id: "65",
  //   title: "Ариутгал халдваргүйжилийн төхөөрөмж худалдан авах, суурилуулах",
  //   date: "2021.01.07",
  //   dateA: "A/03",
  //   link: "https://ndcold.energy.mn/wp-content/uploads/2023/06/A03-Ариутгал-халдваргүйжилийн-төхөөрөмж-худалдан-авах-суурилуулах.png",
  // },
];

function Ceo({ data }) {
  // Transform the API data to match the expected format
  const ceoData = data
    ? data
        .map((item, index) => ({
          id: (index + 1).toString(),
          title: item.attributes.title,
          dateA: (index + 1).toString().padStart(2, "0"), // Generate sequential number
          date: item.attributes.date,
          link: item.attributes.file_name?.data?.[0]?.attributes?.url || "#",
        }))
        .sort((a, b) => b.date.localeCompare(a.date))
    : [];

  // useEffect(() => {
  //   $(document).ready(function () {
  //     setTimeout(function () {
  //       $("#tableCeo").DataTable();
  //     }, 1000);
  //   });
  // }, []);

  // useEffect(() => {
  //   $(document).ready(function () {
  //     setTimeout(function () {
  //       $("#tableCeo").DataTable({
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
      <div className="sm:flex sm:items-center md:flex">
        <div className="sm:flex-auto text-center">
          <h1 className="text-base font-semibold leading-6 text-text">
            Гүйцэтгэх захирал
          </h1>
        </div>
      </div>
      <div className="flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 font-sans">
            <table
              id="tableCeo"
              className="min-w-full divide-y divide-gray-300 "
            >
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-md font-sans font-semibold text-text sm:pl-0 text-center "
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
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-sans font-semibold text-text"
                  >
                    Огноо
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
              <tbody className="divide-y divide-gray-200 bg-white">
                {ceoData.map((ceoData) => (
                  // <tr>
                  //   <td>{ceo.id}</td>
                  //   <td>{ceo.title.rendered}</td>
                  //   <td>{ceo.date}</td>
                  //   <td>{ceo.link}</td>
                  // </tr>
                  <tr key={ceoData.id}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-md text-gray-500 sm:pl-0 text-center">
                      {ceoData.id}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-text">
                      {ceoData.title}
                    </td>

                    <td className="whitespace-nowrap px-2 py-2 text-sm text-text">
                      {ceoData.date}
                    </td>

                    <td className="relative whitespace-nowrap py-2   text-center text-sm font-medium sm:pr-0">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        // onClick={() => findUploadFile(ceo.id)}
                        // href="#"
                        href={"https://ndc.energy.mn/wp-admin" + ceoData.link}
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
}

export default Ceo;
