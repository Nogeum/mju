import styles from './LoginPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import title from '../../img/title.png';
import axios from 'axios';
import Layout from '../Layout/Layout';

const LoginPage = () => {
  // URL 변경하기 위한 것
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setPw] = useState('');
  const [userState, setUserState] = useState(false); // 유저 로그인 상태

  const moveToMainPage = () => {
    navigate('/');
  };

  const changeUserId = (e) => {
    setUserId(e.target.value);
  };

  const ChangePw = (e) => {
    setPw(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post('/api/login', { userId, userPw })
      .then((response) => console.log(response.data))
      .catch((Error) => {
        console.log(Error.response.data);
      });

    console.log('로그인 요청');
  };
  const moveToSignUpPage = () => {
    navigate('/signup');
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.title} onClick={moveToMainPage}>
        <img className={styles.mju} src={title} alt='명슐랭가이드' />
      </h2>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <div className={styles.input_container}>
          <div className={`${styles.input_box} ${styles.top}`}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <input
              onChange={changeUserId}
              spellCheck='false'
              placeholder='아이디'
              type='text'
            />
          </div>
          <div className={`${styles.input_box} ${styles.bottom}`}>
            <FontAwesomeIcon icon={faLock} className={styles.icon} />
            <input
              onChange={ChangePw}
              spellCheck='false'
              placeholder='비밀번호'
              type='password'
            />
          </div>
          <div>
            <button className={styles.find_id}>아이디/</button>
            <button className={styles.find_pw}>비밀번호찾기</button>
          </div>
        </div>
        <button className={styles.login_button} type='submit'>
          로그인
        </button>
      </form>
      <div className={styles.signup_container}>
        <button className={styles.signup_button} onClick={moveToSignUpPage}>
          회원가입
        </button>
      </div>
    </main>
  );
};

export default LoginPage;
