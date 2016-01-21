function fourDimensionalTensorRotation(abAngle, cdAngle) {
    this.abAngle = abAngle;
    this.cdAngle = cdAngle;

    this.T1a = Math.cos(abAngle) * Math.cos(cdAngle);
    this.T1b = Math.cos(abAngle) * Math.sin(cdAngle);
    this.T1c = Math.sin(abAngle) * Math.cos(cdAngle);
    this.T1d = Math.sin(abAngle) * Math.sin(cdAngle);

    this.T2a = Math.cos(abAngle) * -1 * Math.sin(cdAngle);
    this.T2b = Math.cos(abAngle) * Math.cos(cdAngle);
    this.T2c = Math.sin(abAngle) * -1 * Math.sin(cdAngle);
    this.T2d = Math.sin(abAngle) * Math.cos(cdAngle);

    this.T3a = -1 * Math.sin(abAngle) * Math.cos(cdAngle);
    this.T3b = -1 * Math.sin(abAngle) * Math.sin(cdAngle);
    this.T3c = Math.cos(abAngle) * Math.cos(cdAngle);
    this.T3d = Math.cos(abAngle) * Math.sin(cdAngle);

    this.T4a = Math.sin(abAngle) * Math.sin(cdAngle);
    this.T4b = -1 * Math.sin(abAngle) * Math.cos(cdAngle);
    this.T4c = Math.cos(abAngle) * -1 * Math.sin(cdAngle);
    this.T4d = Math.cos(abAngle) * Math.cos(cdAngle);
}

fourDimensionalTensorRotation.prototype.transform = function (point) {
    var newPoint = {};
    newPoint["a"] = this.T1a * point["a"] + this.T1b * point["b"] + this.T1c * point["c"] + this.T1d * point["d"];
    newPoint["b"] = this.T2a * point["a"] + this.T2b * point["b"] + this.T2c * point["c"] + this.T2d * point["d"];
    newPoint["c"] = this.T3a * point["a"] + this.T3b * point["b"] + this.T3c * point["c"] + this.T3d * point["d"];
    newPoint["d"] = this.T4a * point["a"] + this.T4b * point["b"] + this.T4c * point["c"] + this.T4d * point["d"];
    return newPoint;
}

fourDimensionalTensorRotation.prototype.transformManifold = function (s3points) {
    var result = new Array();
    for (var i = 0; i < s3points.points.length; i++)
        result.push(this.transform(s3points.points[i]));
    return result;
}

