import styles from './SearchBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
// import { faBars } from "@fortawesome/free-regular-svg-icons";

const SearchBox = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  useEffect(() => {
    if (transcript === '') return;
    setInputValue(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const submitSearch = () => {
    navigate(`/search/${inputValue}`);
  };

  const submitSearchKeyboard = (e) => {
    if (e.key !== 'Enter') return;
    navigate(`/search/${inputValue}`);
  };
  return (
    <div className={styles.search_box}>
      <FontAwesomeIcon
        icon={faSearch}
        className={styles.searchIcon}
        onClick={submitSearch}
      />
      <input
        onChange={changeInputValue}
        value={inputValue}
        className={styles.input}
        onKeyUp={submitSearchKeyboard}
        type='text'
        spellCheck='false'
        placeholder='검색'
      />
      <FontAwesomeIcon
        icon={faMicrophone}
        className={styles.micIcon}
        onClick={() => {
          listening
            ? SpeechRecognition.stopListening()
            : SpeechRecognition.startListening();
        }}
      />
    </div>
  );
};

export default SearchBox;
