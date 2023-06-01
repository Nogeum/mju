import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './DetailPage.module.css';
import Layout from '../Layout/Layout';
import ReactStars from 'react-stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DetailReview from '../DetailReview/DetailReview';
import axios from 'axios';
import Detailinfo from '../DetailInfo/Detailinfo';
import DetailMenu from '../DetailMenu/DetailMenu';
import Slider from 'react-slick';
import qt from '../../img/qt.jpeg';

const DetailPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [dataList, setDataList] = useState();
  const [src, setSrc] = useState();
  const [src2, setSrc2] = useState();
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
      .then((response) => {
        setDataList(response.data);
        setSrc(
          `https://bucket123478.s3.ap-northeast-2.amazonaws.com/RestaurantPhoto/${response.data.info.ID}_2.jpg`
        );
        setSrc2(
          `https://bucket123478.s3.ap-northeast-2.amazonaws.com/RestaurantPhoto/${response.data.info.ID}_3.jpg`
        );
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, [param.id]);

  const moveToListPage = () => {
    window.history.back();
  };
  // id값 가지고 서버에 요청 보내는 함수 작성

  console.log(dataList);
  return (
    <Layout>
      <Header />
      {dataList && src && (
        <div className={styles.all_container}>
          <div className={styles.image_container}>
            <button className={styles.backIcon} onClick={moveToListPage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <Slider {...settings}>
              <img src={src} alt='list_image' className={styles.image} />
              <img src={src2} alt='list_image' className={styles.image} />
            </Slider>
            <div className={styles.filter}></div>
          </div>
          <div className={styles.data_container}>
            <p className={styles.title}>{dataList.info.NAME}</p>
            <ReactStars
              className={styles.star}
              count={5}
              value={dataList.infoRate.RATE}
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
                  side={dataList.infoMenu.SIDEMENU}
                  price2={dataList.infoMenuPrice.SIDEPRICE}
                />
              ) : selected === 'info' ? (
                <Detailinfo
                  name={dataList.info.NAME}
                  time={dataList.info.TIME}
                  loc={dataList.info.LOCATION}
                  map={dataList.infoMap}
                  num={dataList.info.NUMBER}
                />
              ) : (
                <DetailReview name={dataList.info.NAME} restid={param.id} />
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
