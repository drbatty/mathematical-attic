function cartesianCone(radius, inversionConstant) {
    this.radius = radius;
    this.inversionConstant = inversionConstant;
}

cartesianCone.point = function (x, y) {
    result = {};
    result["a"] = this.radius * x
    result["b"] = this.radius * y;
    result["c"] = this.radius * Math.sqrt(x * x + y * y);
    return result;
} 
