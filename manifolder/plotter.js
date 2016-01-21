function plotter(pointSize, discreteLight, alpha) {
    this.pointSize = pointSize;
    this.cos30 = Math.cos(Math.PI / 6);
    this.sin30 = Math.sin(Math.PI / 6);
    this.sixDimIsomAngle = Math.PI / 6;
    this.fiveDimIsomAngle = Math.PI / 5;
    this.discreteLight = discreteLight;
    this.colourRadius = 128;
    this.colourMultiplier = 1;
    this.alpha = alpha;
    this.drawn = false;
    this.refresh = true;
    this.backgroundColour = "#000";
    this.foregroundColour = "#FFF";
    this.originX = 250;
    this.originY = 250;
}

plotter.prototype.plot = function (x, y, ctx) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.fillRect(x, y, this.pointSize, this.pointSize);
    ctx.stroke();
}

plotter.prototype.colourWheelColour = function (angle) {
    var H = (angle / 60);
    var X = 1 - (H % 2 - 1);
    var red = 0;
    var green = 0;
    var blue = 0;
    if (H < 1) {
        red = 255;
        green = X * 255;
    }
    else if (H < 2) {
        red = X * 255;
        green = 255;
    }
    else if (H < 3) {
        green = 255;
        blue = X * 255;
    }
    else if (H < 4) {
        green = X * 255;
        blue = 255;
    }
    else if (H < 5) {
        blue = 255;
        red = X * 255;
    }
    else {
        red = 255;
        blue = X * 255;
    }
    return "rgba(" + red.toString() + "," + green.toString() + "," + blue.toString() + "," + this.alpha.toString() + ")";
}

plotter.prototype.fourDColour = function (a, b, c, d) {
    if (this.discreteLight) {
        var red = "4";
        if (a > 0)
            red = "F";
        var green = "4";
        if (c > 0)
            green = "F";
        return "#" + red + green + "0";
    }
    else {
        var red = Math.floor(this.colourMultiplier * (a + this.colourRadius) * 255 / this.colourRadius);
        var green = Math.floor(this.colourMultiplier * (c + this.colourRadius) * 255 / this.colourRadius);
        var blue = Math.floor(this.colourMultiplier * (b + this.colourRadius) * 255 / this.colourRadius);
        return "rgba(" + red.toString() + "," + green.toString() + "," + blue.toString() + "," + this.alpha.toString() + ")";
    }
}

plotter.prototype.cls = function (ctx) {
    if (!this.drawn || this.refresh) {
        ctx.fillStyle = this.backgroundColour;
        ctx.fillRect(0, 0, 500, 500);
        this.drawn = true;
    }
}

plotter.prototype.draw3d = function (canvas, manifold) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        this.cls(ctx);
        ctx.fillStyle = this.foregroundColour;
        for (var i = 0; i < manifold.points.length; i++) {
            var point = manifold.points[i];
            this.plot3d(point["a"], point["b"], point["c"], ctx);
        }
    }
}

plotter.prototype.draw2d = function (canvas, manifold) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        this.cls(ctx);
        ctx.fillStyle = this.foregroundColour;
        for (var i = 0; i < manifold.points.length; i++) {
            var point = manifold.points[i];
            this.plot(point["a"] + this.originX, point["b"] + this.originY, ctx);
        }
    }
}

plotter.prototype.draw4d = function (canvas, manifold) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        this.cls(ctx); 
        this.plot4DManifold(manifold, ctx);
    }
}

plotter.prototype.draw4dDirectional = function (canvas, manifold) {
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        this.cls(ctx);
        this.plot4DDirectionalManifold(manifold, ctx);
    }
}

plotter.prototype.draw5d = function (canvas, manifold) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        this.cls(ctx);
        this.plot5DManifold(manifold, ctx);
    }
}

plotter.prototype.draw6d = function (canvas, manifold) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        this.cls(ctx);
        this.plot6DManifold(manifold, ctx);
    }
}

plotter.prototype.threeDColour = function (a, b, c) {
    if (this.discreteLight) {
        var red = "4";
        if (a > 0)
            red = "F";
        var green = "4";
        if (c > 0)
            green = "F";
        return "#" + red + green + "0";
    }
    else {
        var red = Math.floor(this.colourMultiplier * (a + this.colourRadius) * 255 / this.colourRadius);
        var green = Math.floor(this.colourMultiplier * (c + this.colourRadius) * 255 / this.colourRadius);
        var blue = Math.floor(this.colourMultiplier * (b + this.colourRadius) * 255 / this.colourRadius);
        return "rgba(" + red.toString() + "," + green.toString() + "," + blue.toString() + "," + this.alpha.toString() + ")";
    }
}

plotter.prototype.plot3d = function (a, b, c, ctx) {
    var proj = this.projection3d(a, b, c);
    var X = proj["X"];
    var Y = proj["Y"];
    ctx.fillStyle = this.threeDColour(a, b, c);
    this.plot(X, Y, ctx);
}

plotter.prototype.plot4dDirectional = function (a, b, c, d, ctx) {
    var proj = this.projection4d(a, b, c, d);
    var X = proj["X"];
    var Y = proj["Y"];
    var lostX = (a - Math.SQRT2 * b + c) / 150
    var lostY = (-a + c + Math.SQRT2 * d) / 150;
    ctx.fillStyle = this.fourDColour(a, b, c, d);
    for (var i = 0; i < 10; i++) {
        X += i * (i /15)*lostX;
        Y += i*(i/15)*lostY;
        this.plot(X, Y, ctx);
    }
}

/*plotter.prototype.plot4dDirectionalColour = function (a, b, c, d, ctx) {
    var proj = this.projection4d(a, b, c, d);
    var X = proj["X"];
    var Y = proj["Y"];
    var lostX = (a - Math.SQRT2 * b + c) / 150
    var lostY = (-a + c + Math.SQRT2 * d) / 150;
    ctx.fillStyle = this.colourWheelColour(angle);
    for (var i = 0; i < 10; i++) {
        X += i * (i / 15) * lostX;
        Y += i * (i / 15) * lostY;
        this.plot(X, Y, ctx);
    }
}*/

plotter.prototype.plot4d = function (a, b, c, d, ctx) {
    var proj = this.projection4d(a, b, c, d);
    var X = proj["X"];
    var Y = proj["Y"];
    ctx.fillStyle = this.fourDColour(a, b, c, d);
    this.plot(X, Y, ctx);
}

plotter.prototype.plot5d = function (a, b, c, d, e, ctx) {
    var proj = this.projection5d(a, b, c, d, e);
    var X = proj["X"];
    var Y = proj["Y"];
    if (this.discreteLight) {
        var red = "4";
        if (a > 0)
            red = "F";
        var green = "4";
        if (c > 0)
            green = "F";
        var blue = "4";
        if (e > 0)
            blue = "F";
        ctx.fillStyle = "#" + red + green + blue;
    }
    else {
        var red = Math.floor(this.colourMultiplier * (a + this.colourRadius) * 255 / this.colourRadius);
        var green = Math.floor(this.colourMultiplier * (c + this.colourRadius) * 255 / this.colourRadius);
        var blue = Math.floor(this.colourMultiplier * (e + this.colourRadius) * 255 / this.colourRadius);
        ctx.fillStyle = "rgba(" + red.toString() + "," + green.toString() + "," + blue.toString() + "," + this.alpha.toString() + ")";
    }

    this.plot(X, Y, ctx);
}

plotter.prototype.plot6d = function (a, b, c, d, e, f, ctx) {
    var X = this.originX + b * Math.sin(this.sixDimIsomAngle * 1) + c * Math.sin(this.sixDimIsomAngle * 2) + d * Math.sin(this.sixDimIsomAngle * 3) + e * Math.sin(this.sixDimIsomAngle * 4) + f * Math.sin(this.sixDimIsomAngle * 5);
    var Y = this.originY + a * Math.cos(this.sixDimIsomAngle * 0) + b * Math.cos(this.sixDimIsomAngle * 1) + c * Math.cos(this.sixDimIsomAngle * 2) + d * Math.cos(this.sixDimIsomAngle * 3) + e * Math.cos(this.sixDimIsomAngle * 4) + f * Math.cos(this.sixDimIsomAngle * 5);
    if (this.discreteLight) {
        var red = "4";
        if (a > 0)
            red = "F";
        var green = "4";
        if (c > 0)
            green = "F";
        var blue = "4";
        if (e > 0)
            blue = "F";
        ctx.fillStyle = "#" + red + green + blue;
    }
    else {
        var red = Math.floor(this.colourMultiplier * (a + this.colourRadius) * 255 / this.colourRadius);
        var green = Math.floor(this.colourMultiplier * (c + this.colourRadius) * 255 / this.colourRadius);
        var blue = Math.floor(this.colourMultiplier * (e + this.colourRadius) * 255 / this.colourRadius);
        ctx.fillStyle = "rgba(" + red.toString() + "," + green.toString() + "," + blue.toString() + "," + this.alpha.toString() + ")";
    }
    this.plot(X, Y, ctx);
}

plotter.prototype.projection3d = function (a, b, c) {
    var result = {};
    result["X"] = this.originX + b * this.cos30 + c * this.cos30;
    result["Y"] = this.originY - a - b * this.sin30 + c * this.sin30;
    return result;
}

plotter.prototype.tetrahedralProjection = function (a, b, c, d) {
    var result = {};
    result["X"] = -a + b - c + d;
    result["Y"] = -a - b + c + d;
    result["Z"] = -a + b + c - d;
    return result;
}

plotter.prototype.projection4d = function (a, b, c, d) {
    var result = {};
    result["X"] = this.originX + b * 1 / Math.SQRT2 + c + d * 1 / Math.SQRT2;
    result["Y"] = this.originY - a - b * 1 / Math.SQRT2 + d * 1 / Math.SQRT2;
    return result;
}

plotter.prototype.projection5d = function (a, b, c, d, e) {
    var result = {};
    result["X"] = 250 + b * Math.sin(this.fiveDimIsomAngle * 1) + c * Math.sin(this.fiveDimIsomAngle * 2) + d * Math.sin(this.fiveDimIsomAngle * 3) + e * Math.sin(this.fiveDimIsomAngle * 4);
    result["Y"] = 250 + a * Math.cos(this.fiveDimIsomAngle * 0) + b * Math.cos(this.fiveDimIsomAngle * 1) + c * Math.cos(this.fiveDimIsomAngle * 2) + d * Math.cos(this.fiveDimIsomAngle * 3) + e * Math.cos(this.fiveDimIsomAngle * 4);
    return result;
}  

plotter.prototype.plot4DManifold = function (thisPointsManifold, ctx) {
    for (var i = 0; i < thisPointsManifold.points.length; i++) {
        var point = thisPointsManifold.points[i];
        this.plot4d(point["a"], point["b"], point["c"], point["d"], ctx);
    }
}

plotter.prototype.plot4DDirectionalManifold = function (thisPointsManifold, ctx) {
    for (var i = 0; i < thisPointsManifold.points.length; i++) {
        var point = thisPointsManifold.points[i];
        this.plot4dDirectional(point["a"], point["b"], point["c"], point["d"], ctx);
    }
}

plotter.prototype.tetrahedrallyPlot4DManifold = function (thisPointsManifold, ctx) {
    for (var i = 0; i < thisPointsManifold.points.length; i++) {
        var point = thisPointsManifold.points[i];
        var proj = this.tetrahedralProjection(point["a"], point["b"], point["c"], point["d"]);
        this.plot3d(proj["X"], proj["Y"], proj["Z"], ctx);
    }
}

plotter.prototype.plot5DManifold = function (thisPointsManifold, ctx) {
    for (var i = 0; i < thisPointsManifold.points.length; i++) {
        var point = thisPointsManifold.points[i];
        this.plot5d(point["a"], point["b"], point["c"], point["d"], point["e"], ctx);
    }
}

plotter.prototype.plot6DManifold = function (thisPointsManifold, ctx) {
    for (var i = 0; i < thisPointsManifold.points.length; i++) {
        var point = thisPointsManifold.points[i];
        this.plot6d(point["a"], point["b"], point["c"], point["d"], point["e"], point["f"], ctx);
    }
}