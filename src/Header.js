import react from "react";
import troll from './trollface.svg' ;


export default function Header(){
    return(
        <div className="header">
            <img src={troll}></img>
            <h1> Meme Challenge</h1>
            <div classname="headerpara">
            <p>We give you a random Image and you have to make a meme on it. Good Luck🤡</p>
            </div>
        </div>
    )
}