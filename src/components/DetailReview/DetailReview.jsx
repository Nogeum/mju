import axios from 'axios';
import React, { useState } from 'react';
import styles from './DetailReview.module.css';

export default function DetailReview() {
  const [inputValue, setInputValue] = useState();

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const sendData = () => {
    axios
      .post('/api/register', {
        inputValue,
      })
      .then((response) => console.log(response.data))
      .catch((Error) => {
        console.log(Error.response.data);
      });
  };

  return (
    <>
      <div className={styles.review_container}>
        <textarea
          onChange={changeInputValue}
          value={inputValue}
          className={styles.review_container2}
          spellCheck='false'
          placeholder='솔직한 리뷰를 남겨보세요.'
        ></textarea>
        <button onClick={sendData}>리뷰 쓰기</button>
      </div>
    </>
  );
}
