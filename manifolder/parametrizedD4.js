function parametrizedD4(){
}

parametrizedD4.point = function (theta, phi, psi, r) {
    result = {};
    result["a"] = r * Math.sin(theta) * Math.sin(phi) * Math.sin(psi);
    result["b"] = r * Math.sin(theta) * Math.sin(phi) * Math.cos(psi);
    result["c"] = r * Math.sin(theta) * Math.cos(phi);
    result["d"] = r * Math.cos(theta);
    return result;
}
