export default class TranslatorUpdate {

    scale = 1;
    clientX = 0;
    clientY = 0;

    constructor(params) {
        const defaults = {
            scale: 1,
            clientX: 0,
            clientY: 0,
        };

        params = Object.assign({}, defaults, params);
        this.scale = params.scale;
        this.clientX = params.clientX;
        this.clientY = params.clientY;

        Object.keys(params).forEach((key) => {
            if (!(key in defaults)) {
                console.warn('Unknown key ' + key);
            }
        });
    }

}

