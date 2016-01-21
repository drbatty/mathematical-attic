function parametrizedKleinBottle(radius) {
    this.radius = radius;
}

parametrizedKleinBottle.point = function (theta, phi) {
    result = {};
    result["a"] = radius * Math.cos(theta) * Math.cos(phi);
    result["b"] = radius * Math.sin(theta) * Math.cos(phi);
    result["c"] = radius * 2 * Math.cos(theta / 2) * Math.sin(phi);
    result["d"] = radius * 2 * Math.sin(theta / 2) * Math.sin(phi);
    return result;
}
