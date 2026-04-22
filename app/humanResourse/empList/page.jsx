'use client'


import React from "react";
import EmpDataList from "@/components/EmpDataList";

function EmpList () {


  // const [emp, setEmp] = useState([]);
  // const [limit, setLimit] = useState(3);

  // useEffect(() => {
  //   async function fetchEmp() {
  //     const rawEmp = await fetch(
  //       "https://ndc.energy.mn/wp-admin/api/employee-lists?sort=createdAt:DESC&populate=*",{
          
  //         headers: {
           
  //           "Authorization": "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2"
  //         },
  //       }
  //     );
      
  //     const emp = await rawEmp.json();

  //     setEmp(emp.data);
  //   }
  //   fetchEmp();
  // }, [limit]);

  // const handleLimit = () => {
  //   setLimit(limit + 3);
  // };



  return (
      <div className='w-full  relative m-0 '>
        <EmpDataList />

        <div className="mt-6 text-xs text-gray-500 text-right">
          Эх сурвалж: Хүний нөөцийн мэргэжилтэн
          Л.Ганзориг Дотуур дугаар: 201
        </div>
        
      </div>
  );
}

export default EmpList ;
