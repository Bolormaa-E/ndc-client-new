import React from "react";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";




function Address() {
  const ContactData = [
    {
      id: 1,
      title: "Цахим шуудан",
      info: "",
      icon: FiMail,
      contact: "ndc@ndc.energy.mn",
    },
    {
      id: 2,
      title: "Утас",
      info: "",
      icon: FiPhoneCall,
      contact: "976-7004-1371 #203",
    },
    {
      id: 3,
      title: "Хаяг",
      info: "",
      icon: FiMapPin,
      contact:
        "Улаанбаатар хот, Хан-Уул дүүрэг, 3-р хороо Засгийн газрын 14-р байр",
    },
  ];
  return (
      <div className="min-height-screen container mx-auto  px-2 my-36 ">

        <div className="grid  md:grid-cols-2 gap-6 lg:my-8 my-16 lg:grid-cols-3 xl:gap-8 text-left">
          {ContactData.map((item) => (
            <div
              key={item.id}
              className="border border-border flex-colo p-8 bg-menu rounded-lg text-center text-white font-sans"
            >
              <span className="flex-colo  w-16 h-16 mb-4 rounded-full bg-gray-200 text-text text-2xl">
                <item.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2 mx-4">{item.title}:</h5>
              <p className="mb-2 text-md text-text leading-7">
              <a href={`mailto:${item.contact}`} className="text-gray-200">
                  {item.contact}
                </a>{" "}

              </p>
              <p>
              </p>
            </div>
          ))}
        </div>
        <div className="text-text">
          <h1 className="font-bold py-2">
          Компани цахим хуудсанд нээлттэй мэдээллийг байршуулж нийтлэх, шинэчлэх, цахим хуудасны хэвийн тасралтгүй үйл ажиллагааг хариуцах эрх бүхий ажилтан
          </h1>
          <p className="uppercase px-8">С.Намчиндорж </p>
          <h4 className="px-8 ">Мэйл: namchindorj.s@ndc.energy.mn</h4>
          <h4 className="px-8 ">Утас:976-7004-1371 #215</h4>
        </div>
      </div>
  );
}

export default Address;
