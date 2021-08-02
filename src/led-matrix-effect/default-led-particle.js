export default class DefaultLedParticle {

    #config;
    #x;
    #y;
    #originalX;
    #originalY;
    #targetX;
    #targetY;
    #maxDistance;
    #color;
    #minForce;

    constructor(config, props) {
        this.#config = config;
        this.#x = props.x;
        this.#y = props.y;
        this.#originalX = props.x;
        this.#originalY = props.y;
        this.setTargetToOrigin();
        this.#color = props.color;
        this.#minForce = ((Math.random() * this.#config.speed) + this.#config.speed / 2) * 0.001;
    }

    setTarget(x, y) {
        this.#targetX = x;
        this.#targetY = y;
    }

    setTargetToOrigin() {
        this.#targetX = this.#originalX;
        this.#targetY = this.#originalY;
    }

    setPos(x, y) {
        this.#x = x;
        this.#y = y;
    }
    
    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    getOriginalX() {
        return this.#originalX;
    }

    getOriginalY() {
        return this.#originalY;
    }

    getTargetX() {
        return this.#targetX;
    }

    getTargetY() {
        return this.#targetY;
    }

    update(deltaTime, speed) {
        const dx = this.#targetX - this.#x;
        const dy = this.#targetY - this.#y;
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1 ) {
            this.#x += speed * dx * deltaTime * this.#minForce;
            this.#y += speed * dy * deltaTime * this.#minForce;
            return false;
        }
        else {
            this.#x = this.#targetX;
            this.#y = this.#targetY;
            return true;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.#x, this.#y, 2, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = this.#color;
        ctx.fill();
    }

}