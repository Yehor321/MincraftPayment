import './styles/Header.css';
import "./styles/GoodsBox.css";

import iconInfo from './img/iconInfo.png'
import iconHome from './img/iconHome.png'
import iconGoods from './img/iconGoods.png'
import iconUser from './img/iconUser.png'

import { Route, Routes, NavLink } from 'react-router-dom';

import GoodsBox from './pages/GoodsBox';
import About from './pages/About'
import User from './pages/User'

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
            <NavLink className="StyleButton" to={'GoodsBox'}><img src={iconGoods}></img></NavLink>
            <NavLink className="StyleButton" to={'About'}><img src={iconInfo}></img></NavLink>
            <NavLink className="StyleButton" to={'User'}><img src={iconUser}></img></NavLink>
            <NavLink className="StyleButton" to={'/'}><img src={iconHome}></img></NavLink>
          </div>
        </div>
      </header>

      <div className='introduction'>
        <h1>Aryan Dungeon Shop</h1>
        <h3>Покупка привилегий для комфортной игры на сервере!</h3>
        <p>
        Это Mini App сделан дня покупки привилегий на майнкрафт сервере Aryan Dungeon!
        Привилегии вы можете найти в нашем каталоге, а подробности вы сможете узнать в разделе Информация!
        Приятных покупок!
        </p>
      </div>

      <Routes>
      <Route path={'/User'} element={<User/>}/>
        <Route path={'/About'} element={<About/>}/>
        <Route path={'/GoodsBox'} element={<GoodsBox/>}/>
      </Routes>

    </>
  );
}

export default App;
