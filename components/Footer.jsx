"use client";
import React from "react";
import { ImFacebook, ImYoutube, ImEnvelop } from "react-icons/im";
import {
  HiOutlinePhoneIncoming,
  HiOutlineMailOpen,
  HiLink,
  HiOutlineShieldCheck,
  HiOutlinePhoneOutgoing,
  HiOutlineFolderDownload,
  HiOutlineChartBar,
} from "react-icons/hi";
import { IoMdPin } from "react-icons/io";
import { FaFax } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/assets/image/footerLogo.png";


const Footer = () => {

    const Address = [
        {
          title: "ХОЛБОО БАРИХ",
          links: [
            {
              address:
                "Хаяг:  Улаанбаатар хот, Хан-Уул дүүрэг, 3-р хороо Засгийн газрын 14-р байр",
              link: "#",
              icons: <IoMdPin />,
            },
            {
              address: "Утас:  976-7004-1371 #203",
              link: "#",
              icons: <HiOutlinePhoneIncoming />,
            },
            {
              address: "Факс:  976-7004-3467",
              link: "#",
              icons: <FaFax />,
            },
            {
              address: "Цахим шуудан: ndc@ndc.energy.mn",
              link: "#",
              icons: <HiOutlineMailOpen />,
            },
            {
              address: "Авлигыг мэдээлэх утас",
              image: "/image/avilaga.jpg",
            },
          ],
        },
      ];

      const Links = [
        {
          title: "ХОЛБООС",
          links: [
            {
              name: "Эрчим хүчний салбарын нэгдсэн мэдээлэл",
              link: "https://www.energy.mn/",
              icons: <HiLink />,
            },
            {
              name: "Техникийн хяналт, мэдээллийн систем",
              link: "http://techinfo.energy.mn/user/login",
              icons: <HiOutlineShieldCheck />,
            },
            {
              name: "Эрчим хүчний хэрэглээг бууруулсан мэдээлэл",
              link: "http://it-support.energy.mn/",
              icons: <HiOutlineShieldCheck />,
               
            },
            {
              name: "Диспетчерийн хоногийн мэдээ",
              link: "https://disnews.energy.mn/",
              icons: <HiOutlineChartBar />,
            },
    
            {
              name: "Нэг худалдан авагчийн загвар",
              link: "http://sbm.energy.mn/login/auth?logout",
              icons: <BiDollarCircle />,
            },
            {
              name: "Дуудлагын бүртгэл",
              link: "http://callcenter.ndc.energy.mn/index.php",
              icons: <HiOutlinePhoneOutgoing />,
            },
            {
              name: "И-оффис",
              link: "https://able.energy.mn/",
              icons: <HiOutlineFolderDownload />,
            },
          ],
        },
      ];

  return (

    <div className="relative bg-footer pt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center text-white font-sans">
        <div className="w-full">
          {Address.map((link, index) => (
            <div
              key={index}
              className="col-span-2 md:col-span-2 lg:col-span-2 pb-3.5 sm:pb-0 w-full"
            >
              <h3 className="text-lg lg:leading-7 font-bold mb-4 sm:mb-5 lg:md-6">
                {link.title}
              </h3>

              <ul className="text-md flex flex-col space-y-3 w-full">
                {link.links.map((text, index) => (
                  <li key={index} className="text-md space-y-3">
                    {text.image ? (
                      <img
                        src={text.image}
                        alt="Авлигыг мэдээлэх утас"
                        className="w-48 mt-2"
                      />
                    ) : (
                      <div className="flex align-center">
                        <div className="px-2">{text.icons}</div>
                        <div className="px-2">{text.address}</div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-2 md:col-span-2 lg:col-span-2 pb-3.5 sm:pb-0"
            >
              <h3 className="text-lg lg:leading-7 font-bold mb-4 sm:mb-5 lg:md-6 pb-0.5">
                {link.title}
              </h3>

              <ul className="text-md  flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex items-baseline">
                    <div className="flex align-center">
                      <div className="px-2">{text.icons}</div>
                    </div>
                    <Link
                      href={text.link}
                      rel="noreferrer"
                      target="_blank"
                      className="  inline-block hover:border-b-4 
                      hover:scale-95 transitions"
                    >
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-10">
          <div className="sm:pb-0 col-span-3 lg:col-span-3 text-center">
            <div className="flex justify-center ">
              <Image
                src={footerLogo}
                alt="FooterLogo"
                width={100}
                height={100}
                className="w-3/4 object-contain h-36 mx-4 my-2"
              />
            </div>

            <div className="mx-8 lg:mb-0 py-4 flex justify-center items-center ">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/NationalDispatchingCenter/"
              >
                <button
                  className="bg-gray-200 shadow-lg  h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-75 transitions"
                  type="button"
                >
                  <ImFacebook className="h-6 w-8 items-center justify-center align-center ml-1 text-sky-700" />
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/@ndcEnergyMn"
              >
                <button
                  className="bg-gray-200 shadow-lg  h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-75 transitions"
                  type="button"
                >
                  <ImYoutube className="h-6 w-8 items-center justify-center align-center ml-1 text-red-500" />
                </button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://ndcenergy.mail.mn/"
              >
                <button
                  className="bg-gray-200 shadow-lg  h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-75 transitions"
                  type="button"
                >
                  <ImEnvelop className="h-6 w-6 ml-2 text-green-600" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 bg-copyR font-bold  text-md text-text bg-white text-center font-sans ">
        © 2026  Диспетчерийн үндэсний төв ТӨХХК
      </div>
    </div>
  


  )
}

export default Footer;
