var balloon,background


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
background(255,255,255)
  background("white");
  if(keyDown(LEFT_ARROW)){
     balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
     balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
     balloon.y=balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
      balloon.y=balloon.y-10;
  }
  var balloonPoaition=database.ref('balloon/height');
  balloonPosition.on("value,readPosition,showError");

  drawSprites();
  
}

function preLoad(){
  
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
  balloon.y = height/y ;

}



functio showError(){
  console.log("erroe in writing to the database");
}