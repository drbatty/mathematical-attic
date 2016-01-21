function parametrizedSpunTorusKnot(radius, windingNumber1, windingNumber2) {
    this.radius = radius;
    this.windingNumber1 = windingNumber1;
    this.windingNumber2 = windingNumber2;
}

parametrizedSpunTorusKnot.prototype.point = function (theta, phi) {
    var point = {};
    point["a"] = this.radius * (2 + Math.cos(this.windingNumber1 * theta)) * Math.cos(this.windingNumber2 * theta);
    point["b"] = this.radius * (2 + Math.cos(this.windingNumber1 * theta)) * Math.sin(this.windingNumber2 * theta) * Math.cos(phi);
    point["c"] = this.radius * Math.sin(this.windingNumber1 * theta);
    point["d"] = this.radius * Math.sin(phi);
    return point;
}
