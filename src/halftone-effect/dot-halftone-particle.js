export default class DotHalftoneParticle {
    
    #config;
    #color;
    #x;
    #y;
    #originalX;
    #originalY;
    #toX;
    #toY;
    #fromX;
    #fromY;
    #dx;
    #dy;
    #transitionTime;
    #radio;
    static #END_ANGLE = Math.PI*2;

    constructor(config, props) {
        this.#config = config;
        this.#color = props.color;
        this.#originalX = props.x;
        this.#originalY = props.y;
        this.setFromOrigin();
        this.setToOrigin();
        this.#radio = props.size / 2;
    }

    #calculateDistance() {
        this.#dx = this.#toX - this.#fromX;
        this.#dy = this.#toY - this.#fromY;
    }

    setTransitionTime(transitionTime) {
        this.#transitionTime = transitionTime;
    }

    setFrom(x, y) {
        this.#fromX = x;
        this.#fromY = y;
        this.#calculateDistance();
    }

    setTo(x, y) {
        this.#toX = x;
        this.#toY = y;
        this.#calculateDistance();
    }

    setFromOrigin() {
        this.#fromX = this.#originalX;
        this.#fromY = this.#originalY;
        this.#calculateDistance();
    }

    setToOrigin() {
        this.#toX = this.#originalX;
        this.#toY = this.#originalY;
        this.#calculateDistance();
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

    update(accumulatedTime) {
        const time = accumulatedTime / this.#transitionTime;
        if (accumulatedTime <= this.#transitionTime) {
            this.#x = this.#dx * time + this.#fromX;
            this.#y = this.#dy * time + this.#fromY;
        }
        else {
            this.#x = this.#toX;
            this.#y = this.#toY;
        }
    }

    draw(ctx) {
        if (this.#x < this.#config.maxWidth && this.#y < this.#config.maxHeight) {
            ctx.beginPath();
            ctx.arc(this.#x, this.#y, this.getRadio(this.#x, this.#y), 0, DotHalftoneParticle.#END_ANGLE);
            ctx.closePath();
            ctx.fillStyle = this.#color;
            ctx.fill();
        }
    }

    getRadio(x, y) {
        const posX = Math.floor((x - (this.#config.dotSize / 2)) / this.#config.dotSize);
        const posY = Math.floor((y - (this.#config.dotSize / 2)) / this.#config.dotSize);
        console.log(posX + ', ' + posY);
        if (posX < this.#config.mappedImage.length && posY < this.#config.mappedImage[0].length) {
            const brightness = this.#config.mappedImage[posX][posY].brightness;
            return this.#config.dotSize * (2.55 - brightness) / 2;
        }
        else {
            return 1;
        }
    }
}