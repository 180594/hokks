import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/FilterCard';
import NewMovie from './component/AddMovie';




  const App = () => {
    const [movie, setMovie] = useState([        {
              Title: "Star War",
              ID: "001",
              rating: "meduim",
              Poster: "https://fr.web.img6.acsta.net/pictures/22/10/24/17/14/4700907.jpg"
          },
          {
            Title: "yew years",
            ID: "002",
            rating: "best",
            Poster: "https://images.epagine.fr/434/9782221138434_1_75.jpg"
          },
          {
            Title: "hello kitty",
            ID: "003",
            rating: "best",
            Poster: "https://upload.wikimedia.org/wikipedia/en/1/1a/LoveAndMonstersPoster.jpeg"
          }]);

          
       
          let handleSearch = movie.filter((item)=>{
           if(Filter ==="" || Filter === undefined){
             return movie
           }
           return item.Title === Filter
           
          });
          const CreateMovie =(values)=>{
            const NewMovie ={
              Id: Date.now(),
              Title: values.Title,
              Poster: values.Poster
            };
            setMovie([...movie,NewMovie])
  };
  return (
    <div className="App">
      <header >
     
			<div >
        <Filter handleSearch={handleSearch}/>
        <MovieList movies={movie} />
                 <NewMovie CreateMovie={CreateMovie}NewMovie/>
			</div>
		
      </header>
    </div>
  );
}

export default App;
