export class FpsCounter {
    constructor() {
        this.fps = 0;
    }

    update(time) {
        this.fps = Math.trunc(1 / time.secondPassed);
    }

    draw(context) {
        context.font = "bold 14px Arial";
        context.fillStyle = '#00FF00';
        context.textAlign = 'right';

        context.fillText(`${this.fps}`, context.canvas.width - 2, context.canvas.height - 2);
    }
}