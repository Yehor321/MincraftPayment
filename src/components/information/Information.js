import React, { useEffect } from 'react';
import "./Information.css";

import GoldenBlock from '../../assets/goods/GoldBlockLogo.webp'
import IronBlock from '../../assets/goods/IronBlockLogo.webp'
import CopperBlock from '../../assets/goods/CopperBlockLogo.webp'

const DataGoods = [
    {
        img: GoldenBlock,
        description: "lorem kbhdasvlbadskbadsvkbj",
        price: "100$"
    },
    {
        img: IronBlock,
        description: "lorem kbhdasvlbadskbadsvkbj",
        price: "100$"
    },
    {
        img: CopperBlock,
        description: "lorem kbhdasvlbadskbadsvkbj",
        price: "100$"
    },
  ];

export default function AboutGoods(){
    useEffect(() => {
        DrawBoxAboutGoods(DataGoods);
    }, []);

    return(
        <>
            <main id='mainn'></main>
        </>

    )
}

function DrawBoxAboutGoods(dataArray){
    const main = document.getElementById('mainn')
    main.innerHTML = '';

    dataArray.forEach(el => {

        const ShellBox2 = document.createElement('div');
        ShellBox2.className = 'ShellBox2';

        const p2 = document.createElement('p')
        p2.className = 'ShellP2'
        p2.innerHTML = el.description

        const testBox2 = document.createElement('div');
        testBox2.className = 'testBox2';

        const img2 = document.createElement('img');
        img2.src = el.img;

        main.appendChild(ShellBox2);
        ShellBox2.appendChild(testBox2);
        ShellBox2.appendChild(p2);
        testBox2.appendChild(img2);
    });

}
