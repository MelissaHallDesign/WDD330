/*
const board = document.querySelector('.board1');
const resetButton = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';
let player = player1;

function addPiece(e) {
    console.log(e.target);
    e.target.innerHTML = player;
    if (player === player1) player = player2;
    else player = player1;
}

board1.addEventListener('click', addPiece);
                //board.addEventListener('click', addPiece);
resetButton.addEventListener('click', resetBoard);

// table version
function resetBoard() {
    console.dir(board2);
    for (let i = 0; i < board2.rows.length; i++) {
      let row = board2.rows[i];
      for (let j = 0; j < row.cells.length; j++) {
        row.cells[j].innerHTML = '';
      }
    }
  }

*/

/* 
                const board = document.querySelector('.board');
                const resetButton = document.getElementById('reset');
                const player1 = 'X';
                const player2 = 'O';
                let player = player1;
 
                function addPiece(e) {
                    console.log(e.target);
                    e.target.innerHTML = player;
                    if (player === player1) player = player2;
                    else player = player;
                }
                function resetBoard() {
                    const board = document.querySelector('.board');
                    for (let i = 0; i < board.children.length; i++) {
                        board.children[i].innerText = '';
                    }
                    const children = Array.from(board.children);
                    const empty = children.filter(function (child) {
                        return child.innerText == 'X' || child.innerText == 'O';
                    });
                    console.log(empty);
                }
                
                board.addEventListener('click', addPiece);
                //board.addEventListener('click', addPiece);
                reset.addEventListener('click', resetBoard);

                */

               const board = document.querySelector('.board');
               //const divBoard = document.querySelector('.divBoard');
               const resetButton = document.getElementById('reset');
               const player1 = 'X';
               const player2 = 'O';
               let player = player1;
               function addPiece(e) {
                 console.log(e.target);
                 e.target.innerHTML = player;
                 if (player === player1) player = player2;
                 else player = player1;
               }
               function resetBoard() {
                console.dir(board);
                for (let i = 0; i < board.rows.length; i++) {
                  let row = board.rows[i];
                  for (let j = 0; j < row.cells.length; j++) {
                    row.cells[j].innerHTML = '';
                  }
                }
              }