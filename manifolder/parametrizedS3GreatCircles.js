function parametrizedS3GreatCircles(radius) {
    this.radius = radius;
}

parametrizedS3GreatCircles.abCircle = function (theta) {
    result = {};
    result["a"] = this.radius * Math.sin(theta);
    result["b"] = this.radius * Math.cos(theta);
    result["c"] = 0;
    result["d"] = 0;
    return result;
}

parametrizedS3GreatCircles.bcCircle = function (theta) {
    result = {};
    result["a"] = 0;
    result["b"] = this.radius * Math.sin(theta);
    result["c"] = this.radius * Math.cos(theta);
    result["d"] = 0;
    return result;
}

parametrizedS3GreatCircles.cdCircle = function (theta) {
    result = {};
    result["a"] = 0;
    result["b"] = 0;
    result["c"] = this.radius * Math.sin(theta);
    result["d"] = this.radius * Math.cos(theta);
    return result;
}

parametrizedS3GreatCircles.daCircle = function (theta) {
    result = {};
    result["a"] = this.radius * Math.cos(theta);
    result["b"] = 0;
    result["c"] = 0;
    result["d"] = this.radius * Math.sin(theta);
    return result;
}
