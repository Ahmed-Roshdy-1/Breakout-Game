const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

let score = 0

const brickRowCount = 9
const brickColumnCount = 5
const delay = 500



// Create ball props
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
    visible: true
    
};



// Create paddle props
const paddle = {
    x: canvas.width / 2 - 90,
    y: canvas.height - 25,
    w: 200,
    h: 10,
    speed: 8,
    dx: 0,
    visible: true

};

// Creat brick props
const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true

};

// Create bricks 
const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
    bricks[i] = [];
    for (let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = { x, y, ...brickInfo };
    }
}




// Draw paddle props
 function deawPaddle(){
    ctx.beginPath();
    ctx.rect(paddle.x,paddle.y,paddle.w,paddle.h)
    ctx.fillStyle='#450920'
    ctx.fill()
    ctx.closePath()

 }


// Draw ball on canvas
function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.size,0,Math.PI*2)
    ctx.fillStyle='#450920'
    ctx.fill()
    ctx.closePath()
}






//Draw score on canvas
function drawScore(){
    ctx.font ='20px Arial'
    ctx.fillText(`Score: ${score}`,canvas.width-100,30)
}
// Draw eveything
function draw(){
    drawBall();
    deawPaddle();
    drawScore()
}





// calling all function
draw();






