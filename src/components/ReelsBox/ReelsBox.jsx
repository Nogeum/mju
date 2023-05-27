import React from 'react';
import styles from './ReelsBox.module.css';
import testpic from '../../img/qt.jpeg';

export default function ReelsBox() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={testpic} alt='qt' />
    </div>
  );
}
