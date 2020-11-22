canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var rover_h=100;
var rover_w=100;
var rover_X=10;
var rover_Y=10;

mars_array=["Image_1.jpg","Image_2.jpg","Image.jpg","Image_4.jpg"];
var random=Math.floor(Math.random()*4);

var rover_img="rover.png";
BG=mars_array[random];

function add(){

background_imgtag=new Image();//defining a variable with a new image
background_imgtag.onload=uploadbackground;//setting a function onloading this variable
background_imgtag.src=BG;//load image

rover_imgtag=new Image();//defining a variable with a new image
rover_imgtag.onload=uploadrover;//setting a function onloading this variable
rover_imgtag.src=rover_img;//load image

}

function uploadbackground(){

ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadrover(){

    ctx.drawImage(rover_imgtag,rover_X,rover_Y,rover_w,rover_h);
    
    }

window.addEventListener("keydown",mykeydown);
function mykeydown(e){

keypressed=e.keyCode;

if (keypressed=="37"){

console.log("left");
left();

}

if (keypressed=="38"){

    console.log("up");
    up();
    
    }

    if (keypressed=="39"){

        console.log("right");
        right();
        
        }

    if (keypressed=="40"){

        console.log("down");
        down();
        
        }
    
    }

function up() {   //up

if(rover_Y>=0){

rover_Y=rover_Y-10;
uploadbackground();
uploadrover()

}

}

function down() {   //down

    if(rover_Y<=500){
    
    rover_Y=rover_Y+10;
    uploadbackground();
    uploadrover()
    
    }
    
    }

    function left() {   //left

        if(rover_X>=0){
        
        rover_X=rover_X-10;
        uploadbackground();
        uploadrover()
        
        }
        
        }

        function right() {

            if(rover_X<=700){
            
            rover_X=rover_X+10;
            uploadbackground();
            uploadrover()
            
            }
            
            }