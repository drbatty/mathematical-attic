function parametrizedS2xS1(radius) {
    this.radius = radius;
}

parametrizedS2xS1.point = function (theta, phi, psi) {
    result = {};
    result["a"] = this.radius * Math.sin(theta) * Math.sin(phi);
    result["b"] = this.radius * Math.sin(theta) * Math.cos(phi);
    result["c"] = this.radius * Math.cos(theta) * Math.sin(psi);
    result["d"] = this.radius * Math.cos(psi);
    return result;
}
