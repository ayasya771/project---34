//Create variables here
var database;
var dogImg1,dogImg2dog;
var foodS,foodStock;

function preload()
{
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250);
  dog.addImage(dogImg1);
  dog.scale = 0.15;
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  dog.display();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2);
  }
  drawSprites();
  textSize(25);
  fill("Blue");
  stroke(3);
  text("Note : Press The Up Arrow Key to feed drago milk to bruno",10,30);
  textSize(25);
  fill("Blue");
  stroke(3);
  text("Food Remaining : "+foodS,150,180);
  
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  } 
  else{
    x=x-1;
  }

    database.ref('/').update({
      food:x
  })
}

