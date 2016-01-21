function parametrizedS5(radius) {
    this.radius = radius;
}

parametrizedS5.point = function (theta1, theta2, theta3, theta4, theta5) {
    var result = {};
    result["a"] = this.radius * Math.sin(theta1) * Math.sin(theta2) * Math.sin(theta3) * Math.sin(theta4) * Math.sin(theta5);
    result["b"] = this.radius * Math.sin(theta1) * Math.sin(theta2) * Math.sin(theta3) * Math.sin(theta4) * Math.cos(theta5);
    result["c"] = this.radius * Math.sin(theta1) * Math.sin(theta2) * Math.sin(theta3) * Math.cos(theta4);
    result["d"] = this.radius * Math.sin(theta1) * Math.sin(theta2) * Math.cos(theta3);
    result["e"] = this.radius * Math.sin(theta1) * Math.cos(theta2);
    result["f"] = this.radius * Math.cos(theta1);
    return result;
}
