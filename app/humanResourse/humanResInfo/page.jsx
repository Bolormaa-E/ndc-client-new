'use client'

import React from 'react'

const page = () => {

  return (
    <div className="py-8 flex justify-center">
    <iframe className="w-1/2 aspect-[4/3]" src="/pdf/oronToo.pdf" title="testPdf" />

    <div className="mt-6 text-xs text-gray-500 text-right">
      Эх сурвалж: Дотоод зохион байгуулалт хариуцсан мэргэжилтэн бөгөөд захирлын туслах
      Э.Ариунзаяа. Дотуур дугаар: 203
    </div>
    
  </div>
  )
}

export default page