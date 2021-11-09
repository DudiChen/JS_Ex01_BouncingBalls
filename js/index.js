let id = null;

function myMove() {
    const my_ball = document.getElementById("my_ball");
    const board = document.getElementById("main_board");
    let pos_x = 0;
    let pos_y = 0;
    let dir_x = 1;
    let dir_y = 1;
    
    clearInterval(id);
    id = setInterval(frame, 10);
    
    function frame() {

        // if (my_ball.offsetTop + my_ball.offsetHeight == board.offsetHeight - 32 || my_ball.offsetLeft + my_ball.offsetWidth == board.offsetWidth - 32) {
        //     clearInterval(id);
        // } else {
        //     pos_y++;
        //     pos_x++;
        //     my_ball.style.top = pos_y + 'px';
        //     my_ball.style.left = pos_x + 'px';
        // }

        // if (my_ball.offsetTop + my_ball.offsetHeight == board.offsetHeight - 32 || my_ball.offsetLeft + my_ball.offsetWidth == board.offsetWidth - 32) {
        //     clearInterval(id);
        
        my_ball.style.top = my_ball.offsetTop + dir_y + 'px';
        my_ball.style.left = my_ball.offsetLeft + dir_x + 'px';
        
        if(my_ball.offsetTop + my_ball.offsetHeight == board.offsetHeight - 32 || my_ball.offsetTop == 0)
            dir_y = -1 * dir_y

        if(my_ball.offsetLeft + my_ball.offsetWidth == board.offsetWidth - 32 || my_ball.offsetLeft == 0)
            dir_x = -1 * dir_x
    }
}