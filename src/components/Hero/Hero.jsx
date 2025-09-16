import "./Hero.css"
import { IoSearch } from "react-icons/io5";
import React, {useState} from 'react'


export default function Hero(){
 
    
    const [sofaColor, setSofaColor] = useState('')
    

   

    return(
        <section className={`hero-section ${sofaColor}`}>
            <h1 className="hero-section__title">Make  Your <br/> Interior More Mininimalistic & Modern</h1>
            <p className="hero-section__text">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
            <div className="hero-section__search-container">
                <input className="search-container__input" placeholder='Search furniture'/>
                <button className="search-container__btn"><IoSearch color="white" size='18px'/>
                </button>
            </div>
            <div className="color-picker">
                <button onClick={() => setSofaColor('')} className="default-color color-btn"></button>
                <button onClick={() => setSofaColor('blue')} className="blue-color color-btn"></button>
                <button onClick={() => setSofaColor('green')} className="green-color color-btn"></button>
            </div>


        </section>
    );
}