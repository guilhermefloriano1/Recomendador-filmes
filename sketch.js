let genres = ["Ação", "Comédia", "Drama", "Ficção Científica", "Terror"];

let movies = {

  "Ação": {

    "infantil": ["The Incredibles", "Big Hero 6"],

    "adolescente": ["Spider-Man: Homecoming", "Fast & Furious"],

    "adulto": ["Mad Max: Fury Road", "John Wick"]

  },

  "Comédia": {

    "infantil": ["Shrek", "Toy Story"],

    "adolescente": ["Superbad", "Ferris Bueller's Day Off"],

    "adulto": ["The Hangover", "Groundhog Day"]

  },

  "Drama": {

    "infantil": ["Inside Out", "The Lion King"],

    "adolescente": ["The Perks of Being a Wallflower", "The Fault in Our Stars"],

    "adulto": ["Forrest Gump", "The Shawshank Redemption"]

  },

  "Ficção Científica": {

    "infantil": ["WALL-E", "Meet the Robinsons"],

    "adolescente": ["Inception", "Jurassic Park"],

    "adulto": ["Blade Runner 2049", "The Matrix"]

  },

  "Terror": {

    "infantil": [],

    "adolescente": ["Scary Stories to Tell in the Dark", "A Quiet Place"],

    "adulto": ["Get Out", "Hereditary"]

  }

};

let selectedGenre = "";

let recommendedMovie = "";

let ageInput;

let ageCategory = "";

function setup() {

  createCanvas(600, 400);

  textAlign(CENTER, CENTER);

  textSize(18);

  

  // Criar entrada para idade

  createP("Digite sua idade:");

  ageInput = createInput();

  ageInput.position(20, 50);

  

  // Criar botões para cada gênero

  for (let i = 0; i < genres.length; i++) {

    let button = createButton(genres[i]);

    button.position(20, 100 + i * 50);

    button.mousePressed(() => recommendMovie(genres[i]));

  }

}

function draw() {

  background(200);

  

  // Instruções

  textSize(24);

  text("Escolha um gênero para uma recomendação de filme!", width / 2, 30);

  

  // Mostrar recomendação

  if (recommendedMovie) {

    textSize(32);

    text(`Recomendação: ${recommendedMovie}`, width / 2, height / 2);

  }

}

function recommendMovie(genre) {

  let age = int(ageInput.value());

  

  // Definir categoria de idade

  if (age < 12) {

    ageCategory = "infantil";

  } else if (age >= 12 && age < 18) {

    ageCategory = "adolescente";

  } else {

    ageCategory = "adulto";

  }

  

  let movieList = movies[genre][ageCategory];

  

  if (movieList.length > 0) {

    recommendedMovie = random(movieList);

  } else {

    recommendedMovie = "Nenhum filme disponível para esta faixa etária e gênero.";

  }

}
  
