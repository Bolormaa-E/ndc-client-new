'use client'

import { motion } from "framer-motion";
import Image from 'next/image'
import { butetsData } from "../app/data/butetsData";
import ButetsCard from "./ButetsCard"

const Butets = () => 
{
    const { image } = butetsData;
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="justify-center flex flex-col items-center"
        >
             <Image
            src={image}
            width={860}
            alt="Picture of the author"
            />
        <div className="flex justify-center items-center">
        <div className="py-16 text-xl">
          <h2 className="font-bold text-center text-text">ХҮНИЙ НӨӨЦ</h2>
          <p2 className=" text-red-700 text-sm flex justify-center items-center">
            Алба нэгжүүд
          </p2>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-full opacity-90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-4 text-text">
          <ButetsCard
            title="Удирдлага"
            subTitle="Гүйцэтгэх захирал: Г.Балжинням"
            post_id="7322"
          />
          <ButetsCard
            title="Удирдлага"
            subTitle="Ерөнхий диспетчер инженер: Б.Баатар"
            post_id="7322"
          />
          <ButetsCard
            title="Захиргаа удирдлагын алба"
            subTitle="Албаны дарга: Б.Биндэръяа"
            post_id="7290"
          />
          <ButetsCard
            title="Төв диспетчерийн алба"
            subTitle="Албаны дарга: Б.Ганбат"
            post_id="7288"
          />
          <ButetsCard
            title="Техник хяналтын алба"
            subTitle="Албаны дарга: Ц.Батмагнай"
            post_id="7294"
          />
          <ButetsCard
            title="Горим төлөвлөлт, тооцооны алба"
            subTitle="Албаны дарга: Х.Болд-Эрдэнэ"
            post_id="7297"
          />
          <ButetsCard
            title="Реле хамгаалалт, автоматикийн алба"
            subTitle="Албаны дарга: Д.Цоож"
            post_id="7299"
          />
          <ButetsCard
            title="Мэдээлэл, холбооны алба"
            subTitle="Албаны дарга: Б.Давааням"
            post_id="7280"
          />
          <ButetsCard
            title="Зах, зээл зохицуулалтын алба"
            subTitle="Албаны дарга: Т.Бат-Уул"
            post_id="7303"
          />
          <ButetsCard
            title="Мэдээллийн технологийн төв"
            subTitle="Албаны дарга: Н.Мөнгөнхуягт"
            post_id="7285"
          />
          <ButetsCard
            title="Судалгаа хөгжлийн алба"
            subTitle="Албаны дарга: Э.Ганбат"
            post_id="7270"
          />
          <ButetsCard
            title="Санхүү, эдийн засгийн алба"
            subTitle="Албаны дарга: Т.Бямбажав"
            post_id="7316"
          />
        </div>
      </div>
        </motion.div>

    )
}

export default Butets;