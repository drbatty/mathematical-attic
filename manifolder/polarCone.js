function polarCone(radius, inversionConstant) {
    this.radius = radius;
    this.inversionConstant = inversionConstant;
}

polarCone.point = function (theta, y) {
    result = {};
    result["a"] = this.radius*y * Math.sin(theta);
    result["b"] = this.radius*y * Math.cos(theta);
    result["c"] = this.radius * y * this.coneMultiplier;
    return result;
} 
