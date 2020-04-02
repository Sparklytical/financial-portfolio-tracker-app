import db from '../firebase/init';

export const getBoards = async () => {
  try {
    const snapshot = await db
      .collection('boards')
      .orderBy('name', 'desc')
      .get();
    const boards = snapshot.docs.map(d => ({ ...d.data(), id: d.id }));
    return boards;
  } catch (error) {
    return [];
  }
};

// ADD board
export const addBoard = async board => {
  try {
    await db.collection('boards').add(board);
    return true;
  } catch (error) {
    return error;
  }
};

// Get board with ID
export const getBoard = async id => {
  try {
    const board = await db
      .collection('boards')
      .doc(id)
      .get();
    return { ...board.data(), id: board.id };
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const deleteBoard = async id => {
  try {
    await db
      .collection('boards')
      .doc(id)
      .delete();
    return true;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getColumns = async boardId => {
  try {
    const snapshot = await db
      .collection('columns')
      .where('boardId', '==', boardId)
      .orderBy('created')
      .get();
    const boards = snapshot.docs.map(d => ({ ...d.data(), id: d.id }));
    return boards;
  } catch (error) {
    return [];
  }
};

export const addColumn = async column => {
  try {
    const d = await db.collection('columns').add(column);
    return d.id;
  } catch (error) {
    return error;
  }
};

// Update Column
export const updateColumn = async (id, column) => {
  try {
    await db
      .collection('columns')
      .doc(id)
      .update(column);
    return true;
  } catch (error) {
    return error;
  }
};

// Delete the column
export const deleteColumn = async id => {
  try {
    await db
      .collection('columns')
      .doc(id)
      .delete();
    return true;
  } catch (error) {
    return error;
  }
};
