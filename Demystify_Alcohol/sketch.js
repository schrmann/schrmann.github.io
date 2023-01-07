let pos = -10;
let addG = 0 ;
let t1_text;
let t2_text;


//scene1_NEW

let schablone;

let blue_Back;

let glass;

let left_Objects;

let pyramid_blue;

let wineyard;

let left_Bush;

let black_translate;


let rel_pyramid_height;

let right_hand;

let rel_plane_black;

let rel_multi;

let rel_add;

let Scene1_glass_comp;


//scene1

let scene1Back;
let blackBack;
let scene1Front ;
let scene1;
let floatSquare;
let floatBall;
let pupil;
//fonts

let fontBlack
let fontUnica





//scene1 Index
let scene1Index = 0

let BackIndex = 0


let relpos1;
let relheight_text;

let BackTex;

let back1
let by;
let box1; 


//Text SCENE1

let Scene1_title_text;

let Scene1_intro_text;

//let colo = color(255, 204, 0);
let yOffset = 0.0;
let S1T= 'Have you ever asked yourself why alcohol plays such a great role in so many people‘s lives?\n \n Why  is it almost unthinkable to have a celebration, in the western world, without gallons of wine, beer or liquor?\n \nWhy is the ability to drink large amounts of alcohol still considered an ideal of masculinity and strength?\n \nWhy do we believe that we can access our true hidden emotions through alcohol?\n \nWhy do we feel so terrible after a night of drinking and still dismiss this state as normal and insignificant?\n \n And why it\'s almost frowned upon to refer to alcohol as a dangerous drug, although the evidence for this is almost impossible to deny?';


// Functions
function mouseWheel(event) {
  //println(event.delta);
  pos += event.delta;
  posRev = height - 7 - pos;
  console.log(pos);
}

function preload() { 
    
    
//S1T = loadStrings('text/Scene1_Intro_reader.txt');

 
    
//BackTex = createGraphics(1400,788);
    
    
    

  fontBlack = loadFont('fonts/Raleway-Black.ttf');
  fontUnica = loadFont('fonts/UnicaOne-Regular.ttf');
    


}

function setup() {

    
    
frameRate(30);

//text scene1_title
left_Objects = loadImage('scene1new/monk.png');    
schablone = loadImage('scene1new/SchabloneV2.png'); 
blue_Back = loadImage('scene1new/blue_Back.jpg');   
glass = loadImage('scene1new/glass_eye.png');   
left_Bush = loadImage('scene1new/grass.png');  
right_hand = loadImage('scene1new/hand.png'); 
pyramid_blue = loadImage('scene1new/Pyramid.png');
wineyard = loadImage ('scene1new/WineMountain.png');
pupil = loadImage ('scene1new/glass_eye_pupil.png');

black_translate = loadImage ('scene1new/black_Overlay.png')


Scene1_title_text = createGraphics(2000, 800);


push();
    
Scene1_title_text.rectMode(CENTER);
Scene1_title_text.fill('#e85798');
Scene1_title_text.noStroke();
Scene1_title_text.rect(1000,611, 550, 40);

    
pop();

push();

Scene1_title_text.textFont(fontUnica);
Scene1_title_text.textAlign(CENTER);
Scene1_title_text.textSize(92);
Scene1_title_text.fill(0);
Scene1_title_text.noStroke();
Scene1_title_text.textLeading(15);
Scene1_title_text.text('DEMYSTIFYING',1000,660);

pop();

push();
    
Scene1_title_text.textFont(fontBlack);
Scene1_title_text.textAlign(CENTER);
Scene1_title_text.textSize(150);
Scene1_title_text.fill(0);
Scene1_title_text.noStroke();
Scene1_title_text.text('ALCOHOL',1000,800);

    
pop();



//text scene1_Text

Scene1_intro_text = createGraphics(1300, 1400);

push();
    
Scene1_intro_text.textFont(fontBlack);
Scene1_intro_text.textAlign(LEFT,CENTER);
Scene1_intro_text.textSize(45);
Scene1_intro_text.fill(255);
Scene1_intro_text.noStroke();
Scene1_intro_text.textLeading(52);
Scene1_intro_text.text(S1T,0,0,1250,1300);


    
pop();









    
if (windowWidth < 850){
    
    relsise = 1950;
    relheight = -50;
    relpos1 = -100;
    relTint1 = 250;
    relheight_text = -30;
    rel_pyramid_height = 50 ;
    rel_multi = 1.41;
    rel_add = 10;
}

if (windowWidth < 1400 && windowWidth > 850){
    
    relsise = 2800;
    relheight = -60;
    relpos1 = -130;
    relTint1 = 280;
    relheight_text = -50;
    rel_pyramid_height = 90;
    rel_multi = 1.39;
    rel_add = 0;
}


if (windowWidth > 1400){
    
    relsise = 4200;
    relheight = -80;
    relpos1 = -150;
    relTint1 = 320;
    relheight_text = -80;
    rel_pyramid_height =110 ;
    rel_multi = 1.38;
    rel_add = 0;
}
    



//quimp= createGraphics(innerWidth/2, innerHeight/2);
imageMode(CENTER) 
createCanvas(windowWidth,windowHeight,WEBGL);
//setAttributes('antialias', true);



}

