import React, { useState, useParams, useEffect } from 'react';
import Layout from '../Layout/Layout';
import ReelsBox from '../ReelsBox/ReelsBox';
import styles from './Reels.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import PopUp from '../PopUp/PopUp';

export default function Reels() {
  const [popUpOn, setPopUpOn] = useState(false);
  const changeValue = () => {
    setPopUpOn(() => !popUpOn);
  };

  // const [dataList, setDataList] = useState();
  // const param = useParams();
  // const loadData = () => {
  //   const category = param.category;
  //   console.log('NEW', category);
  //   axios
  //     .get('/api/images')
  //     .then((response) => setDataList(response.data))
  //     .catch((err) => console.error(err));
  // };
  // useEffect(() => {
  //   loadData();
  // }, [param.category]);

  return (
    <Layout>
      {popUpOn && <PopUp changeValue={changeValue} />}
      <Header />
      <section className={styles.reels_container}>
        <ReelsBox changeValue={changeValue} />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
      </section>
      <Footer />
    </Layout>
  );
}
