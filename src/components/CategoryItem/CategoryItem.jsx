import { useNavigate } from "react-router-dom";
import styles from "./CategoryItem.module.css";

const CategoryItem = ({ title, image, path }) => {
  const navigate = useNavigate();
  const moveToListPage = () => {
    navigate(path);
  };
  // d
  return (
    <div className={styles.item} onClick={moveToListPage}>
      <img src={image} alt="test" />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default CategoryItem;