//drag function
 function mouseDragged(event) {
  
     if(pmouseY < mouseY){
         
         pos = pos - 5;
         
     }

     if(pmouseY > mouseY){
         
         pos = pos + 5;
         
     }

  }   



function draw() {


    
if( pos < -11){
    
    pos= -10;
    
}
    
ambientLight(255);

let sceneUp = map(pos,8000,20000, 0,5000 )

let r1 = innerWidth/2000

let r2 = width/relsise




 background(0);

    
     //moveScene1();
    //moveScene2();
    
    
    //image(scene1[scene1Index],width/2, innerHeight-relheight-sceneUp,scene1[scene1Index].width*r2,scene1[scene1Index].height*r2);

    //title 1



    
    
    //background Gradient 
    
    push();
    translate(0, 1-pos/2,-600);
    noStroke();

    //texture('#00ff00');
    ambientMaterial('#f1f1f1');

  
    
    plane(windowWidth+1700,windowHeight+1700);
    pop();
    
    

    
    

    
    
    
    
    
    
    

   //blueBack


 push();
        
    translate(map(mouseX, 0, width, -17, 17), relheight-pos*1.4,-300);
    rotateY(map(mouseX, 0, width, 0.01, -0.01)-pos/2000);
    noStroke();
    
    fill(0, 0, 0,0);
    
    texture(blue_Back);
    
    
 if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1,relTint1*1.3,1,254)); 
        
     }


    rectMode(CENTER);
    rect(0,-42,blue_Back.width*r2*1.3,blue_Back.height*r2*1.3);
    
      //visual1 Front
pop();

    //pyramid//new

 push();
        
    translate(map(mouseX, 0, width, -22, 22), rel_pyramid_height*0.02-pos,-270);
    rotateY(map(mouseX, 0, width, 0.02, -0.02)-pos/2000);
    noStroke();
    
    fill(0, 0, 0,0);
    
    texture(pyramid_blue);
    
    
 if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1,relTint1*1.3,1,254)); 
        
     }


    rectMode(CENTER);
    rect(0,0,pyramid_blue.width*r2*1.3,pyramid_blue.height*r2*1.3);
    
      //visual1 Front
pop();
    

   //feld

 push();
        
    translate(map(mouseX, 0, width, -28, 28), rel_pyramid_height*1.6-pos,-240-pos/2000);
    rotateY(map(mouseX, 0, width, 0.02, -0.02)-pos/2000);
    noStroke();
    
    fill(0, 0, 0,0);
    
    texture(wineyard);
    
    
 if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1,relTint1*1.3,1,254)); 
        
     }


    rectMode(CENTER);
    rect(0,0,wineyard.width*r2*1.3,wineyard.height*r2*1.3);
    
     
pop();


    
       //visual1 Ball // MONK 
     
 push();
    translate(relpos1, 100+relheight-pos,map(mouseX,0,width,-35,-55)-pos/2000);

    noStroke();
    
    fill(0, 0, 0,0);



    
    texture(left_Objects);
   
  if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1,relTint1*1.3,1,254)); 
        
     }
   
    plane(left_Objects.width*r2,left_Objects.height*r2);

pop();    
    
//Hand Right

 push();
    translate(map(mouseX,0,width,-relpos1*1.7,-relpos1), rel_pyramid_height*0.5-pos,map(mouseX,0,width,-50,-25));

    noStroke();
    
    fill(0, 0, 0,0);



    
    texture(right_hand);

 if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1,relTint1*1.3,1,254)); 
        
     }
    
   
    plane(right_hand.width*r2,right_hand.height*r2);

pop();      
    
