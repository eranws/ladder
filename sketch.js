let X = [];

const H = 256;
const R = 100;

function drawShelf(x, y, shelfWidth) {
	 rect(x, y, shelfWidth, 10);  
	 // flaps
	 var t = 40
	 rect(x, y-t, 10, t);  
	 rect(x+shelfWidth-10, y-t, 10, t);  
}

function mousePressed() {
   fullscreen(true);
   save('ladder' + mouseX + '-' +mouseY + '.jpg'); // save a specific canvas with a filename

}

function setup() {
	createCanvas(displayWidth, displayHeight);
	noStroke();
	background(255);
}

function draw() {

	background(0);

 	var c = color(255, 250, 220);  // Define color 'c'
 	fill(c);  // Use color variable 'c' as fill color
 	rect(width/3, 0, 2*width/3, height);  // Draw Wall
	 
	// Draw 
 	var blk = color(5, 5, 5);
 	fill(blk);
	
	
	var miX = width/3
	var maX = 2*width / 3
	var miY = height / 3
	var maY = height - 40

  	var x1 = map(mouseX, 0, width, miX, maX, true);
  	var y1 = map(mouseY, 0, height, miY, maY, true);
	drawShelf(x1, y1, 200)


  	var x2 = map(mouseX, 0, width, maX, miX, true);
  	var y2 = map(mouseY, 0, height, maY, miY, true);
	drawShelf(x2, y2, 150)

  	var x3 = map(mouseX, 0, width, width/2-10, width/2+10, true);
  	var y3 = map(mouseY, 0, height, 0, maY, true);
	drawShelf(x3, y3, 100)

	lx1=5/6*width
	lx2=width-30
	rect(lx1, 0, 10, height);  
	rect(lx2, 0, 10, height);  
	for(var i=0; i<8; i++){
		rect(lx1, height/8*(i+0.5) , lx2-lx1, 10);  	
	}


	// X.unshift({x:mouseX, y:mouseY});
	// if (X.length > H)
	// 	X.pop();

	// X.forEach((pix, i)=>{

	// 	const sx = R * pix.x/width;
	// 	const sy = R * pix.y/height;

	// 	fill(111, 111);

	// 	ellipse(width*i/H , height/4, sx, sx);  
	// 	ellipse(width*i/H , 3*height/4, sy, sy);  
	// });

}