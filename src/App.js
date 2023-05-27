import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage/Mainpage';
import ListItem from './components/ListItem/ListItem';
import LoginPage from './components/LoginPage/LoginPage';
import DetailPage from './components/DetailPage/DetailPage';
import SignUp from './components/SignUp/SignUp';
import Reels from './components/Reels/Reels';
import { SearchResultPage } from './components/SearchResultPage/SearchResultPage';
import Dictaphone from './components/Dictaphone/Dictaphone';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Mainpage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/list/:category' element={<ListItem />}></Route>
          <Route path='/detail/:id' element={<DetailPage />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/reels' element={<Reels />}></Route>
          <Route path='/search/:category' element={<ListItem />}></Route>
          <Route path='/dictaphone' element={<Dictaphone />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
