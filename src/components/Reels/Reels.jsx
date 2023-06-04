import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import ReelsBox from '../ReelsBox/ReelsBox';
import styles from './Reels.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import PopUp from '../PopUp/PopUp';

export default function Reels() {
  const [popUpOn, setPopUpOn] = useState(false);
  const closePopup = () => {
    setPopUpOn(false);
  };

  const openPopup = (data) => {
    setPopUpOn(data);
  };

  const [dataList, setDataList] = useState([]);
  const loadData = () => {
    axios
      .get('http://52.79.235.187:8082/api/showreviews')
      .then((response) => {
        console.log(response);
        setDataList(response.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout>
      {popUpOn && <PopUp closePopup={closePopup} data={popUpOn} />}
      <Header />
      <section className={styles.reels_container}>
        {dataList.map((data) => (
          <ReelsBox data={data} openPopup={openPopup} />
        ))}
      </section>
      <Footer />
    </Layout>
  );
}
