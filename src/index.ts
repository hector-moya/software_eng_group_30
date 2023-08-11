// import { Piece } from './piece';
const cvs = document.getElementById('tetris') as HTMLCanvasElement;
if (cvs === null) {
    throw new Error('tetris canvas not found');
}
const ctx = cvs.getContext('2d');

// Draw board

const ROW = 20;
const COL = 10;
const VACANT = 'white';

let board: string[][] = [];

// Method to draw a board

function drawBoard() {
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            // drawSquare(c, r, VACANT);
        }
    }
}


// // Draw tetromino
// const sq = 20;

// // Z tetromino

// const Z = [
//     [
//         [1, 1, 0],
//         [0, 1, 1],
//         [0, 0, 0],
//     ],
//     [
//         [0, 0, 1],
//         [0, 1, 1],
//         [0, 1, 0],
//     ],
//     [
//         [0, 0, 0],
//         [1, 1, 0],
//         [0, 1, 1],
//     ],
//     [
//         [0, 1, 0],
//         [1, 1, 0],
//         [1, 0, 0],
//     ],
// ];

// // S tetromino

// const S = [
//     [
//         [0, 2, 2],
//         [2, 2, 0],
//         [0, 0, 0],
//     ],
//     [
//         [0, 2, 0],
//         [0, 2, 2],
//         [0, 0, 2],
//     ],
//     [
//         [0, 0, 0],
//         [0, 2, 2],
//         [2, 2, 0],
//     ],
//     [
//         [2, 0, 0],
//         [2, 2, 0],
//         [0, 2, 0],
//     ],
// ];

// // T tetromino

// const T = [
//     [
//         [0, 3, 0],
//         [3, 3, 3],
//         [0, 0, 0],
//     ],
//     [
//         [0, 3, 0],
//         [0, 3, 3],
//         [0, 3, 0],
//     ],
//     [
//         [0, 0, 0],
//         [3, 3, 3],
//         [0, 3, 0],
//     ],
//     [
//         [0, 3, 0],
//         [3, 3, 0],
//         [0, 3, 0],
//     ],
// ];

// // O tetromino

// const O = [
//     [
//         [4, 4],
//         [4, 4],
//     ],
//     [
//         [4, 4],
//         [4, 4],
//     ],
//     [
//         [4, 4],
//         [4, 4],
//     ],
//     [
//         [4, 4],
//         [4, 4],
//     ],
// ];

// // L tetromino

// const L = [
//     [
//         [0, 0, 5],
//         [5, 5, 5],
//         [0, 0, 0],
//     ],
//     [
//         [0, 5, 0],
//         [0, 5, 0],
//         [0, 5, 5],
//     ],
//     [
//         [0, 0, 0],
//         [5, 5, 5],
//         [5, 0, 0],
//     ],
//     [
//         [5, 5, 0],
//         [0, 5, 0],
//         [0, 5, 0],
//     ],
// ];

// // I tetromino

// const I = [
//     [
//         [0, 0, 0, 0],
//         [6, 6, 6, 6],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//     ],
//     [
//         [0, 0, 6, 0],
//         [0, 0, 6, 0],
//         [0, 0, 6, 0],
//         [0, 0, 6, 0],
//     ],
//     [
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [6, 6, 6, 6],
//         [0, 0, 0, 0],
//     ],
//     [
//         [0, 6, 0, 0],
//         [0, 6, 0, 0],
//         [0, 6, 0, 0],
//         [0, 6, 0, 0],
//     ],
// ];

// // J tetromino

// const J = [
//     [
//         [7, 0, 0],
//         [7, 7, 7],
//         [0, 0, 0],
//     ],
//     [
//         [0, 7, 7],
//         [0, 7, 0],
//         [0, 7, 0],
//     ],
//     [
//         [0, 0, 0],
//         [7, 7, 7],
//         [0, 0, 7],
//     ],
//     [
//         [0, 7, 0],
//         [0, 7, 0],
//         [7, 7, 0],
//     ],
// ];



// // The tetrominoes
// const TETROMINOES = [
//     [Z, 'red'],
//     [S, 'green'],
//     [T, 'yellow'],
//     [O, 'blue'],
//     [L, 'purple'],
//     [I, 'cyan'],
//     [J, 'orange'],
// ];

// let piece = J[3];
// let pieceColor = 'red';

// // Draw piece method

// function drawPiece() {
//     for (let r = 0; r < piece.length; r++) {
//         for (let c = 0; c < piece.length; c++) {
//             if (piece[r][c]) {
//                 drawSquare(c, r, pieceColor);
//             }
//         }
//     }
// }


// function drawSquare(x: number, y: number, color: string) {
//     ctx!.fillStyle = color;
//     ctx!.fillRect(x * sq, y * sq, sq, sq);

//     ctx!.strokeStyle = 'black';
//     ctx!.strokeRect(x * sq, y * sq, sq, sq);
// }

drawBoard();
// drawPiece();

