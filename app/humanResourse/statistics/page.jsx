import Container from '@/components/Container'
import React from 'react'
import Image from 'next/image'
import Statistic from '@/assets/image/statistic.png'

const page = () => {
  return (
    <div className='w-full  relative m-0 '>
    <Container>
      <div className='text-text text-justify'>
      <h2 className="flex justify-center text-xl font-bold text-md uppercase text-text py-10">ДИСПЕТЧЕРИЙН ҮНДЭСНИЙ ТӨВ ТӨХХК-ИЙН ХҮНИЙ НӨӨЦИЙН МЭДЭЭЛЭЛ</h2>
        <div className='text-justify'>
        Тус компанийн Төлөөлөн удирдах зөвлөлийн 2023 оны 06 сарын 23-ны өдрийн 13 дугаар тогтоолоор нийт 120 ажилтантай байхаар батлагдсан. 
        </div>
        <div className="flex flex-col mx-auto   py-4 items-left">
          <h1 className='font-bold uppercase'>
          Албан тушаалын ангиллаар: 
          </h1>
          <p className='py-4'>
          Удирдах ажилтан 3, нэгжийн дарга 10, ахлах инженер 7, ахлах мэргэжилтэн 2, ахлах нягтлан бодогч 1, чанарын менежер 1, бүх төрлийн инженер 68, мэргэжилтэн 7,  нягтлан бодогч 3,  хуульч 1, эрх зүйч 1,  эдийн засагч 2, техникч 1, нярав 1, жолооч 5, үйлчлэгч 2, нярайн чөлөөтэй 2 ажилтан байна. 
          </p>
        </div>
        
        <div className="flex items-center justify-center py-8">
          <Image src={Statistic} alt=""
            object-fit="cover"  
            width={1200}
            height={400}/>
        </div>
        <div className="flex flex-col mx-auto   py-4 items-left">
          <h1 className='font-bold uppercase'>
          Хүйсийн харьцаа: 
          </h1>
          <p className='py-4'>
          Нийт ажилтнуудын 28 хувь нь эмэгтэй, 72 хувь нь эрэгтэй ажилтнууд байна. 
          </p>
        </div>
        <div className="flex flex-col mx-auto   py-4 items-left">
          <h1 className='font-bold uppercase'>
          Ажилтнуудын боловсролын зэргийн байдал: 
          </h1>
          <p className='py-4'>
          Доктор 3,  Магистр 48, Бакалавр 57, Бүрэн дунд – 5 тус тус боловсролын зэрэгтэй ажилтан байна. 
          </p>
        </div>
        <div className="flex flex-col mx-auto   py-4 items-left">
          <h1 className='font-bold uppercase'>
          Ажилласан жилийн судалгаа: 
          </h1>
          <p className='py-4'>
          Компанийн нийт ажилтнуудын 40 орчим хувь нь 10 хүртэл жил, 37 хувь нь 10-20 жил, 33 хувь нь 20-оос дээш жил улсад ажилласан байна. 
          </p>
        </div>
        <div className="flex flex-col mx-auto   py-4 items-left">
          <h1 className='font-bold uppercase'>
          Ажилтнуудын мэргэшлийн зэргийн байдал:: 
          </h1>
          <p className='py-4'>
          Нийт ажилтнуудын 36 хувь нь мэргэшсэн болон зөвлөх мэргэшлийн зэрэгтэй байна. 
          </p>
        </div>
        <div className="flex flex-col mx-auto   py-4 items-left">
          <h1 className='font-bold uppercase'>
          Эрүүл мэндийн байдал: 
          </h1>
          <p className='py-4'>
          Компанийн хэмжээнд 4 ажилтан 30-50 хүртэл хувийн групп тогтоолгосон нь Хөдөлмөрийн тухай хуулийн 144.2-д Өмчийн төрөл, хэлбэрээс үл хамаарч 25 ба түүнээс дээш ажилтантай аж ахуйн нэгж, байгууллага нийт ажлын байрныхаа дөрвөн хувиас доошгүй орон тоонд хөгжлийн бэрхшээлтэй хүнийг ажиллуулна гэж заасныг хангаж байгаа. /жолооч 1, үйлчлэгч 1, инженер1, мэргэжилтэн 1/ Ажилтнуудын ХАБЭА-н тухай хууль болон бусад хэм хэмжээнд заасны дагуу тогтмол эрүүл мэндийг урьдчилан сэргийлэх үзлэг үйлчилгээнд хамруулж байна. 
          </p>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default page