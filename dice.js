var canvas = document.getElementById('diceCanvas');
    var ctx = canvas.getContext('2d');
    function drawDice() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(40, 40, 320, 320);
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'pink';
        ctx.stroke();
        ctx.fillStyle = 'orange';
        function drawDot(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fill();
        }
        function drawDots(number) {
            switch (number) {
                case 1:
                    drawDot(canvas.width / 2, canvas.height / 2);
                    break;
                case 2:
                    drawDot(canvas.width / 3, canvas.height / 3);
                    drawDot(canvas.width * 2 / 3, canvas.height * 2 / 3);
                    break;
                case 3:
                    drawDot(canvas.width / 3, canvas.height / 3);
                    drawDot(canvas.width / 2, canvas.height / 2);
                    drawDot(canvas.width * 2 / 3, canvas.height * 2 / 3);
                    break;
                case 4:
                    drawDot(canvas.width / 3, canvas.height / 3);
                    drawDot(canvas.width * 2 / 3, canvas.height / 3);
                    drawDot(canvas.width / 3, canvas.height * 2 / 3);
                    drawDot(canvas.width * 2 / 3, canvas.height * 2 / 3);
                    break;
                case 5:
                    drawDot(canvas.width / 3, canvas.height / 3);
                    drawDot(canvas.width * 2 / 3, canvas.height / 3);
                    drawDot(canvas.width / 3, canvas.height * 2 / 3);
                    drawDot(canvas.width * 2 / 3, canvas.height * 2 / 3);
                    drawDot(canvas.width / 2, canvas.height / 2);
                    break;
                case 6:
                    drawDot(canvas.width / 3, canvas.height / 4);
                    drawDot(canvas.width * 2 / 3, canvas.height / 4);
                    drawDot(canvas.width / 3, canvas.height / 2);
                    drawDot(canvas.width * 2 / 3, canvas.height / 2);
                    drawDot(canvas.width / 3, canvas.height * 3 / 4);
                    drawDot(canvas.width * 2 / 3, canvas.height * 3 / 4);
                    break;
                default:
                    break;
            }
        }
        var number = Math.floor(Math.random() * 6) + 1;
        drawDots(number);
    }
    drawDice();
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        drawDice();
    }
});