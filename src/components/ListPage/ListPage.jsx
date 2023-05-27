import { useNavigate } from 'react-router-dom';
import styles from './ListPage.module.css';
import ReactStars from 'react-stars';

const ListPage = ({ id, title, food, time, num, image, rating }) => {
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div onClick={moveToDetail} className={styles.item}>
      <img src={image} alt='list_image' />
      <div className={styles.data_container}>
        <p className={styles.title}>{title}</p>
        <p>{food}</p>
        <p>{time}</p>
        <p>{num}</p>
        <ReactStars count={5} value={rating} edit={false} size={16} />
      </div>
    </div>
  );
};

export default ListPage;
