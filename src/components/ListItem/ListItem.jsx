import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import styles from './ListItem.module.css';
import { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import Header from '../Header/Header';
import axios from 'axios';
import Footer from '../Footer/Footer';

const ListItem = () => {
  const param = useParams();
  const [dataList, setDataList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  const loadReviewList = () => {
    axios
      .get('http://52.79.235.187:8082/api/showreviews')
      .then((res) => setReviewList(res.data))
      .catch((err) => console.log(err));
  };

  // 파라미터에 따라 서버에 데이터 요청하는 함수
  const loadData = () => {
    const category = param.category;
    console.log('NEW', category);
    axios
      .get(`/searchRestaurant?searchValue=${category}`)
      .then((response) => setDataList(response.data))
      .catch((err) => console.error(err));
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

  useEffect(() => {
    loadData();
  }, [param.category]);

  useEffect(() => {
    loadReviewList();
    const check = localStorage.getItem('state');
    if (!check) return;
    loadLikeList();
  }, []);

  return (
    <Layout>
      <Header />
      <section className={styles.list_container}>
        {dataList.map((data) => (
          <ListPage
            key={data.ID}
            id={data.ID}
            name={data.NAME}
            time={data.TIME}
            num={data.NUMBER}
            reviewList={reviewList}
            changeLike={changeLike}
            likeList={likeList}
          />
        ))}
      </section>
      <Footer />
    </Layout>
  );
};

export default ListItem;
