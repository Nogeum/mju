import CategoryList from '../CategoryList/CategoryList';
import SearchBox from '../SearchBox/SearchBox';
import styles from './Mainpage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import RecItem from '../RecItem/RecItem';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import axios from 'axios';

const Mainpage = () => {
  const [recList, setRecList] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const loadRecList = () => {
    axios
      .get('')
      .then((res) => setRecList(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <Layout>
      <Header />
      {/* <div className={styles.search_container}>
        <SearchBox />
      </div> */}
      <section className={styles.mainpage_container}>
        <CategoryList />
        <div className={styles.carousel_container}>
          <Slider {...settings}>
            <div className={styles.carousel_item}>
              <img
                src='https://yaimg.yanolja.com/v5/2023/04/03/16/642af8ffa5e115.86468612.png'
                alt=''
                className={styles.test_image}
              />
            </div>
            <div className={styles.carousel_item}>
              <img
                src='https://yaimg.yanolja.com/v5/2023/04/03/16/642af8ffa5e115.86468612.png'
                alt=''
                className={styles.test_image}
              />
            </div>
            <div className={styles.carousel_item}>
              <img
                src='https://yaimg.yanolja.com/v5/2023/04/03/16/642af8ffa5e115.86468612.png'
                alt=''
                className={styles.test_image}
              />
            </div>
            <div className={styles.carousel_item}>
              <img
                src='https://yaimg.yanolja.com/v5/2023/04/03/16/642af8ffa5e115.86468612.png'
                alt=''
                className={styles.test_image}
              />
            </div>
          </Slider>
        </div>
        <div className={styles.recommend_container}>
          <h2 className={styles.section_name}>추천 맛집</h2>
          <div className={styles.recommend_list}>
            <RecItem />
            <RecItem />
            <RecItem />
            <RecItem />
            {/* {
              recList.map((item) => <RecItem item={item}/>)
            } */}
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Mainpage;
