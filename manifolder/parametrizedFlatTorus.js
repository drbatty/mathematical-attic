function parametrizedFlatTorus(radius) {
    this.radius = radius;
}

parametrizedFlatTorus.point = function (theta, phi) {
    result = {};
    result["a"] = radius * Math.sin(theta);
    result["b"] = radius * Math.cos(theta);
    result["c"] = radius * Math.sin(phi);
    result["d"] = radius * Math.cos(phi);
    return result;
}
