import './Header.css';
import IconInfo from '../../assets/header/iconInfo.png'
import IconGoods from '../../assets/header/iconGoods.png'

import { Route, Routes, NavLink } from 'react-router-dom';

import GoodsCards from '../good_cards/GoodsCards';
import Information from '../information/Information';

export default function Header(){
    return (
        <>
          <header>
            <div className='headerDiv'>
              <div className='user'>
                <div className='header__user_logo'></div>
                <div className='header__user_name'>User Name</div>
              </div>
              <div className='header__user_button'>
                <NavLink className="StyleButton" to={'Information'}><img src={IconInfo}></img></NavLink>
                <NavLink className="StyleButton" to={'/'}><img src={IconGoods}></img></NavLink>
              </div>
            </div>
          </header>
    
          <Routes>
            <Route path={'/Information'} element={<Information/>}/>
            <Route path={'/'} element={<GoodsCards/>}/>
          </Routes>
    
        </>
      );
}
