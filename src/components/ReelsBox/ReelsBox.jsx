import React from 'react';
import styles from './ReelsBox.module.css';
// import axios from 'axios';

export default function ReelsBox(props) {
  return (
    <div className={styles.container} onClick={props.changeValue}>
      <img
        className={styles.img}
        src='https://img.khan.co.kr/news/2021/05/09/l_2021051001000864600073041.jpg'
        alt='qt'
      />
    </div>
  );
}
