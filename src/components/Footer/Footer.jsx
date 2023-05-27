import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const moveToMain = () => navigate('/');
  const moveToReels = () => navigate('/reels');
  // const moveToKeep = ()=>navigate('/keep')
  // const moveToUser = ()=>navigate('/user')
  const moveToLogin = () => navigate('/login');

  return (
    <div className={styles.footer}>
      <button onClick={moveToMain}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
      <button onClick={moveToReels}>
        <FontAwesomeIcon icon={faCompass} />
      </button>
      <button>
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <button onClick={moveToLogin}>
        <FontAwesomeIcon icon={faUser} />
      </button>
    </div>
  );
}
