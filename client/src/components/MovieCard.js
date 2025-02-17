import React from 'react';

const MovieCard = ({ title, poster_path, vote_average }) => {
  return (
    <div className="relative group cursor-pointer">
      <img 
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="rounded-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-white text-sm font-semibold">{title}</h3>
        <div className="flex items-center mt-1">
          <span className="text-yellow-400 text-sm">{vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
