canvas=document.getElementById("myCanvas");



ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();



//arc
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=1;
ctx.arc(240,250,40,0,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.arc(286,200,40,0,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.arc(326,250,40,0,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(376,200,40,0,2 * Math.PI);
ctx.stroke();