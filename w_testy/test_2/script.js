var canvas =
    document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

var gl = canvas.getContext('webgl');
if (!gl){
    console.error("Unable to initialize webGL.");
}
var time = 0.0