function toroidalHypercone(radius, inversionConstant) {
    this.radius = radius;
    this.inversionConstant = inversionConstant;
}

toroidalHypercone.point = function (theta, phi, y) {
    result = {};
    result["a"] = this.radius * y * (Math.sin(theta) + 2) * Math.sin(phi);
    result["b"] = this.radius * y * (Math.cos(theta) + 2) * Math.sin(phi);
    result["c"] = this.radius * y * Math.cos(phi);
    result["d"] = this.radius * y * this.coneMultiplier;
    return result;
} 
