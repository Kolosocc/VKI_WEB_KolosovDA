import { getStudentsDb } from '@/db/studentDb';
import type { StudentInterface } from '@/types/StudentInterface';

export async function GET(): Promise<Response> {
  try {
    const students = await getStudentsDb();

    return new Response(JSON.stringify(students), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('>>> GET /api/students error:', error);

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
