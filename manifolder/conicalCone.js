function conicalCone(radius, inversionConstant) {
    this.radius = radius;
    this.inversionConstant = inversionConstant;
}

conicalCone.point = function (theta, y, z) {
    result = {};
    result["a"] = this.radius * z * y * Math.sin(theta);
    result["b"] = this.radius * z * y * Math.cos(theta);
    result["c"] = this.radius * z * y * this.coneMultiplier2;
    result["d"] = this.radius * z * this.coneMultiplier;
    return result;
} 
