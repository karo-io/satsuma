const min = (a, b) => {
    return (a < b) ? b : a;
};
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
    MIN_SCALE = .1;
    MAX_SCALE = 8;
    startScreenX = 0;
    startScreenY = 0;
    container = null;
    content = null;

    constructor(container, content) {
        this.container = container;
        this.content = content;
    }

    start(start) {
        this.startScreenX = start.clientX;
        this.startScreenY = start.clientY;
    }

    update(update) {
        console.log(this);
        console.log(update);
        if (update.clientX !== 0 && update.clientY !== 0) {
            this.deltaX = update.clientX - this.startScreenX;
            this.deltaY = update.clientY - this.startScreenY;
            this.tempX = this.x + this.deltaX;
            this.tempY = this.y + this.deltaY;
        }

        if (update.scale !== 1) {
            const scale = max(this.scale * update.scale, this.MAX_SCALE);
            this.tempScale = min(scale, this.MIN_SCALE);
            const containerRect = this.container.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;
            const scalechange = update.scale - this.tempScale;
            const containerZoomPointX = update.clientX - containerRect.left;
            const containerZoomPointY = update.clientY - containerRect.top;
            console.log('Scalechange', scalechange);
            console.log('containerzoom', containerZoomPointX, containerZoomPointY);

            // Calculate "off center" of zoom point
            console.log('CONZOOM', containerZoomPointX - containerWidth / 2, containerZoomPointY - containerHeight / 2);
            this.tempX = this.x + (containerZoomPointX - containerWidth / 2) * scalechange;
            this.tempY = this.y + (containerZoomPointY - containerHeight / 2) * scalechange;
            // this.tempX = this.x - (containerZoomPointX * scalechange);
            // this.tempY = this.y - (containerZoomPointY * scalechange);
            // console.log('X', window.clientX,
            // this.container.getBoundingClientRect().left,
            // this.content.getBoundingClientRect().left,
            // update.clientX,
            // this.x,
            // -(window.clientX - update.clientX + this.container.getBoundingClientRect().left),
            // );
        }
        console.log(this);
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
        const trans = `translate(${this.tempX}px, ${this.tempY}px) scale(${this.tempScale})`;
        console.log(trans);
        return trans;
    }

}

