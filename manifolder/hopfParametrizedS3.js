function hopfParametrizedS3(radius) {
    this.radius = radius;
}

hopfParametrizedS3.point = function (eta, xi1, xi2) {
    result = {};
    result["a"] = this.radius * Math.sin(eta) * Math.sin(xi1);
    result["b"] = this.radius * Math.sin(eta) * Math.cos(xi1);
    result["c"] = this.radius * Math.cos(eta) * Math.sin(xi2);
    result["d"] = this.radius * Math.cos(eta) * Math.cos(xi2);
    return result;
}
