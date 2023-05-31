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
  const [file, setFile] = useState();

  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append('multipartFileList', uploadFile);
      setFile(uploadFile);
      console.log(uploadFile);
      console.log('===useState===');
      console.log(file);
    }
  };
  // 리뷰 사진 전송
  const onClickSend = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('multipartFileList', file);

    axios
      .post('http://52.79.243.153:8082/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  //사진+나머지 전송
  const allSend = () => {
    sendData();
    onClickSend();
  };

  // 해당식당의 리뷰출력
  const param = useParams();
  const [dataList, setDataList] = useState([]);
  const loadData = () => {
    const category = param.category;
    console.log('NEW', category);
    axios
      .get('http://13.125.132.197:8082/api/images')
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
        <input
          type='file'
          id='profile-upload'
          accept='image/*'
          onChange={onChangeImg}
        />
        <button className={styles.button} onClick={allSend}>
          작성완료
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
