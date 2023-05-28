import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './Testpage.module.css';
import { useParams } from 'react-router-dom';

export default function Testpage() {
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

  //   const param = useParams();
  const [dataList, setDataList] = useState([]);
  //   const loadData = () => {
  //   const category = param.category;
  //   console.log('NEW', category);
  axios
    .get('/api/images')
    .then((response) => setDataList(response.data))
    .catch((err) => console.error(err));
  //   };

  //   useEffect(() => {
  //     loadData();
  //   }, [param.category]);

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
        <button className={styles.button} onClick={sendData}>
          리뷰 쓰기
        </button>
        <p>testline</p>
        <section className={styles.section}>
          {dataList.map((dataList) => (
            <>
              <p>{dataList.userID}</p>
              <p>{dataList.contents}</p>
              <img src={dataList.image} alt='' />
            </>
          ))}
        </section>
      </div>
    </>
  );
}
