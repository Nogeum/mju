import { useNavigate } from 'react-router-dom';
import styles from './ListPage.module.css';
import ReactStars from 'react-stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const ListPage = ({
  id,
  name,
  time,
  num,
  reviewList,
  changeLike,
  likeList,
}) => {
  const navigate = useNavigate();
  const [rate, setRate] = useState(0);

  const moveToDetail = () => {
    navigate(`/detail/${id}`);
  };

  const changeZzim = (e) => {
    e.stopPropagation();
    changeLike(id);
  };

  const calcRate = () => {
    let totalRate = 0;
    const myList = reviewList.filter((review) => review.restid === id);
    myList.forEach((review) => (totalRate += review.rate));
    setRate(totalRate / myList.length);
  };

  useEffect(() => {
    calcRate();
  }, []);

  const img = `https://bucket123478.s3.ap-northeast-2.amazonaws.com/RestaurantPhoto/${id}_1.jpg`;
  return (
    <div onClick={moveToDetail} className={styles.item}>
      <button className={styles.zzim} onClick={changeZzim}>
        {likeList.find((item) => item.restid === id) ? (
          <FontAwesomeIcon icon={faHeartFull} className={styles.fullHeart} />
        ) : (
          <FontAwesomeIcon icon={faHeart} />
        )}
      </button>
      <img src={img} alt='list_image' />
      <div className={styles.data_container}>
        <p className={styles.title}>{name}</p>
        <p>{time}</p>
        <p>{num}</p>
        <ReactStars count={5} value={rate} edit={false} size={16} />
      </div>
    </div>
  );
};

export default ListPage;
