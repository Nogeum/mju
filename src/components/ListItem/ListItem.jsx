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

  // 파라미터에 따라 서버에 데이터 요청하는 함수
  const loadData = () => {
    const category = param.category;
    console.log('NEW', category);
    axios
      .get(`/searchRestaurant?searchValue=${category}`)
      .then((response) => setDataList(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, [param.category]);

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
            rate={data.RATE}
          />
        ))}
      </section>
      <Footer />
    </Layout>
  );
};

export default ListItem;
