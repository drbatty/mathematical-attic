function parametrizedS3(radius) {
    this.radius = radius;
}

parametrizedS3.point = function (theta, phi, psi) {
    result = {};
    result["a"] = this.radius * Math.sin(theta) * Math.sin(phi) * Math.sin(psi);
    result["b"] = this.radius * Math.sin(theta) * Math.sin(phi) * Math.cos(psi);
    result["c"] = this.radius * Math.sin(theta) * Math.cos(phi);
    result["d"] = this.radius * Math.cos(theta);
    return result;
}
