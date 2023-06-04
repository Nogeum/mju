import { useNavigate } from 'react-router-dom';
import styles from './RecItem.module.css';
import ReactStars from 'react-stars';

const RecItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.item}
      onClick={() => navigate(`/detail/${item.restid}`)}
    >
      <img src={item.image} alt='item_image' className={styles.image} />
      <p className={styles.item_name}>{item.name}</p>
      <ReactStars count={5} value={item.rate} edit={false} size={15} />
    </div>
  );
};

export default RecItem;
