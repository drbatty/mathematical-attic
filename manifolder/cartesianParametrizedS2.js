function cartesianParametrizedS2(radius, inversionConstant) {
    this.radius = radius;
    this.inversionConstant = inversionConstant;
}

cartesianParametrizedS2.point = function (x, y) {
    result = {};
    result["a"] = this.radius * x
    result["b"] = this.radius * y
    result["c"] = this.inversionConstant * this.radius * Math.sqrt(1 - x * x - y * y);
    return result;
} 
