import React from 'react';
import styles from './PopUp.module.css';

export default function PopUp(props) {
  return (
    <div className={styles.filter}>
      <div className={styles.popup}>
        <p>테스트</p>
        <button className={styles.close} onClick={props.changeValue}>
          닫기
        </button>
      </div>
    </div>
  );
}
