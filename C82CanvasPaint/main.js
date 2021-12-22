var Mouse_Event="empty";
var Last_x_pos_of_mouse;
var Last_y_pos_of_mouse;

canvas=document.getElementById("Whos_Joe");
ctx=canvas.getContext("2d");



canvas.addEventListener("mouseup",tb2t);

function tb2t(e){

Mouse_Event="mouseup";
}


canvas.addEventListener("mousedown",Dream_SMP);

function Dream_SMP(e){

Mouse_Event="mousedown";
}


canvas.addEventListener("mouseleave",LifeSteal_SMP);

function LifeSteal_SMP(e){

Mouse_Event="mouseleave";
}


canvas.addEventListener("mousemove",Desire_SMP);

function Desire_SMP(e){

current_x_position_of_mouse=e.clientX-canvas.offsetLeft;
current_y_position_of_mouse=e.clientY-canvas.offsetTop;

if(Mouse_Event=="mousedown"){

ctx.beginPath();
ctx.strokeStyle="darkred";
ctx.lineWidth=5;

ctx.moveTo(Last_x_pos_of_mouse,Last_y_pos_of_mouse);
ctx.lineTo(current_x_position_of_mouse,current_y_position_of_mouse);

ctx.stroke();


}
Last_y_pos_of_mouse=current_y_position_of_mouse;
Last_x_pos_of_mouse=current_x_position_of_mouse;
}



