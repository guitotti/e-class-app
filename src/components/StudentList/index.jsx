/* eslint-disable react/prop-types */
import StudentCard from "../StudentCard";
import styles from "./StudentList.module.css";

function StudentList({ students }) {

  return (
    <div className={styles.studentList}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          schedule={student.weekday + " - " + student.time}
          description={student.description}
          pendingTask={student.pendingTask}
          pendingCorrection={student.pendingCorrection}
        />
      ))}
    </div>
  );
}

export default StudentList;
