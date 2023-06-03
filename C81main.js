canvas=document.getElementById("myCanvas");

mouse_event="";
color="white";

var radius="50";
var width="1";

ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
 mouse_event="mousedown"
 color=document.getElementById("color").value;
radius=document.getElementById("radius").value;
width=document.getElementById("width").value;
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
circle(mouse_x, mouse_y);


}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
   
   
    mouse_event="mouseleave";
    
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
   
    
    mouse_event="mouseup";

}
if ( mouse_event="mousedown"){
 
   ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();

}



function circle(mouse_x,mouse_y)
{
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2 * Math.PI);
ctx.stroke();

}






