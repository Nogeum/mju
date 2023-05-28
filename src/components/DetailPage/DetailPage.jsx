import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './DetailPage.module.css';
import Layout from '../Layout/Layout';
import ReactStars from 'react-stars';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DetailReview from '../DetailReview/DetailReview';
import axios from 'axios';
import Detailinfo from '../DetailInfo/Detailinfo';
import DetailMenu from '../DetailMenu/DetailMenu';

const DetailPage = () => {
  const [dataList, setDataList] = useState();
  const [selected, setSelected] = useState('menu');
  const changeSelectedValue = (value) => {
    setSelected(value);
  };
  const param = useParams();

  const loadData = () => {
    const ID = param.id;
    console.log('NEW', ID);
    axios
      .get(`/RestaurantInfo?searchID=${ID}`)
      .then((response) => setDataList(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, [param.id]);

  const moveToListPage = () => {
    window.history.back();
  };
  // id값 가지고 서버에 요청 보내는 함수 작성

  const dummyData = {
    title: '교촌 치킨',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPLQvNOR_LF2bODDQAz2LaUEOliOOgFy6LZuIcF=w408-h306-k-no',
    rating: 5,
  };
  console.log(dataList);
  console.log(dataList.infoMenu);
  return (
    <Layout>
      <Header />
      {dataList && (
        <div className={styles.all_container}>
          <div className={styles.image_container}>
            <button className={styles.backIcon} onClick={moveToListPage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <img src={dummyData.image} alt='' className={styles.image} />
            <div className={styles.filter}></div>
          </div>
          <div className={styles.data_container}>
            <p className={styles.title}>{dummyData.title}</p>
            <ReactStars
              className={styles.star}
              count={5}
              value={dummyData.rating}
              edit={false}
              size={20}
            />
            <div className={styles.container}>
              <button
                className={`${
                  selected === 'menu'
                    ? `${styles.selected}`
                    : `${styles.not_selected}`
                }`}
                onClick={() => changeSelectedValue('menu')}
              >
                메뉴
              </button>
              <button
                className={`${
                  selected === 'info'
                    ? `${styles.selected}`
                    : `${styles.not_selected}`
                }`}
                onClick={() => changeSelectedValue('info')}
              >
                정보
              </button>
              <button
                className={`${
                  selected === 'review'
                    ? `${styles.selected}`
                    : `${styles.not_selected}`
                }`}
                onClick={() => changeSelectedValue('review')}
              >
                리뷰
              </button>
            </div>
            <div className={styles.contents_container}>
              {selected === 'menu' ? (
                <DetailMenu
                  main={dataList.infoMenu.MAINMENU}
                  price={dataList.infoMenuPrice.MAINPRICE}
                />
              ) : selected === 'info' ? (
                <Detailinfo />
              ) : (
                <DetailReview />
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </Layout>
  );
};

export default DetailPage;
