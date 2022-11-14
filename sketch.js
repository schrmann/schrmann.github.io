var pos = 25;
let squareimage
let squareimage2
let squareIndex = 0
let by;
let yOffset = 0.0;

// Functions
function mouseWheel(event) {
  //println(event.delta);
  pos += event.delta;
  posRev = height - 10 - pos;
  console.log(pos);
}

function preload() { 
   

squareimage=[
    
    loadImage('F_square2/Komp 1_1.png'),
    loadImage('F_square2/Komp 1_2.png'),
    loadImage('F_square2/Komp 1_3.png'),
    loadImage('F_square2/Komp 1_4.png'),
    loadImage('F_square2/Komp 1_5.png'),
    loadImage('F_square2/Komp 1_6.png'),
    loadImage('F_square2/Komp 1_7.png'),
    loadImage('F_square2/Komp 1_8.png'),
    loadImage('F_square2/Komp 1_9.png'),
    loadImage('F_square2/Komp 1_10.png'),
    loadImage('F_square2/Komp 1_11.png'),
    loadImage('F_square2/Komp 1_12.png'),
    loadImage('F_square2/Komp 1_13.png'),
    loadImage('F_square2/Komp 1_14.png'),
    loadImage('F_square2/Komp 1_15.png'),
    loadImage('F_square2/Komp 1_16.png'),
    loadImage('F_square2/Komp 1_17.png'),
    loadImage('F_square2/Komp 1_18.png'),
    loadImage('F_square2/Komp 1_19.png'),
    loadImage('F_square2/Komp 1_20.png'),
    loadImage('F_square2/Komp 1_21.png'),
    loadImage('F_square2/Komp 1_22.png'),
    loadImage('F_square2/Komp 1_23.png'),
    loadImage('F_square2/Komp 1_24.png'),
    loadImage('F_square2/Komp 1_25.png'),
    loadImage('F_square2/Komp 1_26.png'),
    loadImage('F_square2/Komp 1_27.png'),
    loadImage('F_square2/Komp 1_28.png'),
    loadImage('F_square2/Komp 1_29.png'),
    loadImage('F_square2/Komp 1_29.png'),
    
    
   
]
    
}

function setup() {
//quimp= createGraphics(innerWidth/2, innerHeight/2);
imageMode(CENTER) 
createCanvas(windowWidth,windowHeight,);

}

//drag function
 function mouseDragged(event) {
  
     if(pmouseY < mouseY){
         
         pos = pos - 3;
         
     }

     if(pmouseY > mouseY){
         
         pos = pos + 3;
         
     }

  }   



function draw() {


    
    
let r1 = innerWidth/2000
    
    background(12, 22, 42);
    
   
    
    if (pos > 200){
    moveFrame();

    //squareimage[squareIndex].resize(10*innerWidth/100,0);
    //image(pimp,innerWidth/2, height/2,pimp.width/10*innerWidth/200,pimp.height/10*innerWidth/200); Working Scaler

    image(squareimage[squareIndex],innerWidth/2, height/2,squareimage[squareIndex].width*r1,squareimage[squareIndex].height*r1);
    }

   

    
    
}

function moveFrame(){
    
    squareIndex++;

if (squareIndex > squareimage.length -1 )

{squareIndex = 0; 

}
    
    
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
