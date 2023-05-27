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

  // const dataList = [
  //   {
  //     id: 0,
  //     title: '교촌치킨',
  //     food: '허니콤보',
  //     time: '12pm~23pm',
  //     num: '031-1234-1818',
  //     image:
  //       'https://thumb.mt.co.kr/06/2022/07/2022071713225256537_1.jpg/dims/optimize/',
  //     rating: 5,
  //   },
  //   {
  //     id: 1,
  //     title: 'BBQ',
  //     food: '황금올리브',
  //     time: '12pm~23pm',
  //     num: '031-2324-4379',
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCO-k6kdw6pJcBbihp36eeQ78Pyygoo9G2g&usqp=CAU',
  //     rating: 1,
  //   },
  //   {
  //     id: 2,
  //     title: 'BHC',
  //     food: '뿌링클',
  //     time: '12pm~23pm',
  //     num: '031-4444-4444',
  //     image: 'https://www.bhc.co.kr/images/common/logo300.jpg',
  //     rating: 3,
  //   },
  //   {
  //     id: 3,
  //     title: '륶제치킨',
  //     food: 'noMatChicken',
  //     time: '05am~06am',
  //     num: '010-5592-1856',
  //     image:
  //       'https://img.etoday.co.kr/pto_db/2015/07/20150706022449_669581_543_540.png',
  //     rating: 0.5,
  //   },
  // ];

  // 파라미터에 따라 서버에 데이터 요청하는 함수
  const loadData = () => {
    const category = param.category;
    console.log('NEW', category);
    axios
      .get(`searchRestaurant?searchValue=${category}`)
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
            // food={data.food}
            time={data.TIME}
            // num={data.num}
            // image={data.image}
            // rating={data.rating}
          />
        ))}
      </section>
      <Footer />
    </Layout>
  );
};

export default ListItem;
