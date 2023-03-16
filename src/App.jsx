import React from 'react';
import { useState } from 'react';
import './styles.css';
import './App.css';
import  img1 from "./assets/images/dice-1.png"
import  img2 from  "./assets/images/dice-2.png"
import  img3 from  "./assets/images/dice-3.png"
import  img4 from  "./assets/images/dice-4.png"
import  img5 from  "./assets/images/dice-5.png"
import  img6 from  "./assets/images/dice-6.png"



function App() {

  const diceImages = [
  img1, img2, img3, img4, img5, img6
];

  
const [image1, setImage1] = useState(diceImages[0]);
const [image2, setImage2] = useState(diceImages[5]);

const diceRoll = function(){


 let randomNumber1 = Math.floor(Math.random() * 6);
  let randomNumber2 = Math.floor(Math.random() * 6);

setImage1(diceImages[randomNumber1]);
  setImage2(diceImages[randomNumber2]);

};


  return (
    <div className="App bg-grey-800 min-h-screen flex flex-col justify-center items-center">
 <p>Some text</p>
  <div className='image-container flex'>
    <div className='mx-4'> 
      <img className='w-48 h-48' src={image1} alt="" />
    </div>
       <div className="mx-4 mx-auto">
        <img className='w-48 h-48' src={image2} alt=""/> </div>
        </div>
        <div className='button-container'>
      <button className='button bg-grey-700 text-white py-2 px-4 rounded mt-8' type='button' onClick={diceRoll}>Roll the Dice</button></div>
    </div>
  
  )
}

export default App
