import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';
import './index.js'




const App = () => {

  
  const APP_ID = "3004df4f";
  const APP_KEY = "dca84acf50e13b6a65527e106492d786"
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () =>{
    getRecipes();
  }, [query]);

  
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }
  return(
    <div className="App">
          <meta charset="utf-8"/>
          <link rel="apple-touch-icon" href="/docs/5.2/assets/img/favicons/apple-touch-icon.png" sizes="180x180"></link>
<link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png"></link>
<link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png"></link>
<link rel="manifest" href="/docs/5.2/assets/img/favicons/manifest.json"></link>
<link rel="mask-icon" href="/docs/5.2/assets/img/favicons/safari-pinned-tab.svg" color="#712cf9"></link>
<link rel="icon" href="/docs/5.2/assets/img/favicons/favicon.ico"></link>
<meta name="theme-color" content="#712cf9"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <meta name="description" content=""></meta>
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"></meta>
    <meta name="generator" content="Hugo 0.104.2"></meta>
      <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/album/"></link>
      <div className='box'></div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></link>
      <link href="/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
      <link rel="apple-touch-icon" href="/docs/5.2/assets/img/favicons/apple-touch-icon.png" sizes="180x180"/>
      <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png"/>
      <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png"/>
      <link rel="manifest" href="/docs/5.2/assets/img/favicons/manifest.json"/>
      <link rel="mask-icon" href="/docs/5.2/assets/img/favicons/safari-pinned-tab.svg" color="#712cf9"/>
      <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon.ico"/>
      <meta name="theme-color" content="#712cf9"></meta>
      <script src="/docs/5.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
      <meta name="theme-color" content="#712cf9"></meta>
      <header class="header" data-component="Header">
    <div class="collapse bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">About</h4>
            <p class="text-muted">This is a final project for my front-end framework course. I really enjoyed the previous assignment so I thought that I would take elements of that and spice it up a bit, no pun intended.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="https://getbootstrap.com/docs/5.2/examples/album/#" class="navbar-brand d-flex align-items-center">
          <strong>Recipes</strong>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Recipe Search</h1>
        <p>Simply type an ingredient and click search and prepare to be amazed by the amount of recipes you receive!</p>
        <p>
        </p>
      </div>
    </div>
  </section>
      <form onSubmit={getSearch}className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <script src="/docs/5.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
         />
      ))}
      
      </div>
    </div>
    
  );
};

export const sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
export const useMediaQuery = (screen) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
      const query = `(min-width: ${sizes[screen]})`;
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
          setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
  }, [matches, screen]);

  return matches;
};
export default App;
 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>