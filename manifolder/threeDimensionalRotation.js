function threeDimensionalRotation(angle) {
    this.angle = angle;
    this.T1a = Math.cos(angle);
    this.T1b = -1 * Math.sin(angle);
    this.T2a = Math.sin(angle);
    this.T2b = Math.cos(angle);
}

threeDimensionalRotation.prototype.transform = function (point) {
    var newPoint = {};
    newPoint["a"] = this.T1a * point["a"] + this.T1b * point["b"];
    newPoint["b"] = this.T2a * point["a"] + this.T2b * point["b"];
    newPoint["c"] = point["c"];
    return newPoint;
}

threeDimensionalRotation.prototype.transformManifold = function (manifold) {
    var result = new Array();
    for (var i = 0; i < manifold.points.length; i++)
        result.push(this.transform(manifold.points[i]));
    return result;
}

