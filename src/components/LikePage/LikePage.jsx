import React, { useEffect, useState } from 'react';
import styles from './LikePage.module.css';
import axios from 'axios';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import { LikeItem } from '../LikeItem/LikeItem';
import Footer from '../Footer/Footer';

export const LikePage = (props) => {
  const [likeList, setLikeList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  const loadReviewList = () => {
    axios
      .get('http://52.79.235.187:8082/api/showreviews')
      .then((res) => {
        setReviewList(res.data);
      })
      .catch((err) => console.error(err));
  };

  const changeLike = (restid) => {
    const check = localStorage.getItem('state');
    if (!check) return;
    axios
      .post('http://52.79.235.187:8082/api/like', {
        userId: check,
        restid,
      })
      .then((res) => {
        console.log(res);
        loadLikeList();
      })
      .catch((err) => console.log(err));
  };

  const loadLikeList = () => {
    axios
      .post('http://52.79.235.187:8082/api/likelist', {
        userId: localStorage.getItem('state'),
      })
      .then((res) => {
        console.log(res.data);
        setLikeList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadLikeList();
    loadReviewList();
  }, []);

  return (
    <Layout>
      <Header />
      <div className={styles.like_page}>
        <h2>나의 찜목록</h2>
        <div className={styles.list_container}>
          {likeList.map((like) => (
            <LikeItem
              likeItem={like}
              reviewList={reviewList}
              changeLike={changeLike}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
