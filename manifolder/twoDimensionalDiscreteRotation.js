function twoDimensionalDiscreteRotation(angle) {
    this.fakeCos = 1 - angle * angle / 2; // 2nd MacLaurin approximations to sin and cos
    this.fakeSin = angle * (1 - angle * angle / 6); 
    this.T1a = this.fakeCos;
    this.T1b = -1 * this.fakeSin;
    this.T2a = this.fakeSin;
    this.T2b = this.fakeCos;
}

twoDimensionalDiscreteRotation.prototype.transform = function (point) {
    var newPoint = {};
    newPoint["a"] = this.T1a * point["a"] + this.T1b * point["b"];
    newPoint["b"] = this.T2a * point["a"] + this.T2b * point["b"];
    return newPoint;
}

twoDimensionalDiscreteRotation.prototype.transformManifold = function (manifold) {
    var result = new Array();
    for (var i = 0; i < manifold.points.length; i++)
        result.push(this.transform(manifold.points[i]));
    return result;
}

