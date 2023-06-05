import React, { useState } from 'react';
import styles from './SignUp.module.css';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import axios from 'axios';
import Footer from '../Footer/Footer';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [cerNum, setCerNum] = useState();
  const [nickName, setNickName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const [isCer, setIsCer] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isNick, setIsNick] = useState(false);

  const changeEmail = (e) => setEmail(e.target.value);
  const changeCerNum = (e) => setCerNum(e.target.value);
  const changeNick = (e) => setNickName(e.target.value);
  const changeUserId = (e) => setUserId(e.target.value);
  const changeUserPw = (e) => setUserPw(e.target.value);

  // 이메일 유효성 여부 검증
  // 인증 번호 전송 요청 시 + 회원 가입 요청 시 두 번 확인하도록 함
  const checkValidEmail = () => {
    const domain = email.split('@')[1];
    if (!domain) {
      alert('올바른 이메일을 입력해주세요.');
      return;
    }
    if (domain !== 'mju.ac.kr') {
      alert('명지대 이메일로만 가입 가능합니다.');
      return false;
    }

    return true;
  };

  // 인증번호 전송
  const sendCertNum = () => {
    if (!checkValidEmail()) return;
    axios
      .post('http://52.79.235.187:8082/api/email', { email })
      .then((res) => {
        console.log(res.data);
        console.log('인증번호발송');
        alert('인증번호 발송');
      })
      .catch((err) => console.log(err));
  };

  // 인증번호 확인
  const checkCerNum = () => {
    axios
      .post('http://52.79.235.187:8082/api/emailCode', { email, cerNum })
      .then((res) => {
        console.log(res.data);
        setIsCer(true);
      })

      .catch((err) => {
        console.log(err);
        setIsCer(false);
      });
  };
  const checkId = () => {
    axios
      .post('http://52.79.235.187:8082/api/id', { userId })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        setIsId(true);
      })
      .catch((err) => {
        console.log(err.data);
        alert(err.data);
      });
  };
  const checkNick = () => {
    axios
      .post('http://52.79.235.187:8082/api/name', { nickName })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        setIsNick(true);
      })
      .catch((err) => {
        console.log(err.data);
        alert(err.data);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !email ||
      !nickName ||
      !userId ||
      !userPw ||
      !isId ||
      !isNick ||
      isCer
    ) {
      alert('모든 정보를 기입해주세요.');
      return;
    }
    axios
      .post('http://52.79.235.187:8082/api/register', {
        email,
        nickName,
        userId,
        userPw,
      })
      .then((response) => console.log(response.data))
      .catch((Error) => {
        console.log(Error.response.data);
      });
  };

  return (
    <Layout>
      <Header />
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <p className={styles.title}>
          <em>Sign Up</em>
        </p>
        <div className={styles.input_with_button}>
          <input
            name='email'
            value={email}
            onChange={changeEmail}
            type='email'
            spellCheck='false'
            placeholder='학교 이메일'
          />
          <button type='button' onClick={sendCertNum}>
            인증발송
          </button>
        </div>
        <div className={styles.input_with_button}>
          <input
            name='cerNum'
            value={cerNum}
            onChange={changeCerNum}
            type='text'
            spellCheck='false'
            placeholder='인증번호'
          />
          <button onClick={checkCerNum} type='button'>
            인증확인
          </button>
        </div>
        <div className={styles.input_with_button}>
          <input
            name='nickName'
            value={nickName}
            onChange={changeNick}
            type='text'
            spellCheck='false'
            placeholder='닉네임'
          />
          <button type='button' onClick={checkNick}>
            중복체크
          </button>
        </div>
        <div className={styles.input_with_button}>
          <input
            name='userId'
            value={userId}
            onChange={changeUserId}
            type='text'
            spellCheck='false'
            placeholder='아이디'
          />
          <button type='button' onClick={checkId}>
            중복체크
          </button>
        </div>
        <div className={styles.input_without_button}>
          <input
            name='userPw'
            value={userPw}
            onChange={changeUserPw}
            type='password'
            spellCheck='false'
            placeholder='패스워드'
          />
        </div>
        <button className={styles.submit_button} type='submit'>
          가입
        </button>
      </form>
      <Footer />
    </Layout>
  );
};

export default SignUp;
