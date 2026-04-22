"use client"; // This is a client component 👈🏽
import { Fragment,useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { LiaBookSolid } from "react-icons/lia";

import { ImUserTie } from "react-icons/im";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {  HiOutlinePencilAlt } from "react-icons/hi";
import { HiMiniSun, HiMiniRocketLaunch, HiMiniUsers } from "react-icons/hi2";
import { HiOutlineWindow, HiOutlineChartBarSquare, HiMiniScale, HiOutlinePuzzlePiece
          , HiOutlineTicket, HiOutlinePresentationChartBar, HiOutlineMagnifyingGlass,
          HiOutlineMegaphone, HiOutlineUserGroup, HiOutlineChartBar, HiOutlineBriefcase, HiOutlineDocumentChartBar, HiOutlineDocumentText    } from "react-icons/hi2";

const products = [
  { name: 'Компанийн тухай',  href: '/aboutUs/about-us', icon: HiOutlinePresentationChartBar },
  { name: 'Захирлын мэндчилгээ',  href: '/aboutUs/greetings', icon: HiMiniSun  },
  { name: 'Бүтэц',href: '/aboutUs/structure', icon: HiOutlinePuzzlePiece },
  { name: 'Удирдлагын баг',href: '/aboutUs/manageTeam', icon: ImUserTie },
  { name: 'Төлөөлөн удирдах зөвлөл',href: '/aboutUs/tuz', icon: ImUserTie },
  { name: 'Стратеги төлөвлөгөө',href: '/aboutUs/strategyPlan', icon: HiMiniRocketLaunch  },
]

const newsList = [
  { name: 'Мэдээ',  href: '/info/news', icon: HiOutlineWindow },
  { name: 'Станцуудын горим',  href: 'https://disnews.energy.mn', icon: HiOutlineChartBarSquare },
]

const transparency = [
  
  { name: 'Үйл ажиллагааны тайлан',  href: '/transparency/processPlan', icon: HiOutlineDocumentChartBar },
  { name: 'Худалдан авах ажиллагаа',  href: '/transparency/procurement', icon: HiOutlineTicket },
  { name: 'Төсөв, Санхүү',href: '/transparency/sankhuu',  icon: HiOutlinePresentationChartBar },
  { name: 'Авлигаас урьдчилан сэргийлэх',  href: '/transparency/awilga', icon: HiOutlineMegaphone },
  { name: 'Нэмэлт ажил үйлчилгээний журам',  href: '/transparency/nemelt', icon: HiMiniScale },
  { name: 'Хууль эрх зүй',  href: '/transparency/legal', icon: HiMiniScale },
  { name: 'Шилэн данс /Шинэ/',  href: 'https://shilendans.gov.mn/organization/5170', icon: HiOutlineMagnifyingGlass },
  { name: 'Шилэн данс /Хуучин/',href: 'https://old.shilendans.gov.mn/org/5178?group=0&year=2022',  icon: HiOutlineMagnifyingGlass },
  { name: 'Гүйцэтгэх захирал',  href: '/transparency/ceo', icon: HiMiniScale },
  { name: 'Сургалт',  href: '/transparency/surgalt', icon: HiMiniScale },
  { name: 'Статистик мэдээлэл',  href: 'https://energy.gov.mn/contents?type=4', icon: HiMiniScale },
]

const humanResourse = [
  { name: 'Хүний нөөцийн бодлого',  href: '/humanResourse/human', icon: HiOutlineUserGroup },
  { name: 'Хөдөлмөрийн эрүүл мэнд, аюулгүй байдлын бодлого',  href: '/humanResourse/hab', icon: HiOutlineUserGroup },
  { name: 'Мэдээллийн аюулгүй байдлын бодлого',  href: '/humanResourse/mab', icon: HiOutlineDocumentText  },
  { name: 'Тоон үзүүлэлт',  href: '/humanResourse/statistics', icon: HiOutlineChartBar },
  { name: 'Ажлын байрны зар',href: '/humanResourse/ads',  icon: HiOutlineBriefcase },
  // { name: 'Сонгон шалгаруулалт',  href: '/humanResourse/competition', icon: HiOutlineCursorArrowRays  },
  { name: 'Албан хаагчдын мэдээлэл',  href: '/humanResourse/empList', icon: HiOutlinePencilAlt },
  { name: 'Жендерийн эрх тэгш байдал',  href: '/humanResourse/gender', icon: HiMiniUsers  },
  
  { name: 'Хүний нөөцийн мэдээлэл',  href: '/humanResourse/humanResInfo', icon: HiMiniUsers  },
]

const book = [
  { name: 'Цахим ном',  href: '/book/onlineBook', icon: LiaBookSolid  },
  { name: 'Ахмадын дурсамж яриа',  href: '/book/memoryOfAhmad', icon: HiOutlineChartBar },
  // { name: 'Ажлын байрны зар',href: '/humanResourse/ads',  icon: HiOutlineBriefcase },
  // { name: 'Сонгон шалгаруулалт',  href: '/humanResourse/competition', icon: HiOutlineCursorArrowRays  },
  // { name: 'Албан хаагчдын мэдээлэл',  href: '/humanResourse/empList', icon: HiOutlinePencilAlt },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 
  const [isShowing, setIsShowing] = useState(false);
  const [isNewsShowing, setIsNewsShowing] = useState(false);
  const [isTodShowing, setIsTodShowing] = useState(false);
  const [isHumanShowing, setIsHumanShowing] = useState(false);
  const [isOnlineBookShowing, setIsOnlineBookShowing] = useState(false);


  return (
    
    <header className="w-full text-white h-10 font-bold  px-2 bg-menu">
      <nav className="h-full uppercase max-w-screen-2xl mx-auto flex items-center justify-center" aria-label="Global">
 
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-bold leading-6 text-white  
            hover:scale-900 transitions duration-300 group ">
            ЭХЛЭЛ
            
          </a>
          <Popover className="relative">
            
            <Popover.Button                         
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)} 
            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white  
            hover:scale-900 transitions duration-300 group ">
              БИДНИЙ ТУХАЙ
              
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-500" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isShowing}
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => setIsShowing(false)}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-2 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-2 rounded-lg p-2 text-sm leading-6 hover:bg-gray-300"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-900" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block uppercase font-semibold text-text">
                          {item.name}
                          
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button                   
                  onMouseEnter={() => setIsNewsShowing(true)}
                  onMouseLeave={() => setIsNewsShowing(false)} 
                  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white  
                  hover:scale-900 transitions duration-300 group ">
              МЭДЭЭ, МЭДЭЭЛЭЛ
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-500" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isNewsShowing}
              onMouseEnter={() => setIsNewsShowing(true)}
              onMouseLeave={() => setIsNewsShowing(false)}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 ">
                  {newsList.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-300"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-900" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-text"  
                            >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button                   onMouseEnter={() => setIsTodShowing(true)}
                  onMouseLeave={() => setIsTodShowing(false)} className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white  
                  hover:scale-900 transitions duration-300 group ">
              ИЛ ТОД БАЙДАЛ
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-500" aria-hidden="true" />
            </Popover.Button>

            <Transition
                            show={isTodShowing}
                            onMouseEnter={() => setIsTodShowing(true)}
                            onMouseLeave={() => setIsTodShowing(false)}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {transparency.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-300"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-900" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-text"  
                            >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button                   
                onMouseEnter={() => setIsHumanShowing(true)}
                onMouseLeave={() => setIsHumanShowing(false)} 
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white  
                  hover:scale-900 transitions duration-300 group ">
                ХҮНИЙ НӨӨЦ
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-500" aria-hidden="true" />
            </Popover.Button>

            <Transition
              show={isHumanShowing}
              onMouseEnter={() => setIsHumanShowing(true)}
              onMouseLeave={() => setIsHumanShowing(false)}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {humanResourse.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-300"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-900" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-text"  
                            >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button                   
                onMouseEnter={() => setIsOnlineBookShowing(true)}
                onMouseLeave={() => setIsOnlineBookShowing(false)} 
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white  
                  hover:scale-900 transitions duration-300 group ">
                ЦАХИМ НОМ 
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-500" aria-hidden="true" />
            </Popover.Button>

            <Transition
              show={isOnlineBookShowing}
              onMouseEnter={() => setIsOnlineBookShowing(true)}
              onMouseLeave={() => setIsOnlineBookShowing(false)}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {book.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-300"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-900" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-text"  
                            >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="/contact" className=" 
            hover:scale-900 transitions duration-300 group  text-sm font-bold leading-6 text-white">
            САНАЛ ХҮСЭЛТ
          </a>
          <a href="/address" className=" 
            hover:scale-900 transitions duration-300 group  text-sm font-bold leading-6 text-white">
            ХОЛБОО БАРИХ
          </a>
        </Popover.Group>

      </nav>
      
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="/" className="text-sm font-bold leading-6 text-text">
                  ЭХЛЭЛ
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        БИДНИЙ ТУХАЙ
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        МЭДЭЭ, МЭДЭЭЛЭЛ
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...newsList].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            target="_blank"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        ИЛ ТОД БАЙДАЛ
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...transparency].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        ХҮНИЙ НӨӨЦ
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...humanResourse].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div>

                <a href="/contact" className="text-sm font-bold leading-6 text-text">
                  САНАЛ ХҮСЭЛТ
                </a>
                </div>
                <div>

                <a href="/address" className="text-sm font-bold leading-6 text-text">
                  ХОЛБОО БАРИХ
                </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    
  )
}
