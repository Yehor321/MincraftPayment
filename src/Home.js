import './styles/Header.css';

import iconInfo from './img/iconInfo.png'
import iconHome from './img/iconHome.png'
import iconGoods from './img/iconGoods.png'

import { Route, Routes, NavLink } from 'react-router-dom';

import GoodsBox from './pages/GoodsBox';
import About from './pages/About'

function App() {
  return (
    <>
      <header>
        <div className='headerDiv'>
          <div className='user'>
            <div className='header__user_logo'></div>
            <div className='header__user_name'>User Name</div>
          </div>
          <div className='header__user_button'>
            <NavLink className="StyleButton" to={'About'}><img src={iconInfo}></img></NavLink>
            <NavLink className="StyleButton" to={'/'}><img src={iconGoods}></img></NavLink>
          </div>
        </div>
      </header>

      <Routes>
        <Route path={'/About'} element={<About/>}/>
        <Route path={'/'} element={<GoodsBox/>}/>
      </Routes>

    </>
  );
}

export default App;
