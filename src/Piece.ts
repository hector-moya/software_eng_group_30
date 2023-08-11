// Piece object to be used in the game

export class Piece {
  public x: number;
  public y: number;
  public color: string;
  public shape: number[][];
  public ctx: CanvasRenderingContext2D;

  J = [
    [
      [7, 0, 0],
      [7, 7, 7],
      [0, 0, 0],
    ],
    [
      [0, 7, 7],
      [0, 7, 0],
      [0, 7, 0],
    ],
    [
      [0, 0, 0],
      [7, 7, 7],
      [0, 0, 7],
    ],
    [
      [0, 7, 0],
      [0, 7, 0],
      [7, 7, 0],
    ],
  ];

  public piece = this.J[3];
  public pieceColor = "red";

  constructor(
    X: number,
    y: number,
    color: string,
    shape: number[][],
    ctx: CanvasRenderingContext2D
  ) {
    this.x = X;
    this.y = y;
    this.color = color;
    this.shape = shape;
    this.ctx = ctx;
  }
  // The piece object will have a type, color, and shape

  // Draw tetromino

  // Z tetromino

  //   Z = [
  //     [
  //       [1, 1, 0],
  //       [0, 1, 1],
  //       [0, 0, 0],
  //     ],
  //     [
  //       [0, 0, 1],
  //       [0, 1, 1],
  //       [0, 1, 0],
  //     ],
  //     [
  //       [0, 0, 0],
  //       [1, 1, 0],
  //       [0, 1, 1],
  //     ],
  //     [
  //       [0, 1, 0],
  //       [1, 1, 0],
  //       [1, 0, 0],
  //     ],
  //   ];

  //   // S tetromino

  //   S = [
  //     [
  //       [0, 2, 2],
  //       [2, 2, 0],
  //       [0, 0, 0],
  //     ],
  //     [
  //       [0, 2, 0],
  //       [0, 2, 2],
  //       [0, 0, 2],
  //     ],
  //     [
  //       [0, 0, 0],
  //       [0, 2, 2],
  //       [2, 2, 0],
  //     ],
  //     [
  //       [2, 0, 0],
  //       [2, 2, 0],
  //       [0, 2, 0],
  //     ],
  //   ];

  //   // T tetromino

  //   T = [
  //     [
  //       [0, 3, 0],
  //       [3, 3, 3],
  //       [0, 0, 0],
  //     ],
  //     [
  //       [0, 3, 0],
  //       [0, 3, 3],
  //       [0, 3, 0],
  //     ],
  //     [
  //       [0, 0, 0],
  //       [3, 3, 3],
  //       [0, 3, 0],
  //     ],
  //     [
  //       [0, 3, 0],
  //       [3, 3, 0],
  //       [0, 3, 0],
  //     ],
  //   ];

  //   // O tetromino

  //   O = [
  //     [
  //       [4, 4],
  //       [4, 4],
  //     ],
  //     [
  //       [4, 4],
  //       [4, 4],
  //     ],
  //     [
  //       [4, 4],
  //       [4, 4],
  //     ],
  //     [
  //       [4, 4],
  //       [4, 4],
  //     ],
  //   ];

  //   // L tetromino

  //   L = [
  //     [
  //       [0, 0, 5],
  //       [5, 5, 5],
  //       [0, 0, 0],
  //     ],
  //     [
  //       [0, 5, 0],
  //       [0, 5, 0],
  //       [0, 5, 5],
  //     ],
  //     [
  //       [0, 0, 0],
  //       [5, 5, 5],
  //       [5, 0, 0],
  //     ],
  //     [
  //       [5, 5, 0],
  //       [0, 5, 0],
  //       [0, 5, 0],
  //     ],
  //   ];

  //   // I tetromino

  //   I = [
  //     [
  //       [0, 0, 0, 0],
  //       [6, 6, 6, 6],
  //       [0, 0, 0, 0],
  //       [0, 0, 0, 0],
  //     ],
  //     [
  //       [0, 0, 6, 0],
  //       [0, 0, 6, 0],
  //       [0, 0, 6, 0],
  //       [0, 0, 6, 0],
  //     ],
  //     [
  //       [0, 0, 0, 0],
  //       [0, 0, 0, 0],
  //       [6, 6, 6, 6],
  //       [0, 0, 0, 0],
  //     ],
  //     [
  //       [0, 6, 0, 0],
  //       [0, 6, 0, 0],
  //       [0, 6, 0, 0],
  //       [0, 6, 0, 0],
  //     ],
  //   ];

  // J tetromino

  // The tetrominoes
//   TETROMINOES = [
//     [Z, "red"],
//     [S, "green"],
//     [T, "yellow"],
//     [O, "blue"],
//     [L, "purple"],
//     [I, "cyan"],
//     [J, "orange"],
//   ];

  // Draw piece method

  sq = 20;

  public drawPiece() {
    for (let r = 0; r < this.piece.length; r++) {
      for (let c = 0; c < this.piece.length; c++) {
        if (this.piece[r][c]) {
          this.drawSquare(c, r, this.pieceColor);
        }
      }
    }
  }

  public drawSquare(x: number, y: number, color: string) {
    this.ctx!.fillStyle = color;
    this.ctx!.fillRect(x * this.sq, y * this.sq, this.sq, this.sq);

    this.ctx!.strokeStyle = "black";
    this.ctx!.strokeRect(x * this.sq, y * this.sq, this.sq, this.sq);
  }
}
