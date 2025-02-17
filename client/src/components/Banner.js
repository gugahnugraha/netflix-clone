import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="relative h-[80vh]">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div 
              className="relative h-[80vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                <p className="text-lg max-w-2xl">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
