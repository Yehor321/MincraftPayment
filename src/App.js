import React, { useState } from 'react';
import './App.css';
import iconInfo from './img/iconInfo.png';
import iconHome from './img/iconHome.png';
import Group1 from './img/Group1.png';
import Group2 from './img/Group2.png';

function App() {
  const DataGoods = [
    {
      img: Group1,
      description: "dolor",
      price: "100$"
    },
    {
      img: Group2,
      description: "test2 API img",
      price: "200$"
    }
  ];

  return (
    <div>
      <Header />
      <GoodsList dataArray={DataGoods} />
    </div>
  );
}

const Header = () => (
  <header>
    <div className='headerDiv'>
      <div className='header__user_logo'></div>
      <div className='header__user_name'>User Name</div>
      <div className='header__user_button'>
        <button className="StyleButton"><img src={iconInfo} alt="Info"/></button>
        <button className="StyleButton"><img src={iconHome} alt="Home"/></button>
      </div>
    </div>
  </header>
);

const GoodsList = ({ dataArray }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = (id) => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.setText(`Вы выбрали товар ${id}`);
      setSelectedItem(id);
      tg.MainButton.show();
    }
  };

  return (
    <main>
      {dataArray.map((item, index) => (
        <div className="ShellBox" key={index}>
          <div className="testBox">
            <img src={item.img} alt={`Товар ${index + 1}`} />
          </div>
          <button
            className="ShellBox_ButtonBuy"
            id={`btn${index + 1}`}
            onClick={() => handleButtonClick(`btn${index + 1}`)}
          >
            Buy
          </button>
        </div>
      ))}
    </main>
  );
};

let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = "#2cab37";

export default App;
