import styles from './RecItem.module.css';
import ReactStars from 'react-stars';

const recItem = () => {
  return (
    <div className={styles.item}>
      <img
        src='https://thumb.mt.co.kr/06/2022/07/2022071713225256537_1.jpg/dims/optimize/'
        alt='item_image'
      />
      <p className={styles.item_name}>교촌치킨</p>
      <ReactStars count={5} value={5} edit={false} size={15} />
    </div>
  );
};

export default recItem;
