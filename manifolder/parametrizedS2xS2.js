function parametrizedS2xS2(radius) {
    this.radius = radius;
}

parametrizedS2xS2.point = function (theta1, theta2, theta3, theta4) {
    var result = {};
    result["a"] = this.radius * Math.sin(theta1) * Math.sin(theta2);
    result["b"] = this.radius * Math.sin(theta1) * Math.cos(theta2);
    result["c"] = this.radius * Math.cos(theta1);
    result["d"] = this.radius * Math.sin(theta3) * Math.sin(theta4);
    result["e"] = this.radius * Math.sin(theta3) * Math.cos(theta4);
    result["f"] = this.radius * Math.cos(theta3);
    return result;
}
