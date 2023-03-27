import Translator from './Translator';
import TranslatorUpdate from './TranslatorUpdate';

export class Satsuma {

    container;
    content;

    active = false;
    x = 0;
    y = 0;
    relX = 0;
    relY = 0;
    deltaX = 0;
    deltaY = 0;
    scale = 1;
    el = undefined;
    touchX = 0;
    touchY = 0;
    distance = 0;

    constructor(container, content) {
        this.container = container;
        this.content = content;
        container.style.touchAction = 'none';
        container.style.overflow = 'hidden';
        this.addListeners();
        this.translator = new Translator(container, content);
    }

    addListeners() {
        this.container.addEventListener('mousedown', (ev) => {
            this.active = true;
            this.drag(ev);
            ev.preventDefault();
            this.translator.start({
                clientX: ev.clientX,
                clientY: ev.clientY,
            });
        });

        this.container.addEventListener('touchstart', (ev) => {
            this.active = true;
            this.drag(ev);

            // keep initial pos of first touch for possible pinch calculation
            this.touchX = ev.touches[0].clientX;
            this.touchY = ev.touches[0].clientY;

            // if this is the start of the second touch, add second pos
            if (ev.touches.length > 1) {
                this.translator.reset();
                // calculate initial touch distance
                this.distance = Math.sqrt(
                    Math.pow(this.touchX - ev.touches[1].clientX, 2) +
                    Math.pow(this.touchY - ev.touches[1].clientY, 2));
            }


            this.translator.start({
                clientX: ev.touches[0].clientX,
                clientY: ev.touches[0].clientY,
            });
        });

        document.addEventListener('touchmove', (ev) => {
            if (!this.active) return;
            ev.preventDefault();

            // if there is a second touch, this is a pinch
            if (ev.touches.length > 1) {
                // console.log('Second touch');
                // calculate scale
                const dist = this.calcTouchDistance(ev.touches[0], ev.touches[1]);
                this.translator.update(new TranslatorUpdate({
                    scale: dist / this.distance,
                }));
                this.drag(ev);
                return;
            }

            // this is a single touch pan
            this.translator.update(new TranslatorUpdate({
                clientX: ev.touches[0].clientX,
                clientY: ev.touches[0].clientY,
            }));
            this.drag(ev);
        });

        document.addEventListener('mousemove', (ev) => {
            if (!this.active) return;
            this.translator.update(new TranslatorUpdate({
                clientX: ev.clientX,
                clientY: ev.clientY,
            }));
            this.drag(ev);
        });

        document.addEventListener('mouseup', (ev) => {
            this.active = false;
            this.translator.done();
        });

        document.addEventListener('touchend', (ev) => {
            this.active = false;
            this.translator.done();
            this.touchX = 0;
            this.touchY = 0;
            this.distance = 0;
        });

        this.container.addEventListener('wheel', (ev) => {
            this.translator.start(new TranslatorUpdate({
                clientX: ev.clientX,
                clientY: ev.clientY,
            }));
            this.translator.update(new TranslatorUpdate({
                // Normalize different Browser deltas
                scale: 1 - 1 / 20 * (ev.deltaY / Math.abs(ev.deltaY)),
                clientX: ev.clientX,
                clientY: ev.clientY,
            }));
            this.translator.done();
            this.drag(ev);
        });
    }

    drag(ev) {
        this.content.style.transform = this.translator.getTransform();
    }

    calcTouchDistance(touch, touch2) {
        return Math.sqrt(
            Math.pow(touch.clientX - touch2.clientY, 2) +
            Math.pow(touch.clientY - touch2.clientY, 2),
        );
    }

}
