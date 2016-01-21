function polarCylinder(radius, inversionConstant) {
    this.radius = radius;
    this.inversionConstant = inversionConstant;
}

polarCylinder.point = function (theta, y) {
    result = {};
    result["a"] = this.radius * Math.sin(theta);
    result["b"] = this.radius * Math.cos(theta);
    result["c"] = this.radius * y * this.coneMultiplier;
    return result;
} 
