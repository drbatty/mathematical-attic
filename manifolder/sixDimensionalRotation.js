function sixDimensionalRotation(abAngle, cdAngle, efAngle) {
    this.abAngle = abAngle;
    this.cdAngle = cdAngle;
    this.efAngle = efAngle;

    this.T1a = Math.cos(abAngle);
    this.T1b = -1 * Math.sin(abAngle);
    this.T2a = Math.sin(abAngle);
    this.T2b = Math.cos(abAngle);
    this.T3c = Math.cos(cdAngle);
    this.T3d = -1 * Math.sin(cdAngle);
    this.T4c = Math.sin(cdAngle);
    this.T4d = Math.cos(cdAngle);
    this.T5e = Math.cos(efAngle);
    this.T5f = -1 * Math.sin(efAngle);
    this.T6e = Math.sin(efAngle);
    this.T6f = Math.cos(efAngle);
}

sixDimensionalRotation.prototype.transform = function (point) {
    var newPoint = {};
    newPoint["a"] = this.T1a * point["a"] + this.T1b * point["b"];
    newPoint["b"] = this.T2a * point["a"] + this.T2b * point["b"];
    newPoint["c"] = this.T3c * point["c"] + this.T3d * point["d"];
    newPoint["d"] = this.T4c * point["c"] + this.T4d * point["d"];
    newPoint["e"] = this.T5e * point["e"] + this.T5f * point["f"];
    newPoint["f"] = this.T6e * point["e"] + this.T6f * point["f"];
    return newPoint;
}

sixDimensionalRotation.prototype.transformManifold = function (manifoldPoints) {
    var result = new Array();
    for (var i = 0; i < manifoldPoints.points.length; i++)
        result.push(this.transform(manifoldPoints.points[i]));
    return result;
}

