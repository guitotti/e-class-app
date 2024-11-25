import StudentCard from "../StudentCard";
import styles from "./StudentList.module.css";

function StudentList() {
  const students = [
    {
      id: 1,
      name: "João Pedro",
      schedule: "Seg. 14h00",
      description: "Inglês - B1",
      pendingTask: "1",
      pendingCorrection: "0",
    },
    {
      id: 2,
      name: "Maria Clara",
      schedule: "Seg. 14h00",
      description: "Inglês - B1",
      pendingTask: "1",
      pendingCorrection: "0",
    },
  ];

  return (
    <div className={styles.studentList}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          schedule={student.schedule}
          description={student.description}
          pendingTask={student.pendingTask}
          pendingCorrection={student.pendingCorrection}
        />
      ))}
    </div>
  );
}

export default StudentList;
