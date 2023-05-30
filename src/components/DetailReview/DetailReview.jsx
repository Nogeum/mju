import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './DetailReview.module.css';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars';

export default function DetailReview({ name }) {
  //리뷰 제출
  const [inputValue, setInputValue] = useState();

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const sendData = () => {
    axios
      .post('', {
        inputValue,
      })
      .then((response) => console.log(response.data))
      .catch((Error) => {
        console.log(Error.response.data);
      });
  };
  //리뷰 사진업로드

  // 해당식당의 리뷰출력
  const param = useParams();
  const [dataList, setDataList] = useState([]);
  const loadData = () => {
    const category = param.category;
    console.log('NEW', category);
    axios
      .get('http://3.34.2.11:8082/api/images')
      .then((response) => {
        const result = response.data.filter((item) => item.name === name);
        setDataList(result);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, [param.category]);

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
        <p className={styles.total}>최근 리뷰 ({dataList.length})</p>
        <section className={styles.section}>
          {dataList.map((dataList) => (
            <div className={styles.review_container3}>
              <p className={styles.id}>{dataList.userId}</p>
              <ReactStars
                count={5}
                value={dataList.rate}
                edit={false}
                size={20}
              />
              <img className={styles.img} src={dataList.image} alt='' />
              <p className={styles.contents}>{dataList.contents}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
