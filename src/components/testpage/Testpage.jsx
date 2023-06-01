import React, { useState, useEffect } from 'react';
import styles from './Testpage.module.css';
import ReactStars from 'react-stars';
import { useParams } from 'react-router-dom';
import qt from '../../img/qt.jpeg';

export default function Testpage() {
  // const par = useParams();

  const [rate, setRate] = useState();
  console.log(rate);
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const checkReview = () => {
    if (!rate || !content) {
      alert('별점기입 혹은 리뷰를 작성해주세요');
    }
  };
  const [content, setContent] = useState('');
  const changeContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <>
      <textarea onChange={changeContent} value={content}></textarea>
      <ReactStars
        className={styles.rate}
        count={5}
        onChange={ratingChanged}
        size={20}
        value={rate}
      />
      <button onClick={checkReview}>제출</button>
      <p>{rate}</p>
      {/* <p>{par}</p> */}
      <img src={qt} alt='' />
      <img src={qt} alt='' />
      <img src={qt} alt='' />
      <img src={qt} alt='' />
      <img src={qt} alt='' />
      <img src={qt} alt='' />
      <img src={qt} alt='' />
      <img src={qt} alt='' />
      <img src={qt} alt='' />
    </>
  );
}
