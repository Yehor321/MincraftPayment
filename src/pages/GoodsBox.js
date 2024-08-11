import React, { useEffect } from 'react';
import "../styles/GoodsBox.css";

import GoldenBlock from '../img/GoldBlockLogo.webp'
import IronBlock from '../img/IronBlockLogo.webp'
import CopperBlock from '../img/CopperBlockLogo.webp'

function GoodsBox(){

    const DataGoods = [
        {
            img: GoldenBlock,
            description: "dolor",
            price: "100$"
        },
        {
            img: IronBlock,
            description: "dolor",
            price: "100$"
        },
        {
            img: CopperBlock,
            description: "dolor",
            price: "100$"
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
    
            const ShellBox_ButtonBuy = document.createElement('button');
            ShellBox_ButtonBuy.className = 'ShellBox_ButtonBuy';
            ShellBox_ButtonBuy.innerHTML = 'Buy';
            ShellBox_ButtonBuy.id = `btn${numID}`;
    
            main.appendChild(ShellBox);
            ShellBox.appendChild(testBox);
            ShellBox.appendChild(ShellBox_ButtonBuy);
            testBox.appendChild(img);
        });
    
        // const tg = window.Telegram.WebApp
        // tg.initData()
    
        // const testtel = document.createElement('p')
        // testtel.innerHTML = 'saffd'
        // main.appendChild(testtel)
    
    }



    useEffect(() => {
        DrawBoxGoods(DataGoods);
    }, []);

    return(
        <>
            <main id="mainn"></main>
        </>

    )
}



export default GoodsBox;
