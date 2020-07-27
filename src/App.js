import React from 'react';
import Menu from './components/menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[4].videos[0].titulo}
        url={dadosIniciais.categorias[4].videos[0].url}
        videoDescription={"o famoso experimento do gato de Schrodinger explicado de forma simples!"}
      />

      <Carousel
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
        />      

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default App;
