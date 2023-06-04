import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import styles from './DetailReview.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';

export default function DetailReview({
  name,
  restid,
  loadReviewList,
  reviewList,
}) {
  const inputRef = useRef();
  const navigate = useNavigate();
  const moveToLogin = () => navigate('/login');
  const [state, setState] = useState(false);
  const loadData2 = () => {
    const nogeum = localStorage.getItem('state');
    if (nogeum) setState(true);
  };

  // 별점입력 및  유지
  const [rate, setRate] = useState();
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  //리뷰 제출
  const [contents, setContent] = useState('');

  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const sendData = () => {
    const userId = localStorage.getItem('state');
    if (!userId) {
      alert('로그인 후에 사용 가능합니다.');
      return;
    }
    axios
      .post('http://52.79.235.187:8082/api/reviews', {
        userId,
        restid,
        contents,
        rate,
        name,
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
  const onClickSend = () => {
    const formData = new FormData();
    formData.append('multipartFileList', file);

    axios
      .post('http://52.79.235.187:8082/api/upload', formData, {
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
    if (!rate || !contents) {
      alert('별점기입 혹은 리뷰를 작성해주세요');
      return;
    }
    if (!file) {
      alert('사진을 반드시 첨부해야 합니다.');
      return;
    }
    sendData();
    onClickSend();
    setContent('');
    setFile();
    inputRef.current.value = '';
    alert('리뷰 작성이 완료되었습니다!');
    window.location.reload();
  };

  // 해당식당의 리뷰출력
  const param = useParams();

  useEffect(() => {
    loadReviewList();
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
              ref={inputRef}
              type='file'
              id='profile-upload'
              accept='image/*'
              onChange={onChangeImg}
            />
            <textarea
              onChange={changeContent}
              value={contents}
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
            <button className={styles.login_button} onClick={moveToLogin}>
              로그인
            </button>
          </div>
        )}
        <p className={styles.total}>최근 리뷰 ({reviewList.length})</p>
        <section className={styles.section}>
          {reviewList.map((review) => (
            <div className={styles.review_container3}>
              <p className={styles.id}>{review.userId}</p>
              <ReactStars
                count={5}
                value={review.rate}
                edit={false}
                size={20}
              />
              <img className={styles.img} src={review.image} alt='' />
              <p className={styles.contents}>{review.contents}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
