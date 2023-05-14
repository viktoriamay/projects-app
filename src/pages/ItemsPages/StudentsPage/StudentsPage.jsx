import { useContext } from "react";
import { AppContext } from "../../../utils/context/AppContext";
import { StudentCard } from "../../../components/Card/StudentCard";

export const StudentsPage = () => {
  const {studentsInfo} = useContext(AppContext)

  // const studentsInfo = [
  //   {
  //     id: 107,
  //     student_id: 19,
  //     name: "Поволоцкий Виктор",
  //     group: "ФКН",
  //     faculty: "БПИ196",
  //     year: 4,
  //     phone_number: "+79283390387",
  //   },
  // ];

  return (
    <div className="items_page">
      {studentsInfo.map((student) => (
        <StudentCard student={student} key={`student-${student?.id}`} />
      ))}
    </div>
  );
};
