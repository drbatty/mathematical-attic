function polarHypercylinder(radius, inversionConstant) {
    this.radius = radius;
    this.inversionConstant = inversionConstant;
}

polarHypercylinder.point = function (theta, phi, y) {
    result = {};
    result["a"] = this.radius * Math.sin(theta) * Math.sin(phi);
    result["b"] = this.radius * Math.cos(theta) * Math.sin(phi);
    result["c"] = this.radius * Math.cos(phi);
    result["d"] = this.radius * y  * this.coneMultiplier;
    return result;
} 
