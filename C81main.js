canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,100,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_canvasf);
function my_canvasf (e) {
    color=document.getElementById("color").value;
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log("x="+mousex+"y="+mousey);
    circle(mousex,mousey)
    }
    function circle (mousex,mousey) {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        ctx.arc(mousex,mousey,40,0,2*Math.PI);
        ctx.stroke();  
    }

    function clearArea () {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    