import React from 'react';
import styles from './PopUp.module.css';
import ReactStars from 'react-stars';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PopUp(props) {
  const dummy = {
    userId: 'test_user',
    img: 'https://img.khan.co.kr/news/2021/05/09/l_2021051001000864600073041.jpg',
    contents:
      'This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.This is test.',
    rate: 4,
  };

  return (
    <div className={styles.filter}>
      <button className={styles.close} onClick={props.changeValue}>
        <FontAwesomeIcon icon={faXmark} className={styles.xmark} />
      </button>
      <div className={styles.popup}>
        {/* <p>테스트</p> */}
        <div className={styles.pop_container}>
          <div className={styles.popup_header}>
            <p className={styles.userId}>{dummy.userId}</p>
            <ReactStars
              className={styles.rate}
              count={5}
              value={dummy.rate}
              edit={false}
              size={20}
            />
          </div>
          <div className={styles.popup_contents}>
            <img className={styles.img} src={dummy.img} alt='' />
            <p className={styles.contents}>{dummy.contents}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
