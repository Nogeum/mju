import React from 'react';
import styles from './DetailInfo.module.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Detailinfo({ name, time, loc, num, map }) {
  const dummy = [
    {
      name: '명지대학교 제 5공학관',
      time: '연중무휴 24시간 운영',
      location: '경기도 용인시 처인구 명지로 116',
    },
  ];
  const containerStyle = {
    width: '95%',
    height: '40rem',
    margin: 'auto',
    marginTop: '2rem',
    borderRadius: '8px',
  };
  const center = { lat: 37.2222086, lng: 127.187657 };
  return (
    <div>
      <div className={styles.info}>
        <p className={styles.info_title}>영업 정보</p>
        <p className={styles.font}>상호명 : {name}</p>
        <p className={styles.font}>운영시간 : {time}</p>
        <p className={styles.font}>전화번호 : {num}</p>
        <p className={styles.font}>위치 : {loc}</p>
      </div>
      <div className={styles.border}></div>
      <LoadScript googleMapsApiKey='AIzaSyApDkK3ksEJAT6v0BTqNW3OeaZJ8NcgxSo'>
        <GoogleMap mapContainerStyle={containerStyle} center={map} zoom={19}>
          <Marker position={map} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
