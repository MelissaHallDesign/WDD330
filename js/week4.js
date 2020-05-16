/*
const board = document.querySelector('.board');
                const resetButton = document.getElementById('reset_button');
                const player1 = 'X';
                const player2 = 'O';
                let player = player1;
                function addPiece(e) {
                console.log(e.target);
                e.target.innerHTML = player;
                if (player === player1) player = player2;
                    else player = player;
                }
                board.addEventListener('click', addPiece);
                board.addEventListener('click', addPiece);
                reset.addEventListener('click', resetBoard);
*/
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