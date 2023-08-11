const cvs = document.getElementById('tetris') as HTMLCanvasElement;
if (cvs === null) {
    throw new Error('tetris canvas not found');
}
const ctx = cvs.getContext('2d');


// Draw tetromino
const sq = 20;

function drawSquare(x: number, y: number, color: string) {
    ctx!.fillStyle = color;
    ctx!.fillRect(x * sq, y * sq, sq, sq);

    ctx!.strokeStyle = 'black';
    ctx!.strokeRect(x * sq, y * sq, sq, sq);
}

drawSquare(3, 4, 'red');

