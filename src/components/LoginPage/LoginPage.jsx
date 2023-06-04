import styles from './LoginPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import title from '../../img/title.png';
import axios from 'axios';
import Layout from '../Layout/Layout';
import FindPop from '../FindPop/FindPop';

const LoginPage = () => {
  // URL 변경하기 위한 것
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setPw] = useState('');

  const moveToMainPage = () => {
    navigate('/');
  };
  const moveToSignUpPage = () => {
    navigate('/signup');
  };

  const changeUserId = (e) => {
    setUserId(e.target.value);
  };

  const changePw = (e) => {
    setPw(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://52.79.235.187:8082/api/login', { userId, userPw })
      .then((res) => {
        localStorage.setItem('state', res.data);
        alert('환영합니다!');
        moveToMainPage();
      })
      .catch((err) => {
        alert('입력 정보를 다시 확인해주세요.');
        return;
      });
  };
  // 팝업
  const [popUpOn, setPopUpOn] = useState(false);
  const changeValue = () => {
    setPopUpOn(() => !popUpOn);
  };

  return (
    <main className={styles.main}>
      {popUpOn && <FindPop changeValue={changeValue} />}
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
              onChange={changePw}
              spellCheck='false'
              placeholder='비밀번호'
              type='password'
            />
          </div>
          <div className={styles.find_container}>
            <button
              type='button'
              className={styles.find_id}
              onClick={changeValue}
            >
              아이디/
            </button>
            <button
              type='button'
              className={styles.find_pw}
              onClick={changeValue}
            >
              비밀번호찾기
            </button>
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
