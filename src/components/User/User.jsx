import React, { useEffect, useState } from 'react';
import styles from './User.module.css';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';

export default function User() {
  const navigate = useNavigate();
  const moveToLogin = () => navigate('/login');
  const [state, setState] = useState({ nickName: '' });
  const [myReviewList, setMyReviewList] = useState([]);

  const loadReviewList = () => {
    axios.get('http://52.79.235.187:8082/api/showreviews').then((res) => {
      const result = res.data.filter(
        (review) => review.userId === localStorage.getItem('state')
      );
      result.reverse();
      setMyReviewList(result);
    });
  };

  const loadData = () => {
    axios
      .post('http://52.79.235.187:8082/api/mypage', {
        userId: localStorage.getItem('state'),
      })
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
        moveToLogin();
      });
  };
  useEffect(() => {
    loadData();
    loadReviewList();
  }, []);

  // 비번 변경
  const [nextPw, setnextPw] = useState();
  const changePw = (e) => {
    setnextPw(e.target.value);
  };
  const sendPw = (e) => {
    e.preventDefault();
    axios
      .post('http://52.79.235.187:8082/api/changePassword', {
        userId: localStorage.getItem('state'),
        userPw: nextPw,
      })
      .then((res) => alert(res.data))
      .catch((err) => alert(err.data));
  };

  const logout = () => {
    localStorage.removeItem('state');
    alert('로그아웃되었습니다!');
    navigate('/');
  };

  return (
    <Layout>
      <Header />
      {state.nickName.length > 0 && (
        <form className={styles.form}>
          <div className={styles.title_container}>
            <p className={styles.title}>마이페이지</p>
          </div>
          {/* {.map((data) => { */}
          <div className={styles.info_container}>
            <p className={styles.user_nick}>닉네임 : {state.nickName}</p>
            <p className={styles.user_email}>이메일 : {state.email}</p>
            <div className={styles.change_container}>
              <label className={styles.pw} htmlFor='pw'>
                비밀번호 변경
              </label>
              <div className={styles.input_container}>
                <input
                  className={styles.input}
                  type='password'
                  name='pw'
                  id='pw'
                  onChange={changePw}
                />
                <button className={styles.change_button} onClick={sendPw}>
                  변경
                </button>
              </div>
              {/* })} */}
            </div>
            <button type='button' className={styles.logout} onClick={logout}>
              로그아웃
            </button>
          </div>
          <div className={styles.manage_container}>
            <p className={styles.manage_title}>
              내가 쓴 리뷰({myReviewList.length})
            </p>
            <div className={styles.manage_review}>
              {myReviewList.map((review) => (
                <div className={styles.review_container3}>
                  <p className={styles.id}>
                    {review.userId} |{' '}
                    <span
                      className={styles.rest_name}
                      onClick={() => navigate(`/detail/${review.restid}`)}
                    >
                      {review.name}
                    </span>
                  </p>
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
            </div>
          </div>
        </form>
      )}
      <Footer />
    </Layout>
  );
}
