import React, { useEffect, useState } from 'react';
import styles from './User.module.css';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();
  const moveToLogin = () => navigate('/login');
  const [state, setState] = useState({ nickName: '' });
  // const loadData = () => {
  //   axios
  //     .get('http://52.79.235.187:8082')
  //     .then((res) => {
  //       console.log(res.data);
  //       setState(res.data);
  //     })
  //     .catch((err) => moveToLogin());
  // };
  // useEffect(() => {
  //   loadData();
  // }, []);

  // 비번 변경
  const [nextPw, setnextPw] = useState();
  const changePw = (e) => {
    setnextPw(e.target.value);
  };
  const sendPw = () => {
    axios
      .post('http://52.79.235.187:8082/api/changePassword', { nextPw })
      .then((res) => alert(res.data))
      .catch((err) => alert(err.data));
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
            <p className={styles.user_nick}>닉네임 : </p>
            <p className={styles.user_email}>이메일 : </p>
            <div className={styles.change_container}>
              <label className={styles.pw} htmlFor='pw'>
                비밀번호 변경
              </label>
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
              {/* })} */}
            </div>
          </div>
          <div className={styles.manage_container}>
            <p className={styles.mange_title}>내가 쓴 리뷰(12)</p>
            <div className={styles.manage_review}></div>
          </div>
        </form>
      )}
      <Footer />
    </Layout>
  );
}
