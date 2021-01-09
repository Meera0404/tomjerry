var tom
var jerry
var tomImg1
var tomImg2
var tomImg3
var jerryImg1
var jerryImg2
var jerryImg3
var bg ,bg1;


function preload() {
    //load the images here
    bg        = loadImage("images/garden.png")
    tomImg1   = loadAnimation("images/tomOne.png");
    tomImg2   = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3   = loadAnimation("images/tomFour.png");
    jerryImg1 = loadAnimation("images/jerryOne.png");
    jerryImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    bg1    = createSprite(500,350,10,10);      
    bg1    .addImage(bg);
    bg1.scale = 1.2;

    tom   = createSprite(760,600,10,10);      
    tom   .addAnimation("standing",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(100,600,10,10);
    jerry .addAnimation("standing",jerryImg1);
    jerry.scale = 0.2;



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(tom.x -jerry.x <(tom.width - jerry.width)/2){
tom.addAnimation("teasing",tomImg3);
tom.changeAnimation("teasing",tomImg3);
jerry.addAnimation("s",jerryImg3);
jerry.changeAnimation("s",jerryImg3);
tom.velocityX =0;
tom.x = 250;
}
drawSprites();

}
function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -4;
    tom.addAnimation("t",tomImg2);
    tom.changeAnimation("t",tomImg2);
    jerry.addAnimation("j",jerryImg2);
    jerry.changeAnimation("j",jerryImg2)
  }


}
