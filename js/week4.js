 const ticTacToe = document.querySelector('.ticTacToe');
 const resetBtn = document.getElementById('resetBtn');
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
     console.dir(ticTacToe);
     for (let i = 0; i < ticTacToe.rows.length; i++) {
         let row = ticTacToe.rows[i];
         for (let j = 0; j < row.cells.length; j++) {
             row.cells[j].innerHTML = '';
         }
     }
 }
 ticTacToe.addEventListener('click', addPiece);
 resetBtn.addEventListener('click', resetBoard);