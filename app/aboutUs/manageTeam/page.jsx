
'use client'


import React, { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Image from "next/image"
import {
  ceo,
  tda,
  tha,
  yrunhii,
  zua,
  gtta,
  rele,
  mha,
  zza,
  mtt,
  sha,
  seza,
} from "../../../assets";



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-gray-50 hover:bg-gray-400 duration-300 rounded-md text-2xl text-gray-500 flex justify-center items-center absolute top-0 right-0 shadow-lg cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-gray-50 hover:bg-gray-50 duration-300 rounded-md text-2xl text-gray-500 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const ManageTeam = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff011f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section id="resume" className="w-full py-20 text-text">
      <div className="flex font-bold text-xl justify-center items-center py-8 pt-0">
        <h1>УДИРДЛАГЫН БАГ</h1>
      </div>
      <div className="max-w-6xl mx-auto ">
        <Slider {...settings}>
          <div className="w-full">
            {/*<div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={ceo}
                  alt="ceo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-md font-bold  mb-2 text-red-500">
                    “Монгол улсын зөвлөх инженер”
                  </p>
                  <h3 className="text-2xl font-bold">
                    Гомборагчаагийн Балжинням
                  </h3>
                  <p className=" font-base text-md tracking-wide text-gray-500 ">
                    Гүйцэтгэх захирал
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-2 bg-gray-50 text-text rounded-lg shadow-lg p-4 lg:p-4 flex flex-col justify-center gap-2 lg:gap-4 lg:mx-0">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-400">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                            1987-1992 онд Политехникийн дээд сургуулийг /тухайн
                            үеийн нэр/ “Цахилгаан системийн үйлдвэрлэл,
                            хуваарилалтын автоматжуулалт” мэргэжлээр бакалавр
                          </li>
                          <li>
                            1998-1999 онд Техникийн их сургуулийг “Цахилгаан
                            системийн автоматжуулалт” мэргэжлээр магистр
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 33 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>
                          1992-1994 онд “ДЦС-4” ТӨХК-ийн Цахилгаан цехийн реле
                          хамгаалалтын лабораторид монтёр
                        </li>
                        <li>
                          1994-1998 онд Төвийн эрчим хүчний системийн
                          Диспетчерийн албанд Ээлжийн диспетчер инженер
                        </li>
                        <li>
                          1998-2000 онд Эрчим хүчний удирдах газрын
                          Үйлдвэрлэлийн албанд Ахлах инженер
                        </li>
                        <li>
                          2000-2006 онд “Диспетчерийн үндэсний төв” ХХК-д
                          Ээлжийн диспетчер инженер, ТДА-ны Ахлах инженер
                        </li>
                        <li>2006-2013 онд тус компанид Диспетчерийн албаны дарга</li>
                        <li>
                          2013-2016 онд тус компанид Тэргүүн дэд захирал бөгөөд Ерөнхий
                          диспетчер
                        </li>
                        <li>
                          2016-2018 онд тус компанид Чанарын удирдлага, хэмнэлтийн менежер
                        </li>
                        <li>
                          2018 оны 10-р сараас тус компанид Гүйцэтгэх захирлаар томилогдон
                          ажиллаж байна.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={yrunhii}
                  alt="yrunhii"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-md font-bold   mb-2 text-red-500">
                    “Монгол улсын зөвлөх инженер”
                  </p>
                  <h3 className="text-2xl font-bold">Бадамсүрэнгийн Баатар</h3>
                  <p className="text-base tracking-wide text-gray-600">
                    Ерөнхий диспетчер
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-6 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                  <div className="flex flex-col justify-between lg:items-center py-6 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                            1986-1991 онд Политехникийн дээд сургуулийг
                            Цахилгаан системийн реле хамгаалалт, автоматикийн
                            инженер
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 34 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>
                          1991-1992 онд Төвийн эрчим хүчний системийн Шуурхай
                          удирдлага, горимын албаны диспетчер инженерээр
                        </li>
                        <li>
                          1993-1996 онд Түлш, эрчим хүчний системийн Шуурхай
                          ажиллагааны албанд Диспетчер инженерээр
                        </li>
                        <li>
                          1996-2001 онд Эрчим хүчний удирдах газарт Диспетчер
                          инженерээр
                        </li>
                        <li>
                          2001-2009 онд “Диспетчерийн үндэсний төв” ХХК-д
                          Диспетчер инженер
                        </li>
                        <li>
                          2009-2018 онд тус компанид Төв диспетчерийн албаны Ахлах инженерээр
                        </li>
                        <li>
                          2018 оны  11-р сараас тус компанид
                          Ерөнхий диспетчерээр томилогдон ажиллаж байна
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/*<div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={zua}
                  alt="zua"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-md font-bold   mb-2 text-red-500">
                    Мэргэшсэн инженер
                  </p>
                  <h3 className="text-2xl font-bold">Батмөнхийн Биндэръяа</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Захиргаа, удирдлагын албаны дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-8 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-16">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                            2005-2010 онд ШУТИС-ийн ХМТС-ийг Мэдээллийн
                            технологийн инженер мэргэжлээр бакалавр
                          </li>
                          <li>
                            2013-2016 онд СЭЗИС-ийг Санхүүгийн удирдлага
                            мэргэжлээр бакалавр
                          </li>
                          <li>
                            2018-2020 онд МУИС-ийг Мэдээллийн системийн инженер
                            мэргэжлээр магистр
                          </li>
                          <li>
                            2020 онд ШУТИС-ийн ЭХС-д Цахилгаан системийн
                            автоматжуулалт мэргэжлээр бакалавр
                          </li>
                          <li>
                          2023 онд МХНА-д Хүний нөөцийн менежмент мэргэшлийн диплом
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          Эрчим хүчний салбарт 7 дахь жилдээ ажиллаж байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>
                          2011-2013 онд “Жи Мобайл” ХХК-д Үндсэн сүлжээний
                          ашиглалтын ээлжийн инженерээр
                        </li>
                        <li>
                          2013-2017 онд Худалдаа хөгжлийн банкинд Системийн
                          аюулгүй байдлын инженерээр
                        </li>
                        <li>
                          2017-2019 онд Сангийн яамны харъяа “Гааль, татвар,
                          санхүүгийн мэдээллийн технологийн төв” ТӨҮГ-ын
                          Мэдээллийн технологи хариуцсан Дэд захирал
                        </li>
                        <li>
                          2019 оны 4-р сараас “Диспетчерийн үндэсний төв” ТӨХХК-д Захиргаа, удирдлагын
                          албаны даргаар ажиллаж байна.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={tda}
                  alt="tda"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-md font-bold   mb-2 text-red-500">
                    Мэргэшсэн инженер
                  </p>
                  <h3 className="text-2xl font-bold">Баатарын Ганбат</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Төв диспетчерийн албаны дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-6 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-10">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                            Украйн улсын Киевийн Техникийн их сургуулийг
                            цахилгаан сүлжээ ба систем мэргэжлээр магистр
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 26 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>1999-2001 онд ЭХУГ-т диспетчер инженер</li>
                        <li>
                          2001-2003 онд &lsquo;Диспетчерийн Үндэсний Төв&rdquo; ХХК-д
                          диспетчер инженер
                        </li>
                        <li>
                          2003-2013 онд тус компанид диспетчер инженер, ахлах диспетчер
                        </li>
                        <li>2019-2021 онд тус компанид сургагч диспетчер инженер</li>
                        <li>2021 оноос тус компанид ТДА-ны даргаар ажиллаж байна.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={tha}
                  alt="tha"
                />

                <div className="w-full flex flex-col justify-end">
                  <p className="text-md font-bold   mb-2 text-red-500">
                    Монгол улсын зөвлөх инженер
                  </p>
                  <h3 className="text-2xl font-bold">Цэрэндоржийн Батмагнай</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Техник хяналтын албаны дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-6 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                            2000 онд ОХУ –ын Москва хотын Эрчим хүчний их
                            сургуулийг (МЭИ) дулааны цахилгааны станцын
                            ашиглалтаар бакалавр
                          </li>
                          <li>
                            2002 онд ОХУ –ын Москва хотын Эрчим хүчний их
                            сургуулийг (МЭИ) дулааны цахилгааны станцын
                            ашиглалтаар магистр
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 23 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>
                          2002-2003 онд ДЦС-4 ТӨХК –ийн Турбин цехэд засварчин
                        </li>
                        <li>
                          2003-2008 онд ДЦС-4 ТӨХК –ийн Турбин цехэд засварын
                          мастер
                        </li>
                        <li>
                          2008-2010 онд ДЦС-4 ТӨХК –ийн Ашиглалтын албанд
                          ээлжийн инженер
                        </li>
                        <li>
                          2010-2018 онд ДЦС-4 ТӨХК –ийн Үйлдвэрлэлийн албанд
                          шинэчлэл хариуцсан инженер
                        </li>
                        <li>
                          2018-2018 онд ДЦС-4 ТӨХК –ийн Төсөл хэрэгжүүлэх
                          нэгжид төслийн дэд зохицуулагч
                        </li>
                        <li>
                          2018-2021 онд ДЦС-4 ТӨХК –ийн Турбин цехэд цехийн
                          дарга
                        </li>
                        <li>
                          2021 оноос ДҮТ ТӨХХК ТХА -д даргаар ажиллаж байна.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={gtta}
                  alt="gtta"
                />

                <div className="w-full flex flex-col justify-end">
                  <p className="text-md font-bold   mb-2 text-red-500">
                  &lsquo;Монгол Улсын Зөвлөх инженер&rdquo;
                  </p>
                  <h3 className="text-2xl font-bold">Хөхөөгийн Болд-Эрдэнэ</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Горим төлөвлөлт тооцооны албаны дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-6 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                        <li>
                            2016-2018 Австрали улс, &lsquo;Рояал Мельбурн Технологийн
                            Институт&rdquo; Их Сургууль, Цахилгааны инженер мэргэжлээр
                            магистр
                          </li>
                          <li>
                          2001 онд ОХУ-ын Уралын Техникийн их сургуулийг 
                            цахилгаан систем ба сүлжээ мэргэжлээр бакалавр
                          </li>
                          
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 24 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>
                          2001-2003 онд Монгол-Оросын хамтарсан “Эрдэнэт”
                          УБҮ-ийн Цахилгаан цехэд монтёр, инженерэрээр
                        </li>
                        <li>
                          2003-2016 онд “ДҮТ” ХХК-ийн Горим төлөвлөлт, тооцооны
                          албанд горим төлөвлөлтийн инженер, ахлах инженерээр
                        </li>
                        <li>
                          2018-2019 онд тус компанийн ГТТА-нд цахилгааны горим
                          төлөвлөлтийн инженер
                        </li>
                        <li>
                          2019-2020 онд тус Төв диспетчерийн албаны дарга
                        </li>
                        <li>
                          2020 оны 3-р сараас компанийн Горим тооцоо, төлөвлөлтийн албаны
                          даргаар ажиллаж байна.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={rele}
                  alt="rele"
                />

                <div className="w-full flex flex-col justify-end">
                  <p className="text-md font-bold   mb-2 text-red-500">
                    “Монгол Улсын Зөвлөх инженер”
                  </p>
                  <h3 className="text-2xl font-bold">Дуламжавын Цоож</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Реле хамгаалалт, автоматикийн албаны дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-6 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-16">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                            1997-2001 онд ШУТИС-ийн ЭХИС-ийг “Цахилгаан системийн автоматжуулалт” мэргэжлээр бакалавр
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 24 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>2001-2005 онд “ДЦС-4” ТӨХК-ийн Цахилгаан цехийн ЦТЛ-д реле хамгаалалтын монтёр</li>
                        <li>
                          2005-2010 онд “Диспетчерийн үндсэний төв” ХХК-ийн Горим төлөвлөлт, тооцооны албанд инженер
                        </li>
                        <li>
                          2010-2025 онд тус компанийн Реле хамгаалалт, автоматикийн албанд инженер, ахлах инженер
                        </li>
                        <li>2025 онд тус компанийн Реле хамгаалалт, автоматикийн албаны дарга</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={mha}
                  alt="mha"
                />

                <div className="w-full flex flex-col justify-end">
                  <p className="text-md font-bold   mb-2 text-red-500">
                    “Мэргэшсэн инженер”
                  </p>
                  <h3 className="text-2xl font-bold">БАСАНГИЙН ДАВААНЯМ</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Мэдээлэл холбооны албаны дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-2 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-4 flex flex-col justify-center gap-4 lg:gap-8">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                            ШУТИС-ийн Эрчим хүчний инженерийн сургуулийг 2009
                            онд Компьютерийн инженер мэргэжлээр бакалавр
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 16 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>
                          2009-2013 онд ДЦС-3 ТӨХК-ийн ДХХА-ийн цехэд
                          системийн програмч
                        </li>

                        <li>
                          2013-2019 Диспетчерийн үндэсний төв ХХК-ийн МТХА-нд ХМС-ийн сүлжээний
                          инженер
                        </li>
                        <li>
                          2019 оны 3-р сараас Диспетчерийн үндэсний төв ТӨХХК-ийн Мэдээлэл холбооны
                          албаны даргаар ажиллаж байна.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-full flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={zza}
                  alt="zza"
                />

                <div className="w-full flex flex-col justify-end">
                  {/* <p className="text-md font-bold   mb-2 text-red-500">
                    Магистер
                  </p> */}
                  <h3 className="text-2xl font-bold">Төмөрхуягийн Бат-Уул</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Арилжаа зохицуулалтын албаны дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[60%] py-2 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-6 flex flex-col justify-center gap-2 lg:gap-4">
                  <div className="flex flex-col justify-between lg:items-center py-2 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                          2021-2023 Аризона мужын иx сургууль(Arizona State University, USA), эрчим xүчний инженер, магистер
                          </li>
                          <li>
                            2011-2015 Xойд Дакота мужын иx сургууль (North Dakota State University, USA), цаxилгааны инженер, бакалавр
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 09 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>2016-2017 ДҮТ ТӨXXК, Бүсүүдийн горим тооцооны инженер</li>
                        <li>2017-2020 ДҮТ ТӨXXК, Горим тооцооны инженер</li>
                        <li>2020-2021 ЭXЗX, Арилжааны зохицуулалт, цахилгаан түгээх, хангах тариф хариуцсан 
мэргэжилтэн</li>
                        <li>
                          2023 - Эрчим xүчний шийдлийн лаборатори (Laboratory of Energy and Power Solutions, USA) - Судлаач инженер
                        </li>
                        <li>
                          2022 - 2025 Австралиан Солар Энтерпрайз (Australian Solar Enterprises, Australia)  - Эрчим xүчний ерөнxий зөвлөx инженер
                        </li>
                        <li>
                          2023 - 2025 Энержи Интернэшнл XXК - Зөвлөx инженер
                        </li>
                        <li>
                          2025 - оноос ДҮТ ТӨXXК, АЗА-ны дарга
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={mtt}
                  alt="mtt"
                />

                <div className="w-full flex flex-col justify-end">
                  
                  <h3 className="text-2xl font-bold">Норолхоогийн Мөнгөнхуягт</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Мэдээллийн технологийн төвийн дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-6 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-16">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                          2012-2016 КТМС Программ хангамжийн инженер
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 8 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>
                        2017 - 2019 Төрийн банк МТХМэргэжилтэн
                        </li>

                        <li>
                        2019 - 2022 БЗӨБЦТС ТӨХК -д Программ хангамжийн инженер
                        </li>
                        <li>
                        2022 - 2023 Диспетчерийн үндэсний төв ТӨХКК-д Суурь систем хөгжүүлэгч
                        </li>
                        <li>
                        2023 оны 5 сараас тус компанийн Мэдээллийн технологийн төвийн даргаар томилогдон ажиллаж байна.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/*<div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={sha}
                  alt="sha"
                />

                <div className="w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold">Энхбаярын Ганбат</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Судалгаа хөгжлийн албаны дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-6 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-16">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-600">
                    <div className="justify-center">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                            ШУТИС-ийн Эрчим хүчний инженерийн сургуулийг 2007
                            онд Дулааны цахилгаан станцын ашиглалт мэргэжлээр
                            бакалавр зэрэгтэйгээр төгссөн.
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 17 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>
                          2008 – 2013 онд “ДЦС-4” ТӨХК-ийн Зуухан цехэд туслах
                          тоноглолын машинч, туслах машинч, зуухны машинчаар,
                          2013 – 2021 онд “ДЦС-4” ТӨХК-ийн Судалгаа хөгжлийн
                          албаны инженерээр
                        </li>

                        <li>
                          2021 оны 06-р сараас “ДҮТ” ТӨХХК-ийн Судалгаа хөгжлийн
                          албаны даргаар ажиллаж байна.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gray-50 p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <Image
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={seza}
                  alt="seza"
                />

                <div className="w-full flex flex-col justify-end">
                  <p className="text-md font-bold   mb-2 text-red-500">
                    “Татварын мэргэшсэн зөвлөх”
                  </p>
                  <h3 className="text-2xl font-bold"> Тогоохүүгийн Бямбажав</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Санхүү эдийн засгийн албаны дарга
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-8 bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-16">
                  <div className="flex flex-col justify-between lg:items-left py-6 border-b-2 border-b-gray-600">
                    <div className="justify-start">
                      <h3 className="text-md lg:text-md font-medium ">
                        Боловсролын байдал:
                      </h3>
                      <div className="text-sm lg:text-sm">
                        {" "}
                        <ul>
                          <li>
                            Санхүү эдийн засгийн коллежийг 1994 онд Нягтлан
                            бодогч бодогч мэргэжлээр бакалавр
                          </li>
                          <li>
                            2019 онд Татварын мэргэшсэн зөвлөх, 2020 онд
                            мэргэшсэн нягтлан бодогч
                          </li>
                        </ul>
                        <p className="font-medium py-2">
                          {" "}
                          Эрчим хүчний салбарт тасралтгүй 31 дахь жилдээ ажиллаж
                          байна.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md lg:text-md font-medium ">
                      Ажлын туршлага:
                    </h3>
                    <div className="text-sm lg:text-sm  ">
                      <ul>
                        <li>
                          1994-1998 онд Мах импекс ХХК-д борлуулалтын нягтлан
                          бодогч
                        </li>

                        <li>2009-2012 оны хооронд Эрчим хүчний газарт нярав</li>

                        <li>
                          2013-2017 он хүртэл Эрчим хүчний хөгжлийн төвд нягтлан
                          бодогч
                        </li>

                        <li>
                          2017 оноос Диспетчерийн үндэсний төвд Ахлах нягтлан
                          бодогч
                        </li>
                        <li>
                          2021 оноос Санхүү эдийн засгийн албаны даргаар ажиллаж
                          байна
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <h3>2</h3>
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default ManageTeam;
