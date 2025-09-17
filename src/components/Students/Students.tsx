'use client';

import useStudents from '@/hooks/useStudents';
import type { StudentInterface } from '@/types/StudentInterface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Students}>
      {students.length === 0 ? (
        <p>Нет студентов</p>
      ) : (
        <ul className={styles.studentList}>
          {students.map((student: StudentInterface) => (
            <li key={student.id} className={styles.studentItem}>
              <strong>
                {student.lastName}
                {student.firstName}
                {student.middleName}
              </strong>
              <span className={styles.groupName}>
                Группа:
                {student.group.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Students;
