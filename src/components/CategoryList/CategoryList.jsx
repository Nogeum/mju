import CategoryItem from '../CategoryItem/CategoryItem';
import styles from './CategoryList.module.css';
import burger from '../../img/burger.png';
import chicken from '../../img/chicken.png';
import meat from '../../img/meat.png';
import pizza from '../../img/pizza.png';
import japanese from '../../img/ramen.png';
import chinese from '../../img/buns.png';
import cafe from '../../img/coffee.png';
import soju from '../../img/soju.png';
import korean from '../../img/bibimbap.png';
import bunsik from '../../img/tteokbokki.png';
import gogi from '../../img/korean-bbq.png';
import bap from '../../img/bap.png';

const CategoryList = () => {
  const data = [
    {
      id: 0,
      title: '치킨',
      image: chicken,
      path: '/list/치킨',
    },
    {
      id: 1,
      title: '피자',
      image: pizza,
      path: '/list/피자',
    },
    {
      id: 2,
      title: '중식',
      image: chinese,
      path: '/list/중식',
    },
    {
      id: 3,
      title: '한식',
      image: korean,
      path: '/list/한식',
    },
    {
      id: 4,
      title: '일식',
      image: japanese,
      path: '/list/japanese',
    },
    {
      id: 5,
      title: '고기',
      image: gogi,
      path: '/list/western',
    },
    {
      id: 6,
      title: '분식',
      image: bunsik,
      path: '/list/bunshik',
    },
    {
      id: 7,
      title: '카페/디저트',
      image: cafe,
      path: '/list/gogi',
    },
    {
      id: 8,
      title: '햄버거',
      image: burger,
      path: '/list/burger',
    },
    {
      id: 9,
      title: '양식',
      image: meat,
      path: '/list/western',
    },
    {
      id: 10,
      title: '술집',
      image: soju,
      path: '/list/drink',
    },
    {
      id: 11,
      title: '혼밥',
      image: bap,
      path: '/list/solo',
    },
  ];
  return (
    <section className={styles.container}>
      {data.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.title}
          image={item.image}
          path={item.path}
        />
      ))}
    </section>
  );
};

export default CategoryList;
