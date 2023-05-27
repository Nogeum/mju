import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import Layout from "../Layout/Layout";
import ReactStars from "react-stars";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DetailPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const moveToListPage = () => {
    navigate("/list/chicken");
  };
  // id값 가지고 서버에 요청 보내는 함수 작성

  const dummyData = {
    title: "교촌 치킨",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPLQvNOR_LF2bODDQAz2LaUEOliOOgFy6LZuIcF=w408-h306-k-no",
    rating: 5,
  };

  return (
    <Layout>
      <div className={styles.image_container}>
        <button className={styles.backIcon} onClick={moveToListPage}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <img src={dummyData.image} alt="" className={styles.image} />
        <div className={styles.filter}></div>
      </div>
      <div className={styles.data_container}>
        <p className={styles.title}>{dummyData.title}</p>
        <ReactStars
          className={styles.star}
          count={5}
          value={dummyData.rating}
          edit={false}
          size={20}
        />
      </div>
    </Layout>
  );
};

export default DetailPage;
