class Roulette {
    constructor(canvas) {
        // roulette feature
        this.categoryNumber = 5; // validate maximum size later
        this.categoryColors = ["#F00501", "#F29B11", "#C5DB1A", "#11F27A", "#1066E8"];
        this.centerPosition = [canvas.width / 2, canvas.height / 2];
        this.addRadian = 0;

        // motion settings
        this.isInMotion = true;
        this.RUN_SPEED = 1 / 100;
        this.FRICTION = 1 / 100000;
        this.endSpeed = 1 / 100;
    }

    draw(ctx) {
        for (let i = 0; i < this.categoryNumber; i++) {
            ctx.beginPath();
            ctx.moveTo(this.centerPosition[0], this.centerPosition[1]);
            ctx.arc(
                this.centerPosition[0], 
                this.centerPosition[1], 
                200, 
                2 * Math.PI * ((((i / this.categoryNumber) + this.addRadian)) % 1), 
                2 * Math.PI * ((((i + 1) / this.categoryNumber) + this.addRadian) % 1)
            );
            ctx.closePath();
            ctx.fillStyle = this.categoryColors[i];
            ctx.fill();
        }
    }

    run(ctx) {
        this.addRadian += this.RUN_SPEED;
        this.draw(ctx);
    }

    stop(ctx) {
        this.endSpeed -= this.FRICTION;
        this.addRadian += this.endSpeed;
        if (this.endSpeed < 0) {
            this.endSpeed = 0;
        }
        this.draw(ctx);
    }
}