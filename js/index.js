function myMove() {
    const my_ball = document.getElementById("my_ball");
    const board = document.getElementById("main_board");
    let pos_x = 0;
    let pos_y = 0;
    
    clearInterval(id);
    id = setInterval(frame, 10);
    
    function frame() {

        if (my_ball.offsetTop + 50 > board.offsetHeight - 32 || my_ball.offsetLeft + 50 > board.offsetWidth - 32) {
            clearInterval(id);
        } else {
            pos_y++;
            pos_x++;
            my_ball.style.top = pos_y + 'px';
            my_ball.style.left = pos_x + 'px';
        }
    }
}