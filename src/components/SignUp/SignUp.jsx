import React, { useState } from 'react';
import styles from './SignUp.module.css';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import axios from 'axios';
import Footer from '../Footer/Footer';

const SignUp = (props) => {
  const [code, setCode] = useState();
  const [formData, setFormData] = useState({
    email: '',
    cerNum: '',
    nickName: '',
    userId: '',
    userPw: '',
  });

  const { email, cerNum, nickName, userId, userPw } = formData;

  const changeFormData = (e) => {
    const name = e.currentTarget.name;
    setFormData({
      ...formData,
      [name]: e.currentTarget.value,
    });
  };

  // 이메일 유효성 여부 검증
  // 인증 번호 전송 요청 시 + 회원 가입 요청 시 두 번 확인하도록 함
  const checkValidEmail = () => {
    const domain = email.split('@')[1];
    if (!domain) {
      alert('올바른 이메일을 입력해주세요.');
      return;
    }
    if (domain !== 'naver.com') {
      alert('네이버 이메일로만 가입 가능합니다.');
      return false;
    }

    return true;
  };

  const sendCertNum = () => {
    if (!checkValidEmail()) return;
    axios
      .post('http://13.125.132.197:8082/api/mailConfirm', { email })
      .then((res) => {
        console.log(res.data);
        console.log('인증번호발송');
        alert('인증번호 발송');
      })
      .catch((err) => console.log(err));
  };

  const checkCerNum = () => {
    axios
      .get('13.125.132.197:8082/api/mailConfirm')
      .then((res) => {
        console.log('서버로부터 인증번호 불러오기 성공');
        setCode(res.data);
      })
      .catch((err) => console(err));
    if (cerNum === code) {
      alert('인증완료');
      return true;
    } else {
      alert('인증번호가 일치하지 않습니다.');
      return false;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        '/api/register',
        {
          email,
          cerNum,
          nickName,
          userId,
          userPw,
        },
        { withCredentials: true }
      )
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
            onChange={changeFormData}
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
            onChange={changeFormData}
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
            onChange={changeFormData}
            type='text'
            spellCheck='false'
            placeholder='닉네임'
          />
          <button type='button'>중복체크</button>
        </div>
        <div className={styles.input_with_button}>
          <input
            name='userId'
            value={userId}
            onChange={changeFormData}
            type='text'
            spellCheck='false'
            placeholder='아이디'
          />
          <button type='button'>중복체크</button>
        </div>
        <div className={styles.input_without_button}>
          <input
            name='userPw'
            value={userPw}
            onChange={changeFormData}
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
