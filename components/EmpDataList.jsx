'use client'


import React, { useEffect, useState } from "react";
import Container from "./Container";

const EmpDataList = () => {

    const [emp, setEmp] = useState([]);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(0);
  
    useEffect(() => {
      async function fetchEmp() {
        const rawEmp = await fetch(
          "https://ndc.energy.mn/wp-admin/api/employee-lists?populate=*",{
            
            headers: {
             
              "Authorization": "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2"
            },
          }
        );
        
        const emp = await rawEmp.json();
        const sortedEmpData = emp.data.sort((a, b) => a.attributes.emplooyee_id - b.attributes.emplooyee_id); // Ascending order
        console.log("emp", sortedEmpData);
  
        setEmp(sortedEmpData);
      }
      fetchEmp();
    }, [limit]);

    const changePage = ({ selected }) => {
      setPage(selected);
      if (selected === 9) {
        setMsg(
          "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
        );
      } else {
        setMsg("");
      }
    };


    return (
        <Container>

            <h2 className="flex justify-center text-xl font-bold text-md uppercase text-text py-8"> Албан хаагчдын мэдээлэл</h2>

      <div className="overflow-x-scroll overflow-hidden relative w-full text-left">
      <table id="tableEmpList" className="w-full table-auto border border-gray-400 divide-y  text-text overflow-y-scroll ">
        <thead className="font-bold uppercase text-left">
          <tr className="bg-gray-300 ">
                {/* <th className="text-center">
                  №
                </th> */}
                <th>
                  Нэр
                </th>
                <th>
                  Алба, төв
                </th>
                <th>
                  Албан тушаал
                </th>
                <th>
                  Дотуур утас
                </th>
                <th>
                  И-мэйл
                </th>
                
          </tr>
        </thead>
        <tbody className="text-sm text-slate-600 divide-y ">
            {emp.map((item, index) => {
                      return (
                        <tr key={index}>
                          {/* <th scope="row">{item.id}</th> */}
                          {/* <th scope="row " className="text-center">{item.attributes.emplooyee_id}</th> */}
                          <th scope="row">{item.attributes.lastname}</th>
                          <th scope="row">{item.attributes.unit}</th>
                          <th scope="row">{item.attributes.major}</th>
                          <th scope="row">{item.attributes.phonenumber}</th>
                          <th scope="row">{item.attributes.mail}</th>
                        </tr>
                      );
                    })}
        </tbody>
        </table>
        
        </div>
        </Container>
    );
}
export default EmpDataList;