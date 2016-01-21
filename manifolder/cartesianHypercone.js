function cartesianHypercone(radius, inversionConstant) {
    this.radius = radius;
    this.inversionConstant = inversionConstant;
}

cartesianHypercone.point = function (x, y, z) {
    result = {};
    result["a"] = this.radius * x;
    result["b"] = this.radius * y;
    result["c"] = this.radius * z;
    result["d"] = this.radius * Math.sqrt(x * x + y * y + z * z);
    return result;
} 
