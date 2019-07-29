/*---- constants ---*/
const COLORS = {
    'null': 'white',
    '1': 'red',
    '-1': 'blue'
};

const WINNERS = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

/*---- app's state (variables) ----*/
let board, turn, winner;

/*---- cached element references ----*/
const msgEl = document.getElementById('msg');

/*---- event listeners ----*/
document.querySelector('section.board')
    .addEventListener('click', handleClick);

document.querySelector('button').addEventListener('click', reset);
/*---- functions ----*/
init();

function init(){
    board = [null,null,null,null,null,null,null,null,null];
    turn = 1;
    winner = null; //1, -1, null (no winner), 'T' (tie)
    render();
}

function render() {
    board.forEach(function(cell, idx) {
        let div = document.getElementById(`sq${idx}`);
        div.style.backgroundColor = COLORS[cell];
        // console.log(div);
        });
    

    if (winner) {
        if (winner === 'T'){
            msgEl.textContent = `It's a tie!`;
        } else {
            msgEl.textContent = `Congratulations ${COLORS[winner]}!`;
        } 
      }  else {
        msgEl.textContent = `${COLORS[turn].toUpperCase()}'s Turn`;
      }
};

function handleClick(evt) {
    let idx = parseInt(evt.target.id.replace('sq',''));
    if (isNaN(idx) || winner) return;
    board[idx] = turn;
    turn *= -1;
    render();
};

function reset(){
    board = [null,null,null,null,null,null,null,null,null];
    turn = 1;
    winner = null;
    render();
};