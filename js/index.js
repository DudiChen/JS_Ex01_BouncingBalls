let id = null;

function myMove() {
    const my_ball = document.getElementById("my_ball");
    const board = document.getElementById("main_board");
    let dir_x = Math.random() > 0.5 ? 1 : -1;
    let dir_y = Math.random() > 0.5 ? 1 : -1;
    
    clearInterval(id);
    id = setInterval(frame, 10);
    randomizeStartLocation(my_ball, board);
    function frame() {
        
        my_ball.style.top = my_ball.offsetTop + dir_y + 'px';
        my_ball.style.left = my_ball.offsetLeft + dir_x + 'px';
        
        if(my_ball.offsetTop + my_ball.offsetHeight == board.offsetHeight || my_ball.offsetTop == 0)
            dir_y = -1 * dir_y

        if(my_ball.offsetLeft + my_ball.offsetWidth == board.offsetWidth || my_ball.offsetLeft == 0)
            dir_x = -1 * dir_x
    }
}

function allMove() {
    let ballList = [];
    const board = document.getElementById("main_board");

    for(let i = 1; i <= 4 ; i++) {
        ballList[i] = {
            element: document.getElementById(`ball${i}`),
            dir_x: Math.random() > 0.5 ? 1 : -1,
            dir_y: Math.random() > 0.5 ? 1 : -1
        }

        randomizeStartLocation(ballList[i].element, board)
    }

    clearInterval(id);
    id = setInterval(frame, 10);

    function frame() {
        
        for(let i = 1 ; i <= 4 ; i++) {
            let currentBall = ballList[i].element;

            currentBall.style.top = currentBall.offsetTop + ballList[i].dir_y + 'px';
            currentBall.style.left = currentBall.offsetLeft + ballList[i].dir_x + 'px';
            
            if(currentBall.offsetTop + currentBall.offsetHeight == board.offsetHeight || currentBall.offsetTop == 0)
                ballList[i].dir_y = -1 * ballList[i].dir_y
    
            if(currentBall.offsetLeft + currentBall.offsetWidth == board.offsetWidth || currentBall.offsetLeft == 0)
                ballList[i].dir_x = -1 * ballList[i].dir_x
        }
    }
}

function randomizeStartLocation(ball, board) {
    if(Math.floor(Math.random() * 2)) {
        ball.style.top = Math.floor(Math.random() * (board.offsetHeight - ball.offsetHeight - 1));
        ball.style.left = Math.random > 0.5 ? 1 : (board.offsetWidth - ball.offsetWidth - 1);
    }
    else {
        ball.style.left = Math.floor(Math.random() * (board.offsetWidth - ball.offsetWidth - 1));
        ball.style.top = Math.random > 0.5 ? 1 : (board.offsetHeight - ball.offsetHeight - 1);
    }
}

