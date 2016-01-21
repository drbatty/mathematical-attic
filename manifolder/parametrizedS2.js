function parametrizedS2(radius) {
    this.radius = radius;
}

parametrizedS2.point = function (theta, phi) {
    result = {};
    var point = {};
    result["a"] = this.radius * Math.sin(theta) * Math.sin(phi);
    result["b"] = this.radius * Math.sin(theta) * Math.cos(phi);
    result["c"] = this.radius * Math.cos(theta);
    return result;
} 
