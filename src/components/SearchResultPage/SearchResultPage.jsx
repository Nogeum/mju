import React from 'react';
import styles from './SearchResultPage.module.css';
import ListPage from '../ListPage/ListPage';
import Layout from '../Layout/Layout';

export const SearchResultPage = (props) => {
  const dataList = [
    {
      id: 0,
      title: '교촌치킨',
      food: '허니콤보',
      time: '12pm~23pm',
      num: '031-1234-1818',
      image:
        'https://thumb.mt.co.kr/06/2022/07/2022071713225256537_1.jpg/dims/optimize/',
      rating: 5,
    },
    {
      id: 1,
      title: 'BBQ',
      food: '황금올리브',
      time: '12pm~23pm',
      num: '031-2324-4379',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCO-k6kdw6pJcBbihp36eeQ78Pyygoo9G2g&usqp=CAU',
      rating: 1,
    },
    {
      id: 2,
      title: 'BHC',
      food: '뿌링클',
      time: '12pm~23pm',
      num: '031-4444-4444',
      image: 'https://www.bhc.co.kr/images/common/logo300.jpg',
      rating: 3,
    },
    {
      id: 3,
      title: '륶제치킨',
      food: 'noMatChicken',
      time: '05am~06am',
      num: '010-5592-1856',
      image:
        'https://img.etoday.co.kr/pto_db/2015/07/20150706022449_669581_543_540.png',
      rating: 0.5,
    },
  ];

  console.log(dataList);

  return (
    <Layout>
      <section className={styles.result_page}>
        {dataList.length > 0 ? (
          <div className={styles.result_container}>
            {dataList.map((data) => (
              <ListPage
                key={data.id}
                id={data.id}
                title={data.title}
                food={data.food}
                time={data.time}
                num={data.num}
                image={data.image}
                rating={data.rating}
              />
            ))}
          </div>
        ) : (
          <div className=''>없습니다.</div>
        )}
      </section>
    </Layout>
  );
};
