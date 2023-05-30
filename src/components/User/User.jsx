import React from 'react';
import styles from './User.module.css';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function User() {
  return (
    <Layout>
      <Header />
      <form className={styles.form}>
        <div className={styles.title_container}>
          <p className={styles.title}>마이페이지</p>
        </div>
        <div className={styles.info_container}>
          <p className={styles.user_nick}>닉네임 : 류제현</p>
          <p className={styles.user_email}>이메일 : 류제현@mju.ac.kr</p>
          <div className={styles.change_container}>
            <label className={styles.pw} htmlFor='pw'>
              비밀번호 변경
            </label>
            <input className={styles.input} type='password' name='pw' id='pw' />
            <button className={styles.change_button}>변경</button>
          </div>
        </div>
        <div className={styles.manage_container}>
          <p className={styles.mange_title}>내가 쓴 리뷰</p>
          <div className={styles.manage_review}></div>
        </div>
      </form>
      <Footer />
    </Layout>
  );
}
