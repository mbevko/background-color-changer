let green = document.querySelector(".green_palette");
let blue = document.querySelector(".blue_palette");
let purple = document.querySelector(".purple_palette");
let pink = document.querySelector(".pink_palette");
let white = document.querySelector(".white_palette");
let background = document.querySelector(".background");

green.addEventListener('click', () => document.querySelector('.background').style.background = "#5CC47F");

blue.addEventListener('click', () => document.querySelector('.background').style.background = "#5CAAC4");

purple.addEventListener('click', () => document.querySelector('.background').style.background = "#C25CC4");

pink.addEventListener('click', () => document.querySelector('.background').style.background = "#C45C77");

white.addEventListener('click', () => document.querySelector('.background').style.background = "#fff");