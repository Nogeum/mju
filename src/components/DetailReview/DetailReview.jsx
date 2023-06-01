import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './DetailReview.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';

export default function DetailReview({ name, restid }) {
  // 쿠키
  const navigate = useNavigate();
  // const moveToListPage = () => navigate('/login');
  const [state, setState] = useState(false);
  const loadData2 = () => {
    axios
      .get('')
      .then((res) => {
        console.log(res.data);
        setState(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadData2();
  }, []);

  // 별점입력 및  유지
  const [rate, setRate] = useState();
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  //리뷰 제출
  const [content, setContent] = useState();

  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const sendData = () => {
    axios
      .post('', {
        restid,
        content,
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
    if (!rate || !content) {
      alert('별점기입 혹은 리뷰를 작성해주세요');
      return;
    }
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
    loadData2();
  }, [param.category]);

  return (
    <>
      <div className={styles.review_container}>
        {state ? (
          <div className={styles.edit_container}>
            <ReactStars
              className={styles.rate}
              count={5}
              onChange={ratingChanged}
              size={20}
              value={rate}
            />
            <input
              type='file'
              id='profile-upload'
              accept='image/*'
              onChange={onChangeImg}
            />
            <textarea
              onChange={changeContent}
              value={content}
              className={styles.review_container2}
              spellCheck='false'
              placeholder='솔직한 리뷰를 남겨보세요.'
            ></textarea>
            <button className={styles.button} onClick={allSend}>
              작성완료
            </button>
          </div>
        ) : (
          <div className={styles.login_container}>
            <p className={styles.login_font}>로그인 시 리뷰작성 가능합니다.</p>
            <button className={styles.login_button}>로그인</button>
          </div>
        )}
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
