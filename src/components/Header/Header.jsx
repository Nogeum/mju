import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import title from '../../img/title.png';
import SearchBox from '../SearchBox/SearchBox';
// import title from ""
const Header = () => {
  const navigate = useNavigate();
  const moveToMainPage = () => {
    navigate('/');
  };
  const moveToLoginPage = () => {
    navigate('/login');
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.title} onClick={moveToMainPage}>
        <img src={title} alt='mjutitle' className={styles.img} />
      </h1>
      <div className={styles.search_box}>
        <SearchBox />
      </div>
      {/* <button className={styles.barIcon} onClick={moveToLoginPage}>
        <FontAwesomeIcon icon={faBars} />
      </button> */}
      {/* <button className={styles.login_button} onClick={moveToLoginPage}>
        <FontAwesomeIcon icon={faUser} />
      </button> */}
    </header>
  );
};

export default Header;
