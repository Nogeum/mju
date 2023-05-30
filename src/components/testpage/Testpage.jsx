import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './Testpage.module.css';

export default function Testpage() {
  const onChangeImg = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();

      formData.append('multipartFileList', uploadFile);

      axios
        .post('http://52.79.243.153:8082/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  };

  return (
    <>
      <form>
        <label htmlFor='profile-upload' />
        <input
          type='file'
          id='profile-upload'
          accept='image/*'
          onChange={onChangeImg}
        />
      </form>
    </>
  );
}
