import React from "react";
import '../assets/styles/components/Carousel.scss';
//recuerda, cada componente jsx debe importar su componente scss

const Carousel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">
        {children}
    </div>
  </section>
);

export default Carousel;
