import React from 'react';
import Layout from '../Layout/Layout';
import ReelsBox from '../ReelsBox/ReelsBox';
import styles from './Reels.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Reels() {
  return (
    <Layout>
      <Header />
      <section className={styles.reels_container}>
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
        <ReelsBox />
      </section>
      <Footer />
    </Layout>
  );
}
