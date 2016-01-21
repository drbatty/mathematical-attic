function parametrizedSphericalCylinder(radius) {
    this.radius = radius;
}

parametrizedSphericalCylinder.point = function (theta, phi, psi) {
    result = {};
    result["a"] = this.radius * Math.sin(theta) * Math.sin(phi);
    result["b"] = this.radius * Math.sin(theta) * Math.cos(phi);
    result["c"] = this.radius * Math.cos(theta);
    result["d"] = 0;
    return result;
}
