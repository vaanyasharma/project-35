var balloon,background
var balloonImage1,balloonImage2,balloonImage3,cityImage;

function preLoad(){
  //balloonImage1=loadAnimation("images/Hot Air Ballon-02","images/Hot Air Ballon-03");
  //balloonImage2=loadAnimation("images/Hot Air Ballon-03","images/Hot Air Ballon-04");
  cityImage=loadImage("images/HotAirBallon01");
}
function setup() {
  database=firebase.database();
  createCanvas(800,400);
  balloon=createSprite(400, 200, 50, 50);
 // balloon.addAnimation("HotAirBalloon",balloonImage1)
  balloon.scale=0.5
  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readHeight,showError);
}

function draw() {
background(cityImage);
  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0)
  // balloon.addAnimation("HotAirBaloon",balloonImage2);

  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0)
    //balloon.addAnimation("HotAirBaloon",balloonImage2);
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10)
   // balloon.addAnimation("HotAirBaloon",balloonImage2);
    //balloon.scale=balloon.scale-0.005
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,10)
    //balloon.addAnimation("HotAirBaloon",balloonImage2);
    //balloon.scale=balloon.scale+0.005
  }
 

  drawSprites();
  textSize(20);
  text("USE ARROW KEYS TO MOVE THE BALLOON",50,50);
  
}



function updateHeight(x,y,){
  database.ref('balloon/height').set({
    'x' : height.x+x,
    'y' : height.y+y
  })

}

function readHeight(data){
  height =  data.val();
  balloon.x = height.x;
  balloon.y = height.y ;

}



function showError(){
  console.log("error in writing to the database");
}