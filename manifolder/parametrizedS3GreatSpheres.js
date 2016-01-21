function parametrizedS3GreatSpheres(radius) {
    this.radius = radius;
}

parametrizedS3GreatSpheres.abcSphere = function (theta, phi) {
    result = {};
    result["a"] = this.radius * Math.sin(theta) * Math.sin(phi);
    result["b"] = this.radius * Math.sin(theta) * Math.cos(phi);
    result["c"] = this.radius * Math.cos(theta);
    result["d"] = 0;
    return result;
}

parametrizedS3GreatSpheres.bcdSphere = function (theta, phi) {
    result = {};
    result["a"] = 0;
    result["b"] = this.radius * Math.sin(theta) * Math.sin(phi);
    result["c"] = this.radius * Math.sin(theta) * Math.cos(phi);
    result["d"] = this.radius * Math.cos(theta);
    return result;
}

parametrizedS3GreatSpheres.cdaSphere = function (theta, phi) {
    result = {};
    result["a"] = this.radius * Math.cos(theta);
    result["b"] = 0;
    result["c"] = this.radius * Math.sin(theta) * Math.sin(phi);
    result["d"] = this.radius * Math.sin(theta) * Math.cos(phi);
    return result;
}

parametrizedS3GreatSpheres.dabSphere = function (theta, phi) {
    result = {};
    result["a"] = this.radius * Math.sin(theta) * Math.cos(phi);
    result["b"] = this.radius * Math.cos(theta);
    result["c"] = 0;
    result["d"] = this.radius * Math.sin(theta) * Math.sin(phi);
    return result;
}
