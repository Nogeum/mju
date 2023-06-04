import { faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LikeItem.module.css';
import ReactStars from 'react-stars';

export const LikeItem = ({ reviewList, likeItem, changeLike }) => {
  const navigate = useNavigate();
  const [rate, setRate] = useState(0);
  const [restData, setRestData] = useState(null);
  const moveToDetail = () => {
    navigate(`/detail/${likeItem.restid}`);
  };

  const calcRate = () => {
    let totalRate = 0;
    const myList = reviewList.filter(
      (review) => review.restid === likeItem.restid
    );
    console.log(myList);
    myList.forEach((review) => (totalRate += review.rate));
    setRate(totalRate / myList.length);
  };

  const getRestData = () => {
    axios
      .get(`/RestaurantInfo?searchID=${likeItem.restid}`)
      .then((res) => {
        console.log(res.data);
        setRestData(res.data);
      })
      .catch((err) => console.error(err));
  };

  const changeZzim = (e) => {
    e.stopPropagation();
    changeLike(likeItem.restid);
  };

  useEffect(() => {
    getRestData();
    calcRate();
  }, []);

  const img = `https://bucket123478.s3.ap-northeast-2.amazonaws.com/RestaurantPhoto/${likeItem.restid}_1.jpg`;
  return (
    <>
      {restData && (
        <div onClick={moveToDetail} className={styles.item}>
          <button className={styles.zzim} onClick={changeZzim}>
            <FontAwesomeIcon icon={faHeartFull} className={styles.fullHeart} />
          </button>
          <img src={img} alt='list_image' />
          <div className={styles.data_container}>
            <p className={styles.title}>{restData.info.NAME}</p>
            <p>{restData.info.TIME}</p>
            <p>{restData.info.NUMBER}</p>
            <ReactStars count={5} value={rate} edit={false} size={16} />
          </div>
        </div>
      )}
    </>
  );
};
