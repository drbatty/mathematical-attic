function polarHyperparaboloid(radius, inversionConstant) {
    this.radius = radius;
    this.inversionConstant = inversionConstant;
}

polarHyperparaboloid.point = function (theta, phi, y) {
    result = {};
    result["a"] = this.radius * y * Math.sin(theta) * Math.sin(phi);
    result["b"] = this.radius * y * Math.cos(theta) * Math.sin(phi);
    result["c"] = this.radius * y * Math.cos(phi);
    result["d"] = this.radius * y * y * this.coneMultiplier;
    return result;
} 
