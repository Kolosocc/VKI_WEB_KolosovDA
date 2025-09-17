import sqlite3 from 'sqlite3';
import type { StudentInterface } from '@/types/StudentInterface';

sqlite3.verbose();

export const getStudentsDb = async (): Promise<StudentInterface[]> => {
  const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');

  try {
    const rows = await new Promise((resolve, reject) => {
      const sql = `
        SELECT 
          s.id,
          s.first_name AS firstName,
          s.last_name AS lastName,
          s.middle_name AS middleName,
          g.id AS "group.id",
          g.name AS "group.name"
        FROM student s
        LEFT JOIN "class" g ON s.groupId = g.id
      `;
      db.all(sql, [], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    const students: StudentInterface[] = rows.map(row => ({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
      middleName: row.middleName,
      group: {
        id: row['group.id'],
        name: row['group.name'],
      },
    }));

    return students;
  } finally {
    db.close();
  }
};
