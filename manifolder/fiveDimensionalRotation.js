function fiveDimensionalRotation(abAngle, cdAngle, interleave) {
    this.abAngle = abAngle;
    this.cdAngle = cdAngle;
    this.interleave = interleave;
    if (!this.interleave) {
        this.T1a = Math.cos(abAngle);
        this.T1b = -1 * Math.sin(abAngle);
        this.T2a = Math.sin(abAngle);
        this.T2b = Math.cos(abAngle);
        this.T3c = Math.cos(cdAngle);
        this.T3d = -1 * Math.sin(cdAngle);
        this.T4c = Math.sin(cdAngle);
        this.T4d = Math.cos(cdAngle);
    }
    else {
        this.T1a = Math.cos(abAngle);
        this.T1c = -1 * Math.sin(abAngle);
        this.T2b = Math.cos(cdAngle);
        this.T2d = -1 * Math.sin(cdAngle);
        this.T3a = Math.sin(abAngle);
        this.T3c = Math.cos(abAngle);
        this.T4b = Math.sin(cdAngle);
        this.T4d = Math.cos(cdAngle);

    }
}

fiveDimensionalRotation.prototype.transform = function (point) {
    var newPoint = {};
    if (!this.interleave) {
        newPoint["a"] = this.T1a * point["a"] + this.T1b * point["b"];
        newPoint["b"] = this.T2a * point["a"] + this.T2b * point["b"];
        newPoint["c"] = this.T3c * point["c"] + this.T3d * point["d"];
        newPoint["d"] = this.T4c * point["c"] + this.T4d * point["d"];
        newPoint["e"] = point["e"];
    }
    else {
        newPoint["b"] = Math.cos(abAngle) * point["b"] - Math.sin(abAngle) * point["c"];
        newPoint["c"] = Math.sin(abAngle) * point["b"] + Math.cos(abAngle) * point["c"];
        newPoint["d"] = Math.cos(cdAngle) * point["d"] - Math.sin(cdAngle) * point["e"];
        newPoint["e"] = Math.sin(cdAngle) * point["d"] + Math.cos(cdAngle) * point["e"];
        newPoint["a"] = point["a"];
    }
    return newPoint;
}

fiveDimensionalRotation.prototype.transformManifold = function (s3points) {
    var result = new Array();
    for (var i = 0; i < s3points.points.length; i++)
        result.push(this.transform(s3points.points[i]));
    return result;
}

