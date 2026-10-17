import { Db } from './db';

export const addNotes = async (title, status) => {
  const result = await Db.execute(
    'INSERT INTO notes (title,status) VALUES (?,?)',
    [title, status],
  );
};

export const getAllNotes = async () => {
  const result = await Db.execute(
    'SELECT * FROM notes ORDER BY created_at DESC',
  );
  return result.rows;
};

export const updateNotes = async (title, status, id) => {
  await Db.execute('UPDATE notes SET title = ?, status = ? WHERE id = ?', [
    title,
    status,
    id,
  ]);
};

export const searchNotes = async keyword => {
  const result = await Db.execute('SELECT * FROM notes WHERE title LIKE ?', [
    `%${keyword}%`,
  ]);
  return result.rows;
};

export const deleteNotes = async(id)=>{
  Db.execute('DELETE FROM notes WHERE id = ?',[id])
}