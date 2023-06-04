import React from 'react';
import styles from './ReelsBox.module.css';
// import axios from 'axios';

export default function ReelsBox({ openPopup, data }) {
  return (
    <div className={styles.container} onClick={() => openPopup(data)}>
      <img className={styles.img} src={data.image} alt='qt' />
    </div>
  );
}
