canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var background="mars.jpg";
var roverio="rover.png";
var x=21;
var y=21;
var rover_width=100;
var rover_height=100;
function add(){
   bkobject=new Image();
   bkobject.onLoad=uploadBackground;
   bkobject.src=background;
   roverobject=new Image();
   roverobject.onLoad=uploadrover;
   roverobject.src=roverio;
}
function uploadBackground(){
    ctx.drawImage(bkobject,0,0, canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverobject,x,y, rover_width,rover_height);
}