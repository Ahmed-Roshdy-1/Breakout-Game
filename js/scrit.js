const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

let score = 0

const brickRowCount = 17
const brickColumnCount = 7
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
    w: 150,
    h: 10,
    speed: 10,
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



// Draw bricks on canvas
function drawBricks(){
    bricks.forEach(column=>{
        column.forEach(brick=>{
            ctx.beginPath()
            ctx.rect(brick.x, brick.y, brick.w, brick.h)
            ctx.fillStyle = brick.visible ? '#450920' :'transparent';
            ctx.fill();
            ctx.closePath()
        })
    })
}



//Draw score on canvas
function drawScore(){
    ctx.font ='20px Arial'
    ctx.fillText(`Score: ${score}`,canvas.width-100,30)
}













// Draw eveything
function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawBall()
    deawPaddle()
    drawScore()
    drawBricks()
}








//    Animation



// Move paddle on canvas
function movePaddle(){
    paddle.x += paddle.dx

    // wall detection 
    if(paddle.x + paddle.w >canvas.width){
        paddle.x = canvas.width - paddle.w
    }

    if(paddle.x < 0){
        paddle.x = 0
    }

} 




// Move ball on canvas
function moveBall(){
    ball.x += ball.dx
    ball.y += ball.dy

   // wall coollision (right/left)
    if(ball.x + ball.size > canvas.width || ball.x - ball.size < 0){

        ball.dx *= -1 // to move the ball to the other side when it hit the border
    }
    // wall coollision (top/bottom)
    if(ball.y + ball.size > canvas.height || ball.y - ball.size < 0){
        
        ball.dy *= -1 // to move the ball to the other side when it hit the border
    }

    // paddle collision
    if(
        ball.x - ball.size > paddle.x &&
        ball.x + ball.size < paddle.x + paddle.w &&
        ball.y + ball.size > paddle.y
        ){
            ball.dy = -ball.speed
        }


    // Brick collision
    bricks.forEach(column =>{
        column.forEach(brick => {
            if(brick.visible){
                if(
                    ball.x - ball.size > brick.x && // left brick side check
                    ball.x + ball.size < brick.x + brick.w && // right brick side check
                    ball.y + ball.size > brick.y  && // top brick side check
                    ball.y - ball.size < brick.y + brick.h // botton brick side chech
                ){
                    ball.dy *= -1
                    brick.visible = false

                    increaseScore()
                    
                }
            }
        })
    })

    // hit bottom wall - lose
    if(ball.y + ball.size > canvas.height || score === 119 ){
         showAllBricks()
         score=0
    }

    



}

// Increase score
function increaseScore(){
    score++;
    if(score % (brickRowCount * brickRowCount) === 0){
        showAllBricks()
    }
}


// Make all bricks appear
function showAllBricks(){
    bricks.forEach(column =>{
        column.forEach(brick=> brick.visible =   true)
    })

}









// Update canvas drawing and animation
function update(){

    movePaddle()
    moveBall()

    // calling all function
    draw()


    //request Animation Frame to updete the frame
    requestAnimationFrame(update);

}

// calling all update function
update();






// Keydown event
function keyDown(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      paddle.dx = paddle.speed;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      paddle.dx = -paddle.speed;
    }
  }
  // Keyup event
  function keyUp(e) {
    if (
      e.key === 'Right' ||
      e.key === 'ArrowRight' ||
      e.key === 'Left' ||
      e.key === 'ArrowLeft'
    ) {
      paddle.dx = 0;
    }
  }
  // Keyboard event handlers
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);






