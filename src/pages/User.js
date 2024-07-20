import MakerOfMiniApp from "../img/MakerOfMiniApp.jpg"

import iconGit from '../img/iconGit.png'
import iconInstagram from '../img/iconInstagram.png'
import iconTelegramiconGit from '../img/iconTelegram.png'
import iconClassRoom from '../img/iconClassRoom.png'
import iconTrello from '../img/iconTrello.png'

import "../styles/User.css"
const test = () => {
    return(
        <div className="UserDiv">
            <img src={MakerOfMiniApp}></img>
            <ul>
                <li>Ім'я: Єгор Жидок</li>
                <li>Група: AFE 34</li>
                <li>Стать: Чоловічий</li>
                <li>Вік: 17</li>
                <li>ClassRoom: <a href="https://classroom.google.com/u/1/c/NjIxNzEzMDc0ODU2"><img src={iconClassRoom}></img></a> </li>
                <li>Trello: <a href="https://trello.com/b/n5mFOmhq/%D0%B6%D0%B8%D0%B4%D0%BE%D0%BA-%D1%94%D0%B3%D0%BE%D1%80-afe34-%D1%84%D1%96%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82"><img src={iconTrello}></img></a> </li>
                <li>Git: <a href="https://github.com/"><img src={iconGit}></img></a></li>
                <li>Instagram: <a href="https://www.instagram.com/"><img src={iconInstagram}></img></a></li>
                <li>Telegram: <a href="https://telegram.org/"><img src={iconTelegramiconGit}></img></a></li>
            </ul>
        </div>
    )
}

export default test