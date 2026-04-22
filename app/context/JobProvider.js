import { useState } from "react";
import { useEffect } from "react";
// import Job from "../../public/image/job.png"
import { createContext, useContext } from "react";
const JobStore = createContext(null);

export const useJobStore = () => useContext(JobStore);

const data = [
  {
    id: 1,
    // image: Job,
    title: "Суурь систем хөгжүүлэгч",
    unit: "Мэдээллийн технологийн төв",
    time: "Одоо",
    desc: "Мэдээлэл технологи, программ хангамжийн чиглэлээр бакалавр ба түүнээс дээш зэрэгтэй байх ...",
  },
  {
    id: 2,
    // image: Job,
    title: "Хяналтын инженер",
    unit: "Техник хяналтын алба",
    time: "Одоо",
    desc: "Дамжуулах сүлжээний тоноглолын ашиглалт, засварын ажлын туршлагатай...",
  },
  {
    id: 3,
    // image: Job,
    title: "МТТ-ийн Ахлах инженер",
    unit: "Мэдээллийн технологийн төв",
    time: "Одоо",
    desc: "Цахилгаан системийн эсвэл мэдээлэл холбоо, программ хангамжийн инженер байх...",
  },
  {
    id: 4,
    // image: Job,
    title: "Горим тооцооны инженер",
    unit: "Горим төлөвлөлт тооцооны алба",
    time: "Одоо",
    desc: "Цахилгааны инженер, Цахилгааны системийн инженер ...",
  },
  {
    id: 5,
    // image: Job,
    title: "Системийн администратор",
    unit: "Мэдээлэл холбооны алба",
    time: "Одоо",
    desc: "Програм хангамж, Мэдээлэл технологи, Мэдээллийн сүлжээний инженер",
  },
  {
    id: 6,
    // image: Job,
    title: "Шуурхай ажиллагааны жолооч",
    unit: "Захиргаа удирдлагын алба",
    time: "Одоо",
    desc: "Автомашины жолоочийн мэргэжил эзэмшсэн ...",
    status: "Албаны дарга",
  },
];

const units = [
  "Бүгд",
  "Захиргаа удирдлагын алба",
  "Төв диспетчерийн алба",
  "Техник хяналтын алба",
  "Горим төлөвлөлт, тооцоо төлөвлөлтийн алба",
  "Реле хамгаалалт, автоматикийн алба",
  "Мэдээлэл, холбооны алба",
  "Зах, зээл зохицуулалтын алба",
  "Мэдээллийн технологийн төв",
  "Судалгаа хөгжлийн алба",
  "Санхүү, эдийн засгийн алба",
];

const status = [
  "Бүгд",
  "Албаны дарга",
  "Ахлах инженер",
  "Инженер",
  "Мэргэжилтэн",
  "Эдийн засагч",
  "Нярав",
  "Нягтлан бодогч",
  "Жолооч",
  "Үйлчлэгч",
];

const JobProvider = ({ children }) => {
  const [selectedUnit, setSelectedUnit] = useState(units[0]);
  const [selectedStatus, setSelectedStatus] = useState(status[0]);
  const [AdsData, setAdsData] = useState(data);
  const unitHandler = (e) => {
    console.log(e.target.value.length);
    setSelectedUnit(e.target.value);
  };
  const statusHandler = (e) => {
    setSelectedStatus(e.target.value);
  };

  useEffect(() => {
    if (selectedUnit.trim() !== units[0]) {
      setAdsData((prev) => {
        if (selectedStatus !== status[0]) {
          return data.filter((el) => {
            if (
              el.unit.trim() === selectedUnit.trim() &&
              el.status?.trim() === selectedStatus.trim()
            ) {
              return true;
            }
            return false;
          });
        } else {
          return data.filter((el) => el.unit.trim() === selectedUnit.trim());
        }
      });
    } else {
      setAdsData((prev) => {
        if (selectedStatus !== status[0]) {
          return data.filter(
            (el) => el.status?.trim() === selectedStatus.trim()
          );
        } else {
          return data;
        }
      });
    }
  }, [selectedUnit, selectedStatus]);

  const values = {
    units,
    status,
    selectedUnit,
    unitHandler,
    selectedStatus,
    statusHandler,
    AdsData,
  };
  return <JobStore.Provider value={values}>{children}</JobStore.Provider>;
};

export default JobProvider;
