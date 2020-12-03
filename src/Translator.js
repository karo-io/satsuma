const max = (a, b) => {
    return (a > b) ? b : a;
};

export default class Translator {

    x = 0;
    y = 0;
    scale = 1;
    tempX = 0;
    tempY = 0;
    tempScale = 1;
    MAX_SCALE = 4;
    startScreenX = 0;
    startScreenY = 0;

    start(start) {
        this.startScreenX = start.screenX;
        this.startScreenY = start.screenY;
    }

    update(update) {
        if (update.screenX !== 0 && update.screenY !== 0) {
            this.deltaX = update.screenX - this.startScreenX;
            this.deltaY = update.screenY - this.startScreenY;
            this.tempX = this.x + this.deltaX;
            this.tempY = this.y + this.deltaY;
        }

        if (update.scale !== 1) {
            const scale = max(this.scale * update.scale, this.MAX_SCALE);
            this.tempScale = scale;
        }
    }

    done() {
        this.x = this.tempX;
        this.y = this.tempY;
        this.scale = this.tempScale;
    }

    reset() {
        this.tempX = this.x;
        this.tempY = this.y;
        this.tempScale = this.scale;
    }

    getValues() {
        return {
            x: this.x,
            y: this.y,
            scale: this.scale,
        };
    }

    getTransform() {
        return `translate(${this.tempX}px, ${this.tempY}px) scale(${this.tempScale})`;
    }

}

