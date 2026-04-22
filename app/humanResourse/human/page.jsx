'use client'

import React from 'react'

const page = () => {

  return (
    <div className="py-8 flex justify-center">
    <p>Энэхүү мэдээллийн талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл ЗУА-ны хүний нөөцийн  мэргэжилтэн: Б. Ганзоригтой холбогдоно уу. Дотуур утас: 291</p>
    <iframe className="w-1/2 aspect-[4/3]" src="/pdf/add.pdf" title="testPdf" />

    <div className="mt-6 text-xs text-gray-500 text-right">
      Эх сурвалж: ЗУА-ны хүний нөөцийн  мэргэжилтэн
      Б. Ганзориг. Дотуур дугаар: 291
    </div>
    
  </div>
  )
}

export default page
