import React, { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FindPop.module.css';
import axios from 'axios';

export default function FindPop(props) {
  const [email, setEmail] = useState('');
  const changeEmail = (e) => setEmail(e.target.value);
  const [email2, setEmail2] = useState('');
  const changeEmail2 = (e) => setEmail2(e.target.value);
  const [userId, setUserId] = useState('');
  const changeUserId = (e) => setUserId(e.target.value);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://52.79.235.187:8082/api/findid', {
        email,
      })
      .then((response) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch((Error) => {
        console.log(Error.response.data);
        alert('이메일을 확인해주세요.');
      });
  };
  const onSubmitHandler2 = (e) => {
    e.preventDefault();
    axios
      .post('http://52.79.235.187:8082/api/findpw', {
        email,
        userId,
      })
      .then((response) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch((Error) => {
        console.log(Error.response.data);
      });
  };
  return (
    <div className={styles.filter}>
      <button className={styles.close} onClick={props.changeValue}>
        <FontAwesomeIcon icon={faXmark} className={styles.xmark} />
      </button>
      <div className={styles.popup}>
        <div className={styles.pop_container}>
          <div className={styles.find_id_container}>
            <h2>아이디 찾기</h2>
            <form onSubmit={onSubmitHandler}>
              <input
                name='input_email'
                value={email}
                onChange={changeEmail}
                type='text'
                spellCheck='false'
                placeholder='이메일'
              />
              <button type='submit'>찾기</button>
            </form>
          </div>
          <div className={styles.find_pw_container}>
            <h2>비밀번호 찾기</h2>
            <form onSubmit={onSubmitHandler2}>
              <input
                name='inputemail'
                value={email2}
                onChange={changeEmail2}
                type='text'
                spellCheck='false'
                placeholder='이메일'
              />
              <input
                name='inputuserId'
                value={userId}
                onChange={changeUserId}
                type='text'
                spellCheck='false'
                placeholder='아디'
              />
              <button type='submit'>찾기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