//BUSH LEFT

 push();
    translate(relpos1, rel_pyramid_height*1.1-pos,map(mouseX,0,width,-15,-25)-pos/2000);

    noStroke();
    
    fill(0, 0, 0,0);


     if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1,relTint1*1.22,1,254)); 
        
     }
    
    texture(left_Bush);
   
  if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1,relTint1*1.4,1,254)); 
        
     }
   
    plane(left_Bush.width*r2,left_Bush.height*r2);

pop();    


  
    
    
    //schablone
    
 push();
    translate(0, relheight-pos,pos*0.3);
    rotateY(map(mouseX, 0, width, 0.03, -0.03)-pos/4000);
    noStroke();
    
    fill(0, 0, 0,0);


     if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1*1.3,relTint1*1.4,1,254)); 
        
     }
    
    texture(schablone);
   
    
   
    plane(schablone.width*r2,schablone.height*r2);

pop();
    

   
    
//Glass
    
     push();
    translate(map(mouseX, 0, width, 3, -3), relheight-pos,10+pos*0.3);
    rotateY(map(mouseX, 0, width, 0.03, -0.03)-pos/2000);
    noStroke();
    
    fill(0, 0, 0,0);


  if (pos> relTint1){
     
 
      tint(255,255-map(pos,500,1000,1,254)); 
        
     }
    
    texture(glass);
   
      if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1,relTint1*1.4,1,254)); 
        
     }
   
    plane(glass.width*r2*0.7,glass.height*r2*0.7);

pop();

//Pupil Glass.2
    
     push();
    translate(map(mouseX, 0, width, -10+rel_add, 10-rel_add), relheight-pos-110+rel_add*5,22+pos*0.3);
    rotateY(map(mouseX, 0, width, 0.03, -0.03)-pos/2000);
    noStroke();
    
    fill(0, 0, 0,0);


  if (pos> relTint1){
     
 
      tint(255,255-map(pos,500,1000,1,254)); 
        
     }
    
    texture(pupil);
   
      if (pos> relTint1){
     
 
      tint(255,255-map(pos,relTint1,relTint1*1.4,1,254)); 
        
     }
   
    plane(pupil.width*r2*0.7,pupil.height*r2*0.7);

pop();


      
   
     push();
    

    translate(0, -relheight_text-pos, 210);
    
    //rotateY(map(mouseX, 0, width, 0.04, -0.04)-pos/2000);
    noStroke();
    
    texture(Scene1_title_text);
   
    plane(Scene1_title_text.width/1.3*r2,Scene1_title_text.height/1.3*r2);

pop();




 
//black_translate
    
     push();
    translate(0, rel_pyramid_height*3.4-pos*1.6,300);
   
    noStroke();
    
    fill(0, 0, 0,0);


    
    texture(black_translate);
        

   
    plane(black_translate.width*r2*1.42,black_translate.height*r2*1.42);

//blackBack

    push();
    translate(0,1500*rel_multi,0);
    noStroke();

    //texture('#00ff00');
    ambientMaterial('#000000');

  
    
    plane(windowWidth+1700,4000);
    pop();

    
 // Scene1_intro_text
   
push();
    

    translate(0, 250*rel_multi-rel_add*15-pos*0.3, 0);
    
    //rotateY(map(mouseX, 0, width, 0.04, -0.04)-pos/2000);
    noStroke();
    
    texture(Scene1_intro_text);
   //fill(222);
    plane(Scene1_intro_text.width/1.7*r2,Scene1_intro_text.height/1.7*r2);

pop();
    
 
    
}





//function moveScene2(){
    
   // BackIndex ++;

//if (BackIndex > scene1Back.length-1 ){

//BackIndex = 59; 

//}}  
    
//function moveScene1(){
    
   // scene1Index ++;

//if (scene1Index > scene1Front.length-1 ){

//scene1Index = 59; 

//}    
    
    
  
    
//}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

    
if (windowWidth < 850){
    
    relsise = 1950;
    relheight = -50;
    relpos1 = -100;
    relTint1 = 250;
    relheight_text = -30;
    rel_pyramid_height = 50 ;
    rel_multi = 1.41;
    rel_add = 10;
}

if (windowWidth < 1400 && windowWidth > 850){
    
    relsise = 2800;
    relheight = -60;
    relpos1 = -130;
    relTint1 = 280;
    relheight_text = -50;
    rel_pyramid_height = 90;
    rel_multi = 1.39;
    rel_add = 0;
}


if (windowWidth > 1400){
    
    relsise = 4200;
    relheight = -80;
    relpos1 = -150;
    relTint1 = 320;
    relheight_text = -80;
    rel_pyramid_height =110 ;
    rel_multi = 1.38;
    rel_add = 0;
}
    
    


}