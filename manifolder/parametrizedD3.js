function parametrizedD3() {
}

parametrizedD3.point = function (theta, phi, r) {
    result = {};
    var point = {};
    result["a"] = r * Math.sin(theta) * Math.sin(phi);
    result["b"] = r * Math.sin(theta) * Math.cos(phi);
    result["c"] = r * Math.cos(theta);
    return result;
}
