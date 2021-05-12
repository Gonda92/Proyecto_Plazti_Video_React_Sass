import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";
//importamos los estilos creados en Sass
//RECUERDA, cada componente jsx debe importar su componente scss

//todo lo importaremos a App y de aca lo mandamos al navegador
const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories title="Mi lista">
      <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
      </Carousel>
    </Categories>
    
    <Categories title="Tendencia">
      <Carousel>
          <CarouselItem />
          <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Originales de Platzi-Video">
      <Carousel>
          <CarouselItem />
          <CarouselItem />
      </Carousel>
    </Categories>

    <Footer/>
  </div>
);

export default App;
