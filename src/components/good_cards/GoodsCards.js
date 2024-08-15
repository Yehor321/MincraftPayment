import React, { useEffect } from 'react';
import "../good_cards/GoodsCards.css";

import GoldenBlock from '../../assets/goods/GoldBlockLogo.webp'
import IronBlock from '../../assets/goods/IronBlockLogo.webp'
import CopperBlock from '../../assets/goods/CopperBlockLogo.webp'

function GoodsBox(){

    const DataGoods = [
        {
            img: GoldenBlock,
            description: "dolor",
            price: "150₴",
            href: "https://github.com/Yehor321/MincraftPayment"
        },
        {
            img: IronBlock,
            description: "dolor",
            price: "100₴",
            href: "https://github.com/Yehor321/MincraftPayment"
        },
        {
            img: CopperBlock,
            description: "dolor",
            price: "50₴",
            href: "https://github.com/Yehor321/MincraftPayment"
        },
      ];
    
    let numID = 0;
    
    function DrawBoxGoods(dataArray){
        const main = document.getElementById('mainn')
        main.innerHTML = '';
        
        dataArray.forEach(el => {
            numID++;
    
            const ShellBox = document.createElement('div');
            ShellBox.className = 'ShellBox';
    
            const testBox = document.createElement('div');
            testBox.className = 'testBox';
    
            const img = document.createElement('img');
            img.src = el.img;
    
            const ShellBox_ButtonBuy = document.createElement('a');
            ShellBox_ButtonBuy.className = 'ShellBox_ButtonBuy';
            ShellBox_ButtonBuy.innerHTML = el.price;
            ShellBox_ButtonBuy.href = el.href;
            ShellBox_ButtonBuy.id = `btn${numID}`;
    
            main.appendChild(ShellBox);
            ShellBox.appendChild(testBox);
            ShellBox.appendChild(ShellBox_ButtonBuy);
            testBox.appendChild(img);
        });
    


        // let tg = window.Telegram.WebApp;

        
        // tg.extend()
    
        // let userName = document.createElement("p")

        // userName.innerText = `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`
    }


    useEffect(() => {
        DrawBoxGoods(DataGoods);
    }, []);

    return(
        <>
            <main id="mainn"></main>
            <a href=""></a>
        </>

    )
}



export default GoodsBox;
