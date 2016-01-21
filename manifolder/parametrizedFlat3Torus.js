function parametrizedFlat3Torus(radius) {
    this.radius = radius;
}

parametrizedFlat3Torus.point = function (theta, phi, psi) {
    result = {};
    result["a"] = radius * Math.sin(theta);
    result["b"] = radius * Math.cos(theta);
    result["c"] = radius * Math.sin(phi);
    result["d"] = radius * Math.cos(phi);
    result["e"] = radius * Math.sin(psi);
    result["f"] = radius * Math.cos(psi);
    return result;
}
