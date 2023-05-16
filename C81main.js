canvas=document.getElementById("myCanvas");
mouse_event="";
color="red";
var color="";
var radius="";
var width="";

ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{

    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    width=document.getElementById("width").value;


color=document.getElementById("color").value;
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
circle(mouse_x, mouse_y);
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    mouse_event="mouseleave";

    color=document.getElementById("color").value;
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
circle(mouse_x, mouse_y);
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";

}
if ( mouse_event="mousedown"){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
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






