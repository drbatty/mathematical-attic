function hopfParametrizedS4(radius) {
    this.radius = radius;
}

hopfParametrizedS4.point = function (theta1, theta2, theta3, theta4) {
    var result = {};
    result["a"] = this.radius * Math.sin(theta2) * Math.sin(theta3) * Math.sin(theta4);
    result["b"] = this.radius * Math.sin(theta2) * Math.cos(theta3) * Math.sin(theta4);
    result["c"] = this.radius * Math.cos(theta3) * Math.sin(theta4);
    result["d"] = this.radius * Math.sin(theta1) * Math.cos(theta4);
    result["e"] = this.radius * Math.cos(theta1) * Math.cos(theta4);
    return result;
}
