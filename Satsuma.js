//$container is the div that contains the elements to be moved/scrolled/dragged
//tsuma is the div on which the changes will be applied
var Satsuma = function ($container, $tsuma) {
    var me = this;

    this.container = $container;
    this.tsuma = $tsuma;
    $container.on("mousewheel DOMMouseScroll", this.handleScroll.bind(this));

    //mousedown will only fire in the browser, mobile uses touchstart
    $container
        .on("mousedown", function (e) {
            console.log("MDOWN");
            me.dragging = true;
        })
        .on("mouseup", function (e) {
            console.log("MUP");
            me.dragging = false;
        });
    //$("body").on("mousemove", me.handleBrowserDrag.bind(me))

    this.transform = {};
    this.transform.scaleX = 1;
    this.transform.scaleY = 1;
    this.tmpScale = 1;
    this.dragging = false;
}

Satsuma.prototype.handleScroll = function (e) {
    console.log("Scrolling", e);
    e.delta = null;
    if (e.originalEvent) {
        if (e.originalEvent.wheelDelta) e.delta = e.originalEvent.wheelDelta / -40;
        if (e.originalEvent.deltaY) e.delta = e.originalEvent.deltaY;
        if (e.originalEvent.detail) e.delta = e.originalEvent.detail;
    }
    //console.log(e.delta);
    if (e.delta > 0) {
        //zoom out
        this.tmpScale /= 1.1;
    } else {
        //zoom in
        this.tmpScale *= 1.1;
    }
    console.log(this.tmpScale);
    this.transform.scaleX *= this.tmpScale;
    this.transform.scaleY *= this.tmpScale;

    this.applyChange();
}

Satsuma.prototype.handleBrowserDrag = function (e) {
    if (this.dragging) {
        console.log("I DRAG");
    }
}

Satsuma.prototype.applyChange = function () {
    console.log(this.transform);
    this.tsuma.css("transform", "scale(" + this.transform.scaleX + ", " + this.transform.scaleY + ")");

    this.tmpScale = 1;
}
