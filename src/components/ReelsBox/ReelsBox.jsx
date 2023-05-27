import React from 'react';
import styles from './ReelsBox.module.css';
// import axios from 'axios';

import testpic from '../../img/qt.jpeg';

export default function ReelsBox(props) {
  return (
    <div className={styles.container} onClick={props.changeValue}>
      <img className={styles.img} src={testpic} alt='qt' />
    </div>
  );
}
