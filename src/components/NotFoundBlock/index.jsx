import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <h1 className={styles.root}>
      <span className={styles.smile}>😕</span>
      <br />
      Ничего не найдено!
      <p className={styles.description}>К сожалению страница отсутсвует</p>
    </h1>
  );
};

export default NotFoundBlock;
