var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount = 0, gameState = 0;
var allPlayers;

var car1,car1Image,car2, car2Image,trackImage;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");

  trackImage = loadImage("../assets/track.jpg")
  car1Image = loadImage("../assets/car1.png")
  car2Image = loadImage("../assets/car2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount === 2){
    game.updateState(1);
  }

  if(gameState === 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
