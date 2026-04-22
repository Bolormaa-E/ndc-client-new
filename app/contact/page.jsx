'use client'


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompImage from "@/public/image/ComplainImg.jpg"
import Image from "next/image";




const Result = () => {
  
  return <p>Амжилттай илгээгдлээ. Бид таньтай удахгүй холбогдох болно.</p>;
};




export default function Contact() {
  const form = useRef();

  const [result, showResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
 
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => { 
    const phoneRegex = /^(\+976|976)?[789]\d{7}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
  };

  const validateForm = (formData) => {
    const newErrors = {};

    // Email validation
    const email = formData.get('from_email');
    if (!email) {
      newErrors.email = 'И-мэйл хаяг оруулна уу';
    } else if (!validateEmail(email)) {
      newErrors.email = 'И-мэйл хаягийн формат буруу байна';
    }

    // Phone validation
    const phone = formData.get('from_phone');
    if (!phone) {
      newErrors.phone = 'Утасны дугаар оруулна уу';
    } else if (!validatePhone(phone)) {
      newErrors.phone = 'Утасны дугаарын формат буруу байна (жишээ: 99123456 эсвэл +97699123456)';
    }

    return newErrors;
  };

  // Real-time validation handlers
  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (errors.email && email && validateEmail(email)) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    if (errors.phone && phone && validatePhone(phone)) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors
    setIsLoading(true);

    try {
      // Get form data for validation
      const formData = new FormData(form.current);

      // Validate form
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setIsLoading(false);
        toast.error("Форм дахь алдаануудыг засна уу");
        return;
      }

      // Add the recipient email to the form data
      formData.append('to_email', 'ndc@ndc.energy.mn');
      formData.append('to_name', 'NDC Energy');

      await emailjs.sendForm(
        "service_k5s2ogm", // Your provided service ID
        "template_ndc_contact", // Template ID (you'll need to create this in EmailJS)
        form.current,
        "sIZCZIwqfyoS0LRV_" // Public key (you'll need to get this from EmailJS dashboard)
      );

      form.current.reset();
      showResult(true);
      toast.success("Амжилттай илгээгдлээ! Бид таньтай удахгүй холбогдох болно.");

      // Hide success message after 5 seconds
      setTimeout(() => {
        showResult(false);
      }, 5000);

    } catch (error) {
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="container mx-auto px-8 py-16 text-text">
        <div className="flex justify-center items-center">
          <Image src={CompImage} alt="ddd" loading="eager" priority={true} />
        </div>

          <h2 className="flex justify-center text-xl font-bold text-md uppercase text-text py-10">ӨРГӨДӨЛ ГОМДОЛ ХҮЛЭЭН АВАХ</h2>
        <p className='py-4  text-justify'>
        Өргөдөл, гомдол гаргагч нь МУ-ын Үндсэн хууль болон бусад хуулийг зөрчих бусдын эрх, эрх чөлөө, хууль ёсны ашиг сонирхолыг хохироох, ялгаварлан гадуурхахыг уриалж болохгүй, цахим шуудангаар нууцад хамаарах материал илгээхгүй байхыг анхаарна уу !!!
        </p>
        
        <div className="flex flex-col mx-auto   py-4 items-left">
          <h1 className='font-bold '>
          Өргөдөл, гомдолд тавих шаардлага 
          </h1>
          <p className='py-4'>
          Иргэн цахим өргөдөл, гомдол гаргахдаа овог, нэр, буцах цахим шуудангийн хаяг, утасны дугаар зэргийг тодорхой бичиж гарчигийг оновчтой тавина.
Өргөдөл,гомдолд дурдсан асуудал болон бусад хавсаргасан баримт бичиг үнэн зөв байна. Өргөдөл, гомдлыг хянан үзэхгүй байх, буцаах үндэслэл: 
          </p>
        </div>
        <div className="flex flex-col mx-auto   py-4 items-left">
          <h1 className='font-bold '>
          Өргөдөл, гомдлыг хянан үзэхгүй байх, буцаах үндэслэл: 
          </h1>
          <p className='py-4 text-justify'>
          Диспетчерийн үндэсний төв ТӨХХК-ны өргөдөл гомдлын бүртгэл, зохицуулалт, тайлагнал хариуцсан мэргэжилтэн нь өргөдөл, гомдлыг хүлээн авсан өдрөө түүнийг хүлээн авсан талаарх мэдээлэл, холбогдох зөвлөгөө, тайлбар, хариу өгнө. Өргөдөлд заасан асуудлыг судлах, хариу өгөхөд хугацаа шаардлагатай бол тус асуудлыг холбогдох мэргэжилтэнтэй хамтран судалж хариу өгнө.
          Өргөдөлд заасан асуудлыг судлах, хариу өгөхөд хугацаа шаардлагатай бол тус асуудлыг холбогдох мэргэжилтэнтэй хамтран судалж хариу өгнө.
          “Иргэдээс төрийн байгууллага, албан тушаалтанд гаргасан өргөдөл, гомдлыг хянан шийдвэрлэх тухай” хуулийн дагуу өргөдлийг хүлээн авсан өдрөөс хойш 30 хоногийн дотор шийдвэрлэнэ
          Саналын шинжтэй өргөдлийн хариуг 60 хоногт багтаан өгнө.
          Хөрөнгө оруулалт, үйлчлүүлэгчийн эрх, хууль ёсны ашиг сонирхолтой хамааралтай өргөдөл гомдлыг хүлээж авахгүй болно. 
          </p>
        </div>
        <div className="flex flex-col mx-auto   py-4 items-left">
          <h1 className='font-bold '>
          Өргөдөл, гомдолд хариу өгөх хэлбэр: 
          </h1>
          <p className='py-4'>
          Цахим өргөдөл, гомдлын хариуг албан тушаалтан цахим хэлбэрээр өгч болно. 
          </p>
        </div>
        <div className=" bg-white px-6 py-20 my-4">
          <div className="mx-auto text-center">
            <h2 className="text-2xl font-bold  text-text sm:text-3xl">
              БИДЭНТЭЙ ХОЛБОГДОХ
            </h2>
            <p className="mt-2 text-lg leading-8 text-text">
              Та санал хүсэлтээ илгээнэ үү!!!
            </p>
          </div>
          <form
            onSubmit={sendEmail}
            ref={form}
            className="my-2 mx-auto max-w-xl sm:mt-10"
          >
            {/* Hidden fields for recipient information */}
            <input type="hidden" name="to_email" value="ndc@ndc.energy.mn" />
            <input type="hidden" name="to_name" value="NDC Energy" />

            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-text"
                >
                  ОВОГ
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="from_surname"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Овог"
                    required
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-text shadow-sm placeholder:text-gray-400 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm sm:leading-6 transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-text"
                >
                  НЭР
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="from_name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Нэр"
                    required
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-text shadow-sm placeholder:text-gray-400 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm sm:leading-6 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-text"
                >
                  И-МЭЙЛ
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="from_email"
                    id="email"
                    autoComplete="email"
                    placeholder="И-мэйл хаяг"
                    required
                    onChange={handleEmailChange}
                    className={`block w-full rounded-md border px-3.5 py-2 text-text shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 sm:text-sm sm:leading-6 transition-colors duration-200 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3 ">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-text font-semibold
            ">САНАЛ ХҮСЭЛТИЙН ТӨРӨЛ
            </label>
            <div className="mt-2.5">
              <select
                id="country"
                name="request_type"
                autoComplete="country-name"
                required
                className="block w-[95%] rounded-md border border-gray-300 px-3.5 py-2.5 text-text shadow-sm bg-white focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm sm:leading-6 font-medium transition-colors duration-200 cursor-pointer hover:border-gray-400 appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="" disabled selected className="text-gray-400 bg-white">Төрлөө сонгоно уу</option>
                <option value="Санал хүсэлт" className="text-gray-900 bg-white py-2 hover:bg-gray-50">Санал хүсэлт</option>
                <option value="Өргөдөл, Гомдол" className="text-gray-900 bg-white py-2 hover:bg-gray-50">Өргөдөл, Гомдол</option>
              </select>
            </div>
          </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-text"
                >
                  УТАС
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="from_phone"
                    id="phone-number"
                    autoComplete="tel"
                    placeholder="Утасны дугаар (жишээ: 99123456)"
                    required
                    onChange={handlePhoneChange}
                    className={`block w-full rounded-md border px-3.5 py-2 text-text shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 sm:text-sm sm:leading-6 transition-colors duration-200 ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-text"
                >
                  САНАЛ, ХҮСЭЛТ
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Санал, хүсэлтээ энд бичнэ үү..."
                    required
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-text shadow-sm placeholder:text-gray-400 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm sm:leading-6 transition-colors duration-200 resize-vertical"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                disabled={isLoading}
                className={`block w-[95%] rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-800 hover:bg-blue-600 cursor-pointer'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Илгээж байна...
                  </div>
                ) : (
                  'Илгээх'
                )}
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <div className="text-text py-2 ">{result ? <Result /> : null}</div>
            </div>
          </form>
        </div>
      </div>
  );
}
