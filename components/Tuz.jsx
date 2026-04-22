'use client'

import { motion } from "framer-motion";
import Image from 'next/image'
import { tuzData } from "../app/data/tuzData";
const page = () => 
{
    const { image } = tuzData;
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

        </motion.div>

    )
}

export default page;