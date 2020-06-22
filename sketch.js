var database ;
var drawing = [];
var currentPath ;
var path ;
var canvas ;
var point ;
var button1 ;
var reset ;
var saveButton;
let isDrawing = false ;
function setup(){
    canvas =   createCanvas(window.innerWidth,window.innerHeight);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
    database = firebase.database();
    reset = createButton("Reset");
}

function startPath(){
  isDrawing = true;
    currentPath = [] ;
 drawing.push(currentPath);
}

function endPath(){
  isDrawing = false ;
}

function draw(){
    background(0);
    reset.mousePressed(resetPage);
   
    reset.position(displayWidth-200,700);
   
    if(isDrawing){
         point = {
            x : mouseX ,
            y : mouseY
        }
        currentPath.push(point);
    }
    
        stroke(100,200,150);
        strokeWeight(10);
        noFill();
        for(var i = 0 ; i   < drawing.length ; i++){
             path = drawing[i];
            beginShape();
            for(var t = 0 ; t   < path.length ;t++){
                vertex(path[t].x,path[t].y)
            }
            endShape();
        }

}
function resetPage(){
  drawing = [];
}
