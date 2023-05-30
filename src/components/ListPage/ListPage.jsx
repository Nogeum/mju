import { useNavigate } from 'react-router-dom';
import styles from './ListPage.module.css';
import ReactStars from 'react-stars';

const ListPage = ({ id, name, time, num, rate }) => {
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate(`/detail/${id}`);
  };

  const img = `https://bucket123478.s3.ap-northeast-2.amazonaws.com/RestaurantPhoto/${id}_1.jpg`;
  return (
    <div onClick={moveToDetail} className={styles.item}>
      <img src={img} alt='list_image' />
      <div className={styles.data_container}>
        <p className={styles.title}>{name}</p>
        <p>{time}</p>
        <p>{num}</p>
        <ReactStars count={5} value={rate} edit={false} size={16} />
      </div>
    </div>
  );
};

export default ListPage;
