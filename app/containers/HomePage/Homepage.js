/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-shadow */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './HomePage.module.css';
import commonStyles from '../../components/common/styles/styles.module.css';
import { getBoards } from '../../utils/data';
import { Alert } from '../../components/alert/Alert';
import { Loader } from '../../components/loader/Loader';

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoards()
      .then(boards => {
        setBoards(boards);
        setLoading(false);
      })
      .catch(() => {
        setBoards([]);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <h2 className={commonStyles.title}>Boards</h2>
          {boards.length === 0 && (
            <Alert type="info" isClosable={false}>
              You haven't created any boards. Kindly click on the 'Create a
              Board' button in the navigation bar to create a board.
            </Alert>
          )}
          <div className={styles.boards}>
            {boards.map(board => (
              <Link
                to={`/board/${board.id}`}
                className={styles.board}
                key={board.id}
              >
                <div className={styles.boardName}>{board.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
