var pos = 25;
let squareimage
let squareimage2
let squareIndex = 0
let squareIndex2 = 0
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
    
    
squareimage2=[
    
    loadImage('F_ring/Komp 1_1.png'),
    loadImage('F_ring/Komp 1_2.png'),
    loadImage('F_ring/Komp 1_3.png'),
    loadImage('F_ring/Komp 1_4.png'),
    loadImage('F_ring/Komp 1_5.png'),
    loadImage('F_ring/Komp 1_6.png'),
    loadImage('F_ring/Komp 1_7.png'),
    loadImage('F_ring/Komp 1_8.png'),
    loadImage('F_ring/Komp 1_9.png'),
    loadImage('F_ring/Komp 1_10.png'),
    loadImage('F_ring/Komp 1_11.png'),
    loadImage('F_ring/Komp 1_12.png'),
    loadImage('F_ring/Komp 1_13.png'),
    loadImage('F_ring/Komp 1_14.png'),
    loadImage('F_ring/Komp 1_15.png'),
    loadImage('F_ring/Komp 1_16.png'),
    loadImage('F_ring/Komp 1_17.png'),
    loadImage('F_ring/Komp 1_18.png'),
    loadImage('F_ring/Komp 1_19.png'),
    loadImage('F_ring/Komp 1_20.png'),
    loadImage('F_ring/Komp 1_21.png'),
    loadImage('F_ring/Komp 1_22.png'),
    loadImage('F_ring/Komp 1_23.png'),
    loadImage('F_ring/Komp 1_24.png'),
    loadImage('F_ring/Komp 1_25.png'),
    loadImage('F_ring/Komp 1_26.png'),
    loadImage('F_ring/Komp 1_27.png'),
    loadImage('F_ring/Komp 1_28.png'),
    loadImage('F_ring/Komp 1_29.png'),
    
   
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
         
         pos = pos - 15;
         
     }

     if(pmouseY > mouseY){
         
         pos = pos + 15;
         
     }

  }   



function draw() {


    
    
let r1 = innerWidth/2000
    
    background(12, 22, 42);
    
   
    
    if (pos > 100 && pos < 350){
    moveFrame();

    //squareimage[squareIndex].resize(10*innerWidth/100,0);
    //image(pimp,innerWidth/2, height/2,pimp.width/10*innerWidth/200,pimp.height/10*innerWidth/200); Working Scaler

    image(squareimage[squareIndex],innerWidth/2, height/2,squareimage[squareIndex].width*r1,squareimage[squareIndex].height*r1);
    }

    if (pos > 351 && pos < 2020){
    //moveFrame();

    squareIndex2 = map(pos, 351, 2050, 0, squareimage2.length - 1).toFixed(0);    
        
    image(squareimage2[squareIndex2],innerWidth/2, height/2,squareimage[squareIndex2].width*r1,squareimage[squareIndex2].height*r1);

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
