export default class TranslatorUpdate {

    scale = 1;
    screenX = 0;
    screenY = 0;

    constructor(params) {
        const defaults = {
            scale: 1,
            screenX: 0,
            screenY: 0,
        };

        params = Object.assign({}, defaults, params);
        this.scale = params.scale;
        this.screenX = params.screenX;
        this.screenY = params.screenY;

        Object.keys(params).forEach((key) => {
            if (!(key in defaults)) {
                console.warn('Unknown key ' + key);
            }
        });
    }

}

