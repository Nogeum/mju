import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [logState, setLogState] = useState(false);
  const request = () => {
    // axios
    //   .get('')
    //   .then((res) => {
    //     console.log(res.data);
    //     setLogState(true);
    //   })
    //   .catch((err) => {
    //     console.log(err.data);
    //   });
    const jong = localStorage.getItem('state');
    if (jong) {
      setLogState(true);
    }
  };
  useEffect(() => {
    request();
  }, []);

  const navigate = useNavigate();
  const moveToMain = () => navigate('/');
  const moveToReels = () => navigate('/reels');
  const moveToLike = () => navigate('/like');
  const moveToLogin = () => navigate('/login');
  const moveToUser = () => navigate('/user');

  return (
    <div className={styles.footer}>
      <button onClick={moveToMain}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
      <button onClick={moveToReels}>
        <FontAwesomeIcon icon={faCompass} />
      </button>
      <button onClick={moveToLike}>
        <FontAwesomeIcon icon={faHeart} />
      </button>
      {logState ? (
        <button onClick={moveToUser}>
          <FontAwesomeIcon icon={faUser} />
        </button>
      ) : (
        <button onClick={moveToLogin}>
          <FontAwesomeIcon icon={faLock} />
        </button>
      )}
    </div>
  );
}
