import React, { useState } from 'react'
import picture  from "../Pics/picture.png";
import slides from './Slides';


import "./Main.css";

const Main = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
      


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };




  return (
    <>
    
    
    
    
  <section class="main">
    <header>
      <a href="#"><img src={picture } class="logo"/></a>
      <div class="toggle"  style={{color:"black"}}></div>
      <ul class="navigation">
        <li><a href="#" >Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>
    <div class="content">
      <div class="text">
        <h2>We are scream<br/>for <span>Ice cream</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, adipisci obcaecati! Accusamus fugiat obcaecati nesciunt maiores rerum placeat amet voluptatibus cumque soluta similique saepe, assumenda eos dolorum autem. Iusto enim accusamus optio cupiditate earum ipsam!</p>
        <button href="#" class="btn">Order Now</button>
      </div>
      <div className="slider">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`slides ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.image} alt={`Slide ${slide.id}`} />
            </div>
          ))}
        </div>
    </div>

    <div class="footer">
      <ul class="sci">
        <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
        <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
        <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </ul>
      <div className="prevNext">
          <p>Always Fresh</p>
          <span className="prev" onClick={prevSlide}><ion-icon name="chevron-back-outline"></ion-icon></span>
          <span className="next" onClick={nextSlide}><ion-icon name="chevron-forward-outline"></ion-icon></span>
        </div>
    </div>
  </section>
 

    
    </>
  )
}

export default Main